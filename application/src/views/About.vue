<template>
  <div class="d-flex flex-row">
    <div class="">
      <Sidebar />
    </div>
    <div class="home w-100 d-flex flex-column">
      <div class="w-100">
        <Search />
      </div>

      <div class="about">
        <h1>This is an about page</h1>
      </div>
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

