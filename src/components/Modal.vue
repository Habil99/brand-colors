<template>
  <div
    class="fixed top-0 font-sans left-0 right-0 bottom-0 w-full h-full modal z-20 flex items-center place-content-center"
  >
    <div class="modal-wrapper flex flex-col rounded-sm relative">
      <button
        @click="close"
        class="absolute top-2 right-5 px-4 py-2 transition-all rounded-sm hover:bg-gray-200"
      >
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <h1 class="text-4xl mb-4">About BrandColors</h1>
      <p class="text-green-900 text-lg mb-3">
        BrandColors was created by <strong>DesignBombs.</strong> The goal was to
        create a helpful reference for the brand color codes that are needed
        most often.
      </p>
      <p class="text-green-900 text-lg">
        It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
        Tuts+, and over <strong>2 million pageviews.</strong> There are now over
        <strong>600 brands</strong> with <strong>1600 colors</strong> and the
        collection is always growing.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("closeModal")
    },
  },
};
</script>

<style lang="scss">
.modal {
  background: rgba(#fff, 0.5);

  &-wrapper {
    width: 100%;
    max-width: 720px;
    margin: auto;
    padding: 4vw;
    background-color: white;
    -webkit-box-shadow: 0 10px 60px rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 60px rgba(0, 0, 0, 0.1);
  }
}
</style>