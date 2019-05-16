<template>
<span>Bars</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before, span::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span::before {
  top: 0;
}

span::after {
  bottom: 0;
}

span:hover::before, span:hover::after {
  transform-origin: center left;
  transform: scaleX(1);
}
</style>