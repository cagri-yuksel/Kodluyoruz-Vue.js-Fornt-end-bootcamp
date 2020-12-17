<template>
  <div>
    <div
      :style="{ textAlign: 'center', color: 'teal !important' }"
      v-show="todoList.length == 0"
      class="card card-light mt-20"
    >
      <h3>Kurs Listen Tertemiz🧹</h3>
      <p>Yukarıda ki kutuyu kullanarak bir kurs giriniz.</p>
    </div>
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
export default {
  props: ["todoList"],
  data() {
    return {};
  },
};
</script>

<style>
</style>