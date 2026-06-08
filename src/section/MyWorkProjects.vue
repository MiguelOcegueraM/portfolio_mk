<template>
  <section class="projects-section">
    <h2 class="section-title">// Recent projects</h2>
    <div class="projects-stack">
      <ProjectCard
        v-for="(p, i) in projects"
        :key="p.title"
        v-bind="p"
        :index="i"
        ref="cards"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
import myWorkData from "../assets/myWorkData.js";

export default {
  name: "MyWorkProjects",
  components: { ProjectCard },
  data() {
    return {
      projects: myWorkData,
    };
  },
  mounted() {
    if (!this.$refs.cards) return;
    const cardEls = this.$refs.cards.map(c => c.$el);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      cardEls.forEach(el => el.classList.add("entered"));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("entered");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    cardEls.forEach(el => observer.observe(el));
    this._observer = observer;
  },
  beforeDestroy() {
    if (this._observer) this._observer.disconnect();
  },
};
</script>

<style lang="scss" scoped>
.projects-section {
  padding: 4em clamp(1.5em, 5vw, 6em) 8em;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: var(--font-mono);
  font-size: clamp(20px, 1.6vw, 24px);
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 4em;
}

.projects-stack {
  display: flex;
  flex-direction: column;
  gap: clamp(6em, 12vw, 10em);
}
</style>
