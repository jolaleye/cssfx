<template>
  <nav>
    <!-- logo -->
    <img class="logo" src="~/assets/logo.svg" alt="cssfx">
    <div class="links">
      <!-- github -->
      <a href="https://github.com/jolaleye/cssfx" target="_blank">
        <svg class="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
          ></path>
        </svg>
      </a>
      <!-- twitter -->
      <a
        href="https://twitter.com/intent/tweet?url=https://cssfx.dev&text=cssfx%20-%20A%20collection%20of%20beautifully%20simple%20click-to-copy%20CSS%20effects."
        target="_blank"
      >
        <svg class="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"
          ></path>
        </svg>
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 1.5em 1.25em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 7em;
}

.links {
  margin-top: 0.75em;
}

.github,
.twitter {
  fill: white;
  width: 2em;
  padding: 0.25em;
  opacity: 0.75;

  transition: opacity 0.2s linear;
  &:hover {
    opacity: 1;
  }
}

.twitter {
  margin-left: 0.5em;
}

@media (min-width: "640px") {
  nav {
    max-width: 640px;
    margin: 0 auto;
    padding: 1.5em;
  }
}

@media (min-width: "768px") {
  nav {
    max-width: 768px;
    padding: 1.5em 2em;
  }

  .logo {
    width: 8em;
  }

  .github,
  .twitter {
    width: 2.25em;
  }

  .twitter {
    margin-left: 1em;
  }
}

@media (min-width: "1024px") {
  nav {
    max-width: 1024px;
    padding: 2.5em;
  }

  .logo {
    width: 9em;
  }
}

@media (min-width: "1280px") {
  nav {
    max-width: 1280px;
  }
}
</style>

