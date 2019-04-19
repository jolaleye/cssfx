<template>
<div class="loader">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
</div>
</template>

<style scoped>
.loader {
  position: relative;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 4em;
  height: 4em;
  margin-left: -2em;
  margin-top: -2em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.6em;
  height: 2.6em;
  margin-left: -1.3em;
  margin-top: -1.3em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 1.3em;
  height: 1.3em;
  margin-left: -0.65em;
  margin-top: -0.65em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
