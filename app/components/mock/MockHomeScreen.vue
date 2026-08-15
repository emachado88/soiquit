<script setup lang="ts">
import { ListChecks, Settings, TrendingUp } from 'lucide-vue-next'

/**
 * Full home-screen replica of the app (Progress tab), built from the real
 * screen's markup + design tokens (so-i-quit app: pages/index.vue,
 * HabitProgressCard, TotalSavingsCard, TabBar). Data mirrors a habit 382
 * days in (start 2025-07-29, €3.02/day) and is derived with the app's own
 * engine: 382 days = 1y + 17d, every base milestone through "1 year"
 * reached, next target = 18 months (ring = 17/184 ≈ 9%).
 */

const DAYS = 382
const SAVINGS_PER_DAY = 3.02
const TOTAL_SAVED = DAYS * SAVINGS_PER_DAY // €1,153.64
const START_DATE = new Date('2025-07-29T00:00:00')

const tabs = [
  { label: 'Progress', icon: TrendingUp, active: true },
  { label: 'Habits', icon: ListChecks, active: false },
  { label: 'Settings', icon: Settings, active: false },
]

const reachedChips = [
  '1 day',
  '3 days',
  '1 week',
  '2 weeks',
  '3 weeks',
  '1 month',
  '2 months',
  '3 months',
  '6 months',
  '9 months',
  '1 year',
]

// Ring geometry (MilestoneRing port: size 74, stroke 7 → radius 33.5)
const RADIUS = 33.5
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const RING_PROGRESS = 17 / 184 // days since "1 year" / span to "18 months"

const ringOffset = ref(CIRCUMFERENCE)
const ringBar = ref<SVGCircleElement | null>(null)
const chipsRow = ref<HTMLElement | null>(null)
const displayTotal = ref(0)
const pillOffset = ref(100) // tab pill glides from Habits → Progress on mount

const formatEUR = (value: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(value)

const sinceLabel = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
}).format(START_DATE)

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Ring fill (MilestoneRing port — WAAPI, same as the app)
  const target = CIRCUMFERENCE * (1 - RING_PROGRESS)
  if (reduced) {
    ringOffset.value = target
    pillOffset.value = 0
  }
  else {
    requestAnimationFrame(() => {
      if (ringBar.value?.animate) {
        ringBar.value.animate(
          [{ strokeDashoffset: `${CIRCUMFERENCE}` }, { strokeDashoffset: `${target}` }],
          { duration: 1000, easing: 'ease-out' },
        )
      }
      ringOffset.value = target
      pillOffset.value = 0
    })
  }

  // Money counter (TotalSavingsCard port — eased count-up)
  if (reduced) {
    displayTotal.value = TOTAL_SAVED
  }
  else {
    const start = performance.now()
    const duration = 1200
    const tick = (t: number): void => {
      const p = Math.min((t - start) / duration, 1)
      displayTotal.value = TOTAL_SAVED * (1 - Math.pow(1 - p, 3))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  // Chips scroll to the latest milestone (app behaviour)
  setTimeout(() => {
    chipsRow.value?.scrollTo({ left: chipsRow.value.scrollWidth, behavior: 'smooth' })
  }, 350)
})
</script>

