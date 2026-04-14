<template>
  <section class="skills">
    <div class="container">
      <h2 class="section-title"><span class="number">03.</span> Skills & Tools</h2>

      <div class="skills-grid">
        <div v-for="category in categories" :key="category.title" class="skill-category">
          <h3>{{ category.title }}</h3>
          <div class="skill-items">
            <span v-for="skill in category.items" :key="skill" class="skill-item">
              {{ skill }}
            </span>
          </div>
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
};
</script>

<style lang="scss" scoped>
.skills {
  padding: 8em 2em;
  background: var(--bg-secondary);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
}

.skill-category {
  padding: 2em;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(100,255,218,0.2);
  }

  &:first-child {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, var(--bg-card) 0%, rgba(100,255,218,0.03) 100%);
    border-color: rgba(100,255,218,0.15);
  }

  h3 {
    font-weight: 700;
    margin-bottom: 1.2em;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6em;
}

.skill-item {
  padding: 0.4em 1em;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 14px;
  color: var(--text-secondary);
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: rgba(100,255,218,0.05);
  }
}

@media (max-width: 768px) {
  .skills {
    padding: 5em 1.5em;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-category:first-child {
    grid-column: auto;
  }
}
</style>
