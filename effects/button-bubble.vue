<template>
<button>Button</button>
</template>

<style scoped>
button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(246, 45%, 15%);
  overflow: hidden;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s ease-in-out;
}

button:hover {
  cursor: pointer;
}

button:hover::before {
  transform: translate(-50%, -50%) scale(8);
}
</style>
