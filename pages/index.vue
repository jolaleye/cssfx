<template>
  <div>
    <div class="color"></div>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  components: { Navbar }
};
</script>

<style scoped>
.color {
  width: 100vw;
  height: 0.5em;
  background: linear-gradient(
    to right,
    hsl(185, 100%, 55%),
    hsl(341, 100%, 55%)
  );
}
</style>

