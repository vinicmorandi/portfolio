<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'title',
  },
)
</script>

<template>
  <div
    class="flex flex-col justify-center items-center px-20 h-full text-white"
    :style="{
      background: '#121212'
    }"
  >
    <h1 class="center text-7xl font-black">
      <span class="text-wrapper">
        <span class="letters">Welcome!</span>
      </span>
    </h1>

    <h2 id="presentation" class="center text-3xl mt-4 font-extrabold">
      My name is
      <span class="text-purple-500">Vinícius Morandi</span>, and I build applications on the web
    </h2>
    <div
      class="absolute rounded-full pointer-events-none"
      :style="{
        background: 'radial-gradient(rgba(168, 85, 247, 0.15), transparent 60%)',
        right: `-400px`,
        bottom: `-400px`,
        width: `800px`,
        height: `800px`,
      }"
    />
    <div
      class="absolute rounded-full pointer-events-none"
      :style="{
        background: 'radial-gradient(rgba(168, 85, 247, 0.15), transparent 60%)',
        top: `-300px`,
        left: `-300px`,
        width: `600px`,
        height: `600px`,
      }"
    />
  </div>
</template>
