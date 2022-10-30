import React, { Component } from 'react';
import { Table } from 'reactstrap';
class ProductListComponent extends Component {
    constructor(props) {
        super(props);


    }
    handleOnClickDelete(product) {
        this.props.deleteProduct(product);
    }
    render() {
        const product = this.props.product.map((product) => {
            return (

                <tbody key={product.id}>
                    <tr >
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.gpa}</td>
                        <td> <span onClick={() => this.handleOnClickDelete(product)} className="fa-solid fa-circle-xmark"></span></td>
                    </tr>

                </tbody>

            )
        });
        return (<div>
            <Table hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gpa</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {product}
            </Table>
        </div>);
    }
}
export default ProductListComponent 