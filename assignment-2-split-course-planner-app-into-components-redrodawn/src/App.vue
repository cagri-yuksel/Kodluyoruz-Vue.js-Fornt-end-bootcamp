<template>
  <div>
    <div class="container" id="app">
      <div class="course--planner-app--container">
        <div class="card">
          <div class="user--action--container">
            <div class="form-group">
              <label>Kursun Adı</label>
              <input
                type="text"
                :class="{ alertInput: empty }"
                v-model.trim="textField"
              />
            </div>
            <button class="btn-primary mt-10" @click="addNewCourse">
              Kurs Ekle
            </button>
          </div>
          <span class="alertText"> {{ empty }} </span>
        </div>
        <card :todoList="todoList" />
        <courseListCounter :todoList="todoList" />
      </div>
    </div>
  </div>
</template>

<script>
import courseListCounter from "./components/course-list-counter";
import Card from "./components/card";
export default {
  components: {
    Card,
    courseListCounter,
  },
  data() {
    return {
      empty: null,
      textField: null,
      todoList: [],
    };
  },

  methods: {
    addNewCourse() {
      if (this.textField === null || this.textField.trim() === "") {
        this.empty = "Alanı boş bırakamazsınız.";
        setTimeout(() => {
          this.empty = null;
        }, 5000);
      } else {
        this.todoList.push({ course: this.textField, status: false });
        this.textField = null;
        this.empty = null;
      }
    },
  },
};
</script>

<style scoped>
.alertInput {
  border: 1px solid red;
}
.alertText {
  color: red;
}
.mt-10 {
  margin-top: 12px;
}
</style>