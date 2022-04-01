import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import windiCSS from 'vite-plugin-windicss';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import styleImport from 'vite-plugin-style-import';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
const CWD = process.cwd();

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_BASE_URL, VITE_DROP_CONSOLE } = loadEnv(mode, CWD);

  const isBuild = command === 'build';

  return {
    base: VITE_BASE_URL,
    esbuild: {
      // target: 'es2015',
    },
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    plugins: [
      vue(),
      windiCSS(),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            appName: 'name',
            appTitle: 'title',
          },
        },
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(CWD, 'src/assets/icons')],
        symbolId: 'svg-icon-[dir]-[name]',
      }),
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        logger: true,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProdMockServer';

          setupProdMockServer();
          `,
      }),
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`;
            },
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {},
          // additionalData: `@import "@/styles/variables.less";`,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 8088,
      proxy: {
        '/api': {
          target: 'https://xxx/api/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    optimizeDeps: {
      include: ['ant-design-vue/es/locale/zh_CN'],
    },
    build: {
      // target: 'esnext',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: Object.is(VITE_DROP_CONSOLE, 'true'),
        },
      },
    },
  };
};
