<template>
  <div class="conteiner">
    <h1>Страница постов</h1>
    <my-input
      :model-value="searchPost"
      @update:model-value="setSearchPost"
      class="search-input"
      placeholder="Поиск..."
      v-myFocus
    />

    <div class="posts__btns">
      <my-btn @click="dialogOpen">Добавить пост</my-btn>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @add="addPost" />
    </my-dialog>

    <post-list :posts1="searchedPosts" @del="deletePost" v-if="postsLoading" />
    <div v-else>Идет загрузка...</div>
    <div v-myIntersection="loadMorePosts"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"; //Импорт компонента
import PostList from "@/components/PostList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostForm, //Регистрация компонента
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
      selectedSort: "",
    };
  },

  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
    ...mapMutations({
      setPage: "post/setPage",
      setSearchPost: "post/setSearchPost",
      setPosts: "post/setPosts",
    }),
    addPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    deletePost(post) {
      console.log(0);
      this.posts = this.posts.filter((p) => p.id != post.id);
    },
    dialogOpen() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  // Сортировка постов по названию и описанию
  watch: {
    selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue]);
      });
    },
  },

  // Поиск постов по названию
  computed: {
    ...mapGetters({
      searchedPosts: "post/searchedPosts",
    }),
    ...mapState({
      posts: (state) => state.post.posts,
      postsLoading: (state) => state.post.postsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchPost: (state) => state.post.searchPost,
      page: (state) => state.post.page, //начальный номер страницы
      totalPage: (state) => state.post.totalPage, //количество страниц
      limitPost: (state) => state.post.limitPost, //количество постов на странице
    }),
  },
};
</script>

<style>
.posts__btns {
  display: flex;
  justify-content: space-between;
}

.search-input {
  width: calc(100% - 24px);
}

.page__wrapper {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.page {
  border: 1px solid fuchsia;
  border-radius: 5px;
  padding: 7px;
  cursor: pointer;
}

.active-page {
  background: fuchsia;
}
</style>
