<template>
  <!----------------------Prestations/services--------------->
  <section class="services">
    <div class="services-content" id="services">
      <div class="icon-dev">
        <router-link to="/:patchMatch(.*)*">
        <div class="box">
          <h3>
            <span
              >{{ info_service.title }}<br /><br />
              <div :style="changeImg" class="icon-servives"></div
            ></span>
          </h3>
          <p>{{ info_service.desc }}</p>
        </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ServicesView",
  components: {},
  props: {
    info_service: Object,
  },
  setup(props) {
    const changeImg = computed(() => {
      return {
        backgroundImage: `url(${props.info_service.image})`,
      };
    });

    return {
      changeImg,
    };
  },
};
</script>

<style>
.services {
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  padding: 10px;
}

.services-text h1 {
  font-size: 24px;
  line-height: 1.3;
  padding-top: 30px;
  font-weight: bold;
  color: rgb(231, 156, 15);
  text-align: center;
}
.services-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 2.2rem;
  padding: 0px;
}
.icon-servives {
  width: 120px;
  height: 120px;
  background-image: url(../assets/grandes.png);
  background-size: cover;
  margin: 20px 0px;
  margin-left: 30%;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 15px white;
  margin-bottom: 10px;
}
.icon-servives:hover {
  transition: all 0.5s ease;
  border: 1px solid var(--text-color);
  box-shadow: 0 0 35px var(--text-color);
}
.icon-dev {
  margin-left: 30px;
  background: transparent;
  cursor: pointer;
}
.box {
  width: 400px;
  height: 430px;
  padding: 30px;
  background: var(--about-back);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  color: var(--text-color);
  border: 1px solid transparent;
  box-shadow: 0 0 10px var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  margin-left: 0px;
}
.box:hover {
  border: 2px solid var(--text-color);
  box-shadow: 0 0 25px var(--text-color);
}
.box h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: rgb(231, 156, 15);
  font-weight: bold;
}
.box p {
  font-size: 20px;
  font-weight: 200;
  line-height: 30px;
  margin-bottom: 20px;
  margin-top: 40px;
}

@media (max-width: 950px) {
  .icon-dev {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 580px) {
  .box {
  width: 380px;
  height: 430px;
  padding: 30px;
  background: var(--about-back);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  color: var(--text-color);
  border: 1px solid transparent;
  box-shadow: 0 0 10px var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  margin-left: 0px;
}
}
@media (max-width: 480px) {
  .box {
  width: 90%;
  height: 430px;
  padding: 30px;
  background: var(--about-back);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  color: var(--text-color);
  border: 1px solid transparent;
  box-shadow: 0 0 10px var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  margin-left: 0px;
}
}

@media (max-width:400px) {
  .box {
  width: 90%;
  height: 430px;
  padding: 30px;
  background: var(--about-back);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  color: var(--text-color);
  border: 1px solid transparent;
  box-shadow: 0 0 10px var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  margin-left: 0px;
}
}
@media (max-width: 380px) {
  .box {
  width: 90%;
  height: 480px;
  padding: 30px;
  background: var(--about-back);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  color: var(--text-color);
  border: 1px solid transparent;
  box-shadow: 0 0 10px var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  margin-left: 0px;
}
}
@media (max-width: 380px) {
  .services-text h1 {
  font-size: 19px;
  line-height: 1.3;
  padding-top: 30px;
  font-weight: bold;
  color: rgb(231, 156, 15);
  text-align: center;
}
.box p {
  font-size: 17px;
  font-weight: 200;
  line-height: 30px;
  margin-bottom: 20px;
  margin-top: 40px;
}
  .icon-servives {
  width: 120px;
  height: 120px;
  background-image: url(../assets/grandes.png);
  background-size: cover;
  margin: 20px 0px;
  margin-left: 25%;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 15px white;
  margin-bottom: 10px;
}
  .box {
  width: 90%;
  height: 480px;
  padding: 30px;
  background: var(--about-back);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  color: var(--text-color);
  border: 1px solid transparent;
  box-shadow: 0 0 10px var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  margin-left: 0px;
}
}

@media (max-width: 360px) {
  .services-text h1 {
  font-size: 17px;
  line-height: 1.3;
  padding-top: 30px;
  font-weight: bold;
  color: rgb(231, 156, 15);
  text-align: center;
}
.box p {
  font-size: 15px;
  font-weight: 200;
  line-height: 30px;
  margin-bottom: 20px;
  margin-top: 40px;
}
  .icon-servives {
  width: 120px;
  height: 120px;
  background-image: url(../assets/grandes.png);
  background-size: cover;
  margin: 20px 0px;
  margin-left: 22%;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 15px white;
  margin-bottom: 10px;
}
  .box {
  width: 90%;
  height: 480px;
  padding: 30px;
  background: var(--about-back);
  backdrop-filter: blur(6px);
  border-radius: 30px;
  color: var(--text-color);
  border: 1px solid transparent;
  box-shadow: 0 0 10px var(--text-color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  cursor: pointer;
  margin-left: 0px;
}
}
@media (max-width: 320px){
  .box {
    width: 90%;
    height: 400px;
    padding: 3px;
    background: var(--about-back);
    backdrop-filter: blur(6px);
    border-radius: 30px;
    color: var(--text-color);
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.5s ease;
    cursor: pointer;
    margin-left: 0px;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 230px){
  .services {
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    padding: 10px;
  }
  .box {
    width: 90%;
    height: 400px;
    padding: 3px;
    background: var(--about-back);
    backdrop-filter: blur(6px);
    border-radius: 30px;
    color: var(--text-color);
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.5s ease;
    cursor: pointer;
    margin-left: 0px;
  }
  .services-text h1 {
    font-size: 14px;
    line-height: 1.1;
    padding-top: 30px;
    font-weight: bold;
    color: rgb(231, 156, 15);
    text-align: center;
  }
  .box h3 {
    font-size: 1rem;
    margin-bottom: 30px;
    margin-bottom: 10px;
    color: rgb(231, 156, 15);
    font-weight: bold;
  }
  .box p {
    font-size: 12px;
    font-weight: 200;
    line-height: 30px;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  .icon-servives {
    width: 80px;
    height: 80px;
    background-image: url(../assets/grandes.png);
    background-size: cover;
    margin: 20px 30%;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 15px white;
    margin-bottom: 10px;
  }
}

@media (max-width: 200px){
  .services {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    padding: 10px;
  }
  .box {
    width: 90%;
    height: 300px;
    padding: 3px;
    background: var(--about-back);
    backdrop-filter: blur(6px);
    border-radius: 30px;
    color: var(--text-color);
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.5s ease;
    cursor: pointer;
    margin-left: 0px;
  }
  .services-text h1 {
    font-size: 13px;
    line-height: 5px;
    padding-top: 30px;
    font-weight: bold;
    color: rgb(231, 156, 15);
    text-align: center;
  }
  .box h3 {
    font-size: 11px;
    margin-bottom: 30px;
    margin-bottom: 10px;
    color: rgb(231, 156, 15);
    font-weight: bold;
  }
  .box p {
    font-size: 11px;
    font-weight: 200;
    line-height: 30px;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  .icon-servives {
    width: 80px;
    height: 80px;
    background-image: url(../assets/grandes.png);
    background-size: cover;
    margin: 20px 30%;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 15px white;
    margin-bottom: 10px;
  }
}
</style>
