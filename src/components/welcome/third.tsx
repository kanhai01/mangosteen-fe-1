import { defineComponent } from "vue";
import s from "./First.module.scss";
import welcome3 from "../../assets/icons/welcome3.svg";
import { RouterLink } from "vue-router";

export const third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.welcome3} src={welcome3} />
          <h2>
            数据可视化
            <br />
            收支一目了然
          </h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink class={s.next} to="/welcome/4">
            下一页
          </RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
