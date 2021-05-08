<template>

  <div>


    <!--  Img Modal Test  -->


    <button id="show-modal" @click="setModalState(true)">Show Modal</button>


    <!--  After every 2 items create a ROW   -->
    <div class="work-figure-row" v-for="i in Math.ceil(images.length / 2)">
      <figure class="work-figure" v-for="image in images.slice((i - 1) * 2, i * 2)">
        <img @click="setModalState(true, image.src)" class="work-img" :src="image.src" alt="">
      </figure>
    </div>


      <img-modal v-if="showModal" @close="setModalState(false)" :currentImage="currentModalImage" :images="images"  >

      </img-modal>

    <style>

    </style>

    <!-- Work Content / Image grid Start -->
    <main class="work-container">
      <div class="work-figure-row">
        <figure class="work-figure work-figure-first ">
          <img class="work-img" src="https://picsum.photos/700/400" alt="">
        </figure>
        <figure class="work-figure  ">
          <img class="work-img" src="https://picsum.photos/550/640" alt="">
        </figure>
      </div>
      <div class="work-figure-row">
        <figure class="work-figure work-figure-first">
          <img class="work-img" src="https://picsum.photos/350/400" alt="">
        </figure>
        <figure class="work-figure  ">
          <img class="work-img" src="https://picsum.photos/450/740" alt="">
        </figure>
      </div>
      <div class="work-figure-row">
        <figure class="work-figure work-figure-first ">
          <img class="work-img" src="https://picsum.photos/500/400" alt="">
        </figure>
        <figure class="work-figure ">
          <img class="work-img" src="https://picsum.photos/450/840" alt="">
        </figure>
      </div>
    </main>
    <!-- Work Content / Image grid End  -->
  </div>

</template>

<script>
  export default {

    data() {
      return {
        showModal: false,
        currentModalImage: null,
        images: [
          {
            src: "https://picsum.photos/seed/picsum/200/300"
          },
          {
            src: "https://picsum.photos/450/840"
          },
          {
            src: "https://picsum.photos/450/840"
          },
          {
            src: "https://picsum.photos/450/840"
          }
        ]
      }
    },

    methods: {

      // Set Scroll To Disable when modal is open
      setModalState(state,imageSrc) {
        if (state) {
          this.showModal = true;
          this.currentModalImage = imageSrc;
          document.body.classList.add("modal-open");
        } else {
          this.showModal = false;
          this.currentModalImage = null;
          document.body.classList.remove("modal-open");

        }
      }
    }


  }
</script>

<style lang="scss">
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */

  .work-container {
    @apply flex
    flex-wrap
    }

  .work-img {
    @apply w-full
    h-full
    max-h-96
    object-cover

    }

  .work-figure-row {
    @apply flex
    flex-col
    w-full
    md:flex-row
    md:mb-3
    }


  .work-figure {
    @apply mb-3
    md:mb-0
    }


  .work-figure-row {

    &:nth-child(odd) {
      .work-figure {
        &:nth-child(odd) {
          @apply md:w-3/4
            flex-auto
            md:mr-3

          }

        &:nth-child(even) {
          @apply md:w-2/3
          }
      }
    }

    &:nth-child(even) {
      .work-figure {
        &:nth-child(even) {

          @apply md:w-3/4
          }

        &:nth-child(odd) {
          @apply md:w-2/3
          flex-auto
          md:mr-3
          }
      }
    }
  }

</style>
