<script setup lang="ts">
import { PlusCircle, RotateCcw, Timer, Wallet } from 'lucide-vue-next'

const steps = [
  {
    n: '01',
    icon: PlusCircle,
    title: 'Add the habit',
    text: 'Smoking, sugar, social media, gambling — anything you want to quit.',
  },
  {
    n: '02',
    icon: Wallet,
    title: 'Set your daily cost',
    text: 'How much did it cost you per day? That number becomes your savings.',
  },
  {
    n: '03',
    icon: Timer,
    title: 'Watch the counter',
    text: 'Days, hours and minutes since you quit — with milestone rings that keep you going.',
  },
  {
    n: '04',
    icon: RotateCcw,
    title: 'Slip up? No guilt',
    text: 'Log a relapse honestly and keep going. Progress beats perfection.',
  },
]
</script>

<template>
  <section
    id="how"
    class="py-20 sm:py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading
        align="center"
        eyebrow="How it works"
        title="Start quitting in four steps"
        sub="No gamified drills, no streaks pressure — just an honest counter and a clear view of what you're saving."
      />

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="step in steps"
          :key="step.n"
          class="group relative rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
        >
          <span
            class="pointer-events-none absolute right-4 top-3 text-5xl font-black tracking-tight text-primary/10 transition group-hover:text-primary/20"
          >
            {{ step.n }}
          </span>
          <span
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary dark:text-white"
          >
            <component
              :is="step.icon"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </span>
          <h3 class="mt-4 text-base font-extrabold tracking-tight">
            {{ step.title }}
          </h3>
          <p class="mt-1.5 text-sm leading-relaxed text-muted">
            {{ step.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
