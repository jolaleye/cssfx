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
  animation: spin-stretch 2s ease infinite;
}

@keyframes spin-stretch {
  50% {
    transform: rotate(360deg) scale(0.33, 0.25);
    border-width: 8px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
}
</style>
