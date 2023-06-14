import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api",

  navbar: [
    {
      label: "Home",
      routeName: "home",
    },
    {
      label: "Projects",
      routeName: "projects",
    },
    {
      label: "About Us",
      routeName: "aboutus",
    },
    {
      label: "Contact Us",
      routeName: "contactus",
    },
  ],
});
