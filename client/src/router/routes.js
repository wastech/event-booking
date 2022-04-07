const routes = [
  { path: "/", component: () => import("pages/Index.vue") },
  { path: "/event", component: () => import("pages/event.vue") },
  { path: "/events", component: () => import("pages/events.vue") },
  { path: "/blogs", component: () => import("pages/blogs.vue") },

  {
    path: "/blog/:id",
    component: () => import("pages/blogDetail.vue"),
    name: "blog",
    props: true,
  },
  {
    path: "/category/:id",

    name: "category",
    component: () => import("pages/category.vue"),
  },
  { path: "/login", name: "login", component: () => import("pages/login.vue") },
  {
    path: "/register",
    name: "register",
    component: () => import("pages/register.vue"),
  },
  { path: "/cart-event", component: () => import("pages/cartEvent.vue") },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/Index.vue") },
      // { path: "posts", component: () => import("pages/posts.vue") },
      {
        path: "post-table",
        component: () => import("components/PostTable.vue"),
      },
      {
        path: "post-category",
        component: () => import("components/PostCategory.vue"),
      },
      {
        path: "event-category",
        component: () => import("components/EventCategory.vue"),
      },
      {
        path: "tag",
        component: () => import("components/AppTag.vue"),
      },
      {
        path: "createpost",
        component: () => import("components/CreatePost.vue"),
      },
      {
        path: "createevent",
        component: () => import("components/CreateEvent.vue"),
      },
      // { path: "category", component: () => import("pages/category.vue") },
      // { path: "setting", component: () => import("pages/setting.vue") },
      // { path: "users", component: () => import("pages/users.vue") },
      // {
      //   path: "editpost/:id",
      //   name: "editpost",
      //   component: () => import("pages/editPost.vue"),
      // },
    ],
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
  },

  {
    path: "/eventregistration",
    component: () => import("pages/eventRegister.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
