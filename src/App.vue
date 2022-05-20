<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="w-full h-full bg-mono-800">
      <main class="h-[100vh]">
        <img class="absolute h-[1000px] right-60 drop-shadow-xl" src="@/assets/img/mugshot_transparent.png" />
        <div class="bg-circles bg-[length:225px_225px] flex flex-col gap-5 py-64 px-32 m-auto max-w-[1440px] h-[1000px] ">
          <h1 class="font-koulen text-mono-200 drop-shadow-xl select-none">Dylan<br />Noorland</h1>

          <h3 class="text-olive-500 text-3xl uppercase font-semibold drop-shadow-md select-none">
            I ❤ Computer Science
          </h3>
        </div>
        <div class="w-full h-full bg-mono-900">
          
        </div>
      </main>
  </main>
</template>