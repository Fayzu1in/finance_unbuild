<template>
  <div>
    <canvas ref="canvas" id="myChart" width="400" height="400"></canvas>
  </div>
</template>
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["incomes"],

  watch: {
    incomes(newVal) {
      const incomeCategories = {};
      //   console.log(newVal);
      newVal.forEach((income) => {
        console.log(newVal);
        if (incomeCategories[income.date])
          incomeCategories[income.date] += income.sum;
        else incomeCategories[income.date] = income.sum;
      });

      this.renderChart(
        {
          labels: Object.keys(incomeCategories),

          datasets: [
            {
              label: "Total: ",
              data: Object.values(incomeCategories),

              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        {
          scales: {
            yAxes: [
              {
                // display: true,
                // stacked: true,
                ticks: {
                  // min: 0, // minimum value
                  // max: 10, // maximum value
                  suggestedMin: 0,
                  // beginAtZero: true,
                },
              },
            ],
          },
        }
      );
      localStorage.incomeData = JSON.stringify(newVal);
    },
  },
};
</script>
<style></style>
