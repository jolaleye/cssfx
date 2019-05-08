<template>
<button>Shine</button>
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
  background-color: hsl(246, 41%, 21%);
  overflow: hidden;
}

button::after {
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translateX(-525%) rotate(35deg);
}

button:hover {
  cursor: pointer;
}

button:hover::after {
  transition: transform 0.45s ease-in-out;
  transform: translateX(200%) rotate(35deg);
}
</style>
