const addOneItem = (state, todoItem) => {
  // 저장하는 로직
  const obj = { completed: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
  // todoItem.item과 같은 것을 localStorage에서 삭제
  localStorage.removeItem(payload.todoItem.item);
  // splice : 배열의 index부터 1개 까지 삭제
  state.todoItems.splice(payload.index, 1);
};
const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed =
    !state.todoItems[payload.index].completed;
  // 로컬 스토리지의 데이터를 갱신
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
