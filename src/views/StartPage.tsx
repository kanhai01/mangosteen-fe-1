import { defineComponent } from "vue";
import s from "./StartPage.module.scss";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("onClick");
    };
    return () => (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
        </div>
        <FloatButton></FloatButton>
      </div>
    );
  },
});
