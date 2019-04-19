<template>
<div></div>
</template>

<style scoped>
div {
  border: 3px solid hsla(0, 0%, 100%, 0.1);
  border-top: 3px solid #3cefff;
  border-radius: 50%;
  width: 4.25em;
  height: 4.25em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
