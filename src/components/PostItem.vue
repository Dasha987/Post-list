<template>
  <div class="post">
    <div>
      <div>
        Номер: <span class="post-body">{{ postItem.id }}</span>
      </div>
      <div>
        Название: <span class="post-body">{{ postItem.title }}</span>
      </div>
      <div>
        Описание: <span class="post-body">{{ postItem.body }}</span>
      </div>
    </div>
    <div class="post__btns">
      <my-btn @click="$router.push(`/posts/${postItem.id}`)">Открыть</my-btn>
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
  border: 2px solid rgb(158, 158, 158);
  border-radius: 5px;
  box-shadow: 0px 4px 6px 1px rgba(219, 144, 240, 1);
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
}

.post-body {
  font-style: italic;
  text-align: justify;
}

.post__btns {
  display: flex;
  gap: 10px;
}
</style>
