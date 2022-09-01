<template>
  <header :data-theme="theme" class="visible 2xl:invisible bg-base-100 z-20 h-24 fixed w-full">
    <div class="p-4 flex flex-row gap-5 items-center justify-between">
      <div class="list-item form-control text-base-content flex-row items-center">
        <label class="hidden sm:block label cursor-pointer">Donker</label>
        <label class="block sm:hidden label cursor-pointer material-icons">dark_mode</label>
        <input type="checkbox" class="toggle sm:toggle-lg toggle-sm toggle-secondary z-10" v-model="themeIsLight" checked />
        <label class="block sm:hidden label cursor-pointer material-icons">light_mode</label>
        <label class="hidden sm:block label cursor-pointer">Licht</label>
      </div>
      <!-- Contact Information -->
      <div class="text-base-content">
        <div class="list-item"><span class="material-icons">email</span>zealbus@outlook.com</div>
        <div class="list-item">
          <span class="material-icons">contact_page</span><a class="underline z-10" href="https://www.linkedin.com/in/dylan-noorland-56169019b/">LinkedIn Profiel</a>
        </div>
        <div class="list-item">
          <span class="material-icons">code</span><a class="underline z-10" href="https://github.com/bituq">GitHub Profiel</a>
        </div>
      </div>
    </div>
  </header>
  <main :data-theme="theme" class="flex justify-center w-full bg-base-300">
    <div class="flex justify-center max-w-7xl h-full bg-base-100 overflow-clip">
      <main class="flex flex-col gap-5 text-base-content px-24 pb-48 min-h-[100vh] mt-[30vh]">
        <router-view />
      </main>
    </div>
    <div id="pin" class="invisible 2xl:visible fixed h-full -translate-x-[830px]">
        <!-- Shapes -->
        <div id="leftRect" class="absolute bg-base-300 rectangle-shape overflow-clip h-[28rem] top-[50%] -translate-y-3/4 z-10">
          <div class="absolute w-full h-full z-0" />
          <div class="py-6 px-3">
            <ul class="text-base-100-content font-semibold">
              <li class="list-item"><span class="material-icons">email</span>zealbus@outlook.com</li>
              <li class="list-item"><span class="material-icons">contact_page</span><a class="underline z-10" href="https://www.linkedin.com/in/dylan-noorland-56169019b/">LinkedIn Profiel</a></li>
              <li class="list-item"><span class="material-icons">code</span><a class="underline z-10" href="https://github.com/bituq">GitHub Profiel</a></li>
              <li class="list-item form-control flex-row items-center">
                <label class="label cursor-pointer">Donker</label>
                <input type="checkbox" class="toggle toggle-secondary z-10" v-model="themeIsLight" checked />
                <label class="label cursor-pointer">Licht</label>
              </li>
            </ul>
          </div>
          <img src="@/assets/img/headshot.webp" class="absolute right-0 bottom-0 object-cover h-[70%] brightness-150" />
        </div>
      </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const lightThemeMedia = window.matchMedia('(prefers-color-scheme: light)')
let themeIsLight = ref(lightThemeMedia.matches)
let theme = computed(() => themeIsLight.value ? 'light' : 'dark')

lightThemeMedia.onchange = (media) => themeIsLight.value = media.matches

onMounted(() => {
  let scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#pin",
      start: "center center",
      end: "+=500",
      scrub: .5
    },
  })

  scrollTl.to("#leftRect", {
    translateY: () => "-=" + window.innerHeight / 6
  })
})

</script>