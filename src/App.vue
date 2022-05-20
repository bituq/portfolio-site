<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="w-full h-full bg-mono-800">
    <main class="h-[80vh]">
      <img
        class="absolute right-0 object-cover h-full drop-shadow-xl"
        src="@/assets/img/mugshot_transparent.png"
      />
      <div
        class="
          bg-circles
          bg-[length:225px_225px]
          flex flex-col
          gap-5
          py-48
          px-32
          m-auto
          max-w-[1440px]
          h-full
        "
      >
        <div class="flex flex-col gap-5 w-[50%]">
          <h1
            class="
              font-koulen
              text-right text-mono-200
              drop-shadow-xl
              select-none
            "
          >
            Dylan<br />Noorland
          </h1>

          <h3
            class="
              text-olive-500 text-3xl
              uppercase
              font-semibold
              drop-shadow-md
              select-none
              font-fira
              text-right
            "
          >
            I ❤ web development
          </h3>
          <p
            class="
              text-mono-200 text-right
              drop-shadow-sm
              font-semibold
              text-xl
            "
          >
            I am a second year Computer Science student, where I learn <br />
            professional communication and programming skills.
          </p>
        </div>
      </div>
      <div class="w-full h-full bg-mono-900 drop-shadow-lg">
        <div class="flex flex-row gap-10">
          <div></div>
        </div>
      </div>
    </main>
  </main>
</template>