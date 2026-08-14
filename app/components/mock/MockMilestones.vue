<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const rows = [
  { label: '1 week', state: 'done' },
  { label: '1 month', state: 'done' },
  { label: '3 months', state: 'done' },
  { label: '6 months', state: 'done' },
  { label: '1 year', state: 'current' },
]
</script>

<template>
  <div class="space-y-3 text-ink">
    <!-- Celebration -->
    <div class="rounded-2xl border border-accent/40 bg-accent-soft p-3 text-center">
      <p class="text-lg leading-none">
        🎉
      </p>
      <p class="mt-1 text-xs font-extrabold text-amber-900">
        You did it!
      </p>
      <p class="text-[11px] font-medium text-amber-900/70">
        1 year free — celebrated
      </p>
    </div>

    <!-- Milestone ring -->
    <div
      class="flex flex-col items-center rounded-2xl border border-border bg-white p-4 shadow-sm"
    >
      <svg
        viewBox="0 0 120 120"
        class="h-24 w-24"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#e2e0dc"
          stroke-width="10"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#d4922a"
          stroke-width="10"
          stroke-linecap="round"
          stroke-dasharray="314"
          stroke-dashoffset="0"
          transform="rotate(-90 60 60)"
        />
        <text
          x="60"
          y="56"
          text-anchor="middle"
          font-size="20"
          font-weight="800"
          fill="#1c1b1a"
        >
          365
        </text>
        <text
          x="60"
          y="72"
          text-anchor="middle"
          font-size="10"
          fill="#6e6c6a"
        >
          days
        </text>
      </svg>
      <span
        class="mt-2 rounded-full bg-accent px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white"
      >
        1 year milestone
      </span>
    </div>

    <!-- Milestone list -->
    <div class="space-y-1.5 rounded-2xl border border-border bg-white p-3 shadow-sm">
      <div
        v-for="row in rows"
        :key="row.label"
        class="flex items-center justify-between rounded-lg px-2 py-1.5"
        :class="row.state === 'current' ? 'bg-primary-soft' : ''"
      >
        <span
          class="text-[11px] font-bold"
          :class="row.state === 'current' ? 'text-on-primary-soft' : 'text-ink'"
        >
          {{ row.label }}
        </span>
        <span
          v-if="row.state === 'done'"
          class="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary/10"
        >
          <Check
            class="h-3 w-3 text-primary"
            aria-hidden="true"
          />
        </span>
        <span
          v-else
          class="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-accent text-[9px] font-black text-white"
        >
          ★
        </span>
      </div>
    </div>
  </div>
</template>
