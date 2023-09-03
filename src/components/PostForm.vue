<template>
  <form class="addPost" @submit.prevent>
    <h2 class="title">Создание поста</h2>
    <my-input
      v-myFocus
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <my-btn @click="addPost">Добавить</my-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit("add", this.post),
        (this.post = {
          title: "",
          body: "",
        });
    },
  },
};
</script>

<style>
.addPost {
  display: flex;
  flex-direction: column;
}

.title {
  margin-top: 0;
  align-self: center;
}
</style>
