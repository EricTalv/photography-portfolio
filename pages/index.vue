<template>

  <div>


    <!--  Img Modal Test  -->
    <button id="show-modal" @click="setModalState(true)">Show Modal</button>
      <img-modal v-if="showModal" @close="setModalState(false)">
        <h3 slot="body">hello</h3>
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
        showModal: false
      }
    },

    methods: {

      // Set Scroll To Disable when modal is open
      setModalState(state) {
        if (state) {
          this.showModal = true;
          document.body.classList.add("modal-open");
        } else {
          this.showModal = false;
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

  .work-figure-first {
    @apply flex-auto
    md:mr-3
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
          }
      }
    }
  }

</style>
