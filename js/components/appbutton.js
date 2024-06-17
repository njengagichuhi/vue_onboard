export default{
    template:
      '<button class="bg-gray-200 hover:bg-gray-600 border roundrd px-5 py-2 disabled:cursor-not-allowed" :disabled="processing"> <slot/></button>',

    data() {
      return {
        processing: true,
      };
    }
  }