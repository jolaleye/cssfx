<template>
  <div class="block">
    <div class="top">
      <span class="label">{{ this.label }}</span>
      <span class="copy" v-clipboard="() => code" v-clipboard:success="copy">
        COPY
        <transition name="copied">
          <svg v-show="copied" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </transition>
      </span>
    </div>

    <pre v-highlightjs><code>{{ this.code }}</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    code: String,
    copied: Boolean
  },
  methods: {
    copy() {
      this.$emit("copy");
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-flow: column nowrap;
}

.top {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5em;

  .label {
    font-weight: 600;
  }
}

.copy {
  font-size: 0.8em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 1.5em;
    margin-left: 0.5em;
    fill: none;
    stroke: #3cefff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: center;
  }
}

.copied-enter-active {
  animation: copied 0.5s ease-in-out forwards;
}

@keyframes copied {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

pre {
  flex: 1;
  padding: 1.5em;
  overflow: auto;
  background-color: hsl(237, 37%, 24%);

  code {
    font-family: "Roboto Mono", monospace;
    font-size: 0.9em;
  }
}
</style>
