<template>
  <div class="d-flex flex-row">
    <div class="">
      <Sidebar />
    </div>
    <div class="home w-100 d-flex flex-column">
      <div class="w-100">
        <Search />
      </div>
      <div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <p class="m-5">test</p>
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
  </div>
</template>

// @ is an alias to /src
<script lang="ts">
import Search from "@/components/Search.vue";
import Sidebar from "@/components/Sidebar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HelloWorld,
    Search,
    Sidebar,
  },
});
</script>


<style lang="scss">
.home {
  margin-left: 250px;
}
</style>

