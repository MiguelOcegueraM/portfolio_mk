<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <p ref="greeting" class="greeting">Hi, my name is</p>
        <h1 ref="name" class="name">Miguel<br>Oceguera.</h1>
        <p ref="tagline" class="tagline">
          Sr. Technology Consultant at <span class="highlight">Dynatrace</span>.<br>
          I build reliable software and help teams ship with confidence.
        </p>
        <div ref="cta" class="hero-actions">
          <a href="#contact" class="btn-primary">Let's build together</a>
          <a href="#experience" class="btn-secondary">See my work</a>
        </div>
      </div>
      <div ref="imageWrap" class="hero-image">
        <div class="image-ring">
          <img src="../assets/images/maik.jpg" alt="Miguel Oceguera" />
        </div>
        <div class="status-badge">
          <span class="status-dot"></span>
          Available for projects
        </div>
      </div>
    </div>
    <div class="scroll-indicator" @click="scrollToAbout">
      <span></span>
    </div>
  </section>
</template>

<script>
import { TimelineLite } from "gsap/dist/gsap";

export default {
  name: "HeroSection",
  mounted() {
    const tl = new TimelineLite();
    tl.from(this.$refs.greeting, { y: 30, opacity: 0, duration: 0.5, delay: 0.2 })
      .from(this.$refs.name, { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
      .from(this.$refs.tagline, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
      .from(this.$refs.cta, { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
      .from(this.$refs.imageWrap, { scale: 0.9, opacity: 0, duration: 0.8 }, "-=0.6");
  },
  methods: {
    scrollToAbout() {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6em 2em 2em;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(100,255,218,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4em;
}

.hero-text {
  flex: 1;
}

.greeting {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: clamp(14px, 1.2vw, 18px);
  margin-bottom: 1em;
  letter-spacing: 0.05em;
}

.name {
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 0.4em;
  background: linear-gradient(135deg, var(--text-primary) 0%, #c0c0c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-size: clamp(16px, 1.4vw, 22px);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 540px;

  .highlight {
    color: var(--accent);
    font-weight: 600;
  }
}

.hero-actions {
  margin-top: 2.5em;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-block;
  padding: 0.9em 2em;
  background: var(--accent);
  color: var(--bg-primary);
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(100,255,218,0.25);
  }
}

.btn-secondary {
  display: inline-block;
  padding: 0.9em 2em;
  border: 1.5px solid var(--border);
  color: var(--text-primary);
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }
}

.hero-image {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
}

.image-ring {
  width: clamp(220px, 22vw, 320px);
  height: clamp(220px, 22vw, 320px);
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--bg-primary);
  }
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1.2em;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.scroll-indicator {
  position: absolute;
  bottom: 2em;
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
  50% { transform: translateX(-50%) translateY(8px); opacity: 0.3; }
}

@media (max-width: 768px) {
  .hero {
    padding: 8em 1.5em 4em;
  }

  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2em;
  }

  .tagline {
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .image-ring {
    width: 180px;
    height: 180px;
  }
}
</style>
