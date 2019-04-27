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
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: #3cefff;
  transform-origin: center;
  transform: translateX(-50%) scaleX(0);
  transition: transform 0.4s ease;
}

span::before {
  top: 0;
}

span::after {
  bottom: 0;
}

span:hover::before, span:hover::after {
  transform: translateX(-50%) scaleX(1);
}
</style>