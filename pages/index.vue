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
            src: "https://picsum.photos/1500/840"
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

    computed: {

      // i === Math.ceil(images.length / 2) && index % 2 === 0 && images.slice((i - 1) * 2, i * 2).length === 1

      setLastImageMargin(rowsIndex, images, indexOfImage) {
        const getLastRow = rowsIndex === Math.ceil(images.length / 2)

        const imagesLengthInRow = images.slice((i - 1) * 2, i * 2).length

        const getFirstImageInRow = indexOfImage % 2 === 0

        if (imagesLengthInRow === 1 && getFirstImageInRow && getLastRow) {
          return true
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

  .remove-margin-right {
    margin-right: 0 !important;
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
