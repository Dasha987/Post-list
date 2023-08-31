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
  margin-top: 15px;
  border: 2px solid fuchsia;
  background: #fff;
  align-self: flex-end;
}
</style>
