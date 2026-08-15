<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const { toggleTheme } = useThemeMode()
</script>

<template>
  <button
    type="button"
    class="flex h-9 w-9 items-center justify-center cursor-pointer rounded-full border border-border bg-surface text-muted shadow-sm transition hover:bg-card hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    aria-label="Toggle dark mode"
    @click="toggleTheme()"
  >
    <!-- Both icons render; the dark: variant swaps them via the <html> class
         (set pre-paint by the head script) -> no hydration mismatch/flash. -->
    <Moon
      class="h-4 w-4 dark:hidden"
      aria-hidden="true"
    />
    <Sun
      class="hidden h-4 w-4 dark:block"
      aria-hidden="true"
    />
  </button>
</template>
