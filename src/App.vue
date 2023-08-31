<template>
  <div class="app">
    <h1>Страница постов</h1>
    <my-input
      v-model="searchPost"
      class="search-input"
      placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-btn @click="dialogOpen">Добавить пост</my-btn>

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @add="addPost" />
    </my-dialog>

    <post-list :posts1="searchedPosts" @del="deletePost" v-if="postsLoading" />
    <div v-else>Идет загрузка...</div>

    <div class="page__wrapper">
      <!-- ////:class="{ 'active-page': page === pageNumber }" -->
      <!-- если номер страницы (page) равен номеру страницы из цикла (pageNumber), -->
      <!-- тогда применяются стили класса active-page -->
      <div
        class="page"
        :key="pageNumber"
        v-for="pageNumber in totalPage"
        :class="{ 'active-page': page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
    <likes />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue"; //Импорт компонента
import PostList from "./components/PostList.vue";
import Likes from "./components/Likes.vue";
import axios from "axios";

export default {
  components: {
    PostForm, //Регистрация компонента
    PostList,
    Likes,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      postsLoading: true,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
      searchPost: "",
      page: 1, //начальный номер страницы
      totalPage: 0, //количество страниц
      limitPost: 10, //количество постов на странице
    };
  },

  methods: {
    addPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id != post.id);
    },
    dialogOpen() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.postsLoading = false;
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limitPost: this.limitPost,
            },
          }
        );
        this.totalPage = Math.ceil(
          responce.headers["x-total-count"] / this.limitPost
        );
        this.posts = responce.data;
      } catch (error) {
        alert("Произошла ошибка: " + error);
      } finally {
        this.postsLoading = true;
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
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
    page() {
      this.fetchPosts();
    },
  },

  // Поиск постов по названию
  computed: {
    searchedPosts() {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchPost.toLowerCase());
      });
    },
  },
};
</script>

<style>
.app {
  box-sizing: border-box;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

.search-input {
  width: calc(100% - 24px);
  margin-bottom: 15px;
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
