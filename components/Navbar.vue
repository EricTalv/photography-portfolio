<template>
  <nav class="flex flex-wrap items-center justify-between bg-white">

    <!-- logo Start -->
    <div class="nav-logo">
      <h1>Luella</h1>
      <h1>Photography</h1>
    </div>
    <!-- logo End -->

    <!-- links Start -->
    <div
      class="nav-links  pr-20 md:block"
      :class="isActive ? 'block' : 'hidden' "

    >
      <a href="#"
         class="">Work</a>
      <a href="#"
         class="">About</a>
      <a href="#"
         class="">Contact</a>
    </div>
    <!-- links End -->

    <!-- hamburger Start -->
    <div class="flex md:hidden">
      <v-burger
        type="squeeze"
        :active="isActive"
        @updated="isActive = $event"
      />
    </div>
    <!-- hamburger End -->

    <!-- social Start -->
    <a href="#" class="hidden md:flex">
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

  .hamburger {
    &:focus {
      outline: none;
    }
  }

  .nav-logo {
    font-family: 'Ropa Sans', sans-serif;
    font-size: 1.8rem;
  }

  .nav-links {
    font-family: 'Source Code Pro', monospace;
  }


</style>
