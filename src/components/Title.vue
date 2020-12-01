<template>
  <h1 class="">
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>
