<template>
  <div class="post">
    <div>
      <div>Название: {{ postItem.title }}</div>
      <div>Описание: {{ postItem.body }}</div>
    </div>
    <div>
      <!-- наверх прокинули определенный пост, с пометкой del -->
      <my-btn @click="$emit('del', postItem)">Удалить</my-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true, //св-во делает пропс обязательным
    },
  },
};
</script>

<style>
.post {
  padding: 10px;
  margin-top: 15px;
  border: 2px solid fuchsia;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
