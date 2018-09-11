<template>
    <div class="uploader">
        <img v-bind:src="src" />
        <input
                class="uploader-input"
                type="file"
                ref="uploader"
                @change="updateImage"
                v-if="$builder.isEditing && mode === 'input'" />
    </div>
</template>

<script>
export default {
  name: 'Uploader',
  inject: ['$builder', '$section'],
  props: {
    path: {
      type: String,
      required: true
    },
    mode: {
      default: 'input',
      type: String
    }
  },
  data: () => ({
    src: ''
  }),
  created () {
    this.src = this.$section.get(this.path);
  },
  methods: {
    updateImage () {
      const file = this.$refs.uploader.files[0];
      if (!file) return;
      const imageURL = URL.createObjectURL(file);

      this.src = imageURL;

      this.$section.set(this.path, imageURL);
    }
  }
}
</script>
