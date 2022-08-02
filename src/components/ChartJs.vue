<template>
  <div сlass="canvas">
    <canvas ref="canvas" id="myChart" width="100" height="100"></canvas>
    <p class="highestFlow">Your highest flow is {{ max[0] }} - {{ max[1] }}</p>
  </div>
</template>
<script>
import { Pie } from "vue-chartjs";
export default {
  extends: Pie,
  props: ["expenses"],
  methods: {},

  data() {
    return {
      max: [],
    };
  },
  mounted() {},

  watch: {
    expenses(newVal) {
      const categories = {};

      newVal.forEach((expense) => {
        if (categories[expense.category])
          categories[expense.category] += expense.sum;
        else categories[expense.category] = expense.sum;
      });

      const categoriesArray = Object.entries(categories);
      console.log(categories);
      console.log(categoriesArray);
      this.max = categoriesArray.reduce(function (prev, item) {
        console.log("prev", prev);
        if (prev[1] < item[1]) {
          return item;
        } else {
          return prev;
        }
      });

      console.log(this.max);
      this.renderChart({
        labels: Object.keys(categories),

        datasets: [
          {
            label: "Расходы",
            data: Object.values(categories),
            backgroundColor: [
              // "rgba(255, 99, 132, 0.2)",
              "rgb(255, 99, 133)",
              // "rgba(54, 162, 235, 0.2)",
              "rgb(54, 163, 235)",
              // "rgba(255, 206, 86, 0.2)",
              "rgb(255, 207, 86)",
              // "rgba(172, 255, 47, 0.473)",
              "rgb(172, 255, 47)",
            ],
            borderColor: [
              // "rgba(255, 99, 135)",
              "rgb(233, 63, 100)",
              // "rgba(54, 162, 235)",
              "rgb(25, 148, 230)",
              // "rgba(255, 206, 86)",
              "rgb(234, 177, 32)",
              // "rgba(172, 255, 47)",
              "rgb(115, 187, 6)",
            ],
            borderWidth: 1,
          },
        ],
      });

      localStorage.data = JSON.stringify(newVal);
    },
  },
};
</script>
<style lang="scss">
.chart {
  width: 400px;
  color: rgba(255, 0, 0, 0.427);
  margin: 0 auto;
  margin-top: 70px;
  @media only screen and (max-width: 420px) {
    width: 80%;
  }
}
.canvas {
  width: unset;
}
.highestFlow {
  color: #fff;
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
  background-color: rgb(255, 91, 83);
  border-radius: 5px;
  padding: 5px 0;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  @media only screen and (max-width: 420px) {
    font-size: 16px;
  }
}
</style>
