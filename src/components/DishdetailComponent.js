import React from 'react';
import '../App.css';
import { Card, CardImg, CardBody, CardTitle, CardText ,Breadcrumb ,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

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
                                <p>{comment.comment}</p><br/>
                                <p>--{comment.author} ,{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p><br/>
                            </li>
                            );
                        })}
                    </ul>
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
                        <Breadcrumb className="col-12">
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