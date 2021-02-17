<template>
  <div>
    <apexchart
      type="line"
      height="350"
      width="500"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const chartOptions = ref({
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Force vs calcium concentration: control plotted with mutation",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "4.5395",
          "4.5676",
          "5.0077",
          "5.0411",
          "5.2562",
          "5.3401",
          "5.7074",
          "5.7147",
          "5.9679"
        ],
        title: {
          text: "pCa"
        }
      },
      yaxis: {
        title: {
          text: "Force (normalised)"
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    });

    const series = ref([
      {
        name: "Controls",
        data: [
          1.00847,
          1.00762,
          0.99328,
          0.99193,
          0.96844,
          0.94312,
          0.76638,
          0.76195,
          0.54624
        ]
      },
      {
        name: "Arg719Trp",
        data: [
          0.99486,
          0.99101,
          0.92802,
          0.92231,
          0.82042,
          0.75995,
          0.48778,
          0.48249,
          0.30299
        ]
      }
    ]);

    return { chartOptions, series };
  }
};
</script>:
