<template>
  <section class="my-work-hero">
    <p ref="eyebrow" class="eyebrow">// My Work</p>
    <h1 ref="headline" class="headline">
      Crafting digital experiences for web &amp; mobile.
    </h1>
    <p ref="subtitle" class="subtitle">
      I'm a Fullstack Developer heavily focused on Frontend and UI/UX,
      with over 7 years of experience building dynamic, accessible,
      and scalable applications.
    </p>
  </section>
</template>

<script>
import { TimelineLite } from "gsap/dist/gsap";

export default {
  name: "MyWorkHero",
  mounted() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = new TimelineLite();
    tl.from(this.$refs.eyebrow, { y: 20, opacity: 0, duration: 0.5, delay: 0.2 })
      .from(this.$refs.headline, { y: 30, opacity: 0, duration: 0.7 }, "-=0.3")
      .from(this.$refs.subtitle, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
  },
};
</script>

<style lang="scss" scoped>
.my-work-hero {
  min-height: 70vh;
  padding: 12em 2em 6em;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: 768px) {
    padding: 8em 1.5em 4em;
  }
}

.eyebrow {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 14px;
  letter-spacing: 0.05em;
  margin-bottom: 1.5em;
}

.headline {
  font-size: clamp(48px, 8vw, 110px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  max-width: 14ch;
  background: linear-gradient(135deg, var(--text-primary) 0%, #c0c0c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 0.08em;
}

.subtitle {
  font-size: clamp(17px, 1.4vw, 22px);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 640px;
  margin-top: 1.5em;
}
</style>
