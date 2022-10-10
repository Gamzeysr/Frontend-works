import Msg from './Msg';



const Person = (props) => {
    const { name, img, tel } = props;
    return (
        <div style={{ textAlign: "center" }}>
            <p>Merhaba {name}</p>
            {/* bunu yerine artık asagıdaki dosyanın içndede buna benzer bir şey vardı o yüzden buu cagrdık yapılır👇 */}
            <Msg name={name} />
            {/* 👆bu sekilde bunuda Msg dosyasından larak kullandım */}
            <img style={{ width: "200px" }} src={img} alt="img1" />
            <p>{tel}</p>
        </div>
    );
};
export default Person; 