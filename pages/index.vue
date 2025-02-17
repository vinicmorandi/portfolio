<script setup>
// import anime from "animejs/lib/anime.es.js"

const teste = (aa) => {
  console.log(aa)
}
</script>

<template>
  <div>
    <PortfolioHeader @activate-section="teste" />
  </div>
</template>
