import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Modal, ModalHeader, ModalBody,
    Button, Row, Col, Label, Form,
    FormGroup, Input, FormFeedback,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
class ProductFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            gpa: '',
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(event) {
        const { id, name, gpa } = this.state;
        this.props.addProduct({ id: id, name: name, gpa: gpa });
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (<>
            <Navbar dark expand="md">
                <div className="container">

                    <Col md={{ size: 2, offset: 11 }}>
                        <div>

                            <Button color="primary" outline onClick={this.toggleModal}>Add Product</Button>

                        </div>
                    </Col>
                </div>
            </Navbar>
            <div className='container'>

                <div className='row row-content'>
                    <div className="col-12 col-md-9">
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Add Product</ModalHeader>
                            <ModalBody>
                                <Form >
                                    <FormGroup row>
                                        <Label htmlFor="id" md={4}>
                                            Id
                                        </Label>
                                        <Col md={8}>
                                            <Input
                                                type="text"
                                                id="id"
                                                name="id"
                                                placeholder="id"
                                                value={this.state.id}
                                                // valid={errors.firstname === ""}
                                                // invalid={errors.firstname !== ""}
                                                // onBlur={this.handleBlur("firstname")}
                                                onChange={(event) => this.handleInputChange(event)}
                                            />
                                            <FormFeedback>No Validate</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="name" md={4}>
                                            Name
                                        </Label>
                                        <Col md={8}>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="name"
                                                value={this.state.name}
                                                // valid={errors.firstname === ""}
                                                // invalid={errors.firstname !== ""}
                                                // onBlur={this.handleBlur("firstname")}
                                                onChange={(event) => this.handleInputChange(event)}
                                            />
                                            <FormFeedback>No Validate</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="gpa" md={4}>
                                            Gpa
                                        </Label>
                                        <Col md={8}>
                                            <Input
                                                type="text"
                                                id="gpa"
                                                name="gpa"
                                                placeholder="gpa"
                                                value={this.state.gpa}
                                                // valid={errors.firstname === ""}
                                                // invalid={errors.firstname !== ""}
                                                // onBlur={this.handleBlur("firstname")}
                                                onChange={(event) => this.handleInputChange(event)}
                                            />
                                            <FormFeedback>No Validate</FormFeedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup className="d-flex" >
                                        <Col md={{ size: 3, offset: 7 }}>
                                            <Button onClick={(event) => this.handleSubmit(event)} color="success">
                                                Add Product
                                            </Button>

                                        </Col>
                                        <Col md={{ size: 1, offset: 0 }}>
                                            <Button color="danger">
                                                Cancel
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                        </Modal>

                    </div>
                </div>

            </div></>
        )

    }
}
export default ProductFormComponent;