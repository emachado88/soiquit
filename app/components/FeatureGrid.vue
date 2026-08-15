<script setup lang="ts">
import {
  BellRing,
  CircleDot,
  Languages,
  MoonStar,
  Timer,
  Wallet,
} from 'lucide-vue-next'

const features = [
  {
    icon: Timer,
    title: 'Live counters',
    text: 'Every second counts — day, hour and minute tick in real time.',
  },
  {
    icon: CircleDot,
    title: 'Milestone rings',
    text: 'Watch the ring fill toward 1 week, 1 month, 1 year and beyond.',
  },
  {
    icon: Wallet,
    title: 'Savings calculator',
    text: 'Your daily cost turns into a running total, in your currency.',
  },
  {
    icon: BellRing,
    title: 'Gentle reminders',
    text: 'Local notifications nudge you — no account, no servers, no spam.',
  },
  {
    icon: Languages,
    title: '8 languages',
    text: 'English, Português, Français, Español, Italiano, 中文, Deutsch, Nederlands.',
  },
  {
    icon: MoonStar,
    title: 'Dark mode',
    text: 'Light or dark, following your system — whatever feels right.',
  },
]
</script>

<template>
  <section class="py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading
        align="center"
        eyebrow="Everything you need"
        title="One counter for every habit"
      />

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
        >
          <span
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-amber-900 dark:text-accent"
          >
            <component
              :is="feature.icon"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </span>
          <h3 class="mt-4 text-base font-extrabold tracking-tight">
            {{ feature.title }}
          </h3>
          <p class="mt-1.5 text-sm leading-relaxed text-muted">
            {{ feature.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
