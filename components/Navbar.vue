<template>
  <nav class="flex flex-wrap items-center justify-between ">

    <!-- logo Start -->
    <div class="nav-logo">
      <h1>Luella.</h1>
      <h1>Photography</h1>
    </div>
    <!-- logo End -->

    <!-- hamburger Start -->
    <div class="flex md:hidden">
      <v-burger
        type="squeeze"
        :active="isActive"
        @updated="isActive = $event"
      />
    </div>
    <!-- hamburger End -->


    <!-- links desktop Start  -->
    <div class="nav-links-desktop hidden md:block pr-20">
      <NuxtLink to="/">Work</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
    <!-- links desktop End  -->

    <!-- links Mobile Start -->
    <div
      class=
        "
        nav-links-mobile
        h-screen
        absolute
        top-24
        flex
        flex-col
        justify-center
        items-center
        "
      :class="isActive ? 'nav-links-mobile-is-active' : 'nav-links-mobile-disable' ">

      <div class="
        nav-links-mobile-a
        h-full
        flex
        flex-col
        justify-center
        items-center">
        <a href="/"
           class="block md:inline-block">Work</a>
        <a href="/about"
           class="block md:inline-block">About</a>
        <a href="/contact"
           class="block md:inline-block">Contact</a>
      </div>


      <a href="https://www.instagram.com/luella.photography/" class="mb-44 md:hidden">
        <svg class="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </a>

    </div>
    <!-- links Mobile End -->


    <!-- social Start -->
    <a href="https://www.instagram.com/luella.photography/" class="hidden md:flex">
      <svg class="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    </a>
    <!-- social End -->

  </nav>
</template>

<script>
  export default {
    name: "Navbar.vue",

    data() {
      return {
        isActive: false,

      }
    },
  }
</script>

<style lang="scss">

  nav {
    padding: 1.8vw 4vw;
  }

  .nav-links-mobile {
    background-color: #242424;
  }

  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner:after,
  .hamburger.is-active .hamburger-inner:before{
    background-color: white !important;
  }

  .hamburger {

    .hamburger-inner, :after, :before, .is-active {
      background-color: white !important;
    }

    padding: 0;
    &:focus {
      outline: none;
    }
  }

  .nav-logo {
    font-family: 'Ropa Sans', sans-serif;
    @apply
      text-3xl
  }

  .nav-links-mobile, .nav-links-desktop {
    font-weight: 300;
    font-family: 'Source Code Pro', monospace;
  }

  .nav-links-mobile {
    width: 92%;
    font-size: 8.5vmin;

    .nav-links-mobile-a {
      a {
        margin: 5vw 5vw 0 5vw;
      }
    }
  }

  .nav-links-mobile-is-active {
    opacity: 1;
    visibility: visible;
    transition: all .5s;

  }

  .nav-links-mobile-disable {
    opacity: 0;
    visibility: hidden;
    transition: all .5s;
  }

  a.nuxt-link-exact-active {
    font-weight: 400;


    border-bottom: 1px solid white;
    padding-bottom: 3px;
  }



</style>
