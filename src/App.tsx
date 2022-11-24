import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>导航</header>
        <div>
          <ul>
            <li>
              <router-link to="/Foo">Foo</router-link>
            </li>

            <li>
              <router-link to="/Bar">Bar</router-link>
            </li>
          </ul>
          <routerView></routerView>
        </div>
        <footer>页脚</footer>
      </>
    );
  },
});
