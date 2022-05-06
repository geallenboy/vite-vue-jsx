import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';

const CWD = process.cwd();

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 环境变量 VITE_DROP_CONSOLE
  const { VITE_BASE_URL } = loadEnv(mode, CWD);

  const isBuild = command === 'build';

  return {
    base: VITE_BASE_URL,
    esbuild: {
      // target: 'es2015',
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ['ie >= 11']
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            appName: 'name',
            appTitle: 'title'
          }
        }
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
          `
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 8088,
      proxy: {
        '/api': {
          target: 'https://xxx/api/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router'],
            dayjs: ['dayjs']
          }
        }
      }
      // target: 'esnext',
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: Object.is(VITE_DROP_CONSOLE, 'true')
      //   }
      // }
    }
  };
};
