<template>
  <div v-if="posts1.length > 0">
    <transition-group name="posts-list">
      <post-item
        @del="$emit('del', post)"
        :key="post.id"
        :postItem="post"
        v-for:="post in posts1"
      />
    </transition-group>
  </div>
  <h2 v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from "./PostItem";
export default {
  components: {
    PostItem,
  },
  props: {
    posts1: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.posts-list-item {
  display: inline-block;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.6s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
.posts-list-move {
  transition: transform 0.6s ease;
}
</style>
