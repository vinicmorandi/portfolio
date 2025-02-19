<script setup>
import { useMouse, useWindowSize } from '@vueuse/core'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics } from '@vercel/analytics/nuxt'

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value),
)

const size = computed(() => Math.max(600 - distance.value / 4, 200))
</script>

<template>
  <div>
    <ClientOnly>
      <div
        v-if="width > 1024"
        class="fixed rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        :style="{
          background:
            'radial-gradient(rgba(168, 85, 247, 0.15), transparent 60%)',
          'z-index': 10,
          left: `${x}px`,
          top: `${y}px`,
          width: `${size}px`,
          height: `${size}px`,
        }"
      />
    </ClientOnly>
    <div>
      <slot />
    </div>
    <SpeedInsights />
    <Analytics />
  </div>
</template>
