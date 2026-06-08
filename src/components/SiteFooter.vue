<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="footer-top" :class="{ 'has-back': showBackLink }">
        <router-link v-if="showBackLink" to="/" class="back-link">&larr; Back to home</router-link>
        <SocialLinks />
      </div>
      <div class="footer-bottom">
        <p class="copy">Designed &amp; built by <strong>Miguel Oceguera</strong></p>
        <p class="sub">Colima, Mexico</p>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";

export default {
  name: "SiteFooter",
  components: { SocialLinks },
  props: {
    showBackLink: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: rgba(0, 0, 0, 0.35);
  border-top: 1px solid var(--border);
  padding: 5em 2em 3em;
  backdrop-filter: blur(8px);
  position: relative;
  z-index: 1;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  margin-bottom: 3em;

  &.has-back {
    justify-content: space-between;
  }
}

.back-link {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
  transition: transform 0.2s ease;
  display: inline-block;

  &:hover {
    transform: translateX(-4px);
  }
}

.footer-bottom {
  text-align: center;
}

.copy {
  font-size: 13px;
  color: var(--text-muted);

  strong {
    color: var(--text-secondary);
    font-weight: 600;
  }
}

.sub {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 0.4em;
}
</style>
