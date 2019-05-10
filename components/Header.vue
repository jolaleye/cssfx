<template>
  <header>
    <h1>Beautifully simple click-to-copy CSS effects</h1>
    <p>A carefully crafted collection designed with a focus on fluidity, simplicity, and ease of use. Powered by CSS with minimal markup. Completely open source and MIT licensed.</p>
    <Carbon/>
  </header>
</template>

<script>
import Carbon from "~/components/Carbon";

export default {
  components: { Carbon }
};
</script>


<style lang="scss" scoped>
header {
  padding: 1.5em 1.25em 0.75em 1.25em;
  text-align: center;
}

h1 {
  font-size: 1.5em;
  margin-bottom: 1em;
  letter-spacing: 0.03em;
}

p {
  margin-bottom: 2em;
}

@media (min-width: "640px") {
  header {
    max-width: 640px;
    margin: 0 auto;
    padding: 1.75em 3em 0.75em 3em;
  }
}

@media (min-width: "768px") {
  header {
    max-width: 768px;
    padding: 2em 3em 0.75em 3em;
  }
}

@media (min-width: "1024px") {
  header {
    max-width: 850px;
    padding: 3em 3em 0.75em 3em;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0.75em;
  }

  p {
    font-size: 1.1em;
  }
}
</style>

