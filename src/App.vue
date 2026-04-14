<template>
  <div id="app">
    <transition name="menu-transition">
      <Menu v-if="showMenu" class="menu-bar" v-on:close="showMenu = false" />
    </transition>
    <transition name="hidden-div-transition">
      <div @click="showMenu = false" class="hidden-div" v-if="showMenu"></div>
    </transition>

    <nav class="top-nav">
      <img src="./assets/logo/mideke_dev_white.png" class="logo" @click="scrollToTop" alt="logo">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        viewBox="0 0 24 24"
        class="menu-icon"
        @click="showMenu = true"
      >
        <path class="st1" d="M0,0h24v24H0V0z" />
        <path class="st2" d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z" />
      </svg>
    </nav>

    <HeroSection id="hero" />
    <AboutSection id="about" />
    <ExperienceSection id="experience" />
    <SkillsSection id="skills" />
    <CTASection id="contact" />
    <FooterSection />
  </div>
</template>

<script>
import HeroSection from "./section/HeroSection";
import AboutSection from "./section/AboutSection";
import ExperienceSection from "./section/ExperienceSection";
import SkillsSection from "./section/SkillsSection";
import CTASection from "./section/CTASection";
import FooterSection from "./section/FooterSection";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    HeroSection,
    AboutSection,
    ExperienceSection,
    SkillsSection,
    CTASection,
    FooterSection,
    Menu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    scrollToTop() {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    },
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-primary: #0f0f0f;
  --bg-secondary: #161616;
  --bg-card: #1a1a1a;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --text-muted: #666;
  --accent: #64ffda;
  --accent-secondary: #7b89f4;
  --border: #2a2a2a;
  --font-main: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-main);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 2.5em;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(15,15,15,0.95), transparent);
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
}

.logo {
  width: 36px;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.menu-icon {
  width: 28px;
  cursor: pointer;

  .st1 { fill: none; }
  .st2 {
    fill: var(--text-primary);
    transition: fill 0.3s ease;
  }

  &:hover .st2 {
    fill: var(--accent);
  }
}

.menu-bar {
  z-index: 100;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
}

.hidden-div {
  backdrop-filter: blur(6px);
  background: rgba(0,0,0,0.4);
  z-index: 50;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100vh;
}

.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.menu-transition-enter,
.menu-transition-leave-to {
  transform: translateX(100%);
}

.hidden-div-transition-enter-active,
.hidden-div-transition-leave-active {
  transition: opacity 0.3s ease;
}
.hidden-div-transition-enter,
.hidden-div-transition-leave-to {
  opacity: 0;
}

::selection {
  background: var(--accent);
  color: var(--bg-primary);
}

@media (max-width: 768px) {
  .top-nav {
    padding: 1em 1.5em;
  }
}
</style>
