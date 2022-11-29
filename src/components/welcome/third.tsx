import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import welcome3 from "../../assets/icons/welcome3.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const third = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={welcome3} />,
          title: () => (
            <h2>
              数据可视化
              <br />
              收支一目了然
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
              <RouterLink class={s.next} to="/welcome/4">
                下一页
              </RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
