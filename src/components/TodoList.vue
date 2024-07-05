<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        {{ todoItem }}
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      // todoItem과 값이 같은 것을 localStorage에서 삭제
      localStorage.removeItem(todoItem);
      // splice : 배열의 index부터 1개 까지 삭제
      this.todoItems.splice(index, 1);
    },
  },
};
</script>

<style>
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
