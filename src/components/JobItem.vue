<template>
	<div class="job-item">
		<h3 class="flex-grow">
			<slot name="title"/>
		</h3>
		<div class="divider" />
		<p class="font-semibold">
			<slot name="place" />
		</p>
		<p class="mt-2">
		{{ props['startYear'] }} - {{ props['endYear'] == 0 ? "Heden" : props['endYear'] }}
		</p>
		<div class="divider" />
		<p>
			<slot name="description" />
		</p>
	</div>
</template>

<script setup lang="ts">

let props = defineProps<{
	startYear: number,
	endYear: number
}>()
</script>

<style>
.job-item {
  @apply flex;
  @apply flex-col;
  @apply max-w-[20rem];
}
</style>