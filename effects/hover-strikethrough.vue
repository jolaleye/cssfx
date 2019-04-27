<template>
<span>Strikethrough</span>
</template>

<style scoped>
span {
  position: relative;
}

span::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #fc2f70;
  transform-origin: center right;
  transform: scaleX(0) translateY(-50%);
  transition: transform 0.3s ease;
}

span:hover {
  color: hsla(0, 0%, 100%, 0.8);
}

span:hover::before {
  transform-origin: center left;
  transform: scaleX(1) translateY(-50%);
}
</style>