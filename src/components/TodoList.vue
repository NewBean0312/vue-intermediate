<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fa-solid fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, index })"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fa-solid fa-trash"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    // 헬퍼는 인자를 선언 안해도 호출하는 단에서 인자가 있으면, 넘겨줌
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
  },
  computed: {
    ...mapGetters(["storedTodoItems"]),
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

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
