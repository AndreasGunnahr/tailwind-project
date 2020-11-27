<template>
  <div class="h-screen flex">
    <Sidebar />
    <div class="flex-1 min-w-0 bg-white">
      <div class="border-b border-gray-300">
        <header class="px-6">
          <div
            class="flex justify-between items-center py-3 border-b border-gray-300"
          >
            <div>
              <div class="relative">
                <input
                  type="text"
                  class="rounded-md border border-gray-400 pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-600"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default {
  name: "Home",
  components: { Sidebar },
};
</script>
