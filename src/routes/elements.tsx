import { ElementType, Suspense, lazy, } from "react";

const Loadable =
  (Component: ElementType) =>
    () => {
      return <Suspense >{<Component />}</Suspense>;
    };

export const HomePage = Loadable(lazy(() => import("../pages/home")));
