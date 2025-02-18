<script setup>
import anime from 'animejs/lib/anime.es.js'
import { useMouse } from "@vueuse/core"

const { x, y } = useMouse()

const cherriesActive = ref(false)

const activateCherry = () => {
  anime.remove('#cherry')

  anime({
    targets: '#cherry',
    scale: ['0', 1],
    opacity: [0, 1],
    duration: 750,
  })

  cherriesActive.value = true
}

const deactivateCherry = () => {
  anime.remove('#blossom_container')
  anime.remove('#cherry')

  anime({
    targets: '#blossom_container',
    opacity: [1, 0],
    duration: 750,
  })

  anime({
    targets: '#cherry',
    opacity: [1, 0],
    duration: 750,
  })

  setTimeout(() => {
    cherriesActive.value = false
  }, 100)  
}

onMounted(() => {
  anime.timeline({ loop: false }).add({
    targets: '.testimonial',
    translateY: ['1.3em', 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 750,
    delay: (el, i) => 150 * i + 1,
  })
})
</script>

<template>
  <section class="flex flex-col gap-6 justify-center h-full items-center px-8">
    <div class="testimonial">
      <p class="text-base text-gray-400">
        {{ $t('aboutMeSection.iAmAnAccomplished') }}
        <span class="font-semibold text-gray-300">{{ $t('aboutMeSection.aiDrivenTools') }}</span>,
        <span class="font-semibold text-gray-300">{{ $t('aboutMeSection.erpSystems') }}</span>,
        <span class="font-semibold text-gray-300">{{ $t('aboutMeSection.ecommercePlatforms') }}</span>, {{ $t('aboutMeSection.and') }}
        <span class="font-semibold text-gray-300">{{ $t('aboutMeSection.mobileApplications') }}</span>.
        {{ $t('aboutMeSection.iBring') }}
      </p>
    </div>
    <div class="testimonial">
      <p class="text-base text-gray-400">
        {{ $t('aboutMeSection.currentlyIm') }}
        <a
          href="https://sagui.ai"
          target="_blank"
          class="text-purple-600 font-semibold">
          Sagui.AI
        </a>
        {{ $t('aboutMeSection.whereIWorked') }}
        <span class="font-semibold text-gray-300">{{ $t('aboutMeSection.scalable') }}</span>,
        <span class="font-semibold text-gray-300">{{ $t('aboutMeSection.accessible') }}</span>
        {{ $t('aboutMeSection.componentsAnd') }}
      </p>
    </div>

    <div class="testimonial">
      <p class="text-base text-gray-400">
        {{ $t('aboutMeSection.inMySpareTime') }}
        <span class="cute-text font-semibold" @mouseover="activateCherry" @mouseout="deactivateCherry">Cherry</span>,
        {{ $t('aboutMeSection.orTryingToGet') }}
      </p>
    </div>
    
    <figure 
      id="cherry"
      class="rounded-xl pointer-events-none bg-neutral-900 p-8 border-2 border-transparent hover:border-[#fcbbc7]"
      :style="{
        position: 'fixed',
        top: cherriesActive ? `${y - 200}px` : '-100vh',
        left: cherriesActive ? `${x - 230}px` : '-100vw',
      }"
    >
      <NuxtImg
        class="rounded-xl bg-gray-800"
        src="/cherry/1.webp"
        alt="Cherry, my lovely cat"
        height="200"
      />
      <figcaption class="mt-8 flex items-center justify-center gap-x-6">
          <span class="center cute-text text-3xl font-semibold tracking-wide text-white">
            Cherry :3
          </span>
      </figcaption>
    </figure>

    <CherryBlossoms v-if="cherriesActive" />
  </section>
</template>

<style>
.cute-text {
  font-family: "Indie Flower", serif;
  color: #fcbbec;
}
</style>