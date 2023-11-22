<template>
  <header :class="{ 'scroll-nav': scrollNav }">
    <nav>
      <router-link to="/">
        <div class="brand-icon">
          <img src="@/assets/pfss.png" alt="" id="brand-icon" />
        </div>
      </router-link>
      <ul v-show="!mutable" class="navigation">
        <router-link to="/"
          ><li><a class="link">HOME</a></li></router-link
        >
        <router-link to="/About"
          ><li><a class="link">ABOUT</a></li></router-link
        >
        <router-link to="/ServicesContent"
          ><li><a class="link">SERVICES</a></li></router-link
        >
        <router-link to="/PortfolioView"
          ><li><a class="link">PORTFOLIO</a></li></router-link
        >
        <router-link to="/ContactView"
          ><li><a class="link">CONTACT</a></li></router-link
        >
      </ul>
      <div class="menu-icon">
        <i
          @click="toggleMutableNav"
          v-show="mutable"
          class="bx bx-menu"
          :class="{ 'icon-active': mutableNav }"></i>
      </div>
      <transition name="mutable-nav">
        <ul v-show="mutableNav" class="dropdown-nav">
          <router-link to="/"
            ><li><a class="link">HOME</a></li></router-link
          >
          <router-link to="/About"
            ><li><a class="link">ABOUT</a></li></router-link
          >
          <router-link to="/ServicesContent"
            ><li><a class="link">SERVICES</a></li></router-link
          >
          <router-link to="/PortfolioView"
            ><li><a class="link">PORTFOLIO</a></li></router-link
          >
          <router-link to="/ContactView"
            ><li><a class="link">CONTACT</a></li></router-link
          >
        </ul>
      </transition>
      <div class="theme-contact">
        <div class="top-btn">
          <a class="header-btn">Chat<i class="ri-message-2-line"></i></a>
        </div>
        <div class="theme-btn">
          <div class="icon-theme">
            <img src="@/assets/sun-icon.png" alt="" id="icon-theme" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationView",
  data() {
    return {
      dark: true,
      scrollNav: null,
      mutable: null,
      mutableNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMutableNav() {
      this.mutableNav = !this.mutableNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 760) {
        this.mutable = true;
        return;
      }
      this.mutable = false;
      this.mutableNav = false;
      return;
    },
    /*darkMode(){
          document.body.classList.toggle('darkMode')
          this.dark = !this.dark
      },*/
  },
};
</script>

/****************************** NAVIGATION CSS *************************/

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}
/*linear-gradient(rgb(138, 207, 253),rgb(131, 192, 249), rgb(26, 128, 223));*/

:root {
  --primary-color: white;
  --secondary-color: white;
  --text-color: black;
  --foor-color: rgb(21, 21, 170);
  --five-color: rgba(17, 110, 204, 0.544);
  --six-color: white;
  --sev-color: rgba(3, 16, 91, 0.544);
  --hei-color: white;
  --fiv-color: rgba(3, 16, 91, 0.544);
  --nine-color: rgb(243, 200, 8);
  --ten-color: linear-gradient(
    rgb(85, 165, 239),
    rgb(131, 192, 249),
    rgb(26, 128, 223)
  );
  --text-color: black;
}
.dark-theme {
  --primary-color: rgb(8, 1, 57);
  --secondary-color: white;
  --text-color: wheat;
  --foor-color: rgb(21, 21, 170);
  --five-color: rgb(1, 10, 48);
  --six-color: white;
  --sev-color: white;
  --hei-color: wheat;
  --fiv-color: wheat;
  --nine-color: white;
  --ten-color: rgb(11, 2, 70);
  --text-color: white;
}
body {
  background: var(--primary-color);
  color: var(--text-color);
}
.active {
  border-right: 5px solid rgb(247, 175, 43);
  height: 10px;
}
header {
  background: transparent;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: var(--text-color);
}
nav {
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 5px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 20px auto;
}

ul,
.link {
  font-weight: 600;
  color: var(--text-color);
  list-style: none;
  text-decoration: none;
}
li {
  padding: 16px;
  margin-left: 16px;
}
.link {
  font-size: 20px;
  font-weight: bold;
  transition: 0.5s ease all;
  cursor: pointer;
  border-bottom: 1px solid transparent;
}
.link:hover {
  font-weight: bold;
  color: rgb(202, 181, 17);
  border-color: rgb(202, 181, 17);
}
.brand-icon {
  display: flex;
  align-items: center;
  margin-top: -30px;
  padding-top: 10px;
  cursor: pointer;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}
