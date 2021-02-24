<template>
  <div>
    <apexchart
      type="line"
      height="350"
      width="500"
      :options="options"
      :series="series"
    ></apexchart>
    <p>test</p>
    {{ series }}
    <p>test2</p>
    {{ x }}
    <input v-model="test1" type="text" />
    {{ test1 }}
  </div>
</template>

<script>
import json from "../json/MYBPC3Fig4.json";
export default {
  setup() {
    const title = "MYBPC3Fig4";
    const series = json[0]["series"];
    const x = json[0]["xaxis"][0].categories;
    return {
      series,
      title,
      x
    };
  },
  data() {
    return {
      options: {
        chart: { id: this.title }
      },
      xaxis: { categories: this.xaxis },

      test1: "test"
    };
  }
};
</script>:
