<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const faqs = [
  {
    q: 'Is So I Quit really free?',
    a: 'Yes. No subscriptions, no ads, no in-app purchases. The app is free, and your data stays on your device.',
  },
  {
    q: 'Does it work offline?',
    a: 'Completely. Everything is stored locally on your phone — counters, milestones, savings and settings all work with no connection at all.',
  },
  {
    q: 'What habits can I track?',
    a: 'Anything you want to quit: smoking, alcohol, sugar, social media, gambling, procrastination… If it costs you time or money, So I Quit will count it.',
  },
  {
    q: 'What happens if I relapse?',
    a: 'You log it honestly and keep going. Nothing resets and no streaks are lost — the app is built around progress, not perfection.',
  },
  {
    q: 'Is my data private?',
    a: '100%. There is no account and no cloud — your data never leaves your phone. No tracking, no telemetry.',
  },
  {
    q: 'Which languages are supported?',
    a: 'Eight: English, Português, Français, Español, Italiano, 中文, Deutsch and Nederlands.',
  },
]
</script>

<template>
  <section
    id="faq"
    class="bg-surface py-20 sm:py-24"
  >
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <SectionHeading
        align="center"
        eyebrow="FAQ"
        title="Questions, answered"
      />

      <div class="mt-12 space-y-3">
        <details
          v-for="faq in faqs"
          :key="faq.q"
          class="group rounded-2xl border border-border bg-bg px-5 py-4 transition open:bg-surface open:shadow-sm"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4">
            <h3 class="text-base font-bold tracking-tight">
              {{ faq.q }}
            </h3>
            <ChevronDown
              class="faq-chevron h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
          </summary>
          <p class="mt-3 text-[15px] leading-relaxed text-muted">
            {{ faq.a }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
