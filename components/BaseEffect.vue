<template>
  <div class="outer">
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outer {
  padding: 0.75em;
  width: 50%;

  &:hover {
    background-color: hsla(246, 45%, 15%, 0.5);
    cursor: pointer;
  }
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: "640px") {
  .outer {
    width: 33.33%;
    padding: 1em;
  }
}

@media (min-width: "768px") {
  .outer {
    width: 25%;
  }
}

@media (min-width: "1024px") {
  .outer {
    width: 20%;
    padding: 1em;
  }
}
</style>

