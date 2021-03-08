<template>
  <div class="d-flex flex-row">
    <div class="">
      <Sidebar />
    </div>
    <div class="home w-100 d-flex flex-column">
      <div class="w-100">
        <Search />
      </div>
      <div class="row w-100 mx-auto">
        <div
          v-for="chart in userMutations"
          :key="chart.title"
          class="col-12 col-xl-6"
        >
          <LineChart :data="chart" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Search from "@/components/Search.vue";
import Sidebar from "@/components/Sidebar.vue";
import LineChart from "@/components/LineChart.vue";
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    Search,
    Sidebar,
    LineChart,
  },
  setup() {
    const store = useStore();
    store.dispatch("retrieveUserData").then((result) => {
      console.log(result);
    });
  },
  computed: {
    userMutations() {
      return this.$store.state.userData;
    },
  },
});
</script>

<style>
</style>
