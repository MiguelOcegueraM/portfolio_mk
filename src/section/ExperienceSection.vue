<template>
  <section class="experience" ref="section">
    <div class="inner">
      <p class="eyebrow">// Experience</p>

      <ul class="jobs">
        <li
          v-for="(job, index) in jobs"
          :key="index"
          class="job"
          :class="{ active: activeJob === index }"
        >
          <button class="job-trigger" @click="toggle(index)" :aria-expanded="activeJob === index">
            <div class="job-head">
              <h3 class="company">{{ job.company }}</h3>
              <span class="period">{{ job.period }}</span>
            </div>
            <div class="job-subhead">
              <span class="title">{{ job.title }}</span>
              <span class="location">{{ job.location }}</span>
            </div>
          </button>
          <transition name="accordion" @enter="onEnter" @leave="onLeave">
            <div v-if="activeJob === index" class="job-body">
              <ul class="details">
                <li v-for="(d, i) in job.details" :key="i">{{ d }}</li>
              </ul>
              <div class="tags" v-if="job.tags">
                <span v-for="t in job.tags" :key="t" class="tag">{{ t }}</span>
              </div>
            </div>
          </transition>
        </li>
      </ul>

      <div class="education">
        <p class="eyebrow education-eyebrow">// Education</p>
        <div class="edu-row">
          <h3 class="edu-school">Universidad de Colima</h3>
          <span class="period">2017 - 2021</span>
        </div>
        <p class="edu-degree">BSc in Telematics Engineering</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceSection",
  data() {
    return {
      activeJob: 0,
      jobs: [
        {
          title: "Senior Technology Consultant",
          company: "Dynatrace",
          period: "Nov 2024 - Present",
          location: "Boston, MA (Remote)",
          details: [
            "Design, implement, and optimize observability solutions for enterprise customers across web, mobile, backend services, Kubernetes, and cloud platforms.",
            "Lead technical delivery of customer engagements, translating business and performance requirements into scalable monitoring strategies.",
            "Act as technical team lead: guiding consultants, reviewing implementations, and ensuring delivery quality.",
            "Partner with DevOps, SRE, and engineering teams to troubleshoot performance, reliability, and architectural issues.",
            "Mentor team members and promote best practices in observability, automation, and customer engagement.",
          ],
          tags: ["Dynatrace", "Kubernetes", "AWS", "Observability", "APM", "Cloud"],
        },
        {
          title: "Technical Lead",
          company: "Luk!",
          period: "Sep 2023 - Jan 2025",
          location: "Mexico",
          details: [
            "Configured CI/CD pipelines and workflows using GitHub Actions for seamless code integration into production.",
            "Assessed project structures, technology stacks, and integrations to enhance project health and efficiency.",
            "Identified areas for improvement and implemented strategies to optimize development workflows.",
          ],
          tags: ["GitHub Actions", "CI/CD", "Technical Leadership"],
        },
        {
          title: "Mobile Developer II",
          company: "Herbalife",
          period: "Mar 2023 - Nov 2024",
          location: "Guadalajara, Mexico",
          details: [
            "Built and maintained the HL Bizworks app using React Native, Redux-Sagas, TypeScript, and Jest for App Store and Play Store.",
            "Implemented native features using Swift and Java alongside the React Native codebase.",
            "Managed store releases using App Center and Azure Pipelines with DevOps, Functional and QA teams.",
            "Monitored application performance using Dynatrace and Splunk.",
          ],
          tags: ["React Native", "TypeScript", "Swift", "Java", "Redux", "Jest"],
        },
        {
          title: "Mobile Developer",
          company: "HCLTech",
          period: "Nov 2022 - Mar 2023",
          location: "Zapopan, Mexico",
          details: [
            "Designed and implemented new features for iOS and Android using React Native.",
            "Conducted maintenance tasks ensuring peak performance and user satisfaction.",
          ],
          tags: ["React Native", "iOS", "Android"],
        },
        {
          title: "Ruby on Rails Developer",
          company: "HCLTech",
          period: "Jan 2022 - Nov 2022",
          location: "Zapopan, Mexico",
          details: [
            "Maintained client applications using Ruby on Rails.",
            "Developed APIs to implement GDPR and Consent Management regulations within existing products.",
          ],
          tags: ["Ruby on Rails", "APIs", "GDPR"],
        },
        {
          title: "Data Analyst",
          company: "Tata Consultancy Services",
          period: "Jun 2021 - Jan 2022",
          location: "Guadalajara, Mexico",
          details: [
            "Conducted data validations and model validations using Python Pandas and SQL.",
            "Worked with Netezza and Hadoop databases, ensuring data quality and consistency.",
          ],
          tags: ["Python", "SQL", "Hadoop", "Data Analysis"],
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
  methods: {
    toggle(index) {
      this.activeJob = this.activeJob === index ? null : index;
    },
    onEnter(el) { el.style.maxHeight = el.scrollHeight + "px"; },
    onLeave(el) { el.style.maxHeight = "0"; },
  },
};
</script>

<style lang="scss" scoped>
.experience {
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

.jobs {
  list-style: none;
  padding: 0;
  margin: 0;
}

.job {
  border-bottom: 1px solid var(--border);

  &:first-child { border-top: 1px solid var(--border); }

  &.active .job-trigger,
  .job-trigger:hover {
    .company { color: var(--accent); }
  }
}

.job-trigger {
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  padding: 2em 0;
  cursor: pointer;
  font-family: inherit;
  color: inherit;
}

.job-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2em;
  flex-wrap: wrap;
}

.company {
  font-size: clamp(22px, 2vw, 28px);
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.2s ease;
  margin: 0;
}

.period {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
}

.job-subhead {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2em;
  flex-wrap: wrap;
  margin-top: 0.4em;
}

.title {
  font-size: clamp(15px, 1.1vw, 17px);
  color: var(--text-secondary);
}

.location {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
}

.job-body {
  overflow: hidden;
  padding-bottom: 2em;
}

.details {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 70ch;

  li {
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 0.8em;
    font-size: clamp(14px, 1vw, 16px);
    color: var(--text-secondary);
    line-height: 1.75;

    &::before {
      content: "›";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-family: var(--font-mono);
    }
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 1.4em;
}

.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 0.3em 0.8em;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  letter-spacing: 0.03em;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 500ms cubic-bezier(0.215, 0.61, 0.355, 1),
              opacity 400ms ease;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave {
  opacity: 1;
}

.education {
  margin-top: 6em;
}

.education-eyebrow { margin-bottom: 2em; }

.edu-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2em;
  flex-wrap: wrap;
  padding: 2em 0 0.4em;
  border-top: 1px solid var(--border);
}

.edu-school {
  font-size: clamp(20px, 1.7vw, 24px);
  font-weight: 700;
  margin: 0;
}

.edu-degree {
  font-size: 15px;
  color: var(--text-secondary);
  margin-top: 0.2em;
}
</style>
