import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok"
    }


    onClickEvent = (number, e) => {
        console.log(number);
    }
    // constructor(props) {
    // super(props);
    // this.state = {
    // isVisible: false
    // }
    // }
    render() {
        //Destructing
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;
        return (
            <div className='col-md-8 mb-4'>
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 35)}>{name}</h4>
                        <i className='far fa-trash-alt' style={{ cursor: "pointer" }}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                            <p className='cars-text'>Maaş : {salary}</p>
                            <p className='cars-text'>Department : {department}</p>
                            {/* <p>{this.state.test}</p> */}
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}
export default User;
