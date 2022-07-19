<template>
  <div class="menu-hamburguer">
    <div class="navigation-mobile">
      <div class="lista">
        <label class="task-collapse">
          <input type="checkbox" class="toggle-collapse" />
          <div class="heading">Features</div>
          <div class="collapse">
            <div class="content">
              <div class="item">
                <div class="img">
                  <img src="../assets/icon-todo.svg" alt="" />
                </div>
                <a href="#">Todo List</a>
              </div>
              <div class="item">
                <div class="img">
                  <img src="../assets/icon-calendar.svg" alt="" />
                </div>
                <a href="">Calendar</a>
              </div>
              <div class="item">
                <div class="img">
                  <img
                    class="reminders"
                    src="../assets/icon-reminders.svg"
                    alt=""
                  />
                </div>
                <a href="">Reminders</a>
              </div>
              <div class="item">
                <div class="img">
                  <img src="../assets/icon-planning.svg" alt="" />
                </div>
                <a href="">Planning</a>
              </div>
            </div>
          </div>
        </label>

        <label class="task-collapse">
          <input type="checkbox" class="toggle-collapse" />
          <div class="heading">Company</div>
          <div class="collapse">
            <div class="content">
              <div class="item">
                <a href="#">History</a>
              </div>
              <div class="item">
                <a href="">Our Team</a>
              </div>
              <div class="item">
                <a href="">Blog</a>
              </div>
            </div>
          </div>
        </label>

        <button class="careers">Careers</button>
        <button class="about">About</button>
      </div>

      <button class="close" v-on:click="close">
        <img src="../assets/icon-close-menu.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuLateralMobile",
  methods: {
    close: function () {
      let el = document.querySelector(".navigation-mobile");

      el.style.display = "none";
    },
  },
  data() {
    return [];
  },
};
</script>

<style lang="scss">
.menu-hamburguer {
  width: 400px;
  background: #fff;
  display: block;
  overflow: auto;
  top: 0;
  right: 0;

  .navigation-mobile {
    display: none;
    align-items: center;
    position: fixed;
    float: right;
    width: 200px;
    z-index: 1040in;
    overflow: auto;
    background: #fff;
    flex-direction: column;
    height: 100%;
    top: 0;
    right: 0;
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .menu-hamburguer {
    .navigation-mobile {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      .lista {
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        margin-left: 10px;
        .task-collapse {
          display: block;
          .toggle-collapse {
            display: none;
            &:checked {
              ~ .heading {
                &:before {
                  transform: translate(0, -50%) rotate(180deg);
                }
              }
              ~ .collapse {
                max-height: 300px;
                overflow: initial;
                opacity: 1;
                border-radius: 10px;
              }
            }
          }
          .collapse {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            background: #fff;
            transition: all 0.4s ease;
          }

          .heading {
            position: relative;
            padding: 10px;
            color: hsl(0, 0%, 8%);
            &:before {
              content: "";
              display: block;
              height: 10px;
              width: 10px;
              background-image: url("../assets/icon-arrow-down.svg");
              background-repeat: no-repeat;
              background-position: center;
              position: absolute;
              top: 50%;
              transform: translate(0, -50%);
              right: 40px;
              transition: all 0.3s ease;
              color: hsl(0, 0%, 8%);
            }
          }
          .content {
            padding: 10px;
            .item {
              display: flex;
              text-align: left;
              .img {
                height: 17px;
                width: 17px;
                align-self: center;
                margin-left: 10px;
              }
              a {
                color: hsl(0, 0%, 41%);
                padding: 8px 10px;
                text-decoration: none;
                display: block;
                font-size: 14px;
                align-self: flex-start;
              }
            }
          }
        }
        .about,
        .careers {
          position: relative;
          padding: 10px;
          background: transparent;
          border: none;
          font-size: 18px;
          text-align: left;
          color: hsl(0, 0%, 8%);
        }
      }
      .close {
        margin: 20px;
        background: transparent;
        border: none;
      }
    }
  }
}
</style>