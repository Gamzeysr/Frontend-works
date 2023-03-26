import { useState } from "react";



const KeyboardClipboard = () => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            alert("Please dont enter a number");
            e.preventDefault()
        }
        e.keyCode === 13 && setInputValue("");
    };
    //! onKeyDown={handleKeyDown} yaparak klavye ye de bir tusa basıldıgında rakamları basılırsa eger yazma dedik bu sekilde



    return (<div className="container text-center
    ">
        <h1>CLIPBOARD EVENTS </h1>
        <input className="form-control"
            type="text"
            value={inputValue}
            //👆Bu value olmazsa inputa girilen deger silinmiyor o yuzden koyduk 
            onChange={(e) => {
                e.target.value = e.target.value.toLocaleUpperCase();
                setInputValue(e.target.value)
                {/* 👆setli olan onChangede yazılan kullanıcının inputa girilecek olan değeri*/ }
            }}
            onKeyDown={handleKeyDown}
        />



        <p className="text-center mt-4">{inputValue}</p>
        {/* 👆girilen değeri bize kullanıcıya göstericek olan kısım  */}
        <textarea
            className="form-control"
            name="area"
            id="area"
            rows="10"
        >

        </textarea>

    </div>
    );

};
export default KeyboardClipboard;