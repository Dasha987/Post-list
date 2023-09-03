<template>
  <div class="navigation">
    <div class="label" @click="$router.push('/')">Posts</div>
    <div class="navigation__btns">
      <my-btn @click="$router.push('/postsVueX')">Посты (VueX)</my-btn>
      <my-btn @click="$router.push('/posts')">Посты</my-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navigation {
  height: 50px;
  background: rgb(219, 144, 240);
  background: linear-gradient(
    90deg,
    rgba(219, 144, 240, 1) 0%,
    rgba(255, 146, 179, 1) 50%,
    rgba(255, 241, 110, 1) 100%
  );
  box-shadow: 2px 2px 4px grey;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  align-items: center;
  margin-bottom: 20px;
}
.label {
  font-size: 45px;
  cursor: pointer;
  font-weight: 600;
}
.navigation__btns button {
  margin: 0 0 0 10px;
}
</style>
