<template>
<span>Pillars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #3cefff;
  transform-origin: center top;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
}

span::after {
  right: -8px;
}

span:hover::before, span:hover::after {
  transform-origin: center bottom;
  transform: scaleY(1);
}
</style>