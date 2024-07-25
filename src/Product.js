import {Component} from "react";
import {Cancel} from "axios";

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            product: [
                {id: 1, name: "Banh", quantity: 30, price: 2900},
                {id: 2, name: "Keo", quantity: 50, price: 3500}
            ],
            newProduct: {id: '', name: '', quantity: '', price: ''}
        }
    }
    
    deleteProduct = (id) => {
        this.setState((prevState) => ({
            product: prevState.product.filter(product => product.id !== id)
        }))
    }
    
    render() {
        return (
            <>
                <h2>List Product</h2>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    {this.state.product.map(pro => (
                        <tr>
                            <td>{pro.id}</td>
                            <td>{pro.name}</td>
                            <td>{pro.quantity}</td>
                            <td>{pro.price}</td>
                            <td>
                                <button onClick={() => {this.deleteProduct(pro.id)}}>Delete</button>
                            </td>
                            <td>
                                <button value={pro.id}>Update</button>
                            </td>
                        </tr>
                    ))}
                </table>
                <input value={this.state.newProduct.id} onChange={(eId) => (
                    this.setState({newProduct: {...this.state.newProduct, id: eId.target.value}})
                )}/>
                <input value={this.state.newProduct.name} onChange={(eName) => (
                    this.setState({newProduct: {...this.state.newProduct, name: eName.target.value}})
                )}/>
                <input value={this.state.newProduct.quantity} onChange={(eQuantity) => (
                    this.setState({newProduct: {...this.state.newProduct, quantity: eQuantity.target.value}})
                )}/>
                <input value={this.state.newProduct.price} onChange={(ePrice) => (
                    this.setState({newProduct: {...this.state.newProduct, price: ePrice.target.value}})
                )}/>
                <button onClick={() => (
                    this.setState({
                        product: [...this.state.product, this.state.newProduct],
                        newProduct: {id: '', name: '', quantity: '', price: ''}
                    })
                )}>Add
                </button>
            </>
        )
    }
}