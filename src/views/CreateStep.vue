<template>
  <div class="create row justify-content-sm-center">
    <vueHeadful title="Создание инструкции" description="Создание инструкции" />
    <div class="col-12 col-sm-8 col-md-6 col-xl-6">
      <h5 class="d-flex justify-content-between">
        <span>Создание шага</span>
        <span class="text-muted small mt-1">{{currentstep}}/{{instruction.countsteps}}</span>
      </h5>
      <hr />
      <form @submit.prevent="addStep">
        <div class="form-group">
          <label for="title">Название шага</label>
          <input type="text" class="form-control" id="title" v-model="title" maxlength="128" required placeholder="Обязательное поле" />
          <small class="form-text text-muted text-right">{{title.length}}/64</small>
        </div>
        <!-- <div class="row">
          <div class="col">
            <img v-if="src" :src="src" alt="Иллюстрация шага" width="100%" class="img-thumbnail mb-2" />
          </div>
        </div>
        <div class="custom-file mb-4">
          <input type="file" class="custom-file-input" id="customFile" ref="file" @change="handleFiles" accept="image/*" />
          <label class="custom-file-label" for="customFile">Загрузить иллюстрацию</label>
        </div>
        <p>{{imageurl[currentstep - 1]}}</p>-->
        <div class="form-group">
          <label for="description">Описание</label>
          <textarea class="form-control" id="description" rows="3" v-model="description" maxlength="256" required></textarea>
          <small class="form-text text-muted text-right">{{description.length}}/256</small>
        </div>
        <button type="submit" class="btn btn-block btn-success" :class="{disabled: !title.length}">Далее</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { storage } from "@/main.js";
import vueHeadful from "vue-headful";

export default {
  name: "createstep",
  components: {
    vueHeadful
  },
  data() {
    return {
      title: "",
      description: "",
      currentstep: 1,
      steps: [],
      imageurl: "",
      src: ""
    };
  },
  mounted() {
    this.steps = this.instruction.steps;
    this.title = this.steps[this.currentstep - 1].title;
    this.description = this.steps[this.currentstep - 1].description;
  },
  computed: {
    instruction() {
      return this.$store.getters.instructionById(this.$route.params.id);
    }
  },
  methods: {
    handleFiles() {
      let file = this.$refs.file.files[0];
      this.src = URL.createObjectURL(file);
    },
    uploadFile(id) {
      let file = this.$refs.file.files[0];
      let fileName = file.name;

      const ref = storage
        .ref()
        .child("instructions")
        .child(id)
        .child(this.currentstep - 1 + "")
        .child(fileName);

      ref.put(file).then(snapshot => {
        console.log("Uploaded a blob or file!");
        snapshot.ref.getDownloadURL().then(downloadURL => {
          //this.imageurl = downloadURL;
        });
      });
      //return "Success!";
    },
    saveStep() {
      //console.log("this.imageurl:", this.imageurl);
      this.steps[this.currentstep - 1] = {
        title: this.title,
        description: this.description,
        step: this.currentstep,
        imageurl: this.imageurl
      };

      this.$store.dispatch("updateStep", {
        id: this.$route.params.id,
        steps: this.steps
      });

      if (this.currentstep < this.instruction.countsteps) {
        this.currentstep++;
        this.title = this.steps[this.currentstep - 1].title;
        this.description = this.steps[this.currentstep - 1].description;
        this.src = "";
        //this.$refs.file.value = "";
        //this.imageurl = "";
      } else if (this.currentstep === this.instruction.countsteps) {
        this.$router.push("/instruction/" + this.$route.params.id);
      } else {
        console.log("Ошибка при создании шага");
      }
    },
    addStep() {
      if (this.title.trim()) {
        // console.log(this.src);
        // if (this.src) {
        //   this.uploadFile(this.$route.params.id).then(msg => {
        //     console.log(msg);
        //     this.imageurl = msg;
        //     console.log("this.imageurl", this.imageurl);
        //   });
        //   this.saveStep();
        // } else {
        //   this.saveStep();
        // }
        this.saveStep();
      } else {
        alert('Поле "Название шага" обязательно к заполнению!');
      }
    }
  }
};
</script>