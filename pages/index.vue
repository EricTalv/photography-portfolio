<template>

  <div>
    <!-- Show modal when conditions are set  -->
    <img-modal v-if="showModal" @newCurrentModalImage="setNewCurrentModalImage($event)" @close="setModalState(false)" :currentImage="currentModalImage" :images="images"  >
    </img-modal>

    <!-- Work Content / Image grid Start -->
    <main class="work-container general-padding">
      <!--  After every 2 items create a ROW   -->
      <div class="work-figure-row" v-for="i in Math.ceil(images.length / 2)">
        <figure
          class="work-figure"
          v-for="(image, index) in images.slice((i - 1) * 2, i * 2)"

          :class="i === Math.ceil(images.length / 2) &&
           index % 2 === 0 &&
           images.slice((i - 1) * 2, i * 2).length === 1  ? 'remove-margin-right' : ''  "
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

        structuredData: {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Luella Photography",
          "image": "",
          "@id": "https://www.luella.photography",
          "url": "https://www.luella.photography",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tallinn",
            "addressCountry": "EE"
          } ,
          "sameAs": "https://www.instagram.com/luella.photography/"
        },

        showModal: false,
        currentModalImage: null,
        images: [
          {
            src: require("~/assets/images/work1.jpg")
          },
          {
            src: require("~/assets/images/work2.jpeg")
          },
          {
            src: require("~/assets/images/work3.jpeg")
          },
          {
            src: require("~/assets/images/work4.jpeg")

          },
          {
            src: require("~/assets/images/work5.jpeg")

          },
          {
            src: require("~/assets/images/work6.jpeg")

          },
          {
            src: require("~/assets/images/work7.jpeg")

          },
          {
            src: require("~/assets/images/work8.jpeg")

          },
          {
            src: require("~/assets/images/work9.jpeg")

          },
        ]
      }
    },

    // JSON LD
    head() {
      return  {
        script: [{type: 'application/ld+json', json: this.structuredData }]
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

  .work-figure-row {
    img {
      -webkit-box-shadow: 0px 0px 62px -15px rgba(0,0,0,1);
      -moz-box-shadow: 0px 0px 62px -15px rgba(0,0,0,1);
    }
  }

  .work-container {

    @apply flex
    flex-wrap
    }

  .work-img {

    transition: all .5s;

    &:hover {
      cursor: pointer;
      opacity: .5;
    }

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
