<template>
  <div
    class="bg-gray-900 w-60 text-center ring-1 
    ring-offset-green-800 ring-green rounded-sm px-2 py-3 text-white transition-all"
  >
    You copied {{ copiedColor && "#" + copiedColor }} color
  </div>
</template>

<script>
export default {
  props: {
    copiedColor: String,
  },
};
</script>