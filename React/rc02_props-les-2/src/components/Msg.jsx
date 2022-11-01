const Msg = (props) => {


    // return (
    //     <div>
    //         <h3>Merhaba {props.name}</h3>
    //     </div>
    // )
    //! Destructuring yöntemi ilede yapılır👇
    const { name } = props;
    return (
        <div>
            <h3>Merhaba {name}</h3>
        </div>
    )
}
export default Msg;





