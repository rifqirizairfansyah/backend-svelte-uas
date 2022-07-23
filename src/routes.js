import Dashboard from "./dashboard.svelte";
import Anggota from "./anggota.svelte";
import AnggotaUpdate from "./anggota-update.svelte";

export default [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/anggota",
    component: Anggota,
  },
  {
    path: "/anggota/:id",
    component: AnggotaUpdate,
  },
];
