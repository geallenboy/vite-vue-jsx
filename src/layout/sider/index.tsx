import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sider',
  setup() {
    return () => (
      <div>
        {/* <div class={'fixed inset-0 bg-gray-900 bg-opacity-30 z-40 transition-opacity duration-200 lg:hidden opacity-0 pointer-events-none'}></div> */}
        <div class="lg:-translate-x-64 flex flex-col z-40 left-0 top-0 transform h-screen w-64 bg-gray-800 p-4 ">
          {/* -- Sidebar header -- */}
          <div class="flex justify-between pr-3 mb-10 sm:px-2">
            {/* <!-- Close button --> */}
            <button class="text-gray-500 lg:opacity-0 hover:text-gray-400">
              <span class="sr-only">Close sidebar</span>
              <svg
                class="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            <a class="block" href="#">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <defs>
                  <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                    <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                    <stop stop-color="#A5B4FC" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                    <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                    <stop stop-color="#38BDF8" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="#6366F1" width="32" height="32" rx="16" />
                <path
                  d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                  fill="#4F46E5"
                />
                <path
                  d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                  fill="url(#logo-a)"
                />
                <path
                  d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                  fill="url(#logo-b)"
                />
              </svg>
            </a>
          </div>

          <div class="space-y-8">
            <div>
              <h3 class={'pl-3 text-xs font-semibold text-gray-500 uppercase'}>
                <span
                  class="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                  aria-hidden="true"
                >
                  •••
                </span>
                <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">页面</span>
              </h3>
              <ul class={'mt-3'}>
                <li class={'px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-gray-900'}>
                  <a
                    class="block text-gray-200 truncate transition duration-150 hover:text-white"
                    href="#"
                  >
                    <div class="flex items-center">
                      <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                        <path
                          class="!text-indigo-500 fill-current"
                          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                        />
                        <path
                          class="!text-indigo-600 fill-current"
                          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                        />
                        <path
                          class="!text-indigo-200 fill-current"
                          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                        />
                      </svg>
                      <span class="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Dashboard
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden">
            <div class="px-3 py-2">
              <button>
                <span class="sr-only">Expand / collapse sidebar</span>
                <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                  <path
                    class="text-gray-400"
                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                  />
                  <path class="text-gray-600" d="M3 23H1V1h2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
