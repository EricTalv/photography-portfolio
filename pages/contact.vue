<template>
    <main class="contact-content flex flex-wrap min-h-screen pt-16">

      <div class="contact-img-wrapper w-auto h-96">
        <figure class="w-full h-full">
          <img class="contact-img " src="~/assets/images/contact.jpeg" alt="">
        </figure>
      </div>

      <div class="contact-data-wrapper w-auto h-96">
        <h1>Get in Touch!</h1>
        <h3>luna.art01@gmail.com</h3>
        <a href="https://www.instagram.com/luella.photography/">
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


img {
  width: 100%;
  height: 100%;
}

.contact-content {
}

.contact-data-wrapper {


}

.contact-data-wrapper {
  font-family: 'Source Code Pro', monospace;

  padding-left: 1.5rem;



  h1, h3, a {
    margin-bottom: 10px;
  }

  a {
    text-decoration: underline;
  }

  @apply
    my-5
    md:my-0

}

.contact-img {



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
