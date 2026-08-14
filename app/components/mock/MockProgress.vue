<script setup lang="ts">
import { Settings } from 'lucide-vue-next'

const logoSrc = `${useRuntimeConfig().app.baseURL}icon.svg`
</script>

<template>
  <div class="space-y-3 text-ink">
    <!-- Status bar -->
    <div class="flex items-center justify-between text-[11px] font-bold text-ink/80">
      <span>9:41</span>
      <div class="flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          class="h-3 w-3 fill-current"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="9"
            width="3"
            height="6"
            rx="1"
          />
          <rect
            x="6"
            y="6"
            width="3"
            height="9"
            rx="1"
          />
          <rect
            x="11"
            y="3"
            width="3"
            height="12"
            rx="1"
          />
          <rect
            x="16"
            y="1"
            width="3"
            height="14"
            rx="1"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          class="h-3 w-3 fill-current"
          aria-hidden="true"
        >
          <path d="M4 16.5A10 10 0 0 1 20 16.5h-2.2A7.8 7.8 0 0 0 4 16.5Z" />
          <path d="M7 16.5a6 6 0 0 1 10 0h-2.4a3.6 3.6 0 0 0-5.2 0Z" />
          <circle
            cx="12"
            cy="16.5"
            r="1.4"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          class="h-3 w-3"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="8"
            width="16"
            height="8"
            rx="2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          />
          <path
            d="M18 11v2a3 3 0 0 0 0-2Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>

    <!-- App header -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img
          :src="logoSrc"
          alt=""
          class="h-6 w-6 rounded-md"
        >
        <span class="text-sm font-extrabold tracking-tight">So I Quit</span>
      </div>
      <Settings
        class="h-4 w-4 text-muted"
        aria-hidden="true"
      />
    </div>

    <!-- Live counter -->
    <div class="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-muted">
        Since you quit
      </p>
      <div class="mt-1 flex items-end gap-2">
        <span class="text-5xl font-black leading-none tracking-tight text-primary">128</span>
        <span class="pb-1 text-xs font-semibold text-muted">days</span>
      </div>
      <p class="mt-2 text-[11px] font-medium text-muted">
        3,072 hours · 184,320 minutes
      </p>
    </div>

    <!-- Milestone ring -->
    <div class="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm">
      <svg
        viewBox="0 0 80 80"
        class="h-16 w-16 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="40"
          cy="40"
          r="32"
          fill="none"
          stroke="#e2e0dc"
          stroke-width="8"
        />
        <circle
          cx="40"
          cy="40"
          r="32"
          fill="none"
          stroke="#1a6b5c"
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray="201"
          stroke-dashoffset="36"
          transform="rotate(-90 40 40)"
        />
        <text
          x="40"
          y="44"
          text-anchor="middle"
          font-size="13"
          font-weight="800"
          fill="#1c1b1a"
        >
          82%
        </text>
      </svg>
      <div>
        <p class="text-xs font-bold">
          1 year milestone
        </p>
        <p class="mt-0.5 text-[11px] text-muted">
          365 days · in 65 days
        </p>
        <span
          class="mt-1.5 inline-flex rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-bold text-on-primary-soft"
        >
          + €585.00 more
        </span>
      </div>
    </div>

    <!-- Savings -->
    <div class="rounded-2xl bg-depth p-4 text-white shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-white/60">
        Saved so far
      </p>
      <p class="mt-1 text-3xl font-black tracking-tight">
        €1,152.40
      </p>
      <p class="mt-0.5 text-[11px] font-medium text-white/60">
        ≈ €9.00 per day · your currency
      </p>
    </div>

    <!-- Habit chip -->
    <div
      class="flex items-center justify-between rounded-2xl border border-border bg-white px-3 py-2.5 shadow-sm"
    >
      <div class="flex items-center gap-2">
        <span
          class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-soft text-sm"
        >🚬</span>
        <div>
          <p class="text-xs font-bold">
            Smoking
          </p>
          <p class="text-[10px] text-muted">
            since 8 Apr 2026
          </p>
        </div>
      </div>
      <span
        class="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-amber-900"
      >
        🔥 128 days
      </span>
    </div>
  </div>
</template>
