<template>
  <article class="project-card" :class="{ reversed: index % 2 === 1 }">
    <div class="image-col">
      <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Open ${title} (opens in new tab)`"
        class="image-wrap"
      >
        <img :src="image" :alt="alt" />
      </a>
      <div v-else class="image-wrap">
        <img :src="image" :alt="alt" />
      </div>
    </div>

    <div class="content-col">
      <h2 class="card-title">
        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
        >{{ title }}</a>
        <span v-else>{{ title }}</span>
        <span v-if="badge" class="badge">{{ badge }}</span>
      </h2>

      <p class="card-description">{{ description }}</p>

      <ul class="tag-list" aria-label="Technologies used">
        <li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>

      <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="view-link"
      >View project &rarr;</a>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    alt: { type: String, required: true },
    link: { type: String, default: null },
    badge: { type: String, default: null },
    tags: { type: Array, required: true },
    index: { type: Number, required: true },
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4em;
  align-items: center;
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 700ms cubic-bezier(0.215, 0.61, 0.355, 1),
              transform 700ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &.entered {
    opacity: 1;
    transform: none;
    transition: transform 220ms ease-out, box-shadow 220ms ease-out;
  }

  &.entered:hover {
    transform: translateY(-4px);
  }

  &.reversed {
    direction: rtl;

    > * {
      direction: ltr;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 2em;

    .image-col {
      order: -1;
    }

    .content-col {
      order: 1;
    }
  }

  @media (max-width: 768px) {
    gap: 2em;
  }
}

.image-wrap {
  display: block;
  border-radius: 14px;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border);
  aspect-ratio: 16 / 10;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 500ms ease;
    display: block;
  }

  &:hover img {
    transform: scale(1.03);
  }
}

.content-col {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 0.75em;
  display: flex;
  align-items: center;
  gap: 0.6em;
  flex-wrap: wrap;

  a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--accent);
    }
  }

  span:not(.badge) {
    color: var(--text-primary);
  }
}

.badge {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  padding: 0.3em 0.8em;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  letter-spacing: 0.04em;
  vertical-align: middle;
}

.card-description {
  color: var(--text-secondary);
  font-size: clamp(15px, 1.1vw, 17px);
  line-height: 1.75;
  margin-bottom: 1em;
}

.tag-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 1em 0;
  padding: 0;
}

.tag {
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 0.3em 0.8em;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  transition: color 0.2s ease, border-color 0.2s ease;
  cursor: default;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
}

.view-link {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
  margin-top: 0.5em;
  align-self: flex-start;
  transition: text-decoration 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
}
</style>
