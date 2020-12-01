<template>
  <div class="flex flex-col min-h-screen bg-gray-200">
    <navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "PublicLayout",
  components: {
    Navbar,
  },
};
</script>
