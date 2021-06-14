<template>
  <div
    :class="{ 'ring-4 rounded-sm': showInfo }"
    :style="{ borderColor: showInfo ? 'red' : '' }"
    class="px-2 mb-5 transition-all"
  >
    <p
      class="py-3 text-2xl text-green-300 font-mono font-bold cursor-pointer max-w-sm hover:text-green-600"
      @click="showInfoBrand"
    >
      {{ brand.title }}
    </p>
    <div
      class="flex flex-row flex-wrap rounded-sm pt-3 pl-3"
      :class="{ 'ring-1': !showInfo }"
    >
      <template class="" v-for="(color, key) in brand.colors" :key="key">
        <div
          class="flex items-center transition-all py-5 rounded-sm px-10 mr-2 z-10 mb-3 place-content-center relative brand-card"
          :style="{
            backgroundColor: `#${color}`,
            color: `${getContrast(color)}`,
            flex: `${showInfo ? '1' : ''}`,
          }"
          @click="showCopiedColor(color)"
        >
          {{ showInfo ? "#" + color : "" }}
          <div
            class="text-3xl opacity-0 z-0 absolute top-auto min-w-min cursor-pointer copy-icon flex items-center place-content-center"
          >
            <font-awesome-icon :icon="['fas', 'copy']" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { getContrastYIQ } from "../helpers";

export default {
  props: {
    brand: Object,
  },
  data() {
    return {
      getContrast: getContrastYIQ,
      showInfo: false,
    };
  },
  methods: {
    showInfoBrand() {
      this.$emit('setSelectedBrands', this.brand)
      this.showInfo = !this.showInfo
    },
    showCopiedColor(color) {
      this.$emit('showCopiedColor', color)
    }
  },
};
</script>

<style lang="scss">
.copy-icon {
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(#fff, 0.3);
}

/* .brand-card {
  max-width: 200px;
} */

.brand-card:hover {
  .copy-icon {
    z-index: 10;
    opacity: 1;
    transition: all 0.2s linear;
  }
}
</style>