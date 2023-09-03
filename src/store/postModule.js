import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        postsLoading: true,
        searchPost: "",
        page: 1, //начальный номер страницы
        totalPage: 0, //количество страниц
        limitPost: 10, //количество постов на странице
    }),

    getters: {
        searchedPosts(state) {
            return state.posts.filter((post) => {
                return post.title.toLowerCase().includes(state.searchPost.toLowerCase());
            });
        },
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.postsLoading = bool;
        },
        setSearchPost(state, searchPost) {
            state.searchPost = searchPost;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPage(state, totalPage) {
            state.totalPage = totalPage;
        },
    },

    actions: {

        async fetchPosts({ state, commit }) {
            try {
                commit('setLoading', false);
                const responce = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limitPost: state.limitPost,
                        },
                    }
                );
                commit('setTotalPage', Math.ceil(responce.headers["x-total-count"] / state.limitPost));
                commit('setPosts', responce.data);
            } catch (error) {
                console.log(error)
                alert("Произошла ошибка: " + error);
            } finally {
                commit('setLoading', true);
            }
        },

        async loadMorePosts({ state, commit }) {
            try {
                commit('setPage', state.page + 1)
                const responce = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: state.page,
                            _limitPost: state.limitPost,
                        },
                    }
                );
                commit('setTotalPage', Math.ceil(responce.headers["x-total-count"] / state.limitPost)
                );
                commit('setPosts', [...state.posts, ...responce.data]);
            } catch (error) {
                console.log(error)
                alert("Произошла ошибка: " + error);
            }
        },
    },
    namespaced: true
}