<template>
    <main class="contact-content ">

      <div class="contact-img-wrapper">
        <figure class="contact-img-figure">
          <img class="contact-img " src="https://picsum.photos/670/400" alt="">
        </figure>
      </div>

      <div class="contact-data-wrapper ">
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

.contact-content {
  @apply
    h-screen
    flex
    flex-wrap
}

.contact-data-wrapper {
  font-family: 'Source Code Pro', monospace;

}

.contact-img {
  @apply
   object-cover
}

.contact-img-figure {

}

.contact-img-wrapper {
}

</style>
