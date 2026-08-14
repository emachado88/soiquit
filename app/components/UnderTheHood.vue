<script setup lang="ts">
import { DatabaseBackup, ShieldCheck, UserX, WifiOff } from 'lucide-vue-next'

const cards = [
  {
    icon: ShieldCheck,
    title: 'No cloud, no tracking',
    text: 'Habits, milestones and savings live in local storage on your device. Nothing is uploaded anywhere.',
  },
  {
    icon: UserX,
    title: 'No account, no ads',
    text: 'No sign-up, no sign-in, no data selling. Open the app and go.',
  },
  {
    icon: WifiOff,
    title: 'Works offline',
    text: 'Counters, rings and notifications keep running with airplane mode on.',
  },
  {
    icon: DatabaseBackup,
    title: 'Export your data',
    text: 'Full backup file — export, import, or move to a new phone anytime.',
  },
]
</script>

<template>
  <section class="bg-depth py-20 text-white sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading
        dark
        eyebrow="Under the hood"
        title="Runs on your phone. Nothing else."
        sub="So I Quit is a local-first app: everything lives on your device — the way privacy should be."
      />

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="card in cards"
          :key="card.title"
          class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
        >
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-subtle-fill"
          >
            <component
              :is="card.icon"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </span>
          <h3 class="mt-4 text-base font-extrabold tracking-tight">
            {{ card.title }}
          </h3>
          <p class="mt-1.5 text-sm leading-relaxed text-white/60">
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
