<script setup lang="ts">
import grades from "@/assets/grades"
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted, reactive } from "vue";
import gsap from "gsap";
import router from "@/router";

const props = defineProps(["grade"])
const grade = grades[props.grade]
const item = reactive(grade)

if (!grade)
	router.back()

onMounted(() => {
	gsap.from(item, {grade: 0, duration: 1, ease: "power3.out"})
})
</script>

<template>
	<basic-layout>
		<template #title>{{item.grade.toFixed(1)}}</template>
		<template #subtitle>{{item.for}}</template>
		<template #description>{{item.description}}</template>
	</basic-layout>
</template>