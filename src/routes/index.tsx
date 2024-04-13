import { useRoutes } from "react-router-dom";
import { HomePage } from "./elements";
import { Layout } from "../components/layout";
import { appPaths } from "./paths";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: appPaths.HOME,
          element: (
            <Layout>
              <HomePage />
            </Layout>
          ),
        },
      ],
    },
  ]);
}
