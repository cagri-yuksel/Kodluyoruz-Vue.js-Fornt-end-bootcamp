<template>
  <div class="mt-10">
    <p class="current" v-if="current.length > 0">
      Tamamlanmamış ({{ current.length }}) adet kursunuz var.
    </p>
    <p class="done" v-if="done.length > 0">
      Tamamlanmış ({{ done.length }}) adet kursunuz var.
    </p>
  </div>
</template>

<script>
export default {
  props: ["todoList"],
  data() {
    return {};
  },
  computed: {
    done() {
      return this.todoList.filter(function (list) {
        return list.status === true;
      });
    },
    current() {
      return this.todoList.filter(function (list) {
        return list.status === false;
      });
    },
  },
};
</script>

<style scoped>
.current {
  color: red;
}
.done {
  color: green;
}
</style>