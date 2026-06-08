<template>
  <nav>
    <img
      class="close"
      @click="$emit('close')"
      src="../assets/icons/close.svg"
      alt="close menu icon"
    />
    <ul @click="$emit('close')">
      <li><router-link :to="{ path: '/my-work' }">Work</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#about' }">About</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#experience' }">Experience</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#skills' }">Skills</router-link></li>
      <li><router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link></li>
    </ul>
    <div class="menu-footer">
      <a href="mailto:miguel@pinacly.io" class="menu-email">miguel@pinacly.io</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bg-card, #1a1a1a);
  border-left: 1px solid var(--border, #2a2a2a);
  width: 40vw;
  color: var(--text-primary, #f5f5f5);
}

ul {
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 2em;
}

li {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;
  margin: 0.4em 0;
  cursor: pointer;
}

a {
  color: var(--text-primary, #f5f5f5);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover,
a.router-link-active {
  color: var(--accent, #64ffda);
}

.close {
  top: 2em;
  right: 1.8em;
  width: 28px;
  cursor: pointer;
  position: absolute;
  filter: invert(1);
}

.menu-footer {
  padding: 0 2.5em;
  margin-top: 2em;
}

.menu-email {
  font-family: var(--font-mono, monospace);
  font-size: 13px;
  color: var(--accent, #64ffda);
}

@media (max-width: 768px) {
  nav {
    width: 100vw;
  }
}
</style>
