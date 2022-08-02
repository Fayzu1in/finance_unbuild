<template>
  <div>
    <div class="income incomeOper container">
      <form class="incomeForm">
        <label for="date">Select Date*</label>
        <input v-model="incomeForm.date" type="date" id="date" />
        <label for="sum">Type Sum*</label>
        <input
          v-model.number="incomeForm.sum"
          type="number"
          id="sum"
          placeholder="sum"
        />
        <label for="comment">Comment</label>
        <textarea
          v-model="incomeForm.comment"
          style="bac"
          id="comment"
          cols="40"
          rows="5"
          placeholder="Comment"
        ></textarea>
        <button @click="incomeBtn" class="saveBtn">SAVE</button>
        <button @click="resetBtn" class="resetBtn">RESET</button>
      </form>
      <bar-chart :incomes="incomes"></bar-chart>
    </div>
    <div class="chartList">
      <ul v-for="(income, incomes) in incomes" :key="incomes.id">
        <li>
          <p>{{ income.date }} {{ income.comment }}</p>
          <p>{{ income.sum }}</p>
        </li>
        <div @click="removeIncome(income)" class="deleteList">Remove</div>
      </ul>
    </div>
  </div>
</template>
<script>
import BarChart from "@/components/BarChart.vue";
export default {
  components: { BarChart },
  data() {
    return {
      incomeForm: { date: "", sum: "", comment: "" },
      incomes: [],
    };
  },
  methods: {
    incomeBtn() {
      event.preventDefault();
      if (this.incomeForm.date !== "" && this.incomeForm.sum !== 0) {
        this.incomes.push({ ...this.incomeForm });
        console.log(this.incomes);
      } else alert("Fields must be field");
    },
    resetBtn() {
      this.incomes = [];
    },
    removeIncome(income) {
      this.incomes.splice(this.incomes.indexOf(income), 1);
    },
  },
  mounted() {
    if (localStorage.incomeData) {
      this.incomes = JSON.parse(localStorage.incomeData);
      console.log(this.incomes);
    }
  },
};
</script>
<style lang="scss">
.incomeOper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // flex-direction: column;

  .incomeForm {
    width: 450px;
    margin-right: 50px;
    @media only screen and (max-width: 420px) {
      width: 100%;
      margin-right: unset;
    }
  }
}
</style>
