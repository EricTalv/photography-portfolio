<template>
    <main class="contact-content ">

      <div class="contact-img-wrapper">
        <figure class="contact-img-figure">
          <img class="contact-img " src="https://picsum.photos/670/400" alt="">
        </figure>
      </div>

      <div class="contact-data-wrapper ">
        <h1>Get in Touch!</h1>
        <h3>luna.art01@gmail.com</h3>
        <a href="">
          <h3>@luella.photography</h3>
        </a>

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
  height: 75vh;

  @apply
    flex
    flex-wrap
    items-center
}

.contact-data-wrapper {
  @apply
   w-screen
   md:w-auto
}

.contact-data-wrapper {
  font-family: 'Source Code Pro', monospace;
  padding-left: 2vw;

  h1, h3, a {

    @apply
      flex
      flex-col
      items-center
      md:items-start
      py-1
      text-lg
  }

  a {
    text-decoration: underline;
  }

 @media(min-width: 640px) {
   margin-top: -40vw;
 }


}

.contact-img {
  width: 50rem;

  -webkit-box-shadow: 0px 0px 62px -15px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 62px -15px rgba(0,0,0,1);

  @apply
   object-cover
}

.contact-img-figure {

}

.contact-img-wrapper {
}

</style>
