<template>
  <div class="row content">
    <div class="col-6 esquerda">
      <h1>Make remote work</h1>
      <div class="text">
        Get your team in sync, no matter your location. Streamline processes
        create team rituals, and watch productivity soar.
      </div>
      <button class="learn-more">Learn more</button>

      <div class="clients">
        <div class="img"><img src="../assets/client-databiz.svg" alt="" /></div>
        <div class="img">
          <img src="../assets/client-audiophile.svg" alt="" />
        </div>
        <div class="img"><img src="../assets/client-meet.svg" alt="" /></div>
        <div class="img"><img src="../assets/client-maker.svg" alt="" /></div>
      </div>
    </div>
    <div class="col-6 direita">
      <img class="image-hero" src="../assets/image-hero-desktop.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContent",
};
</script>

<style lang="scss">
.content {
  display: flex;
  padding: 30px 150px;
  justify-content: space-around;
  .esquerda {
    display: flex;
    flex-direction: column;
    width: 475px;
    h1 {
      padding-top: 90px;
      font-size: 65px;
    }
    .text {
      font-size: 18px;
      color: hsl(0, 0%, 41%);
      line-height: 30px;
      width: 450px;
      padding: 50px 0;
    }
    .learn-more {
      background-color: hsl(0, 0%, 8%);
      border-radius: 15px;
      border: none;
      font-size: 20px;
      padding: 20px 30px;
      color: hsl(0, 0%, 98%);
      font-weight: 700;
      cursor: pointer;
      width: 200px;
      &:hover {
        background-color: hsl(0, 0%, 98%);
        color: hsl(0, 0%, 8%);
        border: 1px solid hsl(0, 0%, 8%);
        transition: all 0.6s ease;
      }
    }

    .clients {
      padding-top: 100px;
      display: flex;
      justify-content: space-between;
    }
  }
  .direita {
    height: 625px;
    .image-hero {
      max-height: 100%;
    }
  }
}

@media (max-width: 480px) {
  .content {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
    .esquerda {
      padding: 0;
      h1 {
        font-size: 32px;
        text-align: center;
        padding-bottom: 20px;
      }
      .text {
        width: 100%;
        text-align: center;
      }
      .learn-more {
        align-self: center;
      }
      .clients {
        padding-top: 50px;
        width: 100%;
        max-width: 430px;
        img {
        }
      }
    }
    .direita {
      background: url("../assets/image-hero-mobile.png") no-repeat;
      background-size: 100% 100%;
      height: 300px;
      img {
        display: none;
      }
    }
  }
}
</style>