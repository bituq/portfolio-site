<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import JobItem from "./components/JobItem.vue";
import gsap from "gsap"

gsap.registerPlugin()

let themeIsLight = ref(true)
let theme = computed(() => themeIsLight.value ? 'light' : 'dark')

onMounted(() => {
  let tl = gsap.timeline()
  tl.from("#mainContainer", { width: "100%", duration: 2, ease: "power2.out"})
    .fromTo("#leftRect", { opacity: 0, top: -200, }, { top: 12, opacity: 1, duration: 2, ease: "power3.out" }, "-=1")
    .from("h1", {marginLeft: "-100%", duration: 2, ease: "power4.out", delay: .2 }, "-=2")
    .from("#mainContent", { opacity: 0, duration: 1}, "-=1")
    .from("#jobsList", { translateX: "100%", duration: 2 }, "-=2")
    .from("#bottomRect", { opacity: 0, bottom: -80, duration: 2, ease: "power3.out" }, "-=1")
})

</script>

<template>
  <main :data-theme="theme" class="w-full h-[100vh] bg-base-300">
    <div id="mainContainer" class="relative bg-base-100 w-[1080px] m-auto h-full">
      <!-- Shapes -->
      <div id="leftRect" class="absolute bg-primary rectangle-shape h-96 -translate-x-3/4 z-10">
        <div class="absolute bg-circles w-full h-full z-0" />
        <div class="py-6 px-3">
          <ul class="text-primary-content font-semibold">
            <li class="list-item"><span class="material-icons">email</span>zealbus@outlook.com</li>
            <li class="list-item"><span class="material-icons">contact_page</span><a class="underline z-10" href="https://www.linkedin.com/in/dylan-noorland-56169019b/">LinkedIn Profiel</a></li>
            <li class="list-item form-control flex-row items-center">
              <label class="label cursor-pointer">Donker</label>
              <input type="checkbox" class="toggle toggle-secondary z-10" v-model="themeIsLight" checked />
              <label class="label cursor-pointer">Licht</label>
            </li>
          </ul>
        </div>
        <img
          class="absolute right-0 bottom-0 object-cover h-[80%] rounded"
          src="@/assets/img/mugshot_transparent.png"
        />
      </div>
      <div id="bottomRect" class="absolute bg-primary rectangle-shape w-[50%] h-20 bottom-0 right-0 -translate-x-32">
        <div class="bg-circles w-full h-full z-0" />
      </div>

      <!-- Main Content -->
      <main class="flex flex-col gap-10 text-base-content overflow-hidden">
        <div class="pt-32 px-28">
          <h1>Dylan Noorland</h1>
          <p id="mainContent" class="text-xl mt-5">
            Ik ben een tweedejaars student aan de opleiding Informatica op de Hogeschool Rotterdam. <b>Informatica is mijn passie</b>, waardoor ik snel nieuwe vaardigheden leer. Collega’s omschrijven mij als initiatiefnemend, probleemoplossend, en professioneel.
          </p>
        </div>
        <div id="mainContent">
          <div class="bg-base-200 z-0">
            <div id="jobsList" class="flex flex-row gap-5 py-10 px-28">
              <job-item :startYear="2020" :endYear="0">
                <template #title>
                  Oprichter
                </template>
                <template #place>
                  Zeal Software Applications
                </template>
                <template #description>
                  Software-ontwikkelaar, customer-support en internationale samenwerking. Meer dan <b>5,000,000 gebruikers</b> wereldwijd.
                </template>
              </job-item>
              <job-item :startYear="2020" :endYear="0">
                <template #title>
                  Bachelor Informatica Voltijd
                </template>
                <template #place>
                  Hogeschool Rotterdam
                </template>
                <template #description>
                  Bij deze opleiding tot software-engineer, leer ik waardevolle lessen over <b>communicatie, software-ontwikkeling, Scrum methodologie, en software design</b>.
                </template>
              </job-item>
              <job-item :startYear="2015" :endYear="2020">
                <template #title>
                  Havo Natuur & Techniek
                </template>
                <template #place>
                  De Ring van Putten
                </template>
                <template #description>
                  Ik scoorde een <b>9.9</b> voor het eindproject van het vak Informatica. Hiervoor heb ik een website gebrouwd dat geïnspireerd is door Twitter. Gemaakt in <b>PHP, javascript, en HTML</b>.
                </template>
              </job-item>
            </div>
          </div>
          <div class="px-28 py-10">
            <h2>Vaardigheden</h2>
            <div class="flex flex-row mt-5 gap-3">
              <div class="skill-item">
                <img src="@/assets/img/cs.png" />
                <h4>C#</h4>
              </div>
              <div class="skill-item">
                <img src="@/assets/img/vue.png" />
                <h4>Vue</h4>
              </div>
              <div class="skill-item">
                <img src="@/assets/img/ts.png" />
                <h4>Typescript</h4>
              </div>
              <div class="skill-item">
                <img src="@/assets/img/lua.png" />
                <h4>Lua</h4>
              </div>
              <div class="skill-item">
                <img src="@/assets/img/react.png" />
                <h4>React</h4>
              </div>
              <div class="skill-item">
                <img src="@/assets/img/rust.png" />
                <h4>Rust</h4>
              </div>
              <div class="skill-item">
                <img src="@/assets/img/blazor.png" />
                <h4>Blazor</h4>
              </div>
              <div class="skill-item">
                <img src="@/assets/img/glsl.png" />
                <h4>OpenGL</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </main>
</template>

<style>
.list-item {
  @apply flex;
  @apply gap-2;
}
.skill-item {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply p-3;
  @apply select-none;
  @apply transition;
  @apply duration-150;
  @apply text-base-content;
  @apply gap-1;
}

.skill-item img {
  @apply h-10;
  @apply flex-grow;
}
</style>