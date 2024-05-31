import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
    return (
        <div className="w-[80%] m-auto ">
            <Nav />
            <MainRoutes />
        </div>
    );
};

export default App;
