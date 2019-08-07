<template>
  <button>
    Corner
  </button>
</template>

<style scoped>
button {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 7px 16px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: hsl(236, 32%, 26%);
  box-shadow: 5px 5px 0 -3px hsl(236, 32%, 26%), -5px -5px 0 -3px hsl(236, 32%, 26%), 0 0 0 1px #fc2f70;
  transition-duration: 1s;
}

button:hover {
  box-shadow: -5px 5px 0 -3px hsl(236, 32%, 26%), 5px -5px 0 -3px hsl(236, 32%, 26%), 0 0 0 1px #fc2f70;
  transition-duration: 1s
}
</style>