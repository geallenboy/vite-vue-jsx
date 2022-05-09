<template>
  <div class="mb-8 sm:flex sm:justify-between sm:items-center">
    <!-- Left: Avatars -->
    <ul class="flex flex-wrap justify-center mb-8 -ml-px -space-x-3 sm:justify-start sm:mb-0">
      <li>
        <a class="block" href="#0">
          <img
            class="rounded-full w-9 h-9"
            src="@/assets/images/user-36-01.jpg"
            width="36"
            height="36"
            alt="User 01"
          />
        </a>
      </li>
      <li>
        <a class="block" href="#0">
          <img
            class="rounded-full w-9 h-9"
            src="@/assets/images/user-36-02.jpg"
            width="36"
            height="36"
            alt="User 02"
          />
        </a>
      </li>
      <li>
        <a class="block" href="#0">
          <img
            class="rounded-full w-9 h-9"
            src="@/assets/images/user-36-03.jpg"
            width="36"
            height="36"
            alt="User 03"
          />
        </a>
      </li>
      <li>
        <a class="block" href="#0">
          <img
            class="rounded-full w-9 h-9"
            src="@/assets/images/user-36-04.jpg"
            width="36"
            height="36"
            alt="User 04"
          />
        </a>
      </li>
      <li>
        <button
          class="flex items-center justify-center ml-2 text-indigo-500 transition duration-150 bg-white border border-gray-200 rounded-full shadow-sm w-9 h-9 hover:border-gray-300"
        >
          <span class="sr-only">Add new user</span>
          <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
            <path
              d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
            />
          </svg>
        </button>
      </li>
    </ul>

    <!-- Right: Actions -->
    <div class="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end">
      <!-- Filter button -->
      <div class="relative inline-flex">
        <button
          class="text-gray-500 bg-white border-gray-200 btn hover:border-gray-300 hover:text-gray-600"
        >
          <span class="sr-only">Filter</span><wbr />
          <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
            <path
              d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z"
            />
          </svg>
        </button>
        <div
          class="origin-top-right z-10 absolute top-full left-0 right-auto md:left-auto md:right-0 min-w-56 bg-white border border-gray-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1"
        >
          <div class="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4">Filters</div>
          <ul class="mb-4">
            <li class="px-3 py-1">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" checked />
                <span class="ml-2 text-sm font-medium">Direct VS Indirect</span>
              </label>
            </li>
            <li class="px-3 py-1">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" checked />
                <span class="ml-2 text-sm font-medium">Real Time Value</span>
              </label>
            </li>
            <li class="px-3 py-1">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" checked />
                <span class="ml-2 text-sm font-medium">Top Channels</span>
              </label>
            </li>
            <li class="px-3 py-1">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="ml-2 text-sm font-medium">Sales VS Refunds</span>
              </label>
            </li>
            <li class="px-3 py-1">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="ml-2 text-sm font-medium">Last Order</span>
              </label>
            </li>
            <li class="px-3 py-1">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="ml-2 text-sm font-medium">Total Spent</span>
              </label>
            </li>
          </ul>
          <div class="px-3 py-2 border-t border-gray-200 bg-gray-50">
            <ul class="flex items-center justify-between">
              <li>
                <button
                  class="text-gray-500 bg-white border-gray-200 btn-xs hover:border-gray-300 hover:text-gray-600"
                >
                  Clear
                </button>
              </li>
              <li>
                <button
                  class="text-white bg-indigo-500 btn-xs hover:bg-indigo-600"
                  @click="open = false"
                  @focusout="open = false"
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Datepicker built with flatpickr -->
      <div class="relative">
        <input
          class="font-medium text-gray-500 datepicker form-input pl-9 hover:text-gray-600 focus:border-gray-300 w-60"
          placeholder="Select dates"
          data-class="flatpickr-right"
        />
        <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
          <svg class="w-4 h-4 ml-3 text-gray-500 fill-current" viewBox="0 0 16 16">
            <path
              d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
            />
          </svg>
        </div>
      </div>

      <!-- Add view button -->
      <button class="text-white bg-indigo-500 btn hover:bg-indigo-600">
        <svg class="w-4 h-4 opacity-50 fill-current shrink-0" viewBox="0 0 16 16">
          <path
            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
          />
        </svg>
        <span class="hidden ml-2 xs:block">Add view</span>
      </button>
    </div>
  </div>
</template>
