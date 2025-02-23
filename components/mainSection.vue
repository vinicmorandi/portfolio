<script setup>
import {
  LazyAboutMeSection,
  LazyExperiencesSection,
  LazyTestimonialsSection,
} from '#components'
import anime from 'animejs/lib/anime.es.js'

defineEmits(['activateSection'])

const { t, locale, setLocale } = useI18n()

const activeSection = ref(null)

const socials = computed(() => [
  {
    href: 'mailto:viniciuscmorandi@gmail.com',
    icon: 'line-md:email',
    text: t('mainSection.socials.email'),
  },
  {
    href: 'https://www.linkedin.com/in/vinicmorandi/',
    icon: 'line-md:linkedin',
    text: 'LinkedIn',
  },
  {
    href: 'https://github.com/vinicmorandi',
    icon: 'line-md:github',
    text: 'Github',
  },
  {
    href: 'https://www.instagram.com/vinicmorandi/',
    icon: 'line-md:instagram',
    text: 'Instagram',
  },
  {
    href: t('mainSection.socials.resumeUrl'),
    icon: 'line-md:document-list',
    text: t('mainSection.socials.resume'),
  },
])

const sections = computed(() => [
  {
    text: t('mainSection.sections.aboutMe'),
    component: LazyAboutMeSection,
  },
  {
    text: t('mainSection.sections.experiences'),
    component: LazyExperiencesSection,
  },
  {
    text: t('mainSection.sections.testimonials'),
    component: LazyTestimonialsSection,
  },
])

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
  <div class="flex justify-between items-center px-8 lg:px-20 h-full lg:gap-20">
    <div class="w-full lg:w-1/2">
      <div class="buttons mt-10 lg:mt-20">
        <button class="button-item" @click="setLocale(locale === 'en' ? 'pt' : 'en')">
          <Icon
            size="30"
            name="material-symbols:translate"
            style="color: #a855f7;"
          />
        </button>
      </div>

      <main>
        <h1 class="text-center lg:text-left pt-24 lg:pt-32 ml6 text-4xl lg:text-7xl font-black">
          <span class="text-wrapper">
            <span class="letters">{{ $t('mainSection.welcome') }}</span>
          </span>
        </h1>

        <h2 id="presentation" class="text-center lg:text-left text-lg lg:text-3xl mt-4 font-extrabold">
          {{ $t('mainSection.myNameIs') }}
          <span class="text-purple-500">Vinícius Morandi</span>, {{ $t('mainSection.andIBuild') }}
        </h2>
      </main>

      <div class="buttons mt-8 lg:mt-16 flex flex-col gap-4">
        <nav>
          <ul class="buttons mt-4 lg:mt-16 flex flex-col items-center lg:items-start gap-3 lg:gap-4">
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
          <ul class="flex justify-center lg:justify-start gap-0.5 lg:gap-1 mt-20 lg:mt-32 lg:-ml-4">
            <li
              v-for="social in socials"
              :key="social.icon"
              class="button-item"
            >
              <AnimatedTooltip :text="social.text">
                <a
                  :href="social.href"
                  :target="social.href.includes('mailto') ? null : '_blank'"
                >
                  <Icon size="30" :name="social.icon" style="color: #a855f7;" />
                </a>
              </AnimatedTooltip>
            </li>
          </ul>
        </footer>
      </div>
    </div>
    <div
      v-if="width > 1024 || activeSection?.component"
      class="z-10 lg:z-0 w-screen bg-[#121212] absolute lg:relative left-0 top-0 lg:w-1/2 h-screen lg:h-[80vh] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div class="lg:hidden ml-4 my-6 flex">
        <Icon
            size="30"
            style="color: #a855f7;" 
            name="material-symbols:chevron-left-rounded"
          />
        <CustomButton @click="activeSection = null">
          Back
        </CustomButton>
      </div>

      <component
        :is="{...activeSection.component}"
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
