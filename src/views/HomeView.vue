<template>
  <div>
    <div class="main container">
      <div class="main__left">
        <img src="@/assets/me.png" alt="" />
      </div>
      <div class="main__right">
        <h1>Hey there!</h1>
        <p>This is my exam project</p>
        <p>Lets check it out</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 420px) {
    flex-direction: column;
  }
  &__left {
    img {
      height: 400px;
      padding-bottom: 50px;
      @media only screen and (max-width: 420px) {
        height: 200px;
        padding-bottom: 15px;
      }
    }
  }
  &__right {
    h1 {
      font-size: 48px;
      margin-bottom: 15px;
      @media only screen and (max-width: 420px) {
        font-size: 28px;
        margin-bottom: 10px;
        text-align: center;
      }
    }
    p {
      font-size: 28px;
      color: grey;
      @media only screen and (max-width: 420px) {
        font-size: 18px;
        text-align: center;
      }
    }
  }
}
</style>
