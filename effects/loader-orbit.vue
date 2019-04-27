<template>
<div></div>
</template>

<style scoped>
div {
  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-bottom-color: #3cefff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

div:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75em;
  height: 0.75em;
  border: 3px solid #3cefff;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
</style>
