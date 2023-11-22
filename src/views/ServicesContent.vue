<template>
  <div class="ServicesContent">
    <ServiceBase
      v-for="(data, index) in data_service"
      :key="index"
      :all_service="data" />
  </div>
</template>

<script>
// IMPORT
import BDD from "../BDD.js";
import { onMounted, ref } from "vue";
// COMPONENTS
import ServiceBase from "../components/ServiceBase";
export default {
  name: "ServicesContent",
  components: {
    ServiceBase,
  },
  setup() {
    class Service {
      constructor(title, image, desc) {
        this.title = title;
        this.image = image;
        this.desc = desc;
      }
    }

    let data_service = ref([]);

    const putDataServives = () => {
      let all_service = [];

      for (const service of BDD) {
        const new_service = new Service(
          service.title,
          service.image,
          service.desc
        );

        if (all_service.length === 2) {
          all_service.push(new_service);
          data_service.value.push(all_service);
          all_service = [];
        } else {
          all_service.push(new_service);
        }
      }
    };
    onMounted(putDataServives);

    return {
      data_service,
    };
  },
};
</script>

<style>
.ServicesContent {
  background: transparent;
  border: 1px solid transparent;
}
</style>
