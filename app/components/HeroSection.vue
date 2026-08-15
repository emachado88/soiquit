<script setup lang="ts">
const downloadURL = useRuntimeConfig().public.downloadURL
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden"
  >
    <!-- Soft brand backdrop -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-soft/70 via-bg to-bg"
    />
    <div
      class="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
    />

    <div
      class="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:pt-20"
    >
      <!-- Copy -->
      <div class="text-center lg:text-left">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary shadow-sm"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-accent" />
          Free · Offline-first
        </p>

        <h1
          class="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
        >
          Quit a habit.<br>
          <span class="text-primary">Watch the savings grow.</span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
          So I Quit counts every day, hour and minute since you stopped — and
          turns what you used to spend into savings you can see. No account. No
          ads. No judgment.
        </p>

        <div class="mt-8 flex justify-center lg:justify-start">
          <a
            :href="downloadURL"
            class="rounded-full bg-primary px-4 py-2 text-xl font-bold text-white uppercase shadow-sm transition hover:bg-primary-hover"
          >
            Download the app
          </a>
        </div>

        <p class="mt-6 text-sm font-semibold text-muted">
          Works fully offline · Your data is yours · No ads
        </p>
      </div>

      <!-- Phone -->
      <div class="relative">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl"
        />
        <div class="floaty">
          <PhoneFrame>
            <MockProgress />
          </PhoneFrame>
        </div>
      </div>
    </div>
  </section>
</template>
