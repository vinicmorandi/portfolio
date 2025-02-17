<script setup>
import anime from "animejs/lib/anime.es.js"

defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})

defineEmits(["click"])

onMounted(() => {
  anime.timeline({ loop: false }).add({
    targets: ".testimonial",
    translateY: ["1.3em", 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 750,
    delay: (el, i) => 150 * i + 1,
  })
})
</script>

<template>
  <button
    class="custom_button flex items-center text-purple-500 font-medium uppercase text-xl"
    :class="{
      isActive,
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.custom_button {
  cursor: pointer;
  font-size: 18px;
  position: relative;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;

    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.15s;
  }

  &:hover::before,
  &.isActive::before {
    transform-origin: 0% 50% !important;
    transform: scale3d(1, 1, 1) !important;
  }
}
</style>
