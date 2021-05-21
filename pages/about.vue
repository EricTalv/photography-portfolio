<template>
    <div class="flex flex-col  min-h-screen md:flex-row general-padding">
      <figure class="about-figure ">
        <img class="h-60 w-full md:h-full object-cover" src="https://picsum.photos/670/840" alt="">
      </figure>
      <main class="about-content flex-grow  flex flex-wrap flex-col  text-md xl:text-xl">
        <button @click="changeLanguage(currentLanguage)" class="about-lang-btn block-inline mt-3 md:mt-0">{{ paragraphs[currentLanguage].lang }}</button>
        <div class="about-paragraphs ">
          <div v-html="paragraphs[currentLanguage].text"></div>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "about.vue",

        data() {
          return {
            currentLanguage: 2,

            paragraphs: [

              {
                lang: "est",
                text: "<p>Siin on Eesti! <b>Tere Peeter</b></p>",
              },
              {
                lang: "rus",
                text: "<p>Эта Русском! <b>Привет Валодя!</b></p>",
              },
              {
                lang: "eng",
                text: "<p>This is England! <b>Hi Shaun</b></p>",
              }
            ]
          }
        },

        methods: {
          changeLanguage(index) {
            if (index === 2) {
              this.currentLanguage = 0
            } else {
              this.currentLanguage++
            }
          }
        }
    }
</script>

<style lang="scss">

@media (min-width: 768px) {

  .about-figure {
    width:  40%;

    img {
      height: 70%;
      -webkit-box-shadow: 0px 0px 62px -15px rgba(0,0,0,1);
      -moz-box-shadow: 0px 0px 62px -15px rgba(0,0,0,1);
    }

  }
}

.about-paragraphs {
}

.about-content {
  button {
    outline: none;
  }

  font-family: 'Source Code Pro', monospace;

  padding-right: 10%;
  padding-left: 5%;

  .about-lang-btn {
    border-bottom: 1px solid #A5A5A5;
    color: #A5A5A5;
    width: fit-content;
  }

  p {
    @apply
      py-5

  }

  @apply
    pt-0
    py-5




}

</style>
