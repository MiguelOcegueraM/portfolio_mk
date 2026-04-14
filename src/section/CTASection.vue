<template>
  <section class="cta">
    <div class="container">
      <p class="cta-label">04. What's next?</p>
      <h2 class="cta-heading">Let's build together.</h2>
      <p class="cta-text">
        I'm currently open for freelance projects and collaborations. Whether you need a mobile app,
        a web platform, observability solutions, or technical leadership — I'd love to hear about it.
      </p>
      <a href="mailto:miguel@pinacly.io" class="cta-button">
        Get in touch
      </a>
      <p class="cta-email">miguel@pinacly.io</p>

      <div class="social-links">
        <a href="https://github.com/MiguelOcegueraM" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/miguelocegueram/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://medium.com/@miguelocegueram" target="_blank" rel="noopener" aria-label="Medium">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
        </a>
        <a href="https://twitter.com/mikeoceguera" target="_blank" rel="noopener" aria-label="Twitter / X">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CTASection",
};
</script>

<style lang="scss" scoped>
.cta {
  padding: 10em 2em;
  background: var(--bg-primary);
  text-align: center;
}

.container {
  max-width: 650px;
  margin: 0 auto;
}

.cta-label {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 15px;
  margin-bottom: 1.5em;
  letter-spacing: 0.05em;
}

.cta-heading {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 900;
  margin-bottom: 0.5em;
  line-height: 1.1;
}

.cta-text {
  font-size: clamp(15px, 1.2vw, 18px);
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2.5em;
}

.cta-button {
  display: inline-block;
  padding: 1em 3em;
  background: transparent;
  color: var(--accent);
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  border: 2px solid var(--accent);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: var(--font-mono);

  &:hover {
    background: rgba(100,255,218,0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(100,255,218,0.15);
  }
}

.cta-email {
  margin-top: 1.5em;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-muted);
}

.social-links {
  margin-top: 4em;
  display: flex;
  justify-content: center;
  gap: 1.5em;

  a {
    color: var(--text-muted);
    transition: all 0.3s ease;
    display: flex;

    &:hover {
      color: var(--accent);
      transform: translateY(-3px);
    }

    svg {
      width: 22px;
      height: 22px;
    }
  }
}

@media (max-width: 768px) {
  .cta {
    padding: 6em 1.5em;
  }
}
</style>
