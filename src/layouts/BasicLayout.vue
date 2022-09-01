<script setup lang="ts">
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollToPlugin)

onMounted(() => {
	gsap.to(window, { scrollTo: 0})

	gsap.utils.toArray("section").forEach((section: any, index) => gsap.from(section, {
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

		<div class="flex flex-col mt-5 gap-5">
			<section>
				<p class="text-xl">
					<slot name="description" />
				</p>
			</section>
			<section class="flex flex-row gap-2.5">
				<RouterLink class="btn btn-primary btn-outline" to="/">Ga terug</RouterLink>
				<slot name="buttons" />
			</section>
			<section>
				<slot name="content" />
			</section>
		</div>

		<template v-if="$slots.content">
			<section class="divider" />
			<section>
				<RouterLink class="btn btn-primary btn-outline" to="/">Ga terug</RouterLink>
			</section>
		</template>
	</main>
</template>