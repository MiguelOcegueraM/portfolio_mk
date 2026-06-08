<template>
  <div class="aurora-backdrop" aria-hidden="true">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div ref="glow" class="cursor-glow"></div>
    <div class="grain"></div>
  </div>
</template>

<script>
export default {
  name: "AuroraBackdrop",
  mounted() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    this.target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.current = { x: this.target.x, y: this.target.y };
    this.glowVisible = false;

    window.addEventListener("pointermove", this.onPointerMove, { passive: true });
    this.loop();
  },
  beforeDestroy() {
    window.removeEventListener("pointermove", this.onPointerMove);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  },
  methods: {
    onPointerMove(e) {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
      if (!this.glowVisible && this.$refs.glow) {
        this.$refs.glow.classList.add("is-active");
        this.glowVisible = true;
      }
    },
    loop() {
      const glow = this.$refs.glow;
      if (glow) {
        this.current.x += (this.target.x - this.current.x) * 0.08;
        this.current.y += (this.target.y - this.current.y) * 0.08;
        glow.style.transform = `translate3d(${this.current.x}px, ${this.current.y}px, 0)`;
      }
      this.rafId = requestAnimationFrame(this.loop);
    },
  },
};
</script>

<style lang="scss" scoped>
.aurora-backdrop {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  contain: strict;
}

.blob {
  position: absolute;
  width: 60vw;
  height: 60vw;
  max-width: 900px;
  max-height: 900px;
  border-radius: 50%;
  filter: blur(90px);
  will-change: transform;
  opacity: 0.6;
}

.blob-1 {
  top: -15%;
  left: -10%;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.18) 0%, rgba(100, 255, 218, 0) 70%);
  animation: drift-1 70s ease-in-out infinite alternate;
}

.blob-2 {
  top: 20%;
  right: -15%;
  background: radial-gradient(circle, rgba(123, 137, 244, 0.16) 0%, rgba(123, 137, 244, 0) 70%);
  animation: drift-2 90s ease-in-out infinite alternate;
}

.blob-3 {
  bottom: -20%;
  left: 25%;
  background: radial-gradient(circle, rgba(180, 110, 200, 0.12) 0%, rgba(180, 110, 200, 0) 70%);
  animation: drift-3 110s ease-in-out infinite alternate;
}

@keyframes drift-1 {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(15vw, 10vh, 0) scale(1.15); }
}

@keyframes drift-2 {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(-12vw, 18vh, 0) scale(0.9); }
}

@keyframes drift-3 {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(10vw, -12vh, 0) scale(1.1); }
}

.cursor-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  margin: -300px 0 0 -300px;
  pointer-events: none;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, rgba(100, 255, 218, 0) 60%);
  opacity: 0;
  transition: opacity 600ms ease;
  will-change: transform;

  &.is-active {
    opacity: 1;
  }
}

.grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 180px 180px;
  background-repeat: repeat;
  opacity: 0.05;
  mix-blend-mode: overlay;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .blob {
    animation: none;
  }
  .cursor-glow {
    display: none;
  }
}
</style>
