<template>
  <section class="cta">
    <div class="container">
      <p class="eyebrow">// What's next</p>
      <h2 class="cta-heading">Let's build together.</h2>
      <p class="cta-text">
        I'm currently open for freelance projects and collaborations. Whether you need a mobile app,
        a web platform, observability solutions, or technical leadership — I'd love to hear about it.
      </p>
      <div class="cta-actions">
        <MagneticButton href="mailto:miguel@pinacly.io" variant="primary">
          Get in touch
        </MagneticButton>
      </div>
      <p class="cta-email">miguel@pinacly.io</p>

      <div class="social-links-wrap">
        <SocialLinks />
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinks from "../components/SocialLinks.vue";
import MagneticButton from "../components/MagneticButton.vue";

export default {
  name: "CTASection",
  components: { SocialLinks, MagneticButton },
};
</script>

<style lang="scss" scoped>
.cta {
  padding: clamp(8em, 12vw, 12em) clamp(1.5em, 5vw, 6em);
  text-align: center;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

.eyebrow {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 14px;
  margin-bottom: 1.5em;
  letter-spacing: 0.05em;
}

.cta-heading {
  font-size: clamp(40px, 7vw, 84px);
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin-bottom: 0.5em;
  background: linear-gradient(135deg, var(--text-primary) 0%, #c0c0c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 0.08em;
}

.cta-text {
  font-size: clamp(16px, 1.3vw, 20px);
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 1em auto 2.5em;
  max-width: 56ch;
}

.cta-actions {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5em;
}

.cta-email {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
}

.social-links-wrap {
  margin-top: 4em;
  display: flex;
  justify-content: center;
}
</style>
