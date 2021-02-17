<template>
  <div class="d-flex flex-row">
    <Sidebar />
    <div class="home w-100 d-flex flex-row">
      <div class="w-100">
        <img alt="Vue logo" src="../assets/logo.png" />
        <p class="m-5">test</p>
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
  </div>
</template>

// @ is an alias to /src
<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HelloWorld,
    Sidebar,
  },
});
</script>



