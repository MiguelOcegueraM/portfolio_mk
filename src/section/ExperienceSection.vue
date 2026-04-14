<template>
  <section class="experience">
    <div class="container">
      <h2 class="section-title"><span class="number">02.</span> Experience</h2>

      <div class="timeline">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="timeline-item"
          :class="{ active: activeJob === index }"
          @click="activeJob = index"
        >
          <div class="timeline-marker">
            <span class="dot"></span>
            <span class="line" v-if="index < jobs.length - 1"></span>
          </div>
          <div class="timeline-content">
            <div class="job-header">
              <h3>{{ job.title }}</h3>
              <span class="company">@ {{ job.company }}</span>
            </div>
            <div class="job-meta">
              <span class="period">{{ job.period }}</span>
              <span class="location">{{ job.location }}</span>
            </div>
            <ul class="job-details" v-if="activeJob === index">
              <li v-for="(detail, i) in job.details" :key="i">{{ detail }}</li>
            </ul>
            <div class="job-tags" v-if="activeJob === index && job.tags">
              <span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="education">
        <h3 class="subsection-title">Education</h3>
        <div class="edu-card">
          <h4>BSc in Telematics Engineering</h4>
          <p>Universidad de Colima</p>
          <span class="period">2017 - 2021</span>
        </div>
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
};
</script>

<style lang="scss" scoped>
.experience {
  padding: 8em 2em;
  background: var(--bg-primary);
}

.container {
  max-width: 900px;
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

.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 1.5em;
  cursor: pointer;
  padding-bottom: 1em;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 6px;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: var(--bg-primary);
    transition: all 0.3s ease;
    z-index: 1;
  }

  .line {
    width: 2px;
    flex: 1;
    background: var(--border);
    margin-top: 4px;
  }
}

.timeline-item.active .timeline-marker .dot,
.timeline-item:hover .timeline-marker .dot {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 12px rgba(100,255,218,0.3);
}

.timeline-content {
  flex: 1;
  padding: 1em 1.5em;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 1em;
  transition: border-color 0.3s ease;
}

.timeline-item.active .timeline-content,
.timeline-item:hover .timeline-content {
  border-color: rgba(100,255,218,0.2);
}

.job-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 0.3em;

  h3 {
    font-size: clamp(16px, 1.3vw, 20px);
    font-weight: 700;
  }

  .company {
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 500;
  }
}

.job-meta {
  display: flex;
  gap: 1.5em;
  margin-bottom: 1em;

  span {
    font-size: 13px;
    color: var(--text-muted);
    font-family: var(--font-mono);
  }
}

.job-details {
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 0.8em;
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.7;

    &::before {
      content: ">";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-family: var(--font-mono);
      font-weight: 700;
    }
  }
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 1em;
}

.tag {
  padding: 0.25em 0.75em;
  background: rgba(100,255,218,0.08);
  color: var(--accent);
  font-size: 12px;
  font-family: var(--font-mono);
  border-radius: 4px;
  border: 1px solid rgba(100,255,218,0.15);
}

.education {
  margin-top: 4em;
}

.subsection-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 1em;
  color: var(--text-secondary);
}

.edu-card {
  padding: 1.5em;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;

  h4 {
    font-size: 17px;
    margin-bottom: 0.3em;
  }

  p {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 0.3em;
  }

  .period {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-muted);
  }
}

@media (max-width: 768px) {
  .experience {
    padding: 5em 1.5em;
  }

  .timeline-content {
    padding: 1em;
  }

  .job-meta {
    flex-direction: column;
    gap: 0.3em;
  }
}
</style>
