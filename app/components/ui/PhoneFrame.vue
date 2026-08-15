<template>
  <div class="relative mx-auto w-75 sm:w-82.5">
    <div
      class="relative rounded-[2.8rem] border-10 border-ink dark:border-muted bg-ink dark:bg-muted shadow-[0px_0px_30px_15px] shadow-primary/20"
    >
      <div class="relative overflow-hidden rounded-[2.2rem] bg-surface">
        <!-- Dynamic island -->
        <div
          class="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink dark:bg-muted"
        />
        <div class="px-4 pb-5 pt-11">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
