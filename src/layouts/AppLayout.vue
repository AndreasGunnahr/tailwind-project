<template>
  <div class="h-screen flex">
    <sidebar />
    <div class="flex-1 min-w-0 flex flex-col bg-white">
      <div class="flex-shrink-0 border-b border-gray-400">
        <header class="px-6">
          <div
            class="flex justify-between items-center py-3 border-b border-gray-300"
          >
            <div class="flex-1">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    class="h-6 w-6 text-gray-600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18a8 8 0 116.32-3.094l5.387 5.387-1.414 1.414-5.387-5.387A7.965 7.965 0 0110 18zm6-8a6 6 0 11-12 0 6 6 0 0112 0z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="rounded-md border border-gray-400 pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-600"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="flex item-center">
              <button>
                <svg
                  class="h-6 w-6 text-gray-500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 10c0-4.06-2.238-6.877-5.135-7.722a2 2 0 00-3.73-.002C7.235 3.118 5 5.929 5 10c0 2.634-.531 4.11-1.514 5.18-.164.178-.61.588-.911.865-.143.132-.254.233-.287.267L2 16.604v3.41h6.088c.206 1.062.782 1.773 1.824 2.409a4.008 4.008 0 004.176 0 3.941 3.941 0 001.786-2.409H22v-3.41l-.288-.292c-.03-.03-.136-.129-.275-.257-.3-.277-.755-.696-.922-.878C19.532 14.102 19 12.625 19 10zm-5.263 10.014h-3.558c.14.263.382.461.775.701.642.392 1.45.392 2.092 0 .297-.181.53-.421.69-.7zm5.303-3.487c.21.23.662.65.96.925v.562H4v-.562c.296-.27.748-.69.958-.92C6.294 15.08 7 13.119 7 10c0-3.78 2.333-5.988 5-5.988 2.66 0 5 2.22 5 5.988 0 3.108.706 5.07 2.04 6.527z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button class="ml-6">
                <img
                  class="h-9 w-9 rounded-full object-fit"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80"
                  alt="profile picture"
                />
              </button>
            </div>
          </div>
        </header>
        <slot name="header" />
      </div>
      <div class="flex-1 overflow-auto">
        <slot name="main" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "Layout",
  components: {
    Sidebar,
  },
};
</script>
