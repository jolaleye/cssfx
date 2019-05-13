<template>
  <div class="controls">
    <div class="buttons">
      <button class="shuffle" v-on:click="$emit('shuffle')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M405.9 288.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2h-75.5l-124-155-.1-.1c-2.6-3.1-6.7-5-10.8-5H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h107.4l52.5 66-52.5 66H78c-7.7 0-14 6.3-14 14s6.3 14 14 14h114c4.1 0 8-1.8 10.7-5l.1-.1 53.2-66.8 53.2 66.8.1.1c2.7 3.2 6.6 5 10.7 5h84.4l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l33.6-33.4c4.2-4.1 6.5-9.6 6.5-15.5s-2.3-11.4-6.5-15.5l-35.6-35.5z"
          ></path>
          <path
            d="M279.4 235.4c1.1 1.4 2.8 2.1 4.6 2.1h.1c1.8 0 3.5-.8 4.6-2.2l37.9-47.3h75.8l-16.3 16.2c-2.7 2.6-4.1 6.1-4.1 9.9 0 3.7 1.5 7.2 4.1 9.9 2.6 2.6 6.2 4.1 9.9 4.1s7.2-1.4 9.9-4.1l35.6-35.4c4.2-4.1 6.5-9.7 6.5-15.5 0-5.9-2.3-11.4-6.5-15.5l-33.6-33.4c-2.6-2.6-6.2-4.1-9.9-4.1s-7.2 1.4-9.9 4.1c-2.7 2.6-4.1 6.2-4.1 9.9s1.5 7.2 4.1 9.9l16.3 16.2H320c-4.1 0-8 1.8-10.7 5l-.1.1-40.3 50.2c-1.8 2.2-1.8 5.4.1 7.6l10.4 12.3z"
          ></path>
        </svg>
        Shuffle
      </button>

      <button class="reset" v-on:click="reset">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M433 288.8c-7.7 0-14.3 5.9-14.9 13.6-6.9 83.1-76.8 147.9-161.8 147.9-89.5 0-162.4-72.4-162.4-161.4 0-87.6 70.6-159.2 158.2-161.4 2.3-.1 4.1 1.7 4.1 4v50.3c0 12.6 13.9 20.2 24.6 13.5L377 128c10-6.3 10-20.8 0-27.1l-96.1-66.4c-10.7-6.7-24.6.9-24.6 13.5v45.7c0 2.2-1.7 4-3.9 4C148 99.8 64 184.6 64 288.9 64 394.5 150.1 480 256.3 480c100.8 0 183.4-76.7 191.6-175.1.8-8.7-6.2-16.1-14.9-16.1z"
          ></path>
        </svg>
        Reset
      </button>
    </div>

    <Filters v-bind:filters="filters"/>
  </div>
</template>

<script>
import Filters from "~/components/Filters.old";

export default {
  components: { Filters },
  data() {
    return {
      filters: {
        button: true,
        hover: true,
        input: true,
        loader: true
      }
    };
  },
  methods: {
    reset() {
      this.filters.button = true;
      this.filters.hover = true;
      this.filters.input = true;
      this.filters.loader = true;
      this.$emit("reset");
    },
    updateFilters() {
      this.$emit("filter", {
        button: this.filters.button,
        hover: this.filters.hover,
        input: this.filters.input,
        loader: this.filters.loader
      });
    }
  },
  watch: {
    "filters.button": "updateFilters",
    "filters.hover": "updateFilters",
    "filters.input": "updateFilters",
    "filters.loader": "updateFilters"
  }
};
</script>


<style lang="scss" scoped>
.controls {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
}

// shuffle & reset buttons
.buttons {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.buttons button {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 0.9em;
  font-family: inherit;
  padding: 0.5em 1em;
  transition: color 0.25s ease-in-out;

  svg {
    display: inline-block;
    width: 1.5em;
    fill: hsla(0, 0%, 100%, 0.7);
    margin-right: 0.5em;
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: white;

    svg {
      fill: white;
    }
  }
}

.reset {
  margin-left: 2em;
}

@media (min-width: "768px") {
  .controls {
    justify-content: space-between;
    padding: 0 2em;
  }
}
</style>
