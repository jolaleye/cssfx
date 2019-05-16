<template>
  <div class="inspect" @click.self="$emit('close')">
    <div class="src">
      <CodeBlock
        class="html"
        label="HTML"
        :code="this.src.html"
        @copy="onHtmlCopy"
        :copied="htmlCopied"
      />
      <CodeBlock
        class="css"
        label="CSS"
        :code="this.src.css"
        @copy="onCssCopy"
        :copied="cssCopied"
      />
    </div>
  </div>
</template>

<script>
import CodeBlock from "~/components/CodeBlock";

export default {
  components: { CodeBlock },
  props: {
    src: Object
  },
  data() {
    return {
      htmlCopied: false,
      cssCopied: false
    };
  },
  methods: {
    onHtmlCopy() {
      this.htmlCopied = true;
      this.cssCopied = false;
    },
    onCssCopy() {
      this.cssCopied = true;
      this.htmlCopied = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.inspect {
  z-index: 999;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 2em;
}

.src {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: hsla(237, 37%, 24%, 0.8);
  padding: 1em;
  margin: auto;
}

.html {
  width: 100%;
  height: 20%;
  margin-bottom: 1em;
}

.css {
  width: 100%;
  height: 80%;
}

// Responsive styles

@media (min-width: "640px") {
  .src {
    max-width: 450px;
  }
}

@media (min-width: "768px") {
  .src {
    max-width: 500px;
    padding: 1.5em;
  }

  .html {
    margin-bottom: 1.5em;
  }
}

@media (min-width: "1024px") {
  .inspect {
    padding: 2.5em;
  }

  .src {
    max-width: 550px;
    padding: 2em;
  }

  .html {
    margin-bottom: 2em;
  }
}
</style>
