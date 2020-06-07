import React from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem,Form,FormGroup,Button, Label, Input,Col, FormFeedback} from 'reactstrap';
import '../App.css';

class Contact extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false,
                message:false,
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate=this.validate.bind(this);
    }

    handleBlur=(field) => (evt) =>{
        this.setState({
            touched:{...this.state.touched ,[field]:true}
        });
    }

    validate(firstname,lastname,telnum,email,message)
    {
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            message:''
        };

        if(this.state.touched.firstname && firstname.length < 1 ){
            errors.firstname='Name field can not be empty';
        }
        else if(this.state.touched.firstname && firstname.length > 10){
            errors.firstname='Name should be less than 10 charecters';
        }
        
        if(this.state.touched.lastname && lastname.length < 1 ){
            errors.lastname='Name field can not be empty';
        }
        else if(this.state.touched.lastname && lastname.length > 10){
            errors.lastname='Name should be less than 10 charecters';
        }
        
        const telReg=/^\d+$/;
        if(this.state.touched.telnum && !telReg.test(telnum)){
            errors.telnum='tel. number should be all numbers ';
        }
        
        const emailReg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(this.state.touched.email && !emailReg.test(email)){
            errors.email='please enter a correct email';
        }

        if(this.state.touched.message && message.length < 1){
            errors.message='can not submit an empty feedback';
        }
        
        return errors;
    }
    

    handleInputChange(event)
    {
        const target=event.target;
        const value=target.type === 'checkbox' ? target.checked  : target.value ;
        const name=target.name;

        this.setState({
            [name]:value
        });
    }

    handleSubmit(event)
    {  
        alert("current state is "+ JSON.stringify(this.state));
        event.preventDefault();
    }

    render()
    {
        const error=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email,this.state.message);
        const valid=error.firstname==='' && error.lastname==='' && error.telnum==='' && error.email==='' && error.message==='';
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
                         <Form onSubmit={this.handleSubmit}> 
                            <FormGroup row>
                                <Label className="col-12 col-md-2" htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Input type="text" 
                                    id="firstname" 
                                    name="firstname" 
                                    placeholder="First Name" 
                                    value={this.state.firstname} 
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('firstname')}
                                    valid={error.firstname === ''}
                                    invalid={error.firstname !== ''}
                                    />
                                    <FormFeedback>{error.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-12 col-md-2" htmlFor="lastname">Lasst Name</Label>
                                <Col md={10}>
                                    <Input type="text" 
                                    id="lastname" 
                                    name="lastname"
                                     placeholder="Last Name" 
                                     value={this.state.lastname} 
                                     onChange={this.handleInputChange}
                                     onBlur={this.handleBlur('lastname')}
                                     valid={error.lastname === ''}
                                     invalid={error.lastname !== ''} />
                                    <FormFeedback>{error.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-12 col-md-2" htmlFor="telnum">Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" 
                                    id="telnum" 
                                    name="telnum" 
                                    placeholder="Contact Tel." 
                                    value={this.state.telnum} 
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('telnum')}
                                    valid={error.telnum === ''}
                                    invalid={error.telnum !== ''} />
                                    <FormFeedback>{error.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="col-12 col-md-2" htmlFor="email">Email</Label>
                                <Col md={10}>
                                    <Input type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email Id" 
                                    value={this.state.email} 
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('email')}
                                    valid={error.email === ''}
                                    invalid={error.email !== ''} 
                                    />
                                    <FormFeedback>{error.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" className="col-12 col-md-2">Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" 
                                    rows="12" 
                                    id="message" 
                                    name="message" 
                                    placeholder="Your Feedback" 
                                    value={this.state.message} 
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('message')}
                                    valid={error.message === ''}
                                    invalid={error.message !== ''} 
                                    />
                                    <FormFeedback>{error.message}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2} }>
                                    <Button disabled={!valid} type="submit" color="primary">Send Feedback</Button> 
                                </Col>
                            </FormGroup>
                            
                         </Form>
                     </div>
                 </div>
            </div>
        );
    }
}

export default Contact;