<script setup lang="ts">
const logoSrc = `${useRuntimeConfig().app.baseURL}icon.svg`
</script>

<template>
  <footer class="border-t border-border bg-bg py-10">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6"
    >
      <div class="flex items-center gap-2.5">
        <img
          :src="logoSrc"
          alt=""
          class="h-8 w-8 rounded-md"
        >
        <div class="leading-tight">
          <p class="text-sm font-extrabold tracking-tight">
            So I Quit
          </p>
          <p class="text-xs text-muted">
            Quit a habit. Watch the savings grow.
          </p>
        </div>
      </div>

      <p class="text-xs text-muted">
        © 2026 <a
          href="https://emachado.pt"
          target="_blank"
        >emachado.pt</a>.
      </p>
    </div>
  </footer>
</template>
