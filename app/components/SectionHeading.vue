<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    sub?: string
    align?: 'left' | 'center'
    dark?: boolean
  }>(),
  { align: 'left', dark: false },
)
</script>

<template>
  <div :class="[align === 'center' ? 'mx-auto text-center' : '', 'max-w-2xl']">
    <p
      :class="[
        'text-sm font-bold uppercase tracking-[0.2em]',
        dark ? 'text-subtle-fill' : 'text-primary',
      ]"
    >
      {{ eyebrow }}
    </p>
    <h2
      :class="[
        'mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl',
        dark ? 'text-white' : 'text-ink',
      ]"
    >
      {{ title }}
    </h2>
    <p
      v-if="sub"
      :class="['mt-4 text-lg', dark ? 'text-white/70' : 'text-muted']"
    >
      {{ sub }}
    </p>
  </div>
</template>
