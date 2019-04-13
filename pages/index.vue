<template>
  <div>
    <Navbar/>
    <Header/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Header from "~/components/Header";

export default {
  components: { Navbar, Header },
  head: {
    title: "cssfx - Beautifully simple click-to-copy CSS effects",
    meta: [
      { charset: "utf8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use."
      },
      {
        property: "og:title",
        content: "cssfx - Beautifully simple click-to-copy CSS effects"
      },
      {
        property: "og:description",
        content:
          "Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use."
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cssfx.dev" },
      { property: "og:image", content: "http://cssfx.dev/static/logo.png" },
      {
        property: "og:image:secure_url",
        content: "https://cssfx.dev/static/logo.png"
      },
      { property: "og:image:alt", content: "cssfx logo" },
      { property: "og:image:width", content: "1000" },
      { property: "og:image:height", content: "800" },
      { name: "twitter:card", content: "summary" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700"
      }
    ]
  }
};
</script>
