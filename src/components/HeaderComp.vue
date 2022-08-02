<template>
  <div class="navbar">
    <header class="container">
      <router-link class="leftSide" to="/">
        <img
          class="logoImg"
          src="https://cdn0.iconfinder.com/data/icons/business-836/52/2-512.png"
          alt=""
        />
        <span class="B-st">back to home page</span>
      </router-link>

      <div class="rightSide">
        Where is <br />
        my money?
      </div>
    </header>
    <!-- </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.navbar {
  background-color: rgb(83, 153, 135);
  color: #fff;

  border-bottom: 1px solid #444;
  display: none;
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .leftSide {
    display: flex;
    flex-direction: column;
    .logoImg {
      height: 80px;
      @media only screen and (max-width: 420px) {
        height: 70px;
        margin-left: 15px;
      }
    }
  }
  .rightSide {
    text-align: center;
    font-size: 22px;
    @media only screen and (max-width: 420px) {
      font-size: 18px;
      margin-right: 15px;
    }
  }
}
span {
  opacity: 0;
  color: #fff;
  width: 120px;
  padding: 5px 0;
  background: #444;
  text-align: center;
  position: absolute;
  z-index: 1000;
  border-radius: 6px;
  transition: opacity 1s;
  font-size: 14px;
  padding: 3px 6px;
  @media only screen and (max-width: 420px) {
    display: none;
  }
  &:after {
    content: "";
    border-width: 5px;
    position: absolute;
    border-style: solid;
  }
}
.leftSide:hover span {
  opacity: 1;
}
.B-st {
  top: 85px;
  @media only screen and (max-width: 420px) {
    top: 78px;
  }
}
.B-st:after {
  right: 65%;
  bottom: 100%;
  border-color: transparent transparent #444 transparent;
}
</style>
