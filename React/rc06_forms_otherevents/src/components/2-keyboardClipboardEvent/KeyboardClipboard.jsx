import { useState } from "react";



const KeyboardClipboard = () => {
    const [inputValue, setInputValue] = useState("");
    return <div className="container text-center
    ">
        <h1>CLIPBOARD EVENTS </h1>
        <input className="form-control"
            type="text"
            onChange={(e) => setInputValue(e.target.value)} />
        {/* 👆setli olan onChangede yazılan kullanıcının inputa girilecek olan değeri*/}


        <p className="text-center mt-4">{inputValue}</p>
        {/* 👆girilen değeri bize kullanıcıya göstericek olan kısım  */}

    </div>;
};
export default KeyboardClipboard;