<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title"><span class="number">01.</span> About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            I'm a Telematics Engineer from the <strong>University of Colima</strong>, currently working as a
            <strong>Sr. Technology Consultant</strong> at Dynatrace, where I design and optimize observability
            solutions for enterprise customers across web, mobile, backend services, Kubernetes, and cloud platforms.
          </p>
          <p>
            With 5+ years of professional experience, I've worked across the full stack — from building
            React Native mobile apps at Herbalife to leading technical delivery and mentoring teams. I'm
            passionate about performance, reliability, and building things that matter.
          </p>
          <p>
            Beyond work, I'm an active community builder — organizing meetups, hackathons, and workshops
            with <strong>Web Dev Talks</strong> and <strong>JSConf Mexico</strong>. I believe in sharing
            knowledge and growing together.
          </p>
          <p class="freelance-note">
            I'm currently open to freelance projects — if you have an idea, let's make it happen.
          </p>
        </div>
        <div class="about-details">
          <div class="detail-card">
            <span class="detail-number">5+</span>
            <span class="detail-label">Years of experience</span>
          </div>
          <div class="detail-card">
            <span class="detail-number">6+</span>
            <span class="detail-label">Companies worked with</span>
          </div>
          <div class="detail-card">
            <span class="detail-number">3</span>
            <span class="detail-label">Countries collaborated</span>
          </div>
          <div class="detail-card">
            <span class="detail-number">EN/ES</span>
            <span class="detail-label">Bilingual</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style lang="scss" scoped>
.about {
  padding: 8em 2em;
  background: var(--bg-secondary);
  position: relative;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 800;
  margin-bottom: 2em;

  .number {
    font-family: var(--font-mono);
    color: var(--accent);
    font-size: 0.6em;
    font-weight: 500;
    margin-right: 0.5em;
  }
}

.about-content {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 4em;
  align-items: start;
}

.about-text {
  p {
    font-size: clamp(15px, 1.1vw, 18px);
    color: var(--text-secondary);
    line-height: 1.85;
    margin-bottom: 1.5em;

    strong {
      color: var(--text-primary);
      font-weight: 600;
    }
  }

  .freelance-note {
    color: var(--accent);
    font-weight: 500;
    padding: 1em 1.5em;
    border-left: 3px solid var(--accent);
    background: rgba(100,255,218,0.05);
    border-radius: 0 8px 8px 0;
  }
}

.about-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
}

.detail-card {
  padding: 1.5em;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
  }
}

.detail-number {
  font-size: 28px;
  font-weight: 800;
  color: var(--accent);
  font-family: var(--font-mono);
}

.detail-label {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about {
    padding: 5em 1.5em;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3em;
  }

  .about-details {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .about-details {
    grid-template-columns: 1fr;
  }
}
</style>
