<template>
  <div class="d-flex flex-row">
    <div class="">
      <Sidebar />
    </div>
    <div class="home w-100 d-flex flex-column">
      <div class="w-100">
        <Search />
      </div>

      <p>Remove</p>
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Search from "@/components/Search.vue";
export default {
  components: {
    Search,
    Sidebar,
  },
};
</script>

<style>
</style>
