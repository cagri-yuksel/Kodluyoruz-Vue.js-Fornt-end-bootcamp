<template>
  <div>
    <courseListEmpty v-show="todoList.length == 0" :todo="todoList" />
    <div v-show="todoList.length > 0" class="card card-light mt-20">
      <h3>Aktif Kurslarım</h3>
      <ul class="list mt-20">
        <li
          class="course-item list-item"
          :class="{ 'bg-danger': !i.status, 'bg-success': i.status }"
          v-for="i in todoList"
          :key="i"
        >
          <span>{{ i.course }}</span>
          <input type="checkbox" @click="i.status = !i.status" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import courseListEmpty from "./course-list-empty";
export default {
  props: ["todoList"],
  components: {
    courseListEmpty,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>