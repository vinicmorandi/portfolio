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
        I am an accomplished Full-Stack Developer with expertise in
        designing and implementing advanced solutions, including
        <span class="font-semibold text-gray-300">AI-driven tools</span>,
        <span class="font-semibold text-gray-300">ERP systems</span>,
        <span class="font-semibold text-gray-300">e-commerce platforms</span>, and
        <span class="font-semibold text-gray-300">mobile applications</span>. I bring a strong commitment to excellence,
        adaptability, and a
        collaborative mindset to every project. My professional experience
        includes over a year of contributing to a remote, U.S.-based team,
        where I consistently delivered impactful results and surpassed
        expectations.
      </p>
    </div>
    <div class="testimonial">
      <p class="text-base text-gray-400">
        Currently, I'm a Software Development Specialist at
        <a
          href="https://sagui.ai"
          target="_blank"
          class="text-purple-600 font-semibold">
          Sagui.AI
        </a>
        , where I worked on a website generator, a mobile app generator with
        collaborative features, and a WhatsApp automation system for custom
        workflows and AI-generated content. I also designed a social media
        planner that streamlines scheduling, analytics, and posting, while
        migrating the codebase to the latest Vue 3 + Nuxt framework —
        integrating comprehensive testing along the way — and developing
        <span class="font-semibold text-gray-300">scalable</span>,
        <span class="font-semibold text-gray-300">accessible</span>
        components and APIs that enhance the overall platform functionality.
      </p>
    </div>

    <div class="testimonial">
      <p class="text-base text-gray-400">
        In my spare time, I'm usually reading, hanging out with 
        <span class="cute-text font-semibold" @mouseover="activateCherry" @mouseout="deactivateCherry">Cherry</span>,
        or trying to get a golden seal on all jokers in Balatro.
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