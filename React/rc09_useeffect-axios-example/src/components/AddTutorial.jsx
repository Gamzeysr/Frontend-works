import { useState } from "react";
import axios from "axios";

const AddTutorial = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        const newTutor = { title, description };
        AddTutorial(newTutor);
    };
    const addTutorial = async (newTutor) => {
        const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
        try {
            await axios.post(url, newTutor);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container text-center mt-4">
            <h1 className="display-6 text-danger">Add Your Tutorial</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter your title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="desc"
                        placeholder="Enter your Description"
                        value={setDescription}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-danger mb-4">Submit</button>
            </form>
        </div>
    );
};

export default AddTutorial;
