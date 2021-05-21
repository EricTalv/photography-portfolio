<template>
  <div id="__container">
    <navbar></navbar>

    <Nuxt />


    <footer class="footer-container general-padding flex justify-between ">
      <div class="footer-logo">
        <h1>Luella Photography</h1>
      </div>
      <div class="footer-media">
        <a href="https://www.instagram.com/luella.photography/">
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

<style lang="scss">


  .footer-logo {
  font-family: 'Ropa Sans', sans-serif;

  @apply
  text-xl
  }
</style>
