<template>
  <app-layout>
    <template v-slot:header>
      <div class="flex justify-between items-center px-6 py-3">
        <Title text="Excercise" />
        <div class="flex items-center">
          <button class="bg-blue-300 text-white px-5 py-2">Filter</button>
          <button class="ml-4 bg-blue-300 text-white px-5 py-2">Sort by</button>
        </div>
      </div>
    </template>
    <template v-slot:main>
      <div class="grid grid-col-autofill gap-4 mt-4 p-4"></div>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";
import Title from "@/components/Title";

export default {
  name: "Exercise",
  components: {
    AppLayout,
    Title,
  },
};
</script>
