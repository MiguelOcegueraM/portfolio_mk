<template>
  <component
    :is="tag"
    ref="root"
    :href="href"
    :to="to"
    :type="tag === 'button' ? 'button' : null"
    class="magnetic-btn"
    :class="[`variant-${variant}`, { 'is-resetting': resetting }]"
    @pointerenter="onEnter"
    @pointermove="onMove"
    @pointerleave="onLeave"
  >
    <span class="label"><slot /></span>
  </component>
</template>

<script>
const STRENGTH = 0.25;
const MAX_OFFSET = 12;

export default {
  name: "MagneticButton",
  props: {
    href: { type: String, default: null },
    to: { type: [String, Object], default: null },
    variant: { type: String, default: "primary", validator: v => ["primary", "secondary"].includes(v) },
  },
  data() {
    return { resetting: false };
  },
  computed: {
    tag() {
      if (this.to) return "router-link";
      if (this.href) return "a";
      return "button";
    },
  },
  beforeDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  },
  methods: {
    isReducedMotion() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    rootEl() {
      const r = this.$refs.root;
      return r && r.$el ? r.$el : r;
    },
    onEnter() {
      if (this.isReducedMotion()) return;
      this.resetting = false;
    },
    onMove(e) {
      if (this.isReducedMotion()) return;
      const el = this.rootEl();
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) * STRENGTH;
      const dy = (e.clientY - rect.top - rect.height / 2) * STRENGTH;
      const cx = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx));
      const cy = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy));
      if (this.rafId) cancelAnimationFrame(this.rafId);
      this.rafId = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      });
    },
    onLeave() {
      if (this.isReducedMotion()) return;
      this.resetting = true;
      const el = this.rootEl();
      if (el) el.style.transform = "translate3d(0, 0, 0)";
    },
  },
};
</script>

<style lang="scss" scoped>
.magnetic-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95em 2.2em;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  border-radius: 999px;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: var(--font-main);
  letter-spacing: 0.01em;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  user-select: none;

  &.is-resetting {
    transition: transform 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:active {
    .label {
      transform: scale(0.97);
    }
  }

  .label {
    display: inline-block;
    transition: transform 120ms ease-out;
  }
}

.variant-primary {
  background: var(--accent);
  color: var(--bg-primary);

  &:hover {
    background: lighten(#64ffda, 4%);
  }
}

.variant-secondary {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--border);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
}
</style>
