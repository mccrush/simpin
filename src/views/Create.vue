<template>
  <div class="create row justify-content-sm-center">
    <div class="col-12 col-sm-8 col-md-6 col-xl-6">
      <h5>Создание инструкции</h5>
      <hr />
      <form @submit.prevent="addInstruction">
        <div class="form-group">
          <label for="title">Название инструкции</label>
          <input type="text" class="form-control" id="title" v-model="title" maxlength="32" required placeholder="Обязательное поле" />
          <small class="form-text text-muted text-right">{{title.length}}/32</small>
        </div>
        <div class="row">
          <div class="col">
            <img v-if="src" :src="src" alt="Обложка инструкции" width="100%" class="img-thumbnail mb-2" />
          </div>
        </div>
        <div class="custom-file mb-4">
          <input type="file" class="custom-file-input" id="customFile" ref="file" @change="handleFiles" accept="image/*" />
          <label class="custom-file-label" for="customFile">Загрузить обложку</label>
        </div>
        <p>{{imageurl}}</p>
        <div class="form-group">
          <label for="description">Краткое описание</label>
          <textarea class="form-control" id="description" rows="3" v-model="description" placeholder="Не обязательно" maxlength="256"></textarea>
          <small class="form-text text-muted text-right">{{description.length}}/256</small>
        </div>
        <div class="form-group">
          <label for="countsteps">Количество шагов</label>
          <input type="number" class="form-control" id="countsteps" v-model.number="countsteps" min="1" max="32" step="1" />
          <small class="form-text text-muted text-right">{{countsteps}}/32</small>
        </div>

        <button type="submit" class="btn btn-block btn-success" :class="{disabled: !title.length}">Далее</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { storage } from "@/main.js";

export default {
  name: "create",
  data() {
    return {
      title: "",
      description: "",
      countsteps: 1,
      src: "",
      imageurl: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    handleFiles() {
      let file = this.$refs.file.files[0];
      this.src = URL.createObjectURL(file);
    },
    async uploadFile(id) {
      let file = this.$refs.file.files[0];
      let fileName = file.name;

      const ref = storage
        .ref()
        .child("instructions")
        .child(id)
        .child(fileName);

      await ref.put(file).then(snapshot => {
        console.log("Uploaded a blob or file!");
        snapshot.ref.getDownloadURL().then(downloadURL => {
          this.imageurl = downloadURL;
        });
      });
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    addInstruction() {
      if (this.title.trim()) {
        let steps = [];
        for (let i = 1; i <= this.countsteps; i++) {
          steps.push({ title: "Шаг " + i, description: "", step: i });
        }

        const instruction = {
          title: this.title,
          description: this.description,
          countsteps: this.countsteps,
          steps,
          id: this.getRandomInt(100, 999) + Date.now().toString(),
          status: "active",
          date: new Date(),
          user: this.user.uid,
          imageurl: this.imageurl
        };

        this.uploadFile(instruction.id).then(() => {
          this.$store.dispatch("createInstruction", instruction);
          this.$router.push("/createstep/" + instruction.id);
        });
      } else {
        alert('Поле "Название инструкции" обязательно к заполнению!');
      }
    }
  }
};
</script>