<template>
  <div class="relative mx-auto w-[300px] sm:w-[330px]">
    <div
      class="relative rounded-[2.8rem] border-[10px] border-[#1c1b1a] dark:border-muted bg-[#1c1b1a] dark:bg-muted shadow-2xl shadow-depth/40"
    >
      <div class="relative overflow-hidden rounded-[2.2rem] bg-surface">
        <!-- Dynamic island -->
        <div
          class="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#1c1b1a] dark:bg-muted"
        />
        <div class="px-4 pb-5 pt-11">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
