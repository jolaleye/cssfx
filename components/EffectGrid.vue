<template>
  <div class="grid">
    <BaseEffect v-for="effectName in Object.keys(this.effects)" v-bind:key="effectName">
      <component v-bind:is="effectName"></component>
    </BaseEffect>
  </div>
</template>

<script>
import BaseEffect from "~/components/BaseEffect";
import compileEffects from "~/assets/compileEffects.js";

const { effects, components } = compileEffects();

export default {
  components: { BaseEffect, ...components },
  data() {
    return {
      effects
    };
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0 auto;
  padding: 2em 1.25em;
}

@media (min-width: "640px") {
  .grid {
    max-width: 640px;
    padding: 2em 1.75em;
  }
}

@media (min-width: "768px") {
  .grid {
    max-width: 768px;
  }
}

@media (min-width: "1024px") {
  .grid {
    max-width: 1024px;
    padding: 2em;
  }
}
</style>
