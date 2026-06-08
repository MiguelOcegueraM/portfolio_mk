<template>
  <main class="my-work">
    <MyWorkHero />
    <MyWorkProjects />
    <SiteFooter :show-back-link="true" />
  </main>
</template>

<script>
import MyWorkHero from "../section/MyWorkHero.vue";
import MyWorkProjects from "../section/MyWorkProjects.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default {
  name: "MyWorkPage",
  components: { MyWorkHero, MyWorkProjects, SiteFooter },
  metaInfo: {
    title: "My Work — Miguel Oceguera",
    meta: [
      { name: "description", content: "Selected projects by Miguel Oceguera — Bizworks, Herbalife One, Mundial Media, BBAI, Dynatrace Training Days." },
    ],
  },
};
</script>

<style lang="scss" scoped>
.my-work {
  color: var(--text-primary);
  min-height: 100vh;
}

@media (prefers-reduced-motion: reduce) {
  .my-work *,
  .my-work *::before,
  .my-work *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
