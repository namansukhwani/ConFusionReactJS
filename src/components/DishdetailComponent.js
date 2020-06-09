import React from 'react';
import '../App.css';
import { Card, CardImg, CardBody, CardTitle, CardText ,Breadcrumb ,BreadcrumbItem ,Button, Modal, ModalHeader, ModalBody, Label,Row} from 'reactstrap';
import { LocalForm, Control,Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';

const maxLength=(len) => (val) => !(val) || (val.length <= len);
const minLength=(len) => (val) => (val) && (val.length >= len);

class CommentForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handelSubmit=this.handelSubmit.bind(this);
    }

    toggleModal()
    {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handelSubmit(values)
    {
        alert("current state is " + JSON.stringify(values));
        this.toggleModal();
    }

    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span>{' '}Submit Comment</Button>
            

                {/*--Modal For Comment--*/}

                <Modal id="commentModal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handelSubmit} >
                            <Row className="form-row mt-2">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating"
                                id="rating"
                                name="rating"
                                className="form-control"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-row mt-2">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author"
                                id="author"
                                name="author"
                                className="form-control"
                                placeholder="Your Name"
                                validators={{
                                    minLength:minLength(3),
                                    maxLength:maxLength(15)
                                }}
                                />
                                <Errors 
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength:'Must be greater than 2 characters',
                                    maxLength:'Must be 15 characters or less'
                                }}/>
                            </Row>
                            <Row className="form-row mt-2">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment"
                                rows="6"
                                id="comment"
                                name="comment"
                                className="form-control"
                                />
                            </Row>
                            <Row className="form-row mt-2">
                                <Button type="submit" color="primary" >Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}


    function RenderDish({dish})
    {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments})
    {
        if(comments!=null)
        {   
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(comment => {
                            return(
                            <li  key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author} ,{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                            );
                        })}
                    </ul>
                    <CommentForm/>
                </div>
            );
        }
        else{
            return <div></div>
        }      
    }
    function DishDetail(props)
    {
        if(props.dish!=null)
        { 
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb >
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            );           
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

export default DishDetail; 