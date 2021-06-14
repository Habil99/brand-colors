<template>
  <div class="home bg-gray-900">
    <div class="flex flex-column container">
      <Sidebar class="px-4 py-10 flex-auto min-w-max max-w-md" />
      <div>
        <Navbar class="px-4 py-10" />
        <div class="container flex-initial mx-auto px-5 py-10 flex-grow">
          <template v-for="(brand, key) in dataArray" :key="key">
            <Brands
              :brand="brand"
              @setSelectedBrands="setSelectedBrands"
              @showCopiedColor="showCopiedColor"
            />
          </template>
        </div>
      </div>
      <Popup
        :copiedColor="copiedColor"
        :class="
          showPopup
            ? 'opacity-100 visible right-8'
            : 'opacity-0 hidden -right-8'
        "
        class="fixed bottom-8"
      />
    </div>
  </div>
</template>

<script>
import Brands from "@/components/Brands";
import apis from "../brands.json";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Popup from "@/components/Popup";

export default {
  name: "Home",
  components: {
    Brands,
    Navbar,
    Sidebar,
    Popup,
  },
  data() {
    return {
      data: apis,
      dataArray: [],
      selectedBrands: [],
      copiedColor: "",
      showPopup: false,
    };
  },
  beforeMount() {
    this.fetchBrands();
  },
  methods: {
    setSelectedBrands(item) {
      this.selectedBrands.push(
        this.dataArray.find((b) => b.slug === item.slug)
      );
    },
    fetchBrands() {
      Object.keys(this.data).map((key) => {
        this.dataArray.push(this.data[key]);
      });
    },
    showCopiedColor(color) {
      this.copiedColor = color;
      this.showColor();
      this.copyTextToClipboard();
    },
    showColor() {
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);
      // clearInterval(this.showColor());
    },
    fallbackCopyTextToClipboard(text) {
      let textArea = document.createElement("textarea");
      textArea.value = text;

      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        let successfull = document.execCommand("copy");
        let msg = successfull ? "successfull" : "unsuccessfull";
        console.log(`Fallback: Copying text command was ${msg}`);
      } catch (err) {
        console.error(`Fallback: Oops, unable to copy ${err}`);
      }
      document.body.removeChild(textArea);
    },
    copyTextToClipboard() {
      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(this.copiedColor)
        return
      }

      navigator.clipboard.writeText('#' + this.copiedColor).then(() => {
        return
      }), (err) => {
       alert(`Color could not copy to clipboard for this error: ${err}`)
      }
    }
  },
};
</script>
<style lang="scss">
</style>