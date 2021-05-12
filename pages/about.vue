<template>
    <div class="flex flex-col min-h-screen">
      <figure>
        <img class="h-60 w-full object-cover" src="https://picsum.photos/670/840" alt="">
      </figure>
      <main class="about-content general-padding flex-grow  flex flex-wrap flex-col ">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum ex hic odio perferendis quae quos repudiandae rerum soluta voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam consequatur cupiditate error, excepturi itaque iure magni modi nam porro praesentium quas quidem saepe sapiente, similique unde veniam voluptatem?</p>
      </main>
    </div>
</template>

<script>
    export default {
        name: "about.vue"
    }
</script>

<style lang="scss">

body {
  padding: 0;
}

.about-content {
  p {
    @apply
      p-5

  }
}

</style>
