import { defineComponent } from "vue";
export const third = defineComponent({
  setup: (props, context) => {
    return () => <div>third</div>;
  },
});
