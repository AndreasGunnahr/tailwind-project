<template>
  <div class="w-64 px-8 py-4 bg-gray-100 border-r overflow-auto">
    <h1 class="text-l">LOGO</h1>

    <nav v-for="menu in menuList" :key="menu.title" class="mt-8">
      <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wider">
        {{ menu.title }}
      </h2>
      <div v-for="item in menu.menuItems" :key="item.text" class="mt-3 -mx-3">
        <router-link
          :to="item.to"
          exact
          active-class="bg-gray-200"
          class="flex justify-between items-center rounded-lg px-3 py-2"
          ><span class="text-sm font-medium text-gray-700">{{
            item.text
          }}</span>
          <span v-if="item.number" class="text-xs font-semibold text-gray-700"
            >{{ item.number }}
          </span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: { menuList: Array },
};
</script>