.theme-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  padding: 0 10px;
}
.brand-icon img {
  width: 170px;
  transition: 0.5s ease all;
}
.menu-icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 0px;
  height: 100%;
}
#icon-theme {
  display: flex;
  width: 45px;
  height: 40px;
  cursor: pointer;
  margin-left: 15px;
}
.menu-icon i {
  cursor: pointer;
  font-size: 40px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(180deg);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 200px;
  height: 100%;
  background: linear-gradient(135deg rgb(14, 14, 14) rgb(37, 37, 37));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-right: 1px solid linear-gradient(135deg white black);
  top: 0;
  left: 0;
  padding-left: 10px;
  padding-top: 40px;
  align-items: start;
}
.mutable-nav-enter-active,
.mutable-nav-leave-active {
  transition: 1s ease all;
}
.mutable-nav-enter-form,
.mutable-nav-leave-to {
  transform: translateX(-250px);
}
.mutable-nav-enter-to {
  transform: translateX(0);
}
.dropdown-nav li {
  margin-left: 0px;
}
.dropdown-nav .link {
  color: var(--text-color);
}
.dropdown-nav .link:hover {
  color: rgb(202, 181, 17);
  border-color: rgb(202, 181, 17);
}
.header-btn {
  display: flex;
  padding: 8px 32px;
  color: var(--nine-color);
  background: var(--back-color);
  border: 2px solid var(--bor-color);
  border-radius: 10px;
  font-size: 16px;
  margin-right: 15px;
  font-weight: 600;
  margin-top: 0px;
  margin-left: 20px;
  transition: all 0.5s ease;
  cursor: pointer;
}
.header-btn:hover {
  background: rgb(202, 181, 17);
  color: var(--secondary-color);
  box-shadow: 0 0 20px var(--secondary-color);
  border: 2px solid var(--secondary-color);
  transform: scale(1.1);
}
.top-btn i {
  margin-left: 5px;
}
.theme-btn {
  display: flex;
}

.scroll-nav {
  margin-top: -20px;
  background: linear-gradient(135deg rgb(249, 249, 249) rgb(59, 57, 57));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-sizing: 0 4px 6px -1px linear-gradient(135deg rgb(251, 250, 250)
        rgb(59, 57, 57));
}
nav {
  padding: 20px;
}
.brand-icon img {
  width: 120px;
  box-sizing: 0 4px 6px -1px black, 0 2px 4px -1px gray;
}
@media screen and(max-width: 1250px) {
  ul,
  .link {
    font-weight: 600;
    color: var(--text-color);
    list-style: none;
    text-decoration: none;
  }
  li {
    padding: 10px;
    margin-left: 10px;
  }
  .link {
    font-size: 16px;
    transition: 0.5s ease all;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .link:hover {
    color: rgb(202, 181, 17);
    border-color: rgb(250, 250, 250);
    font-weight: bold;
    text-shadow: 5px 5px 25px white;
  }
  .top-btn {
    margin-right: -25px;
  }
  .top-btn i {
    margin-left: 5px;
  }
  .theme-btn {
    display: flex;
    margin-left: 40px;
  }
  #icon-theme {
    display: flex;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-left: 15px;
  }
}
@media screen and (max-width: 850px){
  ul,
  .link {
    font-weight: 500;
    color: var(--text-color);
    list-style: none;
    text-decoration: none;
  }
  li {
    padding: 10px;
    margin-left: 10px;
  }
  .link {
    font-size: 13px;
    transition: 0.5s ease all;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .theme-btn {
    display: flex;
    margin-left: 10px;
  }
  #icon-theme {
    display: flex;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-left: 10px;
  }
  .top-btn {
    margin-right: -25px;
  }
}

@media screen and (max-width: 455px){
  ul,
  .link {
    font-weight: 500;
    color: var(--text-color);
    list-style: none;
    text-decoration: none;
  }
  li {
    padding: 10px;
    margin-left: 10px;
  }
  .link {
    font-size: 13px;
    transition: 0.5s ease all;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .theme-btn {
    display: flex;
    margin-left: -50px;
  
  }
  #icon-theme {
    display: flex;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-left: -50px;
  }
  .menu-icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 50px;
  height: 100%;
}
  .top-btn {
    margin-right: -25px;
    visibility: hidden;
  }
}
@media screen and (max-width: 380px){
  .theme-btn {
    display: flex;
    margin-left: -70px;
  
  }
  #icon-theme {
    display: flex;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-left: -70px;
  }
}

@media screen and (max-width: 360px){
  .theme-btn {
    display: flex;
    margin-left: -70px;
  
  }
  #icon-theme {
    display: flex;
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin-left: -70px;
  }
}
</style>
