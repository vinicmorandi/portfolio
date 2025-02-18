<script setup>
import anime from 'animejs/lib/anime.es.js'

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

const experiences = [
  {
    url: 'https://sagui.ai',
    position: 'Software Development Specialist',
    company: 'Sagui.AI',
    startDate: 'May 2024',
    endDate: 'Present',
    description: `Worked on a website generator, a mobile app generator with collaborative features, and a WhatsApp automation system for custom workflows and AI-generated content. I also designed a social media planner that streamlines scheduling, analytics, and posting, while migrating the codebase to the latest Vue 3 + Nuxt framework—integrating comprehensive testing along the way—and developing scalable, accessible components and APIs that enhance the overall platform functionality.`,
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
    position: 'Full-Stack Developer',
    company: 'OnlyControl',
    startDate: 'April 2023',
    endDate: 'May 2024',
    description:
      'Collaborated with UncommonGood, a key U.S.-based business partner, to optimize their platform by making feature enhancements tailored for nonprofit organizations. Partnered with cross-functional teams of developers, marketing specialists, and designers to deliver scalable solutions, including an invoice and proposal management system, donation tracking tools and a sweepstakes platform to boost donor engagement, an integration with Stripe plans and Stripe Checkout, and a UI/UX redesign that improved platform usability and increased client satisfaction.',
    tags: ['Vue', 'Laravel', 'Typescript', 'Postgres', 'Deno', 'Vitest', 'Nonprofits', 'MySQL', 'Stripe', 'Checkout'],
  },
  {
    url: 'https://eccosys.com.br/',
    position: 'Full-Stack Developer',
    company: 'Eccosys',
    startDate: 'August 2022',
    endDate: 'December 2022',
    description:
      'Integrated diverse logistics APIs and e-commerce platforms through custom solutions, maintained and enhanced system dashboards and APIs, and developed space calculation systems to optimize logistics operations. This multifaceted role allowed me to work seamlessly across the technology stack, ensuring cohesive and efficient system performance.',
    tags: ['Angular', 'PHP', 'MySQL', 'Node', 'ERP', 'Logistics'],
  },
  {
    url: 'https://includer.com.br/',
    position: 'Junior Front-End Developer',
    company: 'Includer',
    startDate: 'March 2022',
    endDate: 'August 2022',
    description:
      "Developed both the front-end and back-end of the company's e-commerce platform, ensuring a smooth user experience and reliable functionality. I also authored clear, comprehensive documentation to support the development team, contributing to overall project efficiency and collaboration.",
    tags: ['React', 'Redux', 'Laravel', 'Postgres', 'E-commerce'],
  },
  {
    url: 'https://eccosys.com.br/',
    position: 'Web Development Intern',
    company: 'Eccosys',
    startDate: 'September 2021',
    endDate: 'April 2022',
    description:
      'Had my first experience developing websites on a professional setting, fixed bugs and added new features and customizations to a monolithic code base, and developed a strong understanding of scalability challenges, third-party integrations, and sustainable code architecture through hands-on collaboration in refining legacy systems and delivering tailored solutions.',
    tags: ['Angular', 'PHP', 'MySQL', 'ERP'],
  },
]
</script>

<template>
  <section>
    <ol
      class="mx-8 px-2 py-2 relative border-s border-gray-200 dark:border-gray-700"
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
          <p class="my-4 text-base font-normal text-gray-400">
            {{ experience.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in experience.tags"
              :key="tag"
              class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-sm dark:bg-purple-900 dark:text-purple-300 rounded-xl"
            >
              {{ tag }}
            </span>
          </div>
        </li>
      </a>
    </ol>
  </section>
</template>
