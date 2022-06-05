<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import JobItem from "./components/JobItem.vue";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Flip } from "gsap/Flip"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)

let themeIsLight = ref(true)
let theme = computed(() => themeIsLight.value ? 'light' : 'dark')
let scrollContent = ref()
let mainContent = ref()
let explanationRef = ref()

onMounted(() => {
  // let tl = gsap.timeline()
  // tl.from("#mainContainer", { width: "100%", duration: 2, ease: "power2.out"})
  //   .fromTo("#leftRect", { opacity: 0, left: "-400", }, { left: 0, opacity: 1, duration: 2, ease: "power3.out" }, "-=1")
  //   .from("h1", {marginLeft: "-100%", duration: 2, ease: "power4.out", delay: .2 }, "-=1.5")
  //   .from("#mainContent", { opacity: 0, duration: 1}, "-=1")
  //   .from("#jobsList", { translateX: "100%", duration: 2 }, "-=2")

  gsap.from("#scrollArrowDown", {translateY: -5, repeat: -1, yoyo: true, ease: "power3.in"})
  
  let scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#pin",
      start: "center center",
      end: "+=1000",
      scrub: 1,
      pin: true,
      snap: {
        snapTo: "labels",
        duration: {min: .2, max: 1},
        delay: .2,
        ease: "expo.out"
      }
    }
  })

  scrollTl.addLabel("start")
    .fromTo(scrollContent.value, { opacity: 1 }, { opacity: 0 })
    .from(mainContent.value, { translateY: "25%", ease: "power3.inOut" } , "-=0.5")
    .to(explanationRef.value.querySelector(".divider"), { opacity: 0}, "=-0.5")
    .to("#leftRect", { translateY: 20, top: 0, ease: "power3.inOut" }, "-=0.5")
    .fromTo("#skillsList", { opacity: 0 }, { translateY: "-100%", opacity: 1 }, "-=.25")
    .from(".skill-item progress", { value: 0 }, "-=.5")
    .addLabel("skills")
    .to("#skillsList", { opacity: 0, translateY: "-150%" }, "+=.5")
    .fromTo("#jobsList", {opacity: 0}, { translateY: "-100%", opacity: 1 }, "-=.5")
    .addLabel("jobs")
})

</script>

<template>
  <main :data-theme="theme" class="flex justify-center w-full h-[200vh] bg-base-300">
    <div id="mainContainer" class="fixed bg-base-100 max-w-[1080px] h-full">
      <div id="pin">
        <!-- Shapes -->
        <div id="leftRect" class="absolute bg-primary rectangle-shape h-96 -translate-x-3/4 top-[50%] -translate-y-3/4 z-10">
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

        <!-- Main Content -->
        <main ref="mainContent" class="flex flex-col h-[100vh] justify-center gap-10 text-base-content">
          <div ref="explanationRef" class="flex flex-col gap-5 px-28">
            <h1>Dylan Noorland</h1>
            <p id="mainContent" class="text-xl mt-5">
              Ik ben een tweedejaars student aan de opleiding Informatica op de Hogeschool Rotterdam. <b>Informatica is mijn passie</b>, waardoor ik snel nieuwe vaardigheden leer. Collega’s omschrijven mij als initiatiefnemend, probleemoplossend, en professioneel.
            </p>
            <div id="mainContent" class="divider" />
            <h3 id="mainContent">
              <span ref="scrollContent" class="flex items-center">
                <span id="scrollArrowDown" class="material-icons text-5xl">
                  arrow_downward
                </span>
                Scroll naar beneden
              </span>
            </h3>
          </div>
          <div id="skillsList" class="px-28">
            <h2 class="text-center mb-2">Relatieve Ervaring</h2>
              <div class="flex flex-row justify-evenly gap-3">
                <div class="skill-item">
                  <img src="@/assets/img/cs.png" />
                  <h4>C#</h4>
                  <progress class="absolute progress progress-secondary top-52 -rotate-90 w-40 h-4" value="5" max="5" />
                </div>
                <div class="skill-item">
                  <img src="@/assets/img/vue.png" />
                  <h4>Vue</h4>
                  <progress class="absolute progress progress-secondary top-52 -rotate-90 w-40 h-4" value="4" max="5" />
                </div>
                <div class="skill-item">
                  <img src="@/assets/img/ts.png" />
                  <h4>Typescript</h4>
                  <progress class="absolute progress progress-secondary top-52 -rotate-90 w-40 h-4" value="4" max="5" />
                </div>
                <div class="skill-item">
                  <img src="@/assets/img/lua.png" />
                  <h4>Lua</h4>
                  <progress class="absolute progress progress-secondary top-52 -rotate-90 w-40 h-4" value="4" max="5" />
                </div>
                <div class="skill-item">
                  <img src="@/assets/img/react.png" />
                  <h4>React</h4>
                  <progress class="absolute progress progress-secondary top-52 -rotate-90 w-40 h-4" value="3" max="5" />
                </div>
                <div class="skill-item">
                  <img src="@/assets/img/rust.png" />
                  <h4>Rust</h4>
                  <progress class="absolute progress progress-secondary top-52 -rotate-90 w-40 h-4" value="2" max="5" />
                </div>
                <div class="skill-item">
                  <img src="@/assets/img/blazor.png" />
                  <h4>Blazor</h4>
                  <progress class="absolute progress progress-secondary top-52 -rotate-90 w-40 h-4" value="4" max="5" />
                </div>
              </div>
            </div>
          <div id="mainContent" class="flex flex-col justify-center mt-10">
            <div id="jobsList" class="flex flex-row gap-5 px-28">
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
        </main>
      </div>
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
  @apply flex-shrink;
}

.skill-item img {
  @apply h-10;
  @apply object-contain;
  @apply flex-grow;
}
</style>