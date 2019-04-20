<template>
<button>Button</button>
</template>

<style scoped>
button {
  font-size: inherit;
  font-family: inherit;
  outline: none;
  border: none;
  background-color: hsl(246, 45%, 15%);
  padding: 0.5em 1em;
  color: white;
  transform-origin: center bottom;
  transition: all 0.3s ease-in-out;
}

button:hover {
  cursor: pointer;
  transform: scale(1.05);
  box-shadow: 0 5px 10px hsla(0, 0%, 0%, 0.25);
}
</style>
