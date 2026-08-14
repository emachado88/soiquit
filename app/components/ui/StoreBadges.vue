<script setup lang="ts">
// Store badges. hrefs are placeholders (#) until the store listings are live —
// swap in the real URLs and the header CTA when published.
withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })

const pid = useId()
const clipId = `play-tri-${pid}`

const applePath
  = 'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <!-- App Store -->
    <a
      href="#"
      aria-label="Download on the App Store"
      :class="[
        'flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition',
        tone === 'dark'
          ? 'bg-ink text-white hover:bg-primary'
          : 'bg-white text-ink ring-1 ring-white/30 hover:bg-white/90',
      ]"
    >
      <svg
        viewBox="0 0 384 512"
        class="h-5 w-5 fill-current"
        aria-hidden="true"
      >
        <path :d="applePath" />
      </svg>
      <span class="text-left leading-tight">
        <span class="block text-[10px] font-medium opacity-70">Download on the</span>
        <span class="block text-base font-bold">App Store</span>
      </span>
    </a>

    <!-- Google Play -->
    <a
      href="#"
      aria-label="Get it on Google Play"
      :class="[
        'flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition',
        tone === 'dark'
          ? 'bg-ink text-white hover:bg-primary'
          : 'bg-white text-ink ring-1 ring-white/30 hover:bg-white/90',
      ]"
    >
      <svg
        viewBox="0 0 512 512"
        class="h-5 w-5"
        aria-hidden="true"
      >
        <defs>
          <clipPath :id="clipId">
            <path d="M74 28 L455 256 L74 484 Z" />
          </clipPath>
        </defs>
        <g :clip-path="`url(#${clipId})`">
          <rect
            x="60"
            width="105"
            height="512"
            fill="#00d0ff"
          />
          <rect
            x="165"
            width="100"
            height="512"
            fill="#ffca00"
          />
          <rect
            x="265"
            width="100"
            height="512"
            fill="#ff3a44"
          />
          <rect
            x="365"
            width="130"
            height="512"
            fill="#00a04d"
          />
        </g>
      </svg>
      <span class="text-left leading-tight">
        <span class="block text-[10px] font-medium opacity-70">Get it on</span>
        <span class="block text-base font-bold">Google Play</span>
      </span>
    </a>
  </div>
</template>
