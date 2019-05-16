<template>
<span>Underline</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3cefff;
  transform-origin: bottom left;
  transform: scaleX(1);
  transition: transform 0.3s ease-in-out;
}

span:hover::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}
</style>

Thank you @emilkowalski :) https://github.com/emilkowalski
