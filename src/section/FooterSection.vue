<template>
  <footer class="footer">
    <p class="footer-text">
      Designed & built by <strong>Miguel Oceguera</strong>
    </p>
    <p class="footer-sub">Colima, Mexico</p>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 3em 2em;
  text-align: center;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
}

.footer-text {
  font-size: 13px;
  color: var(--text-muted);

  strong {
    color: var(--text-secondary);
    font-weight: 600;
  }
}

.footer-sub {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 0.3em;
  font-family: var(--font-mono);
}
</style>
