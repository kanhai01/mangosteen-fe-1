import { defineComponent } from "vue";
export const second = defineComponent({
  setup: (props, context) => {
    return () => <div>second</div>;
  },
});
