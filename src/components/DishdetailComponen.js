import React from 'react';
import '../App.css';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={

        };
    }

    renderDish(dish)
    {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><strong>{dish.name}</strong></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments)
    {
        if(comments!=null)
        {
            var comment=comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <li >{comment.comment}</li><br/>
                        <li>--{comment.author} , {comment.date}</li><br/>
                    </div>
                );
            });
    
            return(
                <div>
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
    render(){
        if(this.props.dish!=null)
        {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
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
}

export default DishDetail; 