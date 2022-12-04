import { defineComponent } from "vue";
import s from "./Icon.module.scss";
export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<
        "add" | "welcome1" | "welcome2" | "welcome3" | "welcome4" | "mangosteen"
      >,
    },
  },
  setup: (props, context) => {
    return () => (
      <div>
        <svg class={s.icon}>
          <use xlinkHref={"#" + props.name}></use>
        </svg>
      </div>
    );
  },
});
