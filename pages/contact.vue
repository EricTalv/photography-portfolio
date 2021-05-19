<template>
    <main class="contact-content flex flex-wrap">
      <div class="contact-img-strip">
        <figure>
          <img class="h-64 w-full object-cover" src="https://picsum.photos/670/840" alt="">
        </figure>
      </div>
      <div class="contact-data h-screen w-full flex flex-col  justify-center items-center">
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
