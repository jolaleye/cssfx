<template>
  <div>
    <div class="color"></div>
    <Navbar/>
    <Header/>
    <CarbonAd/>
    <Effects :effects="effects" @inspect="inspect"/>
    <Inspect v-if="inspecting" :src="inspectSrc" @close="closeInspect"/>
    <Controls @shuffle="shuffle" @reset="reset"/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Header from "~/components/Header";
import CarbonAd from "~/components/CarbonAd";
import Effects from "~/components/Effects";
import Inspect from "~/components/Inspect";
import Controls from "~/components/Controls";
import { effects } from "~/assets/effects.js";
import { shuffleEffects } from "~/assets/utils.js";

export default {
  components: { Navbar, Header, CarbonAd, Effects, Inspect, Controls },
  data() {
    return { effects, inspecting: false, inspectSrc: {} };
  },
  methods: {
    inspect(name) {
      this.inspecting = true;
      this.inspectSrc.html = this.effects[name].html;
      this.inspectSrc.css = this.effects[name].css;
    },
    closeInspect() {
      this.inspecting = false;
      this.inspectSrc = {};
    },
    shuffle() {
      this.effects = shuffleEffects(this.effects);
    },
    reset() {
      this.effects = effects;
    }
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

