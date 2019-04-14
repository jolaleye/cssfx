<template>
  <div class="container" v-on:click.self="$emit('close')">
    <div class="modal">
      <div class="html">
        <p class="bar">
          <span class="label">HTML</span>
          <span class="copy">COPY</span>
        </p>
        <pre><code>{{ src.html }}</code></pre>
      </div>

      <div class="css">
        <p class="bar">
          <span class="label">CSS</span>
          <span class="copy">COPY</span>
        </p>
        <pre><code>{{ src.css }}</code></pre>
      </div>
    </div>
    <svg
      v-on:click="$emit('close')"
      class="modal__close"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["src"]
};
</script>


<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.5);
  padding: 4em 0;
  display: flex;
}

.modal__close {
  position: absolute;
  top: 2em;
  right: 2em;
  width: 1.75em;
  fill: none;
  stroke: white;
  opacity: 0.75;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  transition: opacity 0.1s linear;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
}

.modal {
  margin: auto;
  padding: 2em 3em;
  background-color: hsl(246, 45%, 9%);
  max-width: 90%;
  display: flex;
  flex-flow: column nowrap;
}

pre {
  background-color: hsla(246, 45%, 7%, 0.9);
  padding: 2em;
  overflow: scroll;
}

code {
  font-family: "Source Code Pro", monospace;
  font-size: 0.9em;
  line-height: 1.4;
}

.html {
  margin-bottom: 2em;
}

.bar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
}

.copy {
  font-size: 0.8em;

  &:hover {
    cursor: pointer;
  }
}
</style>
