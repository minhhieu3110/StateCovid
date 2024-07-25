import React, {Component} from "react";

export default class State extends Component {
    constructor() {
        super();
        this.state = {
            num1: parseFloat('0'),
            num2: parseFloat('0'),
            addition: 0,
            subtract: 0,
            multiplication: 1,
            division: 0,
        }
    }
    render() {
        return(
            <center>
                <>Số Thứ 1:</>
                <input type={"number"} value={this.state.num1} onChange={(e1) =>
                    this.setState({num1: parseFloat(e1.target.value)})}/>
                <br/>
                <>Số Thứ 2:</>
                <input type={"number"} value={this.state.num2} onChange={(e2) =>
                    this.setState({num2: parseFloat(e2.target.value)})}/>
                <br/>
                <button onClick={(add) =>
                    this.setState({addition: this.state.num1 + this.state.num2})}>Cộng
                </button>
                <button onClick={(add) =>
                    this.setState({subtract: this.state.num1 - this.state.num2})}>Trừ
                </button>
                <button onClick={(add) =>
                    this.setState({multiplication: this.state.num1 * this.state.num2})}>Nhân
                </button>
                <button onClick={(add) =>
                    this.setState({division: this.state.num1 / this.state.num2})}>Chia
                </button>
                <h5>Tổng: {this.state.addition}</h5>
                <h5>Hiệu: {this.state.subtract}</h5>
                <h5>Tích: {this.state.multiplication}</h5>
                <h5>Thương: {this.state.division}</h5>
            </center>
        )
    }
}