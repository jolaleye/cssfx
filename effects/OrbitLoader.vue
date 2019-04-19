<template>
<div></div>
</template>

<style scoped>
div {
  display: flex;
  width: 4em;
  height: 4em;
  border: 3px solid transparent;
  border-top: 3px solid #3cefff;
  border-bottom: 3px solid #3cefff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

div:before {
  content: '';
  display: block;
  margin: auto;
  width: 1.5em;
  height: 1.5em;
  background-color: #fc2f70;
  border-radius: 50%;
  animation: pulse 1s alternate ease infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.6);
  }
  to {
    transform: scale(1);
  }
}
</style>
