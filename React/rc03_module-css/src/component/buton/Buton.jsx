import ButonStyle from './buton.module.css';

const Buton = ({ btn }) => {
    return (
        <div className={ButonStyle.title}>
            <button>{btn}</button>
        </div >
    );
};

export default Buton;