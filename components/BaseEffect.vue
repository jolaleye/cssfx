<template>
  <div class="box" v-on:click.self="$emit('inspect')">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: hsla(246, 45%, 15%, 0.2);
    cursor: pointer;
  }
}
</style>
