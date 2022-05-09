<script lang="ts" setup>
import { ref } from 'vue';
import { usePublicStore } from '@/store/modules/public';
import { onClickOutside } from '@vueuse/core';

const usePub = usePublicStore();
const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);
const modalRef1 = ref(null);
const modalRef2 = ref(null);
const modalRef3 = ref(null);
const modalRef4 = ref(null);
onClickOutside(modalRef1, () => {
  modal1.value = false;
});
onClickOutside(modalRef2, () => {
  modal2.value = false;
});
onClickOutside(modalRef3, () => {
  modal3.value = false;
});
onClickOutside(modalRef4, () => {
  modal4.value = false;
});
</script>
<template>
  <header class="sticky top-0 z-30 bg-white border-b border-gray-200">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button
            @click="usePub.setSidebarOpen(true)"
            class="text-gray-500 hover:text-gray-600 lg:hidden"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          <!-- Search button -->
          <div>
            <!-- Button -->
            <button
              @click="modal1 = true"
              :class="{ 'bg-gray-200': modal1 }"
              class="flex items-center justify-center w-8 h-8 transition duration-150 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <span class="sr-only">Search</span>
              <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="text-gray-500 fill-current"
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  class="text-gray-400 fill-current"
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>
            <!-- Modal backdrop -->
            <div
              v-if="modal1"
              class="fixed inset-0 z-50 transition-opacity bg-gray-900 bg-opacity-30"
            ></div>
            <!-- Modal dialog -->
            <div
              v-if="modal1"
              ref="modalRef1"
              class="fixed inset-0 z-50 flex items-start justify-center w-2/4 px-4 mb-4 overflow-hidden transform top-20 sm:px-6"
            >
              <div class="w-full max-w-2xl max-h-full overflow-auto bg-white rounded shadow-lg">
                <!-- Search form -->
                <form class="border-b border-gray-200">
                  <div class="relative">
                    <label for="modal-search" class="sr-only"> Search </label>
                    <input
                      class="w-full py-3 pl-10 pr-4 placeholder-gray-400 border-0 appearance-none focus:ring-transparent"
                      type="search"
                      placeholder="Search Anything…"
                    />
                    <button
                      class="absolute inset-0 right-auto group"
                      type="submit"
                      aria-label="Search"
                    >
                      <svg
                        class="w-4 h-4 ml-4 mr-2 text-gray-400 fill-current shrink-0 group-hover:text-gray-500"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                        />
                        <path
                          d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                <div class="px-2 py-4">
                  <!-- Recent searches -->
                  <div class="mb-3 last:mb-0">
                    <div class="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
                      Recent searches
                    </div>
                    <ul class="text-sm">
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                            />
                          </svg>
                          <span>Form Builder - 23 hours on-demand video</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                            />
                          </svg>
                          <span>Access Mosaic on mobile and TV</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                            />
                          </svg>
                          <span>Product Update - Q4 2021</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                            />
                          </svg>
                          <span>Master Digital Marketing Strategy course</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                            />
                          </svg>
                          <span>Dedicated forms for products</span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                            />
                          </svg>
                          <span>Product Update - Q4 2021</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- Recent pages -->
                  <div class="mb-3 last:mb-0">
                    <div class="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase">
                      Recent pages
                    </div>
                    <ul class="text-sm">
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
                            />
                          </svg>
                          <span>
                            <span class="font-medium text-gray-800 group-hover:text-white">
                              Messages </span
                            >{' '} - Conversation / … / Mike Mills
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          class="flex items-center p-2 text-gray-800 rounded hover:text-white hover:bg-indigo-500 group"
                          href="#0"
                          @click="modal1 = false"
                        >
                          <svg
                            class="w-4 h-4 mr-3 text-gray-400 fill-current group-hover:text-white group-hover:text-opacity-50 shrink-0"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
                            />
                          </svg>
                          <span>
                            <span class="font-medium text-gray-800 group-hover:text-white">
                              Messages </span
                            >{' '} - Conversation / … / Eva Patrick
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Notifications button -->
          <div class="relative inline-flex">
            <button
              @click="modal2 = true"
              :class="{ 'bg-gray-200': modal2 }"
              class="flex items-center justify-center w-8 h-8 transition duration-150 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <span class="sr-only">Notifications</span>
              <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="text-gray-500 fill-current"
                  d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
                />
                <path
                  class="text-gray-400 fill-current"
                  d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
                />
              </svg>
              <div
                class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"
              ></div>
            </button>
            <div
              v-if="modal2"
              ref="modalRef2"
              class="origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
            >
              <div class="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">
                Notifications
              </div>
              <ul>
                <li class="border-b border-gray-200 last:border-0">
                  <a class="block px-4 py-2 hover:bg-gray-50" href="#0">
                    <span class="block mb-2 text-sm">
                      📣{' '}
                      <span class="font-medium text-gray-800">
                        Edit your information in a swipe </span
                      >{' '} Sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim.
                    </span>
                    <span class="block text-xs font-medium text-gray-400">Feb 12, 2021</span>
                  </a>
                </li>
                <li class="border-b border-gray-200 last:border-0">
                  <a class="block px-4 py-2 hover:bg-gray-50" href="#0">
                    <span class="block mb-2 text-sm">
                      📣{' '}
                      <span class="font-medium text-gray-800">
                        Edit your information in a swipe </span
                      >{' '} Sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim.
                    </span>
                    <span class="block text-xs font-medium text-gray-400">Feb 9, 2021</span>
                  </a>
                </li>
                <li class="border-b border-gray-200 last:border-0">
                  <a class="block px-4 py-2 hover:bg-gray-50" href="#0">
                    <span class="block mb-2 text-sm">
                      🚀
                      <span class="font-medium text-gray-800"> Say goodbye to paper receipts! </span
                      >{' '} Sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim.
                    </span>
                    <span class="block text-xs font-medium text-gray-400">Jan 24, 2020</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Info button -->
          <div class="relative inline-flex">
            <button
              @click="modal3 = true"
              :class="{ 'bg-gray-200': modal3.value }"
              class="flex items-center justify-center w-8 h-8 transition duration-150 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <span class="sr-only">Info</span>
              <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="text-gray-500 fill-current"
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                />
              </svg>
            </button>
            <div
              v-if="modal3"
              ref="modalRef3"
              class="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
            >
              <div class="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-3">
                Need help?
              </div>
              <ul>
                <li>
                  <a
                    class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="#0"
                  >
                    <svg
                      class="w-3 h-3 mr-2 text-indigo-300 fill-current shrink-0"
                      viewBox="0 0 12 12"
                    >
                      <rect y="3" width="12" height="9" rx="1" />
                      <path d="M2 0h8v2H2z" />
                    </svg>
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="#0"
                  >
                    <svg
                      class="w-3 h-3 mr-2 text-indigo-300 fill-current shrink-0"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
                      />
                    </svg>
                    <span>Support Site</span>
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="#0"
                  >
                    <svg
                      class="w-3 h-3 mr-2 text-indigo-300 fill-current shrink-0"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      />
                    </svg>
                    <span>Contact us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Divider -->
          <hr class="w-px h-6 bg-gray-200" />

          <div class="relative inline-flex">
            <button
              @click="modal4 = true"
              :class="{ 'bg-gray-200': modal4 }"
              class="inline-flex items-center justify-center group"
            >
              <img
                class="w-8 h-8 rounded-full"
                src="@/assets/images/user-avatar-32.png"
                width="32"
                height="32"
                alt="User"
              />
              <div class="flex items-center truncate">
                <span class="ml-2 text-sm font-medium truncate group-hover:text-gray-800">
                  garron
                </span>
                <svg class="w-3 h-3 ml-1 text-gray-400 fill-current shrink-0" viewBox="0 0 12 12">
                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                </svg>
              </div>
            </button>

            <div
              v-if="modal4"
              ref="modalRef4"
              class="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
            >
              <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
                <div class="font-medium text-gray-800">garron.</div>
                <div class="text-xs italic text-gray-500">管理员</div>
              </div>
              <ul>
                <li>
                  <a
                    class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="/settings"
                  >
                    设置
                  </a>
                </li>
                <li>
                  <a
                    class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="/signin"
                  >
                    退出
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
