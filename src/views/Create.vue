<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-4">
      <h5 class="mt-2 text-left" v-if="id === 'new'">Создание</h5>
      <h5 class="mt-2 text-left" v-else>Редактирование</h5>
      <!-- <Step1 v-if="this.$route.params.step == '1'" />
      <Step2 v-if="this.$route.params.step == '2'" />
      <Step3 v-if="this.$route.params.step == '3'" />-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Step1 from "@/components/Step1.vue";
import Step2 from "@/components/Step2.vue";
import Step3 from "@/components/Step3.vue";

export default {
  name: "create",
  components: {
    Step1,
    Step2,
    Step3
  },
  props: {
    id: {
      type: String,
      default: "new"
    }
  },
  data() {
    return {
      //id: this.$route.params.id || 0
    };
  },
  created() {
    //this.id =
    if (this.id.length > 20) {
      console.log("Слишком длинный id");
      // нет такой записи в БД
    } else {
      console.log("this.id:", this.id);
    }
  }
};
</script>