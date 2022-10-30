import React, { Component } from 'react';
import { Product } from '../shared/Product';
import ProductFormComponent from './ProductFormComponent';
import ProductListComponent from './ProductListComponent';
class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Product
        }
    }
    addNewProduct = (product) => {
        this.setState({
            product: [...this.state.product, product]
        })

    }
    deleteProduct = (product) => {
        this.setState({
            product: this.state.product.filter(p => p.id !== product.id)
        }
        );
    }
    render() {

        return (
            <div>
                <ProductListComponent product={this.state.product} deleteProduct={this.deleteProduct} />
                <ProductFormComponent addProduct={this.addNewProduct} />
            </div>)
    }
}
export default ProductComponent;
