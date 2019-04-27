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
  background-color: #fc2f70;
  transform: scaleY(0);
  transition: transform 0.5s ease;
}

span::before {
  left: -8px;
  transform-origin: center top;
}

span:hover::before {
  transform-origin: center bottom;
  transform: scaleY(1);
}

span::after {
  right: -8px;
  transform-origin: center bottom;
}

span:hover::after {
  transform-origin: center top;
  transform: scaleY(1);
}
</style>