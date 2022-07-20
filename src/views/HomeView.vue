<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from "vue";
import { RouterLink, RouterView } from "vue-router";
import JobItem from "@/components/JobItem.vue";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import grades from "@/assets/grades"
import projects from "@/assets/projects"
import jobs from "@/assets/jobs"
import skills from "@/assets/skills"
import { createRequire } from "module";

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  let tl = gsap.timeline()

  tl.from("#dylan", { marginLeft: -200, opacity: 0, duration: 2, ease: "power2.out"})
    .from("#noorland", { marginLeft: -200, opacity: 0, duration: 2, ease: "power2.out"}, "-=1.5")

  gsap.from("#scrollArrowDown", {translateY: -5, repeat: -1, yoyo: true, ease: "power3.in"})
  gsap.to("#scrollInfo", {
    scrollTrigger: {
      trigger: "#scrollInfo",
      start: "center center",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
  })

  let sections = gsap.utils.toArray("#section");

  sections.forEach((section, index) => {
    gsap.fromTo(section, {
      opacity: 0,
      translateX: index % 3 ? 100 : -100
    }, {
      scrollTrigger: {
        trigger: section,
        start: () => "center-=400 center",
        toggleActions: "play reverse play reverse"
      },
      opacity: 1,
      duration: 1,
      translateX: 0,
      ease: "power3.out"
    })
  })

})

</script>

<template>
  <section class="flex flex-col gap-5 over">
    <h1 class="flex flex-col text-base-content"><span id="dylan">Dylan</span> <span id="noorland">Noorland</span></h1>
    <p id="selfDescription" class="text-xl mt-5">
      Ik ben een tweedejaars student aan de opleiding Informatica op de Hogeschool Rotterdam, en <b>Informatica is mijn passie</b>. Collega's omschrijven mij als initiatiefnemend, probleemoplossend, en professioneel.
    </p>
    <h4 id="scrollInfo">
      <span class="flex items-center">
        <span id="scrollArrowDown" class="material-icons text-5xl">
          arrow_downward
        </span>
        Scroll naar beneden
      </span>
    </h4>
  </section>
  <div id="section" class="divider" />
  <section id="section">
    <div id="skills" class="md:flex md:flex-row grid grid-cols-2 sm:grid-cols-4 justify-evenly">
      <div v-for="(skill, i) in skills" :key="i" class="skill-item">
        <img :src="`./img/${skill.img}`" />
        <h4>{{skill.name}}</h4>
        <div class="rating md:flex-col-reverse flex-row">
          <input v-for="r in 5" :key="r" type="radio" :name="`rating-${i}`" class="mask mask-star-2 bg-secondary" disabled :checked="skill.rating == r" />
        </div>
      </div>
    </div>
  </section>
  <div id="section" class="divider" />
  <section id="section" class="flex md:flex-row flex-col gap-5">
    <job-item v-for="(job, index) in jobs" :key="index" :startYear="job.from" :endYear="job.until" >
      <template #title>
        {{job.position}}
      </template>
      <template #place>
        {{job.where}}
      </template>
      <template #description>
        {{job.description}}
      </template>
    </job-item>
  </section>
  <div id="section" class="divider" />
  <section id="section">
    <h1 class="mb-5 text-8xl">Schoolcijfers</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <div v-for="(grade, index) in grades" :key="grade.for" id="grade" class="card card-compact shadow-lg">
        <div class="card-body">
          <h3>{{grade.grade.toFixed(1)}}</h3>
          <h5 class="font-normal flex-grow">{{grade.for}}</h5>
          <div class="card-actions justify-center">
            <button :disabled="!grade.description" class="btn btn-primary btn-sm btn-outline" @click="$router.push(`/grade/${index}`)">Meer Lezen</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="section" class="divider" />
  <section id="section">
    <h1 class="mb-5 text-8xl">Eigen Projecten</h1>
    <div class="sm:grid md:grid-cols-2 flex flex-col gap-3">
      <div v-for="(project, index) in projects" :key="index" class="card card-compact shadow-lg">
      <figure v-if="project.img" class="max-h-48 overflow-clip"><img :src="`./img/${project.img}`"/></figure>
        <div class="card-body">
          <h3 class="card-title">{{project.name}}</h3>
          <p class="text-lg">{{project.shortDescription}}</p>
          <div class="card-actions justify-center">
            <a v-if="project.url" class="btn btn-primary btn-sm btn-outline" :href="project.url" target="_blank">Meer Lezen</a>
          </div>
        </div>
      </div>
    </div>
  </section>
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

#grade {
  @apply text-center;
}

#grade h4 {
  @apply flex-grow;
}
</style>