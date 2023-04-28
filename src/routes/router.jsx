import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login";
import ChatFeed from "../components/ChatFeed";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Login/>
            }
        ]
    },
    {
        path: 'feed',
        element: <ChatFeed />
    }
])


export default router;