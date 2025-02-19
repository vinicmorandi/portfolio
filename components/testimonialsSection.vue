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
  <section class="flex flex-col justify-center items-center mx-auto px-8">
    <article
      class="testimonial flex flex-col sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 pb-6"
    >
      <NuxtImg
        class="h-12 self-start -ml-2 -mb-4"
        src="/logos/saguiai.webp"
        alt="Sagui.AI logo"
      />
      <figure class="mt-10 flex flex-auto flex-col justify-between">
        <blockquote class="text-sm lg:text-base text-gray-300">
          <p>
            "{{$t('testimonialsSection.marcio.text')}}”
          </p>
        </blockquote>
        <figcaption class="mt-10 flex items-center gap-x-3 lg:gap-x-6">
          <NuxtImg
            class="size-10 lg:size-14 rounded-full bg-gray-800"
            src="/images/marcio.jpg"
            :alt="`Márcio Bortolini dos Santos, ${$t('testimonialsSection.marcio.position')}`"
          />
          <div class="text-sm lg:text-base">
            <div class="font-semibold text-white">
              Márcio Bortolini dos Santos
            </div>
            <div class="mt-1 text-gray-400">
              {{ $t('testimonialsSection.marcio.position') }}
            </div>
          </div>
        </figcaption>
      </figure>
    </article>

    <div class="testimonial border-t h-[1px] w-full border-white/10 mt-6 lg:mt-10"/>

    <article class="testimonial flex flex-col pt-6 lg:pt-10 pb-6 lg:pb-0">
      <NuxtImg
        class="h-12 self-start -ml-2 -mb-4"
        src="/logos/saguiai.webp"
        alt="Sagui.AI logo"
      />
      <figure class="mt-10 flex flex-auto flex-col justify-between">
        <blockquote class="text-sm lg:text-base text-gray-300">
          <p>
            {{ $t('testimonialsSection.fabio.text') }}”
          </p>
        </blockquote>
        <figcaption class="mt-10 flex items-center gap-x-3 lg:gap-x-6">
          <NuxtImg
            class="size-10 lg:size-14 rounded-full bg-gray-800"
            src="/images/fabio.jpg"
            :alt="`Fábio Brand, ${$t('testimonialsSection.fabio.position')}`"
          />
          <div class="text-sm lg:text-base">
            <div class="font-semibold text-white">Fábio Brand</div>
            <div class="mt-1 text-gray-400">{{ $t('testimonialsSection.fabio.position') }}</div>
          </div>
        </figcaption>
      </figure>
    </article>
  </section>
</template>
