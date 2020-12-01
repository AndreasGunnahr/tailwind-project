<template>
  <div class="w-64 bg-white px-4 py-2 rounded-lg">
    <!-- <div class="h-40 bg-white rounded-lg">SUBSCRIBE</div> -->
    <h1 class="text-md mt-1 font-extrabold uppercase tracking-wider">
      Filters
    </h1>
    <nav v-for="menu in menuList" :key="menu.title" class="mt-8">
      <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wider">
        {{ menu.title }}
      </h2>
      <div v-for="item in menu.menuItems" :key="item.text" class="mt-1 -mx-3">
        <div class="flex justify-between items-center rounded-lg px-3 py-1">
          <div class="flex items-center">
            <label class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-gray-600"
                :value="item.text"
                v-model="checkedFilters"
              />
              <span class="ml-2 text-sm font-medium text-gray-700">{{
                item.text
              }}</span>
            </label>
          </div>
          <span
            v-if="item.number"
            class="text-xs font-semibold text-gray-700 bg-gray-200 py-0.5 px-2 rounded-md"
            >{{ item.number }}
          </span>
        </div>
      </div>
    </nav>
    <div class="mt-8">
      <div class="flex items-center justify-between">
        <h2
          class="text-xs font-semibold text-gray-600 uppercase tracking-wider py-0.5"
        >
          Selected filters
        </h2>
        <button
          v-if="checkedFilters.length > 0"
          class="text-xs font-semibold text-gray-600 bg-blue-400 px-2 py-0.5 rounded-md"
          @click="clearFilters"
        >
          Clear
        </button>
      </div>
      <div v-if="checkedFilters.length > 0" class="flex flex-wrap">
        <p
          v-for="filter in checkedFilters"
          :key="filter"
          class="text-xs font-semibold text-gray-700 bg-gray-300 py-1 px-3 mr-2 mt-3 rounded-lg"
        >
          {{ filter }}
        </p>
      </div>
      <p
        v-if="checkedFilters.length === 0"
        class="text-sm font-semibold text-gray-700 mt-3"
      >
        No filters selected
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: { menuList: Array },
  data() {
    return {
      checkedFilters: [],
    };
  },
  methods: {
    clearFilters: function() {
      this.checkedFilters = [];
    },
  },
};
</script>
