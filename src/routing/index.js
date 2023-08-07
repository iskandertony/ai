import Home from "../pages/home";
import Tets from "../pages/test";

export const routing = {
  main: {
    path: "/",
    element: <Home />, //
    protected: false,
    role: "all",
  },

  test: {
    path: "/tets",
    element: <Tets />, //
    protected: false,
    role: "all",
  },
};
