<script setup lang="ts">
import { Ban, ShieldCheck, UserX, WifiOff } from 'lucide-vue-next'

const items = [
  {
    icon: WifiOff,
    title: 'Offline-first',
    text: 'Everything runs on your phone',
  },
  {
    icon: UserX,
    title: 'No account',
    text: 'No sign-up, no sign-in',
  },
  {
    icon: Ban,
    title: 'No ads',
    text: 'Nothing sells your attention',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    text: 'Your data is yours to manage, backup/restore whenever, wherever you want',
  },
]
</script>

<template>
  <section class="border-y border-border/70 bg-surface">
    <div
      class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4"
    >
      <div
        v-for="item in items"
        :key="item.title"
        class="flex items-start gap-3.5"
      >
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary dark:text-white"
        >
          <component
            :is="item.icon"
            class="h-5 w-5"
            aria-hidden="true"
          />
        </span>
        <div>
          <p class="text-sm font-extrabold tracking-tight">
            {{ item.title }}
          </p>
          <p class="mt-0.5 text-sm text-muted">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
