<template>
  <div class="container">
    <Controls v-on:shuffle="shuffle" v-on:reset="reset" v-on:filter="filter"/>
    <transition-group class="grid" name="shuffle" tag="div">
      <BaseEffect
        v-for="effect in Object.entries(this.effects)"
        v-bind:key="effect[0]"
        v-on:inspect="$emit('inspect', effect[0])"
        v-bind:type="effect[1].type"
      >
        <component v-bind:is="effect[0]"></component>
      </BaseEffect>
    </transition-group>
  </div>
</template>

<script>
import BaseEffect from "~/components/BaseEffect.old";
import Controls from "~/components/Controls.old";
import { effects, components } from "~/assets/effects.js";
import { shuffleEffects } from "~/assets/utils.js";

export default {
  components: { BaseEffect, Controls, ...components },
  data() {
    return {
      effects
    };
  },
  methods: {
    shuffle() {
      this.effects = shuffleEffects(this.effects);
    },
    reset() {
      this.effects = effects;
    },
    filter(filters) {
      const filtered = Object.entries(effects).filter(
        ([name, data]) => filters[data.type]
      );
      this.effects = Object.fromEntries(filtered);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 1em 5em 1em;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 2em;
  grid-auto-rows: 6em;
  margin: 0 auto;
}

.shuffle-move {
  transition: transform 0.75s ease-out;
}

@media (min-width: "640px") {
  .container {
    max-width: 640px;
    padding: 0 1.5em 5em 1.5em;
  }

  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 8em;
    grid-column-gap: 1.5em;
    grid-row-gap: 3em;
  }
}

@media (min-width: "768px") {
  .container {
    max-width: 768px;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: "1024px") {
  .container {
    max-width: 1024px;
    padding: 0 2em 5em 2em;
  }

  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: "1280px") {
  .container {
    max-width: 1280px;
    padding: 0 3em 5em 3em;
  }

  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
