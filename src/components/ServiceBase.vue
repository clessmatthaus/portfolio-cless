<template>
  <div class="resize">
    <div class="services-text">
      <h1>*** Services proposés ***</h1>
    </div>
    <div class="base">
      <services-view
        v-for="(boxs, index) in all_service"
        :info_service="boxs"
        v-bind:key="index" />
    </div>
  </div>
</template>

<script>
import ServicesView from "./ServicesView.vue";
export default {
  name: "ServiceBase",
  components: {
    ServicesView,
  },
  props: {
    all_service: Array,
  },
};
</script>

<style>
.resize {
  display: inline;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.services-text h1 {
  font-weight: bold;
  color: rgb(231, 156, 15);
  text-align: center;
  margin-top: 130px;
  font-weight: 22px;
  padding-bottom: -80px;
}
.base {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 0px));
  gap: 5px;
  margin-left: 2.2rem;
  margin-right: 2.2rem;
  justify-content: center;
}
@media (max-width: 880px) {
  .base {
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 780px) {
  .base {
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 680px) {
  .base {
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 380px) {
  .base {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 0px));
  gap: 5px;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  justify-content: center;
  align-items: center;
}
}
@media (max-width: 360px) {
  .base {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 0px));
  gap: 5px;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  justify-content: center;
  align-items: center;
}
}
@media (max-width: 320px) {
  .base {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0px));
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (max-width: 230px) {
  .base {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 0px));
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
  }
}

@media (max-width: 200px) {
  .base {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 0px));
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
  }
}

}
</style>
