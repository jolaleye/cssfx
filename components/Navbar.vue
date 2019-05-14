<template>
  <nav>
    <img class="logo" src="~/assets/logo.svg" alt="cssfx">

    <div class="social">
      <a href="https://github.com/jolaleye/cssfx" target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
          ></path>
        </svg>
      </a>

      <a
        href="https://twitter.com/intent/tweet?url=https://cssfx.dev&text=CSSFX%20-%20A%20collection%20of%20beautifully%20simple%20click-to-copy%20CSS%20effects."
        target="_blank"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
          ></path>
        </svg>
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2em 1.5em;
  margin: 0 auto;
}

.logo {
  width: 8em;
}

.social {
  width: 6em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    opacity: 0.5;
    transition: opacity 0.25s;

    svg {
      width: 1.5em;
      fill: white;
    }

    &:hover {
      opacity: 1;
    }
  }
}

// Responsive styles

@media (min-width: "640px") {
  nav {
    max-width: 640px;
    padding: 2em 2em;
  }

  .logo {
    width: 10em;
  }

  .social {
    width: 8em;

    a svg {
      width: 2em;
    }
  }
}

@media (min-width: "768px") {
  nav {
    max-width: 768px;
    padding: 2.5em 2em;
  }
}

@media (min-width: "1024px") {
  nav {
    max-width: 1024px;
    padding: 3em 2em;
  }
}

@media (min-width: "1280px") {
  nav {
    max-width: 1280px;
  }

  .logo {
    width: 12em;
  }

  .social {
    width: 10em;

    a svg {
      width: 2.5em;
    }
  }
}
</style>
