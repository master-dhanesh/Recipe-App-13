import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";
import { asyncload } from "./store/actions/recipeActions";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncload());
    }, []);

    return (
        <div className="w-[80%] m-auto ">
            <Nav />
            <MainRoutes />
        </div>
    );
};

export default App;
