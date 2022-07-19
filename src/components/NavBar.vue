<template>
  <div class="nav">
    <div class="nav-bar">
      <div class="logo">
        <img src="../assets/logo.svg" alt="Logo Snap" />
      </div>

      <div class="site-navigation desktop">
        <div class="dropdown">
          <button class="dropdown1" name="drop">
            Features
          </button>
          <div class="lista-dropdown1">
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
        <div class="dropdown">
          <button class="dropdown2" name="drop">
            Company
          </button>
          <div class="lista-dropdown2">
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
        <button class="careers">Careers</button>
        <button class="about">About</button>
      </div>
      <div id="mobile-navigation" @click="open()">
        <img src="../assets/icon-menu.svg" alt="" />
      </div>
    </div>

    <div class="nav-login">
      <button class="login">Login</button>
      <button class="register">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    open: function () {
      let el = document.querySelector(".navigation-mobile");

      el.style.display = "flex";
    },
  },
  data() {
    return [];
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px 50px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  .nav-bar {
    display: flex;
    .logo {
      height: 27px;
      align-self: center;
    }
    #mobile-navigation {
      display: none;
    }
    .site-navigation {
      display: flex;
      align-items: center;
      margin-left: 70px;
      justify-content: space-evenly;
      button {
        border: none;
        cursor: pointer;
        font-size: 18px;
        margin-right: 50px;
        padding: 10px;
        background: transparent;
      }
      .dropdown {
        button[name="drop"] {
          border: none;
          cursor: pointer;
          font-size: 18px;
          margin-right: 50px;
          padding: 10px;
          background: transparent;
          &.dropdown1,
          &.dropdown2 {
            &::after {
              content: url("../assets/icon-arrow-down.svg");
              margin-left: 10px;
            }
          }
        }
        .lista-dropdown1 {
          display: none;
          width: 120px;
          position: absolute;
          border: 1px solid #fff;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0px 0px 6.14px rgba(0, 0, 0, 0.1);
          background-clip: padding-box;
          padding: 20px;
          .item {
            display: flex;
            text-align: left;
            .img {
              height: 17px;
              width: 17px;
              align-self: center;
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

        .lista-dropdown2 {
          display: none;
          width: 90px;
          position: absolute;
          border: none;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0px 0px 6.14px rgba(0, 0, 0, 0.1);
          background-clip: padding-box;
          padding: 20px;
          .item {
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
        &:hover {
          .lista-dropdown1,
          .lista-dropdown2 {
            display: block;
          }
        }
      }
    }
  }

  .nav-login {
    align-self: center;
    button {
      background: transparent;
      border: none;
      border-radius: 12px;
      font-size: 18px;
      padding: 15px 30px;
      cursor: pointer;
      margin-left: 10px;
      &:hover {
        border: 1px solid #000;
      }
    }
  }
}

@media (max-width: 480px) {
  .nav {
    display: inline;
    .nav-bar {
      display: flex;
      justify-content: space-between;
      vertical-align: middle;
      padding: 0 20px;
      .logo {
        align-self: center;
      }
      .site-navigation {
        display: none;
      }
      #mobile-navigation {
        display: block;
        align-self: center;
      }
    }
    .nav-login {
      display: none;
    }
  }
}
</style>
