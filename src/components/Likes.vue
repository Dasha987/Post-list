<template>
  <div class="likes">
    <div class="btnsLikes">
      <button class="btnLikes" @click="addlike">Нравится</button>
      <button class="btnLikes" @click="adddislike">Не нравится</button>
    </div>
    <div class="countLikes">
      <div>Количество лайков: {{ likes }}</div>
      <div>Количество дезлайков: {{ dislikes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addlike() {
      this.likes += 1;
    },
    adddislike() {
      this.dislikes += 1;
    },
  },
};
</script>

<style>
.likes {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.btnLikes {
  padding: 10px;
  margin: 15px 15px 15px 0;
  border: 2px solid green;
  background: #fff;
}

.countLikes,
.btnsLikes {
  align-self: center;
}
</style>
