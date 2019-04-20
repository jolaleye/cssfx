<template>
<span>Hover</span>
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
  top: 85%;
  left: -0.25em;
  right: -0.25em;
  bottom: 0;
  background-color: hsla(341, 97%, 59%, 0.75);
  transition: top 0.1s ease-in-out;
}

span:hover::before {
  top: 0;
}
</style>
