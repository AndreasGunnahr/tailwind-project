<template>
  <public-layout>
    <div class="flex flex-col px-16 py-8">
      <!-- <div class="h-16 w-full bg-white rounded-lg">SEARCH</div> -->
      <div class="flex h-full mt-4">
        <sidebar-with-checkbox :menuList="menuList" />

        <div class="w-full ml-8">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-extrabold">Showing 48 jobs</h1>
            <a class="text-gray-400 font-bold"
              >Sort by <span class="text-black">Newest post </span></a
            >
          </div>
          <div class="grid grid-col-autofill gap-4 mt-6">
            <div
              v-for="i in 20"
              :key="i"
              class="w-full bg-white rounded-lg p-6 cursor-pointer"
            >
              <div
                class="h-16 w-16 bg-green-800 flex items-center justify-center rounded-lg"
              >
                IMAGE
              </div>
              <h1 class="mt-4 text-xl font-extrabold">UI/UX Desginer</h1>
              <p class="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis esse, quae tempora nesciunt numquam error,
                laudantium...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </public-layout>
</template>

<script>
import menuList from "@/data/internshipSidebar";
import PublicLayout from "@/layouts/PublicLayout.vue";
import SidebarWithCheckbox from "@/components/SidebarWithCheckbox";

export default {
  name: "Internship",
  components: {
    PublicLayout,
    SidebarWithCheckbox,
  },
  data() {
    return { menuList };
  },
};
</script>
