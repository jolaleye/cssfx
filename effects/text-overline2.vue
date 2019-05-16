<template>
<span>Overline</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  width: 100%;
  height: 2px;
  opacity: 0;
  background-color: #fc2f70;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: all 0.3s ease-in-out;
}

span:hover::before {
  transform: translate(-50%, 0) scaleX(1);
  opacity: 1;
}
</style>
