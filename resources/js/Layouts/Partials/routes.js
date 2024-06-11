import {
    AiOutlineDashboard,
    AiOutlineUsergroupAdd,
    AiOutlineUsergroupDelete,
    AiOutlineControl,
    AiOutlineUser } from "react-icons/ai";

export default [
    {
        name: "Dashboard",
        show: true,
        icon: AiOutlineDashboard,
        route: route("dashboard"),
        active: "dashboard",
        permission: "view-dashboard",
    },
    {
        name: "User Management",
        show: true,
        icon: AiOutlineUser,
        items: [
            {
                name: "Access Control",
                show: true,
                icon: AiOutlineControl,
                route: '',
                active: "roles.*",
                permission: "view-role",
            },
            {
                name: "Active Users",
                show: true,
                icon: AiOutlineUsergroupAdd,
                route: route("users.index"),
                active: "users.index",
                permission: "view-user",
            },
            {
                name: "Inactive Users",
                show: true,
                icon: AiOutlineUsergroupDelete,
                route: route("users.index"),
                active: "users.index",
                permission: "view-user",
            },
        ],
    },
];
