import { defineComponent } from "vue";
import { Button } from "../shared/Button";
export const StartPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <Button>测试11111111</Button>
      </div>
    );
  },
});
