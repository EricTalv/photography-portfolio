<template>
    <div class="flex flex-col  min-h-screen md:flex-row general-padding">
      <figure class="about-figure">
        <img class="h-60 w-full md:h-full object-cover" src="https://picsum.photos/670/840" alt="">
      </figure>
      <main class="about-content flex-grow  flex flex-wrap flex-col text-sm md:text-md xl:text-xl">
        <button class="about-lang-btn block-inline">eng</button>
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

@media (min-width: 768px) {

  .about-figure {
    width: 100rem;
    height: 50%;
  }
}


.about-content {
  font-family: 'Source Code Pro', monospace;

  padding-right: 10%;
  padding-left: 5%;

  .about-lang-btn {
    border-bottom: 1px solid #A5A5A5;
    color: #A5A5A5;
    width: fit-content;
  }

  p {
    @apply
      py-5

  }

  @apply
    pt-0
    py-5




}

</style>
