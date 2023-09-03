<template>
  <div class="conteiner">
    <h1>Страница постов</h1>
    <my-input
      v-model="searchPost"
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

    <post-list
      class="postList"
      :posts1="searchedPosts"
      @del="deletePost"
      v-if="postsLoading"
    />
    <div v-else>Идет загрузка...</div>

    <div v-myIntersection="loadMorePosts"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"; //Импорт компонента
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostForm, //Регистрация компонента
    PostList,
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
      this.posts.unshift(post);
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
    async loadMorePosts() {
      try {
        this.page += 1;
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
        this.posts = [...this.posts, ...responce.data];
      } catch (error) {
        alert("Произошла ошибка: " + error);
      }
    },
  },

  //хук жизненного цикла во vue
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
    searchedPosts() {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchPost.toLowerCase());
      });
    },
  },
};
</script>

<style>
.conteiner {
  margin: 0 10px 10px 10px;
}

h1 {
  text-align: center;
  font-weight: 300;
}

.posts__btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
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
