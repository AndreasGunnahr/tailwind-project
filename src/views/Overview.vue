<template>
  <AppLayout>
    <Title text="Overview" />
  </AppLayout>
</template>

<script>
import Title from "@/components/Title";
import AppLayout from "@/layouts/AppLayout";

export default {
  name: "Home",
  components: { AppLayout, Title },
};
</script>
