export default {
  template: `
    <div class="flex gap-2">
      <button v-for="tag in tags" 
              @click="$emit('update:currentTag', tag)" 
              class="border px-1 pb-px rounded text-xs"
              :class="{
                'border-blue-500 text-blue-500': tag === currentTag
              }"
              >{{ tag }}</button>
    </div>
    `,
  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
