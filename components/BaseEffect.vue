<template>
  <div class="box" ref="box" v-on:click="inspect">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["type"],
  methods: {
    inspect(e) {
      const self = this.$refs.box === e.target;
      // don't accept clicks on an input
      if (this.type === "input" && !self) return;
      this.$emit("inspect");
    }
  }
};
</script>


<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: hsla(246, 41%, 23%, 0.4);
    cursor: pointer;
  }
}
</style>
