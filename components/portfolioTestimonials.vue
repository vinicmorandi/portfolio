<script setup>
import anime from 'animejs/lib/anime.es.js'

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
  <section class="flex flex-col justify-center items-center h-full mx-auto px-8">
    <div
      class="testimonial flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 pb-10"
    >
      <NuxtImg
        class="h-12 self-start -ml-2 -mb-4"
        src="/logos/saguiai.webp"
        alt="Sagui.AI logo"
      />
      <figure class="mt-10 flex flex-auto flex-col justify-between">
        <blockquote class="text-base text-gray-300">
          <p>
            "It is a pleasure to recommend Vinícius. An exceptional
            professional, with consistent and above-average deliveries and
            results. Capable of exceeding expectations in any challenge he
            faces. In addition to his impressive technical skills, Vinícius is
            an excellent team player, always willing to share knowledge and
            contribute to collective success. Any team would be lucky to have
            him on board, and I am confident that he will contribute positively
            from day one.”
          </p>
        </blockquote>
        <figcaption class="mt-10 flex items-center gap-x-6">
          <NuxtImg
            class="size-14 rounded-full bg-gray-800"
            src="/images/marcio.jpg"
            alt="Márcio Bortolini dos Santos, Lead Software Engineer at Sagui.AI"
          />
          <div class="text-base">
            <div class="font-semibold text-white">
              Márcio Bortolini dos Santos
            </div>
            <div class="mt-1 text-gray-400">
              Lead Software Engineer at Sagui.AI
            </div>
          </div>
        </figcaption>
      </figure>
    </div>

    <div class="testimonial border-t h-[1px] w-full border-white/10 mt-10"/>

    <div class="testimonial flex flex-col pt-10">
      <NuxtImg
        class="h-12 self-start -ml-2 -mb-4"
        src="/logos/saguiai.webp"
        alt="Sagui.AI logo"
      />
      <figure class="mt-10 flex flex-auto flex-col justify-between">
        <blockquote class="text-base text-gray-300">
          <p>
            “Vinícius is an exceptional professional, highly committed to his
            deliveries and an exemplary coworker. His ease of getting along with
            others and his brilliance as a programmer make him stand out in any
            team. There are professionals who meet expectations, others who
            exceed them, but Vinícius goes beyond. He belongs to the rare
            category of those who consistently excel in all aspects. I recommend
            Vinícius without reservation for any challenge or opportunity he
            decides to pursue in the technology field.”
          </p>
        </blockquote>
        <figcaption class="mt-10 flex items-center gap-x-6">
          <NuxtImg
            class="size-14 rounded-full bg-gray-800"
            src="/images/fabio.jpg"
            alt="Fábio Brand, CEO of Sagui.AI"
          />
          <div class="text-base">
            <div class="font-semibold text-white">Fábio Brand</div>
            <div class="mt-1 text-gray-400">CEO of Sagui.AI</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
