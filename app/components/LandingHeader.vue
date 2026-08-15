<script setup lang="ts">
const links = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#faq', label: 'FAQ' },
]

// Same favicon/logo mark as the app (copied from the root app's assets/).
// baseURL is /so-i-quit/ on GitHub Pages — resolved via runtime config.
const logoSrc = `${useRuntimeConfig().app.baseURL}icon.svg`
const downloadURL = useRuntimeConfig().public.downloadURL
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur-md"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a
        href="#top"
        class="flex items-center gap-2.5"
      >
        <img
          :src="logoSrc"
          alt="So I Quit"
          class="h-8 w-8 rounded-lg"
        >
        <span class="text-lg font-extrabold tracking-tight">So I Quit</span>
      </a>

      <nav class="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="transition hover:text-primary"
        >
          {{ l.label }}
        </a>
      </nav>

      <a
        :href="downloadURL"
        class="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-primary-hover"
      >
        Get the app
      </a>
    </div>
  </header>
</template>
