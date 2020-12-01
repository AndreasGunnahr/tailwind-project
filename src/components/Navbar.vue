<template>
  <nav class="flex items-center justify-between py-3 px-3 bg-white ">
    <router-link to="/" class="text-3xl">LOGO</router-link>
    <div>
      <router-link class="mr-4" to="/internship">Internship</router-link>
      <router-link class="mr-4" to="/">Student</router-link>
      <router-link class="mr-4" to="/">Company</router-link>
    </div>

    <router-link class="bg-green-500 py-2 px-10" to="/overview"
      >Client</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
