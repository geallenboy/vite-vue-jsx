import { defineComponent } from 'vue';
import pkg from '../../../package.json';

interface Options {
  [x: string]: string;
}

export default defineComponent({
  name: 'About1',
  setup() {
    const dependencies: Options = pkg.dependencies;
    const devDependencies: Options = pkg.devDependencies;
    const BlankLink = ({ url = '', text = '' }) => (
      <a href={url} target="_blank">
        {text}
      </a>
    );
    return () => (
      <>
        <div>
          <div>
            {`${pkg.name}的前端项目是基于Vue3.x、Vite2.x、TypeScript4.x开发，帮助你快速搭建企业级中后台产品原型。`}
          </div>
        </div>
        <div class="mt-3">
          <div title="项目信息">
            <div>
              <p color="processing">{pkg.version}</p>
            </div>
            <div>
              <p color="processing">{'最后编译时间'}</p>
            </div>
            <div>
              <BlankLink text="GitHub" url={pkg.repository.url} />
            </div>
            <div>
              <BlankLink text="预览地址" url={pkg.homepage} />
            </div>
          </div>
        </div>
        <div class="mt-3">
          <div title="生产环境依赖">
            {Object.keys(dependencies).map((k: any) => {
              return <div>{pkg.dependencies[k]}</div>;
            })}
          </div>
        </div>
        <div class="mt-3">
          <div title="开发环境依赖">
            {Object.keys(devDependencies).map((k: any) => {
              return <div>{pkg.devDependencies[k]}</div>;
            })}
          </div>
        </div>
      </>
    );
  }
});
