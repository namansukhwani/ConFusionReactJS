import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import '../App.css';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl'

function RenderCard({item , isLoading , errMess})
{   if(isLoading)
    {
        return(
            <Loading/>
        );
    }
    else if(errMess)
    {
        return(
            <h4>{errMess}</h4>
        );
    }
    else if(item!=null)
    {
        return(
            <Card>
                <CardImg src={baseUrl+item.image} alt={item.name} />
                <CardBody>
                    <CardTitle><strong>{item.name}</strong></CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else{
        return(<div></div>);
    }
    
}

function Home(props)
{   
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Home</h3>
                    <hr/>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>


    );
}

export default Home;