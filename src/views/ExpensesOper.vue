<template>
  <div>
    <div class="income container">
      <form>
        <label for="date">Select Date*</label>
        <input v-model="form.date" type="date" id="date" />
        <label for="sum">Type Sum*</label>
        <input
          v-model.number="form.sum"
          type="number"
          id="sum"
          placeholder="sum"
        />
        <label for="categories">Select Category*</label>
        <select v-model="form.category" id="categories">
          <option value="" disabled selected>categories</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
          <option value="Games">Games</option>
          <option value="Technologies">Technologies</option>
        </select>
        <label for="comment">Type Comment</label>
        <textarea
          v-model="form.comment"
          style="bac"
          id="comment"
          cols="40"
          rows="5"
          placeholder="comment"
        ></textarea>
        <button
          type="submit"
          @keyup.enter="expensesBtn"
          @click="expensesBtn"
          class="saveBtn"
        >
          Save
        </button>
        <div @click="resetBtn" class="resetBtn">RESET</div>
      </form>

      <chart-js :expenses="expenses" class="chart"></chart-js>
    </div>
    <div class="chartList">
      <ul v-for="(expense, expenses) in expenses" :key="expenses">
        <li>
          <p class="listName">Date:</p>
          <p>{{ expense.date }}</p>
        </li>
        <li>
          <p class="listName">Category:</p>
          <p>{{ expense.category }}</p>
        </li>
        <li>
          <p class="listName">Sum:</p>
          <p>{{ expense.sum }}</p>
        </li>
        <li class="last">
          <p class="listName">Comment:</p>
          <p>{{ expense.comment }}</p>
        </li>
        <div @click="removeList(expense)" class="deleteList">Remove</div>
      </ul>
      <div class="highFlow"></div>
    </div>
  </div>
</template>
<script>
import ChartJs from "@/components/ChartJs.vue";

export default {
  components: { ChartJs },
  data() {
    return {
      form: { date: "", sum: "", category: "", comment: "" },
      expenses: [],
      total: 0,
      highFlow: "",
    };
  },
  mounted() {
    if (localStorage.data) {
      this.expenses = JSON.parse(localStorage.data);
      // console.log(this.expenses);
    }
  },
  methods: {
    expensesBtn() {
      event.preventDefault();
      if (
        this.form.date !== "" &&
        this.form.sum !== "" &&
        this.form.sum !== 0 &&
        this.form.category !== ""
      ) {
        this.expenses.push({ ...this.form });
      } else {
        alert("All fields are required");
      }
    },
    resetBtn() {
      if (confirm("Are you sure want to delete all data ?")) {
        this.expenses = [];
      }
    },
    removeList(expense) {
      this.expenses.splice(this.expenses.indexOf(expense), 1);
    },
  },
};
</script>
<style lang="scss">
li {
  color: #fff;
}
.income {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-top: 30px;

  align-items: center;
  color: rgb(30, 35, 41);
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    padding-top: 0;
    margin-top: 15px;
    // padding-left: 15px;
    // padding-right: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    // align-items: center;
    width: 50%;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    // ::-webkit-calendar-picker-indicator {
    //   //   filter: invert(1);
    //   color: #fff;
    // }
    @media only screen and (max-width: 420px) {
      width: 100%;
      font-size: 16px;
    }
    input {
      // background-color: #fff;
      height: 40px;
      border: none;
      color: grey;
      margin-bottom: 15px;
      padding-left: 10px;
      font-size: 18px;
      border-bottom: 1px solid rgb(30, 35, 41);
      margin-top: 5px;
      @media only screen and (max-width: 420px) {
        height: 30px;
        font-size: 16px;
      }
    }
    textarea {
      padding-left: 10px;
      font-size: 16px;
      margin-top: 5px;
      padding-top: 3px;
      resize: none;
      // background-color: #000;
      border: 1px solid rgb(30, 35, 41);

      @media only screen and (max-width: 420px) {
        // margin-top: 10px;
      }
    }
    select {
      // background-color: #000;
      height: 40px;
      margin-bottom: 15px;
      padding-left: 10px;
      font-size: 18px;
      color: grey;
      border: unset;
      border-bottom: 1px solid rgb(30, 35, 41);
      margin-top: 5px;
      @media only screen and (max-width: 420px) {
        height: 30px;
        font-size: 16px;
        padding-left: 5px;
      }
    }
    #comment {
      margin-top: 5px;
      color: #000;
    }
    .saveBtn {
      color: #fff;
      font-size: 18px;
      padding: 7px 0;
      margin-top: 15px;
      border-radius: 7px;
      cursor: pointer;
      background-color: rgb(83, 153, 135);
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      transition: all 0.2s;
      border: none;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      @media only screen and (max-width: 420px) {
        font-size: 16px;
      }

      &:active {
        background-color: rgb(62, 118, 104);
      }
    }
  }
  .resetBtn {
    background-color: rgb(255, 91, 83);
    color: #fff;
    font-size: 18px;
    padding: 7px 0;
    margin-top: 15px;
    border: none;
    border-radius: 7px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s;

    @media only screen and (max-width: 420px) {
      font-size: 16px;
    }

    &:active {
      background-color: rgb(219, 58, 60);
    }
  }
}
.chartList {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 80px;
  @media only screen and (max-width: 420px) {
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .listName {
    color: grey;
  }
  h1 {
    color: green;
    text-shadow: 10px 10px 25px rgb(31, 124, 52),
      -10px 10px 25px rgba(31, 124, 53, 0.247),
      -10px -10px 25px rgba(31, 124, 53, 0.247),
      10px -10px 25px rgba(31, 124, 53, 0.247);
    margin-bottom: 30px;
    margin-top: 50px;
  }
  ul {
    list-style-type: none;
    li {
      padding: 5px 10px;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      color: rgb(30, 35, 41);
      border-bottom: 1px solid rgba(128, 128, 128, 0.521);
      @media only screen and (max-width: 420px) {
        font-size: 16px;
      }
    }
    .last {
      border-bottom: none;
    }
    .deleteList {
      color: #fff;
      font-size: 16px;
      padding: 5px 0;
      background-color: rgb(255, 91, 83);
      border-radius: 7px;
      cursor: pointer;
      transition: 0.1s;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      &:active {
        background-color: rgb(219, 58, 60);
      }
    }
  }
}
</style>
