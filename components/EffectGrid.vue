<template>
  <div>
    <div class="grid">
      <BaseEffect
        v-for="effectName in Object.keys(this.effects)"
        v-bind:key="effectName"
        v-on:inspect="inspect(effectName)"
      >
        <component v-bind:is="effectName"></component>
      </BaseEffect>
    </div>
    <InspectModal v-if="inspectOpen" v-on:close="close" v-bind:src="inspectSrc"/>
  </div>
</template>

<script>
import BaseEffect from "~/components/BaseEffect";
import InspectModal from "~/components/InspectModal";
import compileEffects from "~/assets/compileEffects.js";

const { effects, components } = compileEffects();

export default {
  components: { BaseEffect, InspectModal, ...components },
  data() {
    return {
      effects,
      inspectOpen: false,
      inspectSrc: {}
    };
  },
  methods: {
    inspect(effectName) {
      this.inspectOpen = true;
      this.inspectSrc = this.effects[effectName];
    },
    close() {
      this.inspectOpen = false;
      this.inspectSrc = {};
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 2em;
  grid-auto-rows: 6em;
  margin: 0 auto;
  padding: 2em 1em;
}

@media (min-width: "640px") {
  .grid {
    max-width: 640px;
    padding: 2em 1.5em;
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
    padding: 2em;
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: "1280px") {
  .grid {
    max-width: 1280px;
    padding: 2em 3em;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
