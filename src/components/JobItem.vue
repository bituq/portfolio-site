<template>
	<div class="card card-compact shadow-xl bg-base-100">
		<div class="card-body">
			<h3 class="flex-grow card-title">
				<slot name="title"/>
			</h3>
			<p class="font-semibold">
				<slot name="place" />
			</p>
			<p class="mt-2">
			{{ props['startYear'] }} - {{ props['endYear'] == 0 ? "Heden" : props['endYear'] }}
			</p>
			<div class="divider" />
			<p id="jobItemDescription" class="flex-grow">
				<slot name="description" />
			</p>
		</div>
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
  @apply w-[20rem];
}
</style>