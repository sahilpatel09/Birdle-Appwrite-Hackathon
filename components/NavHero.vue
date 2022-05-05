<template>
  <div class="bg-yellow-400">
    <div class="container mx-auto">
      <!-- Hero Section -->
      <div class="flex justify-between items-center py-5 px-5">
        <div class="brand">
          <img src="@/assets/img/birdle.png" class="w-34 h-14" />
        </div>

        <div class="flex gap-6 items-center justify-center">
          <div class="hidden md:inline-block">
            <ul class="flex items-center justify-center gap-10 text-black">
              <li class="line-through">Out story</li>
              <li class="line-through">Membership</li>
              <li class="line-through">Write</li>
              <li class="line-through">Sign in</li>
            </ul>
          </div>

          <button
            @click="toggleHp"
            class="px-4 py-2 text-white bg-black rounded-full"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    <!-- End of Hero Section text-black text-8xl font-light font-serif -->
    <hr class="w-full border-black" />

    <div
      class="w-full boxHeight container mx-auto bg-yellow-400 flex items-center justify-center"
    >
      <div class="h-96 w-full p-3 flex flex-col justify-around">
        <h1 class="title lg:text-9xl text-[75px] leading-tight">
          Stay curious.
        </h1>
        <p class="text-black text-2xl font-medium font-sans">
          Discover stories, thinking, and expertise <br />
          from writers on any topic.
        </p>
        <button
        @click="toggleHp"
          class="px-10 py-2 font-medium text-white ctabutton rounded-full text-xl w-60"
        >
          Start Reading
        </button>
      </div>

      <div class="starts"></div>
    </div>
  </div>
</template>
<script setup>
const { hpToggler, toggleHp } = stateManager();
</script>
<style scoped>
.bo {
  height: 25px;
}

.bn {
  fill: rgba(0, 0, 0, 1);
}
.boxHeight {
  height: 520px;
}

.title {
  color: rgba(8, 8, 8, 1);
  letter-spacing: -0.055em;
  font-feature-settings: "pnum" on, "lnum" on;
  font-weight: 400;
  display: block;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
}
.ctabutton {
  background: rgba(25, 25, 25, 1);
}
</style>
