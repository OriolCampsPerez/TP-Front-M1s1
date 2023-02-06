import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Home from "./Component/Home";
import Jeu from  "./Component/Jeu";
import PartiesPrecedentes from "@/Component/PartiesPrecedentes";
import DefaitePage from "@/Component/DefaitePage";
import GainPage from "@/Component/GainPage";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home, /* <--- Change it */
    },
    {
        path: "/Jeu",
        name: "Jeu",
        component: Jeu,
    },
    {
        path: "/PartiesPrecedentes",
        name: "Parties Jouees",
        component: PartiesPrecedentes,
    },
    {
        path: "/DefaitePage",
        name: "Defaite",
        component: DefaitePage,
    },
    {
        path: "/GainPage",
        name: "Gagne",
        component: GainPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
