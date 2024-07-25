import {Component} from "react";
import axios from "axios";
import {render} from "@testing-library/react";

export default class ListCovid extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            covid: [],
            max:[]
        }
    }
    sortCasesIncrease = () => {
        const sortedCasesIn = this.state.covid.sort((a, b) => a.cases - b.cases);
        this.setState({covid: sortedCasesIn});
    }
    sortCasesDecrease = () => {
        const sortedCasesDe = this.state.covid.sort((a, b) => b.cases - a.cases);
        this.setState({covid: sortedCasesDe});
    }
    sortDeathsIncrease = () => {
        const sortedDeathsIn = this.state.covid.sort((a, b) => a.deaths - b.deaths);
        this.setState({covid: sortedDeathsIn});
    }
    sortDeathsDecrease = () => {
        const sortedCasesDe = this.state.covid.sort((a, b) => b.deaths - a.deaths);
        this.setState({covid: sortedCasesDe});
    }
    maxFiveProvinceCases = () => {
        const sortCovid =this.state.covid.sort((a, b) => b.cases - a.cases);
        const maxFiveCases = sortCovid.splice(0, 5);
        this.setState({max: maxFiveCases});
        // this.setState({covid: this.state.max});
    }
    maxFiveProvinceDeaths =() =>{
        const sortCovid = [...this.state.covid].sort((a, b) => b.deaths - a.deaths);
        const maxFiveDeaths = sortCovid.splice(0, 5);
        this.setState({max: maxFiveDeaths});
        // this.setState({covid: maxFiveDeaths});
    }
    componentDidMount() {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then((response) => {
            let arr = []
            console.log(response.data.detail);
            for (const key in response.data.detail) {
                arr.push(response.data.detail[key]);
            }
            this.setState({covid: arr});
        })
    }
    
    render() {
        return (
            <>
                <h1>Danh sách Covid</h1>
                <input onChange={(s => {
                    this.setState({search: s.target.value});
                })}/>
                <button onClick={this.maxFiveProvinceCases}>5 tỉnh có cases cao nhất</button>
                <button onClick={this.maxFiveProvinceDeaths}>5 tỉnh có deaths cao nhất</button>
                {this.state.max.map(max => (
                    <h4>Name: {max.name}-Cases: {max.cases}-Deaths: {max.deaths}-NewCases: {max.newcases}</h4>
                ))}
                <button onClick={this.sortCasesIncrease}>Tăng dần theo Cases</button>
                <button onClick={this.sortCasesDecrease}>Giảm dần theo Cases</button>
                <button onClick={this.sortDeathsIncrease}>Tăng dần theo Deaths</button>
                <button onClick={this.sortDeathsDecrease}>Giảm dần theo Deaths</button>
                <hr/>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>NewCases</th>
                    </tr>
                    {this.state.covid.map(covid => (
                        <>
                        {covid.name.includes(this.state.search) &&
                            <tr>
                                <td>{covid.name}</td>
                                <td>{covid.cases}</td>
                                <td>{covid.deaths}</td>
                                <td>{covid.newcases}</td>
                            </tr>}
                            </>
                    ))}
                </table>
            
            </>
        )
    }
}
    
