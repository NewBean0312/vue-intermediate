<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      this.$emit("clearAll");
    }
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  line-height: 50px;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
