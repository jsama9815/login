import { routes } from "./routes";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
let router = new VueRouter({ routes, mode:"history" })

export default router;