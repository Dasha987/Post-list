import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import PostsPageVueX from "@/pages/PostsPageWithVueX";
import Post from "@/pages/Post";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/posts",
        component: PostsPage,
    },
    {
        path: "/postsVueX",
        component: PostsPageVueX,
    },
    {
        path: "/posts/:id",
        component: Post,
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
});

export default router;