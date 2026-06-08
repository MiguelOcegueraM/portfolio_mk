<template>
  <div class="home-page">
    <HeroSection id="hero" />
    <AboutSection id="about" />
    <ExperienceSection id="experience" />
    <SkillsSection id="skills" />
    <CTASection id="contact" />
    <SiteFooter />
  </div>
</template>

<script>
import HeroSection from "../section/HeroSection";
import AboutSection from "../section/AboutSection";
import ExperienceSection from "../section/ExperienceSection";
import SkillsSection from "../section/SkillsSection";
import CTASection from "../section/CTASection";
import SiteFooter from "../components/SiteFooter.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    CTASection,
    SiteFooter,
  },
  metaInfo: {
    title: "Miguel Oceguera | Software Engineer & Freelance Developer",
    meta: [
      { name: "theme-color", content: "#0f0f0f" },
      { name: "description", content: "Miguel Oceguera - Sr. Technology Consultant, Software Engineer, and Freelance Developer. Let's build together." },
    ],
  },
};
</script>
