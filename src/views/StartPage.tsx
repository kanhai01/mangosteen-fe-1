import { defineComponent } from "vue";
import s from "./StartPage.module.scss";
import { Center } from "../shared/Center";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/icon";
import { Navbar } from "../shared/Navbar";
export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("onClick");
    };
    return () => (
      <div>
        <Navbar>
          {{
            default: () => "山竹记账",
            icon: () => <Icon name="mangosteen" class={s.navIcon}></Icon>,
          }}
        </Navbar>
        <Center class={s.welcome1_wrapper}>
          <Icon name="welcome1" class={s.welcome1}></Icon>
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            开始记账
          </Button>
        </div>
        <FloatButton iconName="add" />
      </div>
    );
  },
});
