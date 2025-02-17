<script setup>
import anime from "animejs/lib/anime.es.js"

const props = defineProps({
  identifier: { type: String, default: "title" },
  text: { type: String, default: "Text" },
  tag: { type: String, default: "h1" },
  additionalClasses: { type: String, default: "" },
})
  
onMounted(() => {
  const textWrapper = document.querySelector(`#${props.identifier}.ml6 .letters`)
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  )

  anime.timeline({ loop: false }).add({
    targets: `#${props.identifier}.ml6 .letters`,
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
})
</script>

<template>
  <component :is="tag" :id="identifier" :class="`ml6 ${additionalClasses}`">
    <span class="text-wrapper">
      <span class="letters">{{ text }}</span>
    </span>
  </component>
</template>