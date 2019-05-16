<template>
  <div class="wrapper" :class="{ open }">
    <div class="tab" :class="{ open }" @click="toggleControls">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"
        ></path>
      </svg>
    </div>

    <div class="controls">
      <svg
        class="shuffle"
        @click="$emit('shuffle')"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z"
        ></path>
      </svg>

      <svg
        class="reset"
        @click="$emit('reset')"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"
        ></path>
      </svg>

      <EffectFilter label="Buttons" v-model="filters.button"/>
      <EffectFilter label="Inputs" v-model="filters.input"/>
      <EffectFilter label="Loaders" v-model="filters.loader"/>
      <EffectFilter label="Text" v-model="filters.text"/>
    </div>
  </div>
</template>

<script>
import EffectFilter from "~/components/EffectFilter";

export default {
  components: { EffectFilter },
  data() {
    return {
      open: false,
      filters: {
        button: true,
        input: true,
        loader: true,
        text: true
      }
    };
  },
  methods: {
    toggleControls() {
      this.open = !this.open;
    },
    updateFilters() {
      this.$emit("filter", this.filters);
    }
  },
  watch: {
    "filters.button": "updateFilters",
    "filters.input": "updateFilters",
    "filters.loader": "updateFilters",
    "filters.text": "updateFilters"
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 99;
  width: 90%;
  position: fixed;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -2em);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transition: transform 0.25s ease-in-out;

  &.open {
    transform: translate(-50%, calc(-100% - 1em));
  }
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  background-color: hsl(237, 37%, 24%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  &.open svg {
    transform: rotate(180deg);
  }

  svg {
    transition: transform 0.25s ease-in-out;
    fill: hsla(0, 0%, 100%, 0.5);
    width: 2em;
  }
}

.controls {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 1em 1.5em;
  background-color: hsl(237, 37%, 24%);
  border-radius: 10px;

  svg {
    fill: hsla(0, 0%, 100%, 0.5);
    width: 1.75em;

    &:hover {
      cursor: pointer;
    }
  }
}

.shuffle,
.reset {
  margin: 0 0.5em;
}

.reset {
  margin-right: 1.5em;
}
</style>
