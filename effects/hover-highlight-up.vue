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
  background-color: #fc2f70;
  transform-origin: bottom center;
  transform: scaleY(0.1);
  transition: all 0.1s ease-in-out;
}

span:hover::before {
  transform: scaleY(1);
  background-color: hsla(341, 97%, 59%, 0.75);
}
</style>
