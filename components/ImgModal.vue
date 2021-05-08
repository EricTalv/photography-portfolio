<template>

  <transition name="modal">
    <div class="modal-mask">

      <button class="modal-default-button " @click="$emit('close')">
        <svg class="h-8 w-8 text-gray-700" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div class="img-controls">
        <div class="img-control-prev">
          <button @click="console.log('PREV')">
            <svg class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
        </div>
        <div class="img-control-next">
          <button @click="console.log('NEXT')">
            <svg class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="modal-wrapper">

        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <div class="flex justify-center" >
              <img class="w-11/12" src="https://picsum.photos/1500/1000" alt="">
            </div>

            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "Modal.vue",

  }
</script>

<style lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .9);
    display: table;
    transition: opacity 0.3s ease;

  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    display: flex;
    justify-content: center;

    width: 100%;
    margin: 0px auto;
    padding: 20px 30px;
    border-radius: 2px;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    z-index: 1;

    @apply absolute
    right-6
    top-6

    }

  .img-controls-wrapper {
    display: flex;
    justify-content: center;
  }

  .img-controls {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-control-next, .img-control-prev {
      width: 50%;
    }

    .img-control-prev {
      margin-left: 2vw;
    }

    .img-control-next {
      display: flex;
      justify-content: flex-end;
      margin-right: 2vw;
    }
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .modal-open {
    overflow: hidden;
  }


</style>
