import React from 'react';  
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch , Route , Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment,fetchDishes} from '../redux/ActionCreators'

const mapStateToProps=state =>{
  return{
    dishes:state.dishes,
    leaders:state.leaders,
    comments:state.comments,
    promotions:state.promotions
  }
};

const mapDispatchToProps = dispatch => ({
  addComment:(dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes:() => dispatch(fetchDishes()),
  
});

class Main extends React.Component {
  
  componentDidMount()
  {
    this.props.fetchDishes();
  }

  render()
  {
    const HomePage=() => {
      return(<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
       dishesLoading={this.props.dishes.isLoading}
       dishesErrMess={this.props.dishes.errMess}
       leader={this.props.leaders.filter((leader) => leader.featured)[0]}
       promotion={this.props.promotions.filter((promo) => promo.featured)[0]} />);
    }

    const DishWithId=({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
         isLoading={this.props.dishes.isLoading}
         errMess={this.props.dishes.errMess}
         comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}
         addComment={this.props.addComment} />
      );
    };

    const MenuPage=()  =>{
      return(
        <Menu dishes={this.props.dishes} />
      );
    };
    
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
          <Route exact path="/menu" component={MenuPage} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={() => <Contact/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  } 
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
