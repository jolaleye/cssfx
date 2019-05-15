<template>
  <header>
    <h1>Beautifully simple click-to-copy CSS effects</h1>
    <p>A carefully crafted collection designed with a focus on fluidity, simplicity, and ease of use. Powered by CSS with minimal markup. Completely open source and MIT licensed.</p>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  padding: 0 1.5em;
  margin: 0 auto 2em auto;
}

h1 {
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.2em;
  font-weight: 300;
}

// Responsive styles

@media (min-width: "640px") {
  header {
    max-width: 640px;
    padding: 0 4em;
  }
}

@media (min-width: "768px") {
  header {
    max-width: 768px;
    padding: 0 6em;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }
}

@media (min-width: "1024px") {
  header {
    max-width: 1024px;
    padding: 0 10em;
  }
}

@media (min-width: "1280px") {
  header {
    max-width: 1280px;
    padding: 0 12em;
  }
}
</style>
