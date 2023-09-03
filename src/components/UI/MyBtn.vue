<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-btn",
};
</script>

<style>
.btn {
  padding: 10px;
  border: 1px solid rgb(158, 158, 158);
  border-radius: 5px;
  background: white;
  align-self: flex-end;
  cursor: pointer;
}
</style>
