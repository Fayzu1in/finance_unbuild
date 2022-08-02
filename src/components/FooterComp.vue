<template>
  <div>
    <div class="footer container">
      <div class="footer__leftSide"></div>
      <div class="footer__center">
        <a href="https://github.com/Fayzu1in">
          <img height="40px" src="@/assets/github.png" alt="" />
          <p>GitHub</p>
        </a>
        <a href="https://www.instagram.com/fayzuliin/">
          <img height="40px" src="@/assets/instagram.png" alt="" />
          <p>Instagram</p>
        </a>
        <a href="t.me/ccyberboy">
          <img height="40px" src="@/assets/telegram.png" alt="" />
          <p>Telegram</p>
        </a>
      </div>
      <div class="footer__rightSide"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  padding-top: 15px;
  padding-bottom: 15px;

  &__center {
    display: flex;
    justify-content: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      text-decoration: none;
      transition: all 0.3s;
      margin-left: 10px;
      margin-right: 10px;
      p {
        @media only screen and (max-width: 420px) {
          padding-top: 5px;
        }
      }
      &:hover {
        color: green;
      }
    }
  }
}
</style>
