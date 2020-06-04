import React from 'react';
import '../App.css';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

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
            var comment=comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <li >{comment.comment}</li><br/>
                        <li>--{comment.author} ,{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li><br/>
                    </div>
                );
            });
    
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>comments</h4>
                    <list className="list-unstyled">
                        {comment}
                    </list>
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
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.dish.comments}/>
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