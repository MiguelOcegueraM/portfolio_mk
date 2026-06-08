<template>
  <section class="hero">
    <!--<div ref="status" class="status-badge">
      <span class="status-dot"></span>
      <span>Available for projects</span>
    </div>-->
    <p ref="eyebrow" class="eyebrow">// Hi, my name is</p>
    <h1 ref="name" class="name">Miguel Oceguera.</h1>
    <p ref="tagline" class="tagline">
      Sr. Technology Consultant at <span class="highlight">Dynatrace</span> & Fullstack Developer<br />
      I build reliable software and help teams ship with confidence.
    </p>
    <div ref="cta" class="hero-actions">
      <MagneticButton href="#contact" variant="primary">Let's build together</MagneticButton>
      <MagneticButton to="/my-work" variant="secondary">See my work</MagneticButton>
    </div>
    <div class="scroll-indicator" @click="scrollToAbout" aria-hidden="true">
      <span></span>
    </div>
  </section>
</template>

<script>
import { TimelineLite } from "gsap/dist/gsap";
import MagneticButton from "../components/MagneticButton.vue";

export default {
  name: "HeroSection",
  components: { MagneticButton },
  mounted() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = new TimelineLite();
    tl.from(this.$refs.status, { y: 12, opacity: 0, duration: 0.5, delay: 0.1 })
      .from(this.$refs.eyebrow, { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(this.$refs.name, { y: 24, opacity: 0, duration: 0.7 }, "-=0.3")
      .from(this.$refs.tagline, { y: 16, opacity: 0, duration: 0.5 }, "-=0.4")
      .from(this.$refs.cta, { y: 16, opacity: 0, duration: 0.5 }, "-=0.3");
  },
  methods: {
    scrollToAbout() {
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  padding: 12em clamp(1.5em, 5vw, 6em) clamp(6em, 10vw, 10em);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    padding: 8em 1.5em 4em;
  }
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.4em 1em;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
  align-self: flex-start;
  margin-bottom: 2em;
  background: rgba(255, 255, 255, 0.02);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}

.eyebrow {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 14px;
  letter-spacing: 0.05em;
  margin-bottom: 1.5em;
}

.name {
  font-size: clamp(48px, 8vw, 110px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--text-primary) 0%, #c0c0c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5em;
  padding-bottom: 0.08em;
}

.tagline {
  font-size: clamp(17px, 1.4vw, 22px);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 640px;

  .highlight {
    color: var(--accent);
    font-weight: 600;
  }
}

.hero-actions {
  margin-top: 3em;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5em;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  span {
    display: block;
    width: 20px;
    height: 32px;
    border: 2px solid var(--text-muted);
    border-radius: 10px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      height: 8px;
      background: var(--accent);
      border-radius: 2px;
      animation: scroll-bounce 2s infinite;
    }
  }
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  50%      { transform: translateX(-50%) translateY(8px); opacity: 0.3; }
}
</style>
