---
layout: home

hero:
  name: vitepress-template
  text: A template using vitepress.
  tagline: vitepress / template
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: vitepress-template
  actions:
    - theme: brand
      text: Start Read
      link: /guide/index
    - theme: alt
      text: Github
      link: https://github.com/dlzmoe/vitepress-template

features:
  - icon: ❤️
    title: Vitepress
    details: vitepress
  - icon: 😎
    title: Template
    details: template
  - icon: 👾
    title: About
    details: about

---

<style>
.VPHero .text {
  font-size: 18px;
}

.VPImage {
  border-radius: 50%;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>