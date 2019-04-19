<template>
<div></div>
</template>

<style scoped>
div {
  width: 3em;
  height: 4em;
  border: 3px solid transparent;
  border-top-color: #fc2f70;
  border-bottom-color: #fc2f70;
  border-radius: 50%;
  animation: stretch 1s linear alternate infinite, spin 1s ease infinite;
}

@keyframes stretch {
  to {
    width: 1em;
    height: 1em;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
