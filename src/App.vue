<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem" />
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeTodoItem="removeOneItem"
      v-on:toggleTodoItem="toggleComplete"
    />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem: function (todoItem) {
      // 저장하는 로직
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function (todoItem, index) {
      // todoItem.item과 같은 것을 localStorage에서 삭제
      localStorage.removeItem(todoItem.item);
      // splice : 배열의 index부터 1개 까지 삭제
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function (todoItem, index) {
      todoItem.completed = !todoItem.completed;
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
      }
    }
  },
  components: {
    // 컴포넌트 태그 명: 컴포넌트 내용
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  width: 200px;
  border-style: none;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
