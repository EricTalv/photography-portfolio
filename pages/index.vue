<template>

  <div>
    <!-- Show modal when conditions are set  -->
    <img-modal v-if="showModal" @newCurrentModalImage="setNewCurrentModalImage($event)" @close="setModalState(false)" :currentImage="currentModalImage" :images="images"  >
    </img-modal>

    <!-- Work Content / Image grid Start -->
    <main class="work-container">
      <!--  After every 2 items create a ROW   -->
      <div class="work-figure-row" v-for="i in Math.ceil(images.length / 2)">
        <figure
          class="work-figure"
          v-for="(image, index) in images.slice((i - 1) * 2, i * 2)"

          :class="i === Math.ceil(images.length / 2) && index % 2 === 0 && images.slice((i - 1) * 2, i * 2).length === 1  ? 'remove-margin-right' : ''  "
        >
          <img @click="setModalState(true, image)" class="work-img" :src="image.src" alt="">
        </figure>
      </div>
    </main>
    <!-- Work Content / Image grid End  -->

    <footer class="flex justify-between py-10">
      <div class="footer-logo">
        <h1>Luella Photography</h1>
      </div>
      <div class="footer-media">
        <a href="#">
          <svg class="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>
    </footer>

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
            src: "https://picsum.photos/670/840"
          },
          {
            src: "https://picsum.photos/250/840"
          },
          {
            src: "https://picsum.photos/1500/840"
          },
          {
            src: "https://picsum.photos/1200/970"
          },
        ]
      }
    },

    methods: {

      setNewCurrentModalImage(image) {
        this.currentModalImage = image
      },

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
    },

  }
</script>

<style lang="scss">
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */

  .work-container {
    padding: 1.8vw 4vw;

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

  .remove-margin-right {
    margin-right: 0 !important;
  }

  .footer-logo {
    font-family: 'Ropa Sans', sans-serif;

    @apply
      text-xl
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
