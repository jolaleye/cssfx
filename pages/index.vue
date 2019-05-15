<template>
  <div>
    <div class="color"></div>
    <Navbar/>
    <Header/>
    <CarbonAd/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Header from "~/components/Header";
import CarbonAd from "~/components/CarbonAd";

export default {
  components: { Navbar, Header, CarbonAd }
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

