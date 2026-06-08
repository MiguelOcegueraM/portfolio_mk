<template>
  <section class="skills" ref="section">
    <div class="inner">
      <p class="eyebrow">// Skills &amp; tools</p>
      <div class="categories">
        <div
          v-for="cat in categories"
          :key="cat.title"
          class="category"
          :class="{ featured: cat.title === 'AI & Intelligent Systems' }"
        >
          <h3 class="cat-label">{{ cat.title }}</h3>
          <p class="cat-items">
            <template v-for="(item, i) in cat.items">
              <span :key="`${cat.title}-${item}`" class="item">{{ item }}</span><span v-if="i < cat.items.length - 1" :key="`${cat.title}-sep-${i}`" class="dot">·</span>
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      categories: [
        {
          title: "AI & Intelligent Systems",
          items: [
            "Claude API (Anthropic)",
            "OpenAI GPT",
            "Google Gemini",
            "AWS Bedrock",
            "LangChain",
            "LangGraph",
            "RAG Pipelines",
            "Pinecone",
            "Multi-Model Routing",
            "Prompt Engineering",
            "AI Agent Design",
            "MCP (Model Context Protocol)",
            "Ollama (Local Models)",
          ],
        },
        {
          title: "Frontend & Mobile",
          items: ["React Native", "React", "Vue.js", "TypeScript", "JavaScript", "Swift", "Java", "Redux", "Next.js", "SASS", "HTML/CSS"],
        },
        {
          title: "Backend & Data",
          items: ["NestJS", "Node.js", "Ruby on Rails", "Python", "Flask", ".NET Core", "SQL", "PostgreSQL", "REST APIs", "Temporal"],
        },
        {
          title: "Observability & Cloud",
          items: ["Dynatrace", "AWS", "Kubernetes", "Docker", "Splunk", "APM", "RUM", "Logs & Metrics"],
        },
        {
          title: "DevOps & Tools",
          items: ["GitHub Actions", "Azure Pipelines", "App Center", "CI/CD", "Git", "Biome", "Ruff"],
        },
      ],
    };
  },
  mounted() {
    const el = this.$refs.section;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.classList.add("entered"); return; }
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("entered"); obs.disconnect(); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    this._obs = obs;
  },
  beforeDestroy() { if (this._obs) this._obs.disconnect(); },
};
</script>

<style lang="scss" scoped>
.skills {
  padding: clamp(6em, 10vw, 10em) clamp(1.5em, 5vw, 6em);
  max-width: 1000px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms cubic-bezier(0.215, 0.61, 0.355, 1),
              transform 700ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &.entered { opacity: 1; transform: none; }
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 3em;
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 3em;
}

.category {
  padding-bottom: 2em;
  border-bottom: 1px solid var(--border);

  &:last-child { border-bottom: none; }
}

.cat-label {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 1em;
}

.cat-items {
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.8;
  color: var(--text-primary);
}

.featured .cat-items {
  font-size: clamp(18px, 1.4vw, 24px);
}

.item {
  transition: color 0.2s ease;

  &:hover { color: var(--accent); cursor: default; }
}

.dot {
  color: var(--text-muted);
  margin: 0 0.5em;
}

@media (max-width: 768px) {
  .categories { gap: 2.5em; }
}
</style>
