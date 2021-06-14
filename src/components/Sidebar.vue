<template>
  <div>
    <div
      class="flex flex-row items-center text-white hover:text-green-300 cursor-pointer transition-all"
    >
      <img class="w-12 h-12" src="../assets/logo.png" />
      <h1 class="ml-3 font-mono text-4xl font-bold">
        Brand<span class="text-green-300">Colors</span>
      </h1>
    </div>
    <div class="px-5 my-3 w-72 text-gray-400">
      <p>
        The biggest collection of official brand color codes around. Curated by
        @brandcolors and friends.
      </p>
      <button
        @click="modal = !modal"
        class="mt-3 font-bold font-mono pr-4 py-4 outline-none hover:text-green-300 transition-colors"
      >
        About BrandColors
      </button>
    </div>
    <Modal v-show="modal" @closeModal="closeModal" />
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal,
  },
  emits: ['closeModal'],
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    closeModal() {
      this.modal = false
    }
  }
};
</script>
<style lang="scss" scoped>
div:hover span {
  color: white !important;
}
</style>