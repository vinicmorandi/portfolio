a
<script setup>
import anime from "animejs/lib/anime.es.js"

definePageMeta({
  pageTransition: {
    mode: "out-in",
    onEnter: (el, done) => {
      anime({
        targets: el,
        opacity: [0, 1],
        translateX: [-600, 0],
        duration: 1000,
        complete: done,
      })
    },
    onLeave: (el, done) => {
      anime({
        targets: el,
        opacity: [1, 0],
        translateY: [0, 600],
        duration: 500,
        complete: done,
      })
    },
  },
})
</script>

<template>
  <div>
    <NuxtLink to="/" class="absolute top-4 left-20">
      <CustomButton>
        <VIcon icon="mdi-chevron-left" class="mb-[1px] mr-2" color="#a855f7" />
        <span>Back</span>
      </CustomButton>
    </NuxtLink>
    <h1 class="text-7xl mt-20 mb-10 text-center font-black">About me</h1>
    <PortfolioAboutMe />
  </div>
</template>
