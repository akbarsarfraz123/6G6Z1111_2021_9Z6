<template>
  <div class="d-flex flex-row">
    <Sidebar />
    <div class="w-100 d-flex flex-column">
      <Search />
      <router-view class="w-100" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Search from "@/components/Search.vue";
export default defineComponent({
  components: {
    Sidebar,
    Search,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
