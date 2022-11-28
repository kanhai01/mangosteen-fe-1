import { first } from "../components/welcome/First";
import { forth } from "../components/welcome/Forth";
import { second } from "../components/welcome/Second";
import { third } from "../components/welcome/Third";
import { Welcome } from "../views/Welcome";

export const routes = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      {
        path:'',
        redirect:'/welcome/1'
      },
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
