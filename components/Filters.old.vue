<template>
  <div>
    <label>
      <input v-model="filters.button" type="checkbox">
      Buttons
    </label>
    <label>
      <input v-model="filters.hover" type="checkbox">
      Hover
    </label>
    <label>
      <input v-model="filters.input" type="checkbox">
      Inputs
    </label>
    <label>
      <input v-model="filters.loader" type="checkbox">
      Loaders
    </label>
  </div>
</template>

<script>
export default {
  props: ["filters"]
};
</script>


<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

label {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.5em 1em;
  margin-left: 0.5em;
  font-size: 0.9em;
  color: white;
  opacity: 0.7;
  transition: opacity 0.25s ease-in-out;

  input {
    margin-right: 0.5em;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
}
</style>
