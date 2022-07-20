<script setup lang="ts">
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollToPlugin)

onMounted(() => {
	gsap.to(window, { scrollTo: 0})

	gsap.utils.toArray("section").forEach((section, index) => gsap.from(section, {
		translateX: -400,
		opacity: 0,
		ease: "power3.out",
		duration: 1,
		delay: index / 5
	}))
})
</script>

<template>
	<main>
		<section>
			<h1 class="text-base-content">
				<slot name="title" />
			</h1>
			<h3>
				<slot name="subtitle" />
			</h3>
		</section>
		<section class="mt-5">
			<p class="text-xl">
				<slot name="description" />
			</p>
		</section>
		<slot name="content" />
		<section class="divider" />
		<section>
			<button class="btn btn-primary btn-outline" @click="$router.back()">Ga terug</button>
		</section>
	</main>
</template>