<template>
  <div ref="carbonScript"></div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function() {
      const script = document.createElement("script");
      script.setAttribute("id", "_carbonads_js");
      script.setAttribute("type", "text/javascript");
      script.setAttribute(
        "src",
        "//cdn.carbonads.com/carbon.js?serve=CK7DVKQN&placement=cssfxdev"
      );
      this.$refs.carbonScript.appendChild(script);
    });
  }
};
</script>

<style scoped>
div {
  margin-bottom: 2em;
}
</style>

<style>
#carbonads {
  display: block;
  overflow: hidden;
  padding: 10px;
  margin: 0 auto;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.05);
  border-radius: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  line-height: 1.5;
  max-width: 300px;
  font-size: 12px;
  background-color: hsl(237, 37%, 24%);
  transform: scale(0.9);
}

#carbonads a {
  color: inherit;
  text-decoration: none;
}

#carbonads span {
  position: relative;
  display: block;
  overflow: hidden;
}

.carbon-img {
  float: left;
  margin-right: 1em;
}

.carbon-img img {
  display: block;
}

.carbon-text {
  display: block;
  float: left;
  max-width: calc(100% - 130px - 1em);
  text-align: left;
  color: #637381;
}

.carbon-poweredby {
  position: absolute;
  left: 142px;
  bottom: 0;
  display: block;
  font-size: 8px;
  color: #c5cdd0;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 1px;
}
</style>
