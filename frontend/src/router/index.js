import { createBrowserRouter } from "react-router";

import Layout from "@/components/Layout";
import NewNote from "@/pages/NewNote";
import NoteList from "@/pages/NoteList";
import Settings from "@/pages/Settings";
import Favorites from "@/pages/Favorites";
import Account from "@/pages/Account";
import Graph from "@/pages/Graph";
import NoteDetail from "@/pages/NoteDetail";

const routes = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: "/new",
                Component: NewNote
            },
            {
                path: "/",
                Component: NoteList
            },
            {
                path: "/note/:noteId",
                Component: NoteDetail
            },
            {
                path: "/graph",
                Component: Graph
            },
            {
                path: "/favorites",
                Component: Favorites
            },
            {
                path: "/settings",
                Component: Settings
            },
            {
                path: "/account",
                Component: Account
            }
        ]
    }
]);

export default routes;