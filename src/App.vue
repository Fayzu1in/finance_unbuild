<template>
  <div id="app">
    <header-comp></header-comp>
    <main>
      <div class="forHero">
        <div class="hero container">
          <div class="hero__leftSide">
            <div class="hero__leftSide-selectOperation">Select Operation</div>
          </div>
          <div class="hero__center">
            <router-link to="/">
              <img src="@/assets/home.png" alt="" />
            </router-link>
          </div>
          <div class="hero__rightSide">
            <router-link
              class="hero__rightSide-button expenseDiv"
              to="/expenses"
              >EXPENSES</router-link
            >
            <router-link class="homeBtnCenter" to="/">
              <img src="@/assets/home.png" alt="" />
            </router-link>
            <router-link
              class="hero__rightSide-button incomeDiv"
              to="/incomeoper"
              >INCOME</router-link
            >
          </div>
        </div>
      </div>
      <router-view></router-view>
    </main>
    <footer-comp class="footerComp" />
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "App",
  components: { HeaderComp, FooterComp },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    expenseBtnActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
* {
  // font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  height: 1px;
  // color: #fff;
  background-color: rgb(255, 255, 255);
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(30, 35, 41);
  outline: 1px solid rgb(30, 35, 41);
  border-radius: 5px;
}
.container {
  width: 1100px;
  margin: 0 auto;
  // color: ;
  @media only screen and (max-width: 420px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }
}

main {
  flex: 1;
}

.forHero {
  background-color: rgb(30, 35, 41);
  position: sticky;
  top: 0;
  border-bottom: 1px solid #444;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 420px) {
    flex-direction: column;
  }
  &__leftSide {
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    @media only screen and (max-width: 420px) {
      font-size: 24px;
      margin-bottom: 15px;
      margin-top: 15px;
      display: none;
    }
  }
  &__center {
    img {
      height: 70px;
    }
    @media only screen and (max-width: 420px) {
      display: none;
    }
  }
  &__rightSide {
    display: flex;
    // flex-direction: column;

    width: 27%;
    justify-content: space-between;
    @media only screen and (max-width: 420px) {
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      align-items: center;
    }
    .homeBtnCenter {
      display: none;
      @media only screen and (max-width: 420px) {
        display: block;
      }
      img {
        @media only screen and (max-width: 420px) {
          height: 50px;
        }
      }
    }

    &-button {
      text-align: center;
      font-size: 28px;
      border: 1px solid grey;
      border-radius: 7px;

      padding: 5px 10px;
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;
      @media only screen and (max-width: 420px) {
        font-size: 20px;
      }
      &:hover {
        background-color: lightgreen;
        color: #000;
      }
    }
    .expenseDiv.router-link-active {
      background-color: rgb(255, 91, 83);
      color: #fff;
      border: unset;
    }
    .expenseDiv {
      color: grey;
      transition: all 0.3s;
      &:hover {
        color: #fff;
        background-color: rgb(219, 58, 60);
      }
    }
    .incomeDiv.router-link-active {
      background-color: rgb(83, 153, 135);
      color: #fff;
      border: unset;
    }
    .incomeDiv {
      color: grey;
      &:hover {
        color: #fff;
        background-color: rgb(62, 118, 104);
      }
    }
  }
}
.footerComp {
  border-top: 1px solid grey;
  background-color: rgb(30, 35, 41);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  @media only screen and (max-width: 420px) {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
  }
}
</style>
