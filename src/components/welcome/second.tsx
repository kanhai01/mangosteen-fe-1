import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import welcome2 from "../../assets/icons/welcome2.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const second = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={welcome2} />,
      title: () => (
        <h2>
          每日提醒
          <br />
          不会遗漏每一笔账单
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink class={s.next} to="/welcome/3">
            下一页
          </RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});
