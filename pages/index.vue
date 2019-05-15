<template>
  <div>
    <div class="color"></div>
    <Navbar/>
    <Header/>
    <CarbonAd/>
    <Effects :effects="effects"/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Header from "~/components/Header";
import CarbonAd from "~/components/CarbonAd";
import Effects from "~/components/Effects";
import { effects } from "~/assets/effects.js";

export default {
  components: { Navbar, Header, CarbonAd, Effects },
  data() {
    return { effects };
  }
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

