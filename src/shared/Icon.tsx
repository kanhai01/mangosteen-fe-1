import { defineComponent, PropType } from "vue";
import s from "./Icon.module.scss";

export type IconName =
  | "add"
  | "welcome1"
  | "welcome2"
  | "welcome3"
  | "welcome4"
  | "mangosteen";

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      required: true,
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
