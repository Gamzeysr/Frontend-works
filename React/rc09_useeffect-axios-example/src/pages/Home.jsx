import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
    const [tutorials, setTutorials] = useState([]);
    const url = "https://63f7293ee8a73b486af1c260.mockapi.io/api/tasks";

    //?   bizim tutorials dedğimiz bizim bir dizi içerisinde ki objectler 
    //! CRUD: (GET-READ)
    // 👇Burada CRUD işleminden R yi yani read ı yapmış olduk .Ynai verileri GET işlemi yaptık yani verileri çektik ve okuduk.
    const getTutorials = async () => {
        try {
            const { data } = await axios(url);
            console.log(data)
            setTutorials(data);
        } catch (error) {
            console.log(error)
        }


    }



    useEffect(() => {
        getTutorials();

    }, []);


    return (
        <>
            <AddTutorial getTutorials={getTutorials} />
            <TutorialList tutorials={tutorials} />
        </>
    );
};

export default Home;