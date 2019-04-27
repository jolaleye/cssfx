<template>
  <div class="container">
    <Controls v-on:shuffle="shuffle" v-on:reset="reset"/>
    <transition-group class="grid" name="shuffle" tag="div">
      <BaseEffect
        v-for="effectName in Object.keys(this.effects)"
        v-bind:key="effectName"
        v-on:inspect="$emit('inspect', effectName)"
      >
        <component v-bind:is="effectName"></component>
      </BaseEffect>
    </transition-group>
  </div>
</template>

<script>
import BaseEffect from "~/components/BaseEffect";
import Controls from "~/components/Controls";
import { effects, components, shuffleEffects } from "~/assets/effects.js";

export default {
  components: { BaseEffect, Controls, ...components },
  data() {
    return {
      effects
    };
  },
  methods: {
    shuffle() {
      this.effects = shuffleEffects();
    },
    reset() {
      this.effects = effects;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 5em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 2em;
  grid-auto-rows: 6em;
  margin: 0 auto;
  padding: 0 1em 0 1em;
}

.shuffle-move {
  transition: transform 0.75s ease-out;
}

@media (min-width: "640px") {
  .grid {
    max-width: 640px;
    padding: 0 1.5em 0 1.5em;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 8em;
    grid-column-gap: 1.5em;
    grid-row-gap: 3em;
  }
}

@media (min-width: "768px") {
  .grid {
    max-width: 768px;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: "1024px") {
  .grid {
    max-width: 1024px;
    padding: 0 2em 0 2em;
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: "1280px") {
  .grid {
    max-width: 1280px;
    padding: 0 3em 0 3em;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
