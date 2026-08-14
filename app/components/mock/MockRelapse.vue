<template>
  <div class="space-y-3 text-ink">
    <!-- Habit card -->
    <div class="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-soft text-sm"
          >🚬</span>
          <div>
            <p class="text-xs font-bold">
              Smoking
            </p>
            <p class="text-[10px] text-muted">
              128 days free
            </p>
          </div>
        </div>
        <span
          class="text-sm"
          aria-hidden="true"
        >🔥</span>
      </div>
      <div class="mt-3 grid grid-cols-2 gap-2">
        <button
          class="rounded-lg bg-primary-soft py-2 text-[11px] font-bold text-on-primary-soft"
        >
          Keep going
        </button>
        <button
          class="rounded-lg border border-danger/30 bg-danger-soft py-2 text-[11px] font-bold text-on-danger-soft"
        >
          Log relapse
        </button>
      </div>
    </div>

    <!-- Snackbar — the forgiving bit -->
    <div class="rounded-2xl bg-depth p-4 text-white shadow-lg">
      <p class="text-[11px] font-bold">
        Logged. No guilt — keep going 💪
      </p>
      <p class="mt-1 text-[10px] leading-relaxed text-white/60">
        Your progress stays. The counter keeps your best run — progress, not
        perfection.
      </p>
    </div>

    <!-- Small reassurance row -->
    <div class="flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2.5 shadow-sm">
      <span
        class="text-base"
        aria-hidden="true"
      >🫂</span>
      <p class="text-[10px] font-medium leading-snug text-muted">
        No streaks lost, no judgment — just an honest counter and a fresh start.
      </p>
    </div>
  </div>
</template>
