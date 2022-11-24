import { first } from "../components/welcome/first";
import { forth } from "../components/welcome/forth";
import { second } from "../components/welcome/second";
import { third } from "../components/welcome/third";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { Welcome } from "../views/Welcome";

export const routes = [
  { path: "/Foo", component: Foo },
  { path: "/Bar", component: Bar },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      {
        path: "1",
        component: first,
      },
      {
        path: "2",
        component: second,
      },
      {
        path: "3",
        component: third,
      },
      {
        path: "4",
        component: forth,
      },
    ],
  },
];
