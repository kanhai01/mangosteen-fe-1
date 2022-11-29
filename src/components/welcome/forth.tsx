import s from "./WelcomeLayout.module.scss";
import welcome4 from "../../assets/icons/welcome4.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";

export const forth = {
  render: () => (
    <WelcomeLayout>
      {{
        icon: () => <img src={welcome4} />,
        title: () => (
          <h2>
            云备份
            <br />
            再也不怕数据丢失
          </h2>
        ),
        buttons: () => (
          <>
            {" "}
            <RouterLink class={s.fake} to="/start">
              跳过
            </RouterLink>
            <RouterLink class={s.next} to="/start">
              完成
            </RouterLink>
            <RouterLink class={s.fake} to="/start">
              跳过
            </RouterLink>
          </>
        ),
      }}
    </WelcomeLayout>
  ),
};
