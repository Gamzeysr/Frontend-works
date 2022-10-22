import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
    const url = "## https://tutorials-api-cw.herokuapp.com/api/tutorials";
    return (
        <>
            <AddTutorial />
            <TutorialList />
        </>
    );
};

export default Home