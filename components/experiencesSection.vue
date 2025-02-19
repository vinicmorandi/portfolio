<script setup>
import anime from 'animejs/lib/anime.es.js'

const { t } = useI18n()

onMounted(() => {
  anime.timeline({ loop: false }).add({
    targets: '.experience',
    translateY: ['1.3em', 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 750,
    delay: (el, i) => 150 * i + 1,
  })
})

const experiences = computed(() => [
  {
    url: 'https://sagui.ai',
    position: t('experiencesSection.sagui.position'),
    company: 'Sagui.AI',
    startDate: t('experiencesSection.sagui.startDate'),
    endDate: t('experiencesSection.sagui.endDate'),
    description: t('experiencesSection.sagui.description'),
    tags: [
      'Vue',
      'React',
      'Flutter',
      'Typescript',
      'Laravel',
      'Deno',
      'Postgres',
      'Socket.IO',
      'Vitest',
      'Marketing',
      'Stripe',
      'AI',
      'Chatbots',
      'Facebook',
      'Whatsapp',
    ],
  },
  {
    url: 'https://www.linkedin.com/company/onlycontrol-software/',
    position: t('experiencesSection.onlyControl.position'),
    company: 'OnlyControl',
    startDate: t('experiencesSection.onlyControl.startDate'),
    endDate: t('experiencesSection.onlyControl.endDate'),
    description: t('experiencesSection.onlyControl.description'),
    tags: ['Vue', 'Laravel', 'Typescript', 'Postgres', 'Deno', 'Vitest', 'Nonprofits', 'MySQL', 'Stripe', 'Checkout'],
  },
  {
    url: 'https://eccosys.com.br/',
    position: t('experiencesSection.eccosys.position'),
    company: 'Eccosys',
    startDate: t('experiencesSection.eccosys.startDate'),
    endDate: t('experiencesSection.eccosys.endDate'),
    description: t('experiencesSection.eccosys.description'),
    tags: ['Angular', 'PHP', 'MySQL', 'Node', 'ERP', 'Logistics'],
  },
  {
    url: 'https://includer.com.br/',
    position: t('experiencesSection.includer.position'),
    company: 'Includer',
    startDate: t('experiencesSection.includer.startDate'),
    endDate: t('experiencesSection.includer.endDate'),
    description: t('experiencesSection.includer.description'),
    tags: ['React', 'Redux', 'Laravel', 'Postgres', 'E-commerce'],
  },
  {
    url: 'https://eccosys.com.br/',
    position: t('experiencesSection.eccosysInternship.position'),
    company: 'Eccosys',
    startDate: t('experiencesSection.eccosysInternship.startDate'),
    endDate: t('experiencesSection.eccosysInternship.endDate'),
    description: t('experiencesSection.eccosysInternship.description'),
    tags: ['Angular', 'PHP', 'MySQL', 'ERP'],
  },
])
</script>

<template>
  <section>
    <ol
      class="ml-8 lg:mx-8 px-2 py-2 relative border-s border-gray-200 dark:border-gray-700"
    >
      <a
        v-for="(experience, index) in experiences"
        :key="index"
        :href="experience.url"
        target="_blank"
        @mouseover="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <li class="mb-10 ms-6 p-4 rounded-xl hover:bg-neutral-900 experience">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-11 ring-8 ring-white dark:ring-purple-950 dark:bg-purple-900"
          >
            <svg
              class="w-2.5 h-2.5 text-purple-800 dark:text-purple-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
            {{ experience.position }} · {{ experience.company }}
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-500"
          >
            {{ experience.startDate }} - {{ experience.endDate }}
          </time>
          <p class="my-4 text-sm lg:text-base font-normal text-gray-400">
            {{ experience.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in experience.tags"
              :key="tag"
              class="bg-purple-100 text-purple-800 text-xs lg:text-sm font-medium px-3 py-1 rounded-sm dark:bg-purple-900 dark:text-purple-300 rounded-xl"
            >
              {{ tag }}
            </span>
          </div>
        </li>
      </a>
    </ol>
  </section>
</template>
