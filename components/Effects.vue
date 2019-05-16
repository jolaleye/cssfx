<template>
  <transition-group class="grid" tag="div" name="shuffle">
    <Effect
      v-for="effect in Object.values(this.effects)"
      :key="effect.name"
      :type="effect.type"
      @inspect="$emit('inspect', effect.name)"
    >
      <component :is="effect.name"/>
    </Effect>
  </transition-group>
</template>

<script>
import Effect from "~/components/Effect";
import { components } from "~/assets/effects.js";

export default {
  components: { Effect, ...components },
  props: {
    effects: Object
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 8em;
  grid-gap: 1em;
  padding: 0 1em 5em 1em;
  margin: 0 auto;
}

.shuffle-move {
  transition: transform 0.75s ease-out;
}

// Responsive styles

@media (min-width: "640px") {
  .grid {
    max-width: 640px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5em;
    padding: 0 1em 5em 1em;
  }
}

@media (min-width: "768px") {
  .grid {
    max-width: 768px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
    padding: 0 2em 5em 2em;
  }
}

@media (min-width: "1024px") {
  .grid {
    max-width: 1024px;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 2.5em 5em 2.5em;
  }
}

@media (min-width: "1280px") {
  .grid {
    max-width: 1280px;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
