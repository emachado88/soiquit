<script setup lang="ts">
// Infinite marquee strip — the "languages" row of Senthora, transposed to habits.
const habits = [
  { emoji: '🚬', label: 'Smoking' },
  { emoji: '💨', label: 'Vaping' },
  { emoji: '🍺', label: 'Alcohol' },
  { emoji: '🍬', label: 'Sugar' },
  { emoji: '🍟', label: 'Junk food' },
  { emoji: '☕', label: 'Caffeine' },
  { emoji: '📱', label: 'Social media' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '🎰', label: 'Gambling' },
  { emoji: '💳', label: 'Overspending' },
  { emoji: '😴', label: 'Procrastination' },
  { emoji: '🍩', label: 'Late snacks' },
]
</script>

<template>
  <section class="overflow-hidden bg-depth py-16 sm:py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading
        dark
        align="center"
        eyebrow="Anything you want to quit"
        title="One counter for every habit"
        sub="If it costs you time or money, So I Quit will count it."
      />
    </div>

    <div
      class="marquee mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div class="marquee-track flex w-max gap-4">
        <template
          v-for="half in 2"
          :key="half"
        >
          <div
            class="flex gap-4 pr-4"
            :aria-hidden="half === 2 ? 'true' : undefined"
          >
            <span
              v-for="habit in habits"
              :key="`${half}-${habit.label}`"
              class="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90"
            >
              <span aria-hidden="true">{{ habit.emoji }}</span>
              {{ habit.label }}
            </span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
