<template>
<div class="dots">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</template>

<style scoped>
.dots {
  width: 3em;
  height: 3em;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}

.dots > div {
  width: 0.5em;
  height: 0.5em;
  background-color: #3cefff;
  border-radius: 50%;
  animation: fade 1.5s alternate ease-in-out infinite;
}

.dots > div:nth-of-type(2),
.dots > div:nth-of-type(4) {
  animation-delay: 0.25s;
}

.dots > div:nth-of-type(3),
.dots > div:nth-of-type(5),
.dots > div:nth-of-type(7) {
  animation-delay: 0.5s;
}

.dots > div:nth-of-type(6),
.dots > div:nth-of-type(8) {
  animation-delay: 0.75s;
}

.dots > div:nth-of-type(9) {
  animation-delay: 1s;
}

@keyframes fade {
  to {
    opacity: 0.2;
  }
}
</style>
