<template>
<span>Highlight</span>
</template>

<style scoped>
span {
  position: relative;
  z-index: 1;
}

span::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: hsla(341, 97%, 59%, 0.75);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

span:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}
</style>
