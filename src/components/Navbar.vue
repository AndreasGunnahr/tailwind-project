<template>
  <nav class="flex items-center justify-between text-white py-5 px-3">
    <div>
      <router-link to="/" class="mr-4">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>