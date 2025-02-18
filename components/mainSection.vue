<script setup>
import {
  LazyAboutMeSection,
  LazyExperiencesSection,
  LazyTestimonialsSection,
} from '#components'
import anime from 'animejs/lib/anime.es.js'

defineEmits(['activateSection'])

const socials = [
  {
    href: 'https://gmail.com',
    icon: 'line-md:email',
    text: 'Send me an Email',
  },
  {
    href: 'https://www.linkedin.com/in/vinicmorandi/',
    icon: 'line-md:linkedin',
    text: 'LinkedIn',
  },
  {
    href: 'https://github.com/',
    icon: 'line-md:github',
    text: 'Github',
  },
  {
    href: 'https://www.instagram.com/vinicmorandi/',
    icon: 'line-md:instagram',
    text: 'Instagram',
  },
  {
    href: 'https://docs.google.com/document/d/1U2_Nj58VzFFuh9HxCjgWuMLv2zqxR3asJSThPFgnerw/edit?usp=sharing',
    icon: 'line-md:document-list',
    text: 'Resumé',
  },
]

const sections = [
  {
    text: 'About Me',
    component: LazyAboutMeSection,
  },
  {
    text: 'Experiences',
    component: LazyExperiencesSection,
  },
  {
    text: 'Testimonials',
    component: LazyTestimonialsSection,
  },
]

const activeSection = ref(null)

onMounted(() => {
  const textWrapper = document.querySelector('.ml6 .letters')
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>",
  )

  anime
    .timeline({ loop: false })
    .add({
      targets: '.ml6 .letter',
      translateY: ['1.3em', 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i,
    })
    .add({
      targets: '#presentation',
      translateY: ['1.3em', 0],
      translateZ: 0,
      opacity: [0, 1],
      duration: 750,
      delay: (el, i) => 50 * i,
    })
    .add({
      targets: '.buttons .button-item',
      translateX: ['-1.3em', 0],
      translateZ: 0,
      opacity: [0, 1],
      duration: 750,
      delay: (el, i) => 50 * i,
    })
})
</script>

<template>
  <div class="flex justify-between items-center px-20 h-screen gap-20">
    <div class="w-1/2">
      <main>
        <h1 class="pt-64 ml6 text-7xl font-black">
          <span class="text-wrapper">
            <span class="letters">Welcome!</span>
          </span>
        </h1>

        <h2 id="presentation" class="text-3xl mt-4 font-extrabold">
          My name is
          <span class="text-purple-500">Vinícius Morandi</span>
          , and I build applications on the web
        </h2>
      </main>

      <div class="buttons mt-16 flex flex-col gap-4">
        <nav>
          <ul class="buttons mt-16 flex flex-col gap-4">
            <li
              v-for="section in sections"
              :key="section.text"
              class="button-item"
            >
              <CustomButton
                :is-active="activeSection?.text === section.text"
                @click="activeSection = section"
              >
                {{ section.text }}
              </CustomButton>
            </li>
          </ul>
        </nav>

        <footer>
          <ul class="flex gap-1 mt-40 -ml-4">
            <li
            v-for="social in socials"
            :key="social.icon"
            class="button-item"
            >
            <AnimatedTooltip
              :text="social.text"
            >
              <a :href="social.href" target="_blank">
                <Icon size="30" :name="social.icon" style="color: #a855f7;" />
              </a>
            </AnimatedTooltip>
            </li>
          </ul>
        </footer>
      </div>
    </div>
    <div
      class="w-1/2 h-[80vh] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <component
        :is="activeSection?.component"
        v-if="activeSection?.component"
      />
    </div>
  </div>
</template>

<style>
.ml6 {
  position: relative;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.ml6 .letter {
  display: inline-block;
}
</style>
