<template>
  <section class="relative overflow-hidden py-20 sm:py-24">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[640px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
    />

    <div class="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <span
        class="text-5xl font-black leading-none text-primary/20"
        aria-hidden="true"
      >
        “
      </span>
      <h2
        class="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
      >
        You don't need more willpower.<br>
        <span class="text-primary">You need a counter.</span>
      </h2>
      <p class="mx-auto mt-5 max-w-xl text-lg text-muted">
        One day at a time — counted. Download So I Quit and start the clock.
      </p>
      <div class="mt-8 flex justify-center">
        <StoreBadges />
      </div>
    </div>
  </section>
</template>
