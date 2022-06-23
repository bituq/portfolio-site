<script setup lang="ts">
import grades from "@/assets/grades"
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

const props = defineProps(["grade"])
const grade = grades[props.grade]

onMounted(() => {
	gsap.to(window, { scrollTo: 0})
})
</script>

<template>
	<section>
		<h1 class="text-base-content">{{grade.grade.toFixed(1)}}</h1>
		<h3>{{grade.for}}</h3>
	</section>
	<section>
		<p class="text-xl">{{grade.description}}</p>
	</section>
	<div class="divider" />
	<section>
		<button class="btn" @click="$router.back()">Ga terug</button>
	</section>
</template>