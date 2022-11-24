import { defineComponent } from "vue";
export const first = defineComponent({
  setup: (props, context) => {
    return () => <div>first</div>;
  },
});
