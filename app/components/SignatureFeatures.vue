<script setup lang="ts">
import { Award, HeartHandshake, Wallet } from 'lucide-vue-next'
import MockMilestones from '~/components/mock/MockMilestones.vue'
import MockRelapse from '~/components/mock/MockRelapse.vue'
import MockSavings from '~/components/mock/MockSavings.vue'

const features = [
  {
    icon: Award,
    title: 'Milestones that keep you going',
    text: 'Rings celebrate 1 week, 1 month, 1 year — every win gets its moment. Reach a milestone and the app makes it count.',
    bullets: [
      'Milestone rings for every habit',
      'A celebration when you hit a goal',
      'A 10-year horizon — no ceiling on progress',
    ],
    mock: MockMilestones,
  },
  {
    icon: Wallet,
    title: 'Savings you can actually see',
    text: 'Tell the app what your habit cost per day and watch the total climb in your own currency. Motivation you can count.',
    bullets: [
      'Your currency, your numbers',
      'Per-day cost × days free',
      'The total is always one glance away',
    ],
    mock: MockSavings,
  },
  {
    icon: HeartHandshake,
    title: 'Forgiving by design',
    text: 'Nobody\'s perfect. Log a relapse honestly — no streaks lost, no guilt — and the counter keeps going from where you are.',
    bullets: [
      'Relapse logging without judgment',
      'Progress counts, not perfection',
      'Your best run is never taken away',
    ],
    mock: MockRelapse,
  },
]
</script>

<template>
  <section
    id="features"
    class="bg-surface py-20 sm:py-24"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading
        align="center"
        eyebrow="Signature features"
        title="What makes So I Quit different"
        sub="Most habit apps punish you for slipping. So I Quit is built the other way round — for real people."
      />

      <div class="mt-16 space-y-20">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="grid items-center gap-12 lg:grid-cols-2"
        >
          <!-- Text -->
          <div :class="i % 2 === 1 ? 'lg:order-2' : ''">
            <span
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25"
            >
              <component
                :is="feature.icon"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </span>
            <h3 class="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-lg leading-relaxed text-muted">
              {{ feature.text }}
            </p>
            <ul class="mt-5 space-y-2.5">
              <li
                v-for="bullet in feature.bullets"
                :key="bullet"
                class="flex items-start gap-2.5 text-sm font-medium text-ink"
              >
                <span
                  class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="h-3 w-3 text-primary"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {{ bullet }}
              </li>
            </ul>
          </div>

          <!-- Mockup -->
          <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
            <div
              class="relative rounded-3xl border border-border bg-bg p-8 shadow-xl shadow-primary/5 sm:p-12"
            >
              <div
                class="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-soft/60 to-accent-soft/40 blur-2xl"
              />
              <component :is="feature.mock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
