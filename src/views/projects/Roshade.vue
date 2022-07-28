<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue';
</script>

<template>
	<basic-layout>
		<template #title>Roshade</template>
		<template #description>
			Shaders voor Roblox. Geschreven met <a target="_blank" href="https://tauri.app/">Tauri</a>, Rust, en Vue. Meer dan 5,000,000 gebruikers wereldwijd.
		</template>
		<template #content>
			<div class="flex-col flex gap-16">
				<a class="btn btn-primary w-40" href="https://roshade-prod.web.app/" target="_blank">Website Bekijken</a>
				<div class="gap-4 flex-col flex">
					<h3>Het probleem</h3>
					<p class="text-xl">
						<a href="https://reshade.me/">Reshade</a> is een generiek post-processing software waarmee je shaders kan toevoegen aan
						bijvoorbeeld videospellen. Dit vereist een handmatige installatie waarbij er van alles fout kan gaan.<br/><br/>Roblox staat bekend om hun <b>jonge spelersbasis</b>,
						waarbij er veel vraag is naar shaders. Helaas is Reshade erg moeilijk te downloaden voor deze mensen, en is het daardoor
						altijd ontoegankelijk geweest voor de meesten. Dit probeert Roshade op te lossen.
					</p>
				</div>
				<video class="rounded-3xl" src="@/assets/vid/roshade_preview.mp4" type="video/mp4" autoplay muted loop/>
				<div class="gap-4 flex-col flex">
					<h3>De oplossing</h3>
					<p class="text-xl">
						Het is mogelijk om Reshade shaders aan te passen en te combineren om tot een bepaald resultaat te komen. Deze voorinstellingen worden 'presets' genoemd,
						en het duurt vaak uren om er een te maken.
						<br/><br/>
						Roshade is een installatiepakket waarbij verschillende presets al zijn inbegrepen, en de gebruiker deze dus niet zelf hoeft te maken.
						Bovendien is het makkelijker om te installeren, waardoor Reshade ineens voor veel meer mensen toegankelijk is.
					</p>
				</div>
				<video class="rounded-3xl" src="@/assets/vid/roshade_shaders_preview.mp4" type="video/mp4" autoplay muted loop/>
				<div class="gap-4 flex-col flex">
					<h3>Functionaliteiten</h3>
					<p class="text-xl">
						Het installatiepakket is aangepast op een aantal unieke eigenschappen van Roblox. Het bestandspad van Roblox veranderd
						bijvoorbeeld met elke update. Hier moet het installatiepakket zich dus automatisch op aanpassen.
						<br/><br/>
						Daarnaast worden alle bestanden uit de Roblox folder verwijderd wanneer het spel een update heeft. Hierdoor werkt Reshade niet meer.
						Om dit op te lossen, heb ik een <b>achtergrondproces</b> geschreven in Rust die door middel van <b>polling</b> deze bestanden weer
						op de juiste plaats terugzet.
					</p>
				</div>
				<video class="rounded-3xl" src="@/assets/vid/roshade_pro_preview.mp4" type="video/mp4" autoplay muted loop/>
				<div class="gap-4 flex-col flex">
					<h3>De website</h3>
					<p class="text-xl">
						Omdat ik abonnementen verkoop, is het belangrijk om een solide bedrijfslogica te hebben. Dit doe ik met gebruik van
						<b>Google Firebase</b> in combinatie met <b>Stripe</b>. Gebruikers kunnen zich aanmelden om een abonnement aan te schaffen, en
						met behulp van Stripe kunnen ze deze abonnementen uiteraard altijd cancellen.
						<br/><br/>
						Daarnaast is de website geschreven met Vue 3.0, net als het installatiepakket. Overigens gebruik ik ook Tailwind voor de styling,
						en DaisyUI voor bepaalde interface-componenten.
					</p>
				</div>
				<div class="gap-4 flex-col flex">
					<h3>Geschiedenis</h3>
					<p class="text-xl">
						Dit project begon in 2020, en was eerst geschreven in <a target="_blank" href="https://nsis.sourceforge.io/Main_Page" class="font-bold">NSIS</a>.
						Maar de code werd <a target="_blank" href="https://github.com/bituq/Roshade/blob/main/Setup/Setup.nsi">moeilijk te lezen</a>, en ik wilde uiteindelijk uitbereiden.
						Dus ik ben overgestapt naar <b>WPF</b> met <b>.NET 6.0</b>. WPF gaf mij meer vrijheid in de aanpassing van het installatiepakket, en ik was bekender met C# dan met NSIS.
						<br/><br/>
						Dit was zo'n 7 maanden in gebruik, totdat ik wilde overstappen van Wordpress naar een volledig zelfgemaakte website waarbij ik
						de bestanden ook zelf host. Het installatiepakket was zo'n <b>120 megabyte</b> in grootte, dus je kan je voorstellen dat dit erg duur
						zou worden wanneer 350,000 mensen maandelijks downloaden.
						<br/><br/>
						Daardoor ben ik overgestapt naar <b>Tauri</b> en <b>Rust</b>. Daarnaast gebruikt Tauri <b>Webview</b> technologie. Dit betekent dat ik mijn
						interface kan schrijven in de vertrouwde Vue 3.0, met een Rust backend. Ik heb uiteindelijk mijn bestandsgrootte kunnen verkleinen tot <b>4.78 megabyte</b>.
						Dat is 25x kleiner dan het vorige installatiepakket.
					</p>
				</div>
			</div>
		</template>
	</basic-layout>
</template>

<style>
	a {
		@apply underline;
	}
</style>