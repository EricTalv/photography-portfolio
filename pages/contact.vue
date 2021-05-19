<template>
    <main class="contact-content flex flex-wrap general-padding ">

      <div class="contact-img-strip">
        <figure>
          <img class="h-64 w-full object-cover md:h-screen md:w-auto" src="https://picsum.photos/670/840" alt="">
        </figure>
      </div>

      <div class="contact-data h-screen pt-5 flex-grow flex flex-col items-center md:h-auto md:justify-center md:pt-0">
        <h1>Get in Touch!</h1>
        <h3>uwuowo@gmail.com</h3>
      </div>

    </main>
</template>

<script>
    export default {
        name: "contact.vue"
    }
</script>

<style lang="scss">

.contact-data {
  font-family: 'Source Code Pro', monospace;
}

</style>