<template>
  <div class="relative flex h-[540px] flex-col overflow-hidden text-ink sm:h-[580px]">
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

    <!-- Main content (scrolls behind the pinned savings card) -->
    <div class="main-scroll flex-1 overflow-y-auto pb-28 pt-4">
      <div
        class="mock-rise"
      >
        <h1 class="text-2xl font-black tracking-tight text-ink">
          Progress
        </h1>
        <p class="mt-0.5 text-[13px] text-muted">
          You're doing great,
        </p>
      </div>

      <!-- Habit progress card (HabitProgressCard port) -->
      <article
        class="mock-rise relative mt-3 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
        style="animation-delay: 70ms"
      >
        <div
          class="absolute inset-y-0 left-0 w-1.25 bg-linear-to-b from-primary to-accent"
        />
        <div class="flex items-center p-4 pl-5">
          <div class="min-w-0 flex-1">
            <p class="text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
              Tobacco free for
            </p>
            <p class="mt-0.5 text-[44px] font-black leading-[1.05] tracking-tight text-ink">
              382
              <span class="text-base font-bold text-muted">days</span>
            </p>
            <p class="mt-1 text-xs font-medium text-muted">
              1 year · 17 days
            </p>
            <p class="mt-0.5 text-xs font-bold text-primary">
              €1,153.64 saved
            </p>
          </div>
          <div class="flex shrink-0 flex-col items-center gap-1.5">
            <svg
              width="74"
              height="74"
              :viewBox="`0 0 74 74`"
              class="-rotate-90 shrink-0"
              aria-hidden="true"
            >
              <circle
                cx="37"
                cy="37"
                :r="RADIUS"
                fill="none"
                stroke-width="7"
                class="stroke-card"
              />
              <circle
                ref="ringBar"
                cx="37"
                cy="37"
                :r="RADIUS"
                fill="none"
                stroke-width="7"
                stroke-linecap="round"
                :stroke-dasharray="`${CIRCUMFERENCE} ${CIRCUMFERENCE}`"
                :stroke-dashoffset="ringOffset"
                class="stroke-primary-hover"
              />
            </svg>
            <span class="text-[11px] font-extrabold text-primary">9%</span>
          </div>
        </div>

        <!-- Milestone badges (auto-scrolls to the latest, like the app) -->
        <div class="chips-container relative ml-1.5">
          <div
            ref="chipsRow"
            class="chips flex gap-1.5 overflow-x-auto mb-4 px-2"
          >
            <span
              v-for="milestone in reachedChips"
              :key="milestone"
              class="shrink-0 whitespace-nowrap rounded-full border border-transparent bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-on-primary-soft"
            >
              ✓ {{ milestone }}
            </span>
            <span
              class="shrink-0 whitespace-nowrap rounded-full border border-dashed border-accent bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent"
            >
              Next: 18 months
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- Pinned total savings (TotalSavingsCard port) -->
    <div
      class="mock-rise absolute inset-x-0 bottom-16 z-40 border-t border-border bg-linear-to-b from-transparent to-surface/85 py-3 backdrop-blur"
      style="animation-delay: 140ms"
    >
      <section
        class="relative overflow-hidden rounded-2xl bg-linear-to-br from-depth via-primary to-primary-hover p-4 text-white shadow-md"
      >
        <div
          class="pointer-events-none absolute -right-8 -top-8 h-32.5 w-32.5 rounded-full bg-white/10"
        />
        <div class="flex items-center gap-1.5">
          <div class="min-w-0">
            <p class="text-[11px] font-extrabold uppercase tracking-[0.14em] opacity-85">
              Total savings
            </p>
            <p class="mt-0.5 text-2xl font-black tracking-tight tabular-nums">
              {{ formatEUR(displayTotal) }}
            </p>
          </div>
          <p class="ml-auto text-right text-[10px] font-bold leading-snug opacity-90">
            since {{ sinceLabel }}
          </p>
        </div>
      </section>
    </div>

    <!-- Tab bar (TabBar port) -->
    <nav
      class="mock-rise absolute inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 pt-1.5 backdrop-blur"
      style="animation-delay: 140ms"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-y-1.5 left-0 w-1/3 transition-transform duration-300 ease-out motion-reduce:transition-none"
        :style="{ transform: `translateX(${pillOffset}%)` }"
      >
        <div class="h-full rounded-xl bg-linear-to-b from-primary/10 to-transparent" />
      </div>
      <ul class="relative flex items-stretch">
        <li
          v-for="tab in tabs"
          :key="tab.label"
          class="flex-1"
        >
          <div
            class="flex flex-col items-center gap-0.5 px-4 py-2.5 text-[11px] font-medium transition-colors"
            :class="tab.active ? 'text-primary' : 'text-muted'"
          >
            <component
              :is="tab.icon"
              class="h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            {{ tab.label }}
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.chips::-webkit-scrollbar,
.main-scroll::-webkit-scrollbar {
  display: none;
}

.chips-container::before,
.chips-container::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 12px;
  pointer-events: none;
}

.chips-container::before {
  left: 0;
  background-image: linear-gradient(to right, var(--color-surface), transparent);
}

.chips-container::after {
  right: 0;
  background-image: linear-gradient(to left, var(--color-surface), transparent);
}

/* Entrance stagger (the app's enter-rise) */
@keyframes mock-rise {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.mock-rise {
  animation: mock-rise 0.5s ease-out both;
}

/* Reduced motion / animations disabled: show the screen fully settled. */
@media (prefers-reduced-motion: reduce) {
  .mock-rise {
    animation: none;
  }
}
</style>
