//* ================= CLASS COMPONENTS AND STATE ====================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================

import { Component } from "react";

class Counter extends Component {
    //! class componentte state kullanmam gerekirse mutlaka constructer ı kullanıcm 👇
    constructor(props) {
        super(props);

        //! count state'ine baslangic degeri verdik
        this.state = {
            count: props.count || 0,
            //!👆 Burada props.count yaparak propsdan gelen countu kullan demiş oldum
            //! counta deger verilmeyen bı durumda sıfıra aktarılsın dıye bu sekilde count: props.count || 0, yazıyoruz 
        };
        //? increment metodunun Counter class'ina baglanmasi (bind)
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    //! 👆değişkene this.state.count ile erişebiliriz dye bu sekilde yaptık.
    //!!!!!!! DİKKAT!! Bir dikkat etmemiz gereken de bu methodu bu sekilde arrow func yazmadıgımız için bind ederek bagladık ama arrow func ile kullansaydık bin etmemize gerek kalmayacakdı onu de decrement methodu nu kullanarak yapmış olduk :) 

    //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
    //! Ancak, React built-in fonksiyonlari baglidir.

    //! 👇otomatik bind yapıyor arrow func ile yaptıgımız için 
    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };
    //! DİKKAT!! increment ve decrement methodunu constructorun dışına yazıyoruz UNUTMA bu önemli 

    render() {
        return (
            <div className="container text-center mt-4">
                <h1>CLASSFUL COMPONENTS</h1>
                <h2 className="display-4 text-danger">COUNT:{this.state.count}</h2>
                {/* count sayacına erşmek için {this.state.count} yazdık 👆 fonnk read yapmış olduk burada */}
                <button onClick={this.increment} className="btn btn-success">
                    INC
                </button>



                <button onClick={this.decrement} className="btn btn-danger">
                    DEC
                </button>
            </div>
            // INC ve DEC butonunda ise fonk atama yaptık 
        );
    }
}

export default Counter;

