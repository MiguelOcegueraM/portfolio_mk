<template>
  <section class="about" ref="section">
    <div class="inner">
      <p class="eyebrow">// About me</p>
      <div class="bio">
        <p>
          I'm a Telematics Engineer from the <strong>University of Colima</strong>, currently working as a
          <strong>Sr. Technology Consultant</strong> at Dynatrace, where I design and optimize observability
          solutions for enterprise customers across web, mobile, backend services, Kubernetes, and cloud platforms.
        </p>
        <p>
          With 7+ years of professional experience, I've worked across the full stack — from building
          React Native mobile apps at Herbalife to leading technical delivery and mentoring teams. I'm
          passionate about performance, reliability, and building things that matter.
        </p>
        <p>
          Beyond work, I'm an active community builder — organizing meetups, hackathons, and workshops
          with <strong>Web Dev Talks</strong> and <strong>JSConf Mexico</strong>. I believe in sharing
          knowledge and growing together.
        </p>
        <p class="freelance-note">
          Currently open to freelance projects — if you have an idea, let's make it happen.
        </p>
      </div>
      <ul class="stats">
        <li><span class="num">7+</span><span class="lab">Years of experience</span></li>
        <li><span class="num">6+</span><span class="lab">Companies worked with</span></li>
        <li><span class="num">3</span><span class="lab">Countries collaborated</span></li>
        <li><span class="num">EN/ES</span><span class="lab">Bilingual</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  mounted() {
    const el = this.$refs.section;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("entered");
      return;
    }
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("entered"); obs.disconnect(); }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(el);
    this._obs = obs;
  },
  beforeDestroy() { if (this._obs) this._obs.disconnect(); },
};
</script>

<style lang="scss" scoped>
.about {
  padding: clamp(6em, 10vw, 10em) clamp(1.5em, 5vw, 6em);
  max-width: 1000px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms cubic-bezier(0.215, 0.61, 0.355, 1),
              transform 700ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &.entered {
    opacity: 1;
    transform: none;
  }
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 3em;
}

.bio p {
  font-size: clamp(18px, 1.3vw, 22px);
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 62ch;
  margin-bottom: 1.3em;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
}

.freelance-note {
  font-style: italic;
  color: var(--accent) !important;
  margin-top: 1em;
}

.stats {
  list-style: none;
  padding: 0;
  margin: 5em 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li {
    display: flex;
    flex-direction: column;
    gap: 0.35em;
    padding: 0 1.5em;
    border-left: 1px solid var(--border);

    &:first-child { border-left: none; padding-left: 0; }
  }

  .num {
    font-size: clamp(40px, 5vw, 64px);
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(135deg, var(--text-primary) 0%, #c0c0c0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lab {
    font-family: var(--font-mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }
}

@media (max-width: 768px) {
  .stats {
    grid-template-columns: 1fr 1fr;
    gap: 2em 0;

    li {
      &:nth-child(odd) { border-left: none; padding-left: 0; }
    }
  }
}
</style>
