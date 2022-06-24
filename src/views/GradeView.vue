<script setup lang="ts">
import grades from "@/assets/grades"
import { onMounted, reactive, ref } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import router from "@/router";

gsap.registerPlugin(ScrollToPlugin)

const props = defineProps(["grade"])
const grade = grades[props.grade]
const item = reactive(grade)

if (!grade)
	router.back()

onMounted(() => {
	gsap.to(window, { scrollTo: 0 })
	gsap.utils.toArray("section").forEach((section, index) => gsap.from(section, {
		translateX: -400,
		opacity: 0,
		ease: "power3.out",
		duration: 1,
		delay: index / 5
	}))
	gsap.from(item, {grade: 0, duration: 1, ease: "power3.out"})
})
</script>

<template>
	<section>
		<h1 class="text-base-content">{{item.grade.toFixed(1)}}</h1>
		<h3>{{item.for}}</h3>
	</section>
	<section>
		<p class="text-xl">{{item.description}}</p>
	</section>
	<div class="divider" />
	<section>
		<button class="btn" @click="$router.back()">Ga terug</button>
	</section>
</template>