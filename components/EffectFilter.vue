<template>
  <label>
    <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">

    <svg class="unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M405.3 106.7v298.7H106.7V106.7h298.6m0-42.7H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V106.7C448 83.2 428.8 64 405.3 64z"
      ></path>
    </svg>
    <svg class="checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"
      ></path>
    </svg>
    {{ this.label }}
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    label: String,
    checked: Boolean
  }
};
</script>

<style lang="scss" scoped>
label {
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  color: hsla(0, 0%, 100%, 0.5);
  margin: 0 0.5em;

  &:hover {
    cursor: pointer;
  }
}

input {
  opacity: 0;
  width: 0;

  & ~ .checked {
    display: none;
  }
  &:checked ~ .checked {
    display: block;
  }
  &:checked ~ .unchecked {
    display: none;
  }
}

svg {
  fill: hsla(0, 0%, 100%, 0.5);
  width: 1.5em;
  margin-right: 0.25em;
}
</style>
