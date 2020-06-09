import React from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem,Row,Button, Label,Col} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import '../App.css';

const required=(val) =>val && val.length;
const maxLength=(len) => (val) => !(val) || (val.length <= len);
const minLength=(len) => (val) => (val) && (val.length >= len);
const isNumber=(val) => !isNaN(Number(val));
const isEmail=(val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(val);

class Contact extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            isFormValid:true
        }
    }


    handleSubmit(values)
    {  
        alert("current state is "+ JSON.stringify(values));
        //event.preventDefault();
    }

    handleUpdate(form)
    {
        this.setState({isFormValid : !form['$form'].valid});
    }
    render()
    {
        return(
            <div className="container">
                 <div className="row">
                     <Breadcrumb >
                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                         <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                     </Breadcrumb>
                     <div className="col-12">
                         <h3>Contact Us</h3>
                         <hr/>
                     </div>
                 </div>
                 <div className="row row-content">
                    <div className="col-12 col-sm-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                         <h5>Our Address</h5>
                         <address>
                         121, Clear Water Bay Road<br />
                             Clear Water Bay, Kowloon<br />
                             HONG KONG<br />
                             <i className="fa fa-phone"></i>: +852 1234 5678<br />
                             <i className="fa fa-fax"></i>: +852 8765 4321<br />
                             <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>  
                         </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className=" btn-group" role="button">
                            <a role="button" className="btn btn-primary" href="tel:+918783827324" ><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="www.google.com"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                 </div>
                 <div className="row row-content">
                     <div className="col-12 col-sm-12">
                        <h3>Send us Your Feedback</h3>                       
                     </div>
                     <div className="col-12 col-md-9">
                         <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                         onUpdate={(form) => this.handleUpdate(form)}> 
                            <Row className="form-group">
                                <Label className="col-12 col-md-2" htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model=".firstname" 
                                    id="firstname" 
                                    name="firstname" 
                                    placeholder="First Name" 
                                    className="form-control"
                                    validators={{
                                        required ,
                                         minLength:minLength(3),
                                         maxLength:maxLength(15)
                                    }}
                                    />
                                    <Errors className="text-danger" 
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required:'required',
                                        minLength:'Must be greater then 2 character.',
                                        maxLength:'Must be less than 15 charecters.'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className="col-12 col-md-2" htmlFor="lastname">Lasst Name</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".lastname" 
                                    id="lastname" 
                                    name="lastname"
                                    placeholder="Last Name"
                                   className="form-control" 
                                   validators={{
                                    required ,
                                     minLength:minLength(3),
                                     maxLength:maxLength(15)
                                }}/>
                                 <Errors className="text-danger" 
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required:'required',
                                        minLength:'Must be greater then 2 character.',
                                        maxLength:'Must be less than 15 charecters.'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className="col-12 col-md-2" htmlFor="telnum">Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text 
                                    model=".telnum" 
                                    id="telnum" 
                                    name="telnum" 
                                    placeholder="Contact Tel." 
                                    className="form-control"
                                    validators={{
                                        required,
                                        isNumber,
                                        minLength:minLength(3),
                                        maxLength:maxLength(15)
                                    }}
                                   />
                                   <Errors className="text-danger" 
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required:'required',
                                        minLength:'Must be greater then 2 character.',
                                        maxLength:'Must be less than 15 charecters.',
                                        isNumber:'Must be a number.'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label className="col-12 col-md-2" htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email Id" 
                                    className="form-control"
                                    validators={{
                                        required,
                                        isEmail,
                                    }}
                                    />
                                    <Errors className="text-danger" 
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required:'required',
                                        isEmail:'Must be a Email.'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree"
                                               className="form-check-input" /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                            className="form-control"
                                            >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" className="col-12 col-md-2">Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" 
                                    rows="12" 
                                    id="message" 
                                    name="message" 
                                    placeholder="Your Feedback" 
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                    <Errors className="text-danger" 
                                    model=".message"
                                    show="touched"
                                    messages={{
                                        required:'required '
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2} }>
                                    <Button disabled={this.state.isFormValid} type="submit" color="primary">Send Feedback</Button> 
                                </Col>
                            </Row>
                            
                         </LocalForm>
                     </div>
                 </div>
            </div>
        );
    }
}

export default Contact;