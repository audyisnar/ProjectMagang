import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Berita from "../pages/News";
import Pesan from "../pages/Message";
import DetailPesan from "../pages/DetailMessage";
import DetailBerita from "../pages/DetailNews";
import EditBerita from "../pages/EditNews";
import GantiPassword from "../pages/ChangePassword";
import PostingBerita from "../pages/PostNews";
import DetailMessage from "../pages/DetailMessage";

export const APP_ROUTE = [
    {
        name: "Login",
        path: "/",
        exact: true,
        component: Login,
        restricted: true,
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        exact: true,
        component: Dashboard,
        private: true,
        sidebar: true,
        icon: "bi bi-speedometer2",
    },{
        name: "Berita",
        path: "/berita",
        exact: true,
        component: Berita,
        private: true,
        sidebar: true,
        icon: "bi bi-newspaper",
    },
    {
        name: "Pesan",
        path: "/pesan",
        exact: true,
        component: Pesan,
        private: true,
        sidebar: true,
        icon: "bi bi-chat-dots",
    },
    {
        name: "Detail Pesan",
        path: "/detail-pesan",
        exact: true,
        component: DetailPesan,
        private: true,
    },
    {
        name: "Detail Berita",
        path: "/detail-berita",
        exact: true,
        component: DetailBerita,
        private: true,
    },
    {
        name: "Edit Berita",
        path: "/edit-berita",
        exact: true,
        component: EditBerita,
        private: true,
    },
    {
        name: "Ganti Password",
        path: "/setting",
        exact: true,
        component: GantiPassword,
        private: true,
    },
    {
        name: "Posting Berita",
        path: "/posting-berita",
        exact: true,
        component: PostingBerita,
        private: true,
    },
    {
        name: "Detail Pesan",
        path: "/detail-pesan/:id",
        exact: true,
        component: DetailMessage,
        private: true,
    },
];