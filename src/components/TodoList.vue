<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in propsdata"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fa-solid fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, completed)"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    removeTodo: function (todoItem, index) {
      this.$emit("removeTodoItem", todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
      this.$emit('toggleTodoItem', todoItem, index);
    }
  },

  
};
</script>

<style scoped>
ul {
  margin-top: 0px;
  padding-left: 0px;
  list-style-type: none;
  text-align: left;
}

li {
  display: flex;
  height: 50px;
  min-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  border-radius: 5px;
  background-color: #fff;
  line-height: 50px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.checkBtn {
  margin-right: 5px;
  line-height: 45px;
  color: #62acde;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
