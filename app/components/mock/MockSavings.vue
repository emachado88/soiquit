<script setup lang="ts">
const breakdown = [
  { label: 'Smoking', daily: '€4.50', total: '€576.00', bar: 'w-3/4' },
  { label: 'Coffee', daily: '€2.20', total: '€281.60', bar: 'w-1/2' },
  { label: 'Junk food', daily: '€2.30', total: '€294.40', bar: 'w-3/5' },
]
</script>

<template>
  <div class="space-y-3 text-ink">
    <!-- Total savings -->
    <div class="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-muted">
        Total saved
      </p>
      <p class="mt-1 text-4xl font-black tracking-tight text-primary">
        €1,152.40
      </p>
      <p class="mt-1 text-[11px] font-medium text-muted">
        since you quit · 128 days
      </p>
    </div>

    <!-- Breakdown -->
    <div class="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-muted">
        Where it comes from
      </p>
      <div class="mt-3 space-y-3">
        <div
          v-for="row in breakdown"
          :key="row.label"
        >
          <div class="flex items-center justify-between text-[11px]">
            <span class="font-bold">{{ row.label }}</span>
            <span class="font-medium text-muted">
              {{ row.daily }}/day · <span class="font-bold text-ink">{{ row.total }}</span>
            </span>
          </div>
          <div class="mt-1 h-1.5 rounded-full bg-card">
            <div
              class="h-1.5 rounded-full bg-gradient-to-r from-primary to-primary-hover"
              :class="row.bar"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Note -->
    <div class="rounded-2xl bg-depth px-4 py-3 text-white">
      <p class="text-[11px] font-bold">
        Counted in your currency
      </p>
      <p class="mt-0.5 text-[10px] leading-relaxed text-white/60">
        Set what the habit cost you per day — the app does the math.
      </p>
    </div>
  </div>
</template>
