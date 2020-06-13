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
import {postComment,fetchDishes,fetchComments,fetchPromos} from '../redux/ActionCreators'
import {actions} from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const mapStateToProps=state =>{
  return{
    dishes:state.dishes,
    leaders:state.leaders,
    comments:state.comments,
    promotions:state.promotions
  }
};

const mapDispatchToProps = dispatch => ({
  postComment:(dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes:() => dispatch(fetchDishes()),
  fetchComments:() => dispatch(fetchComments()),
  fetchPromos:() => dispatch(fetchPromos()),
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
  
});

class Main extends React.Component {
  
  componentDidMount()
  {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render()
  {
    const HomePage=() => {
      return(<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
       dishesLoading={this.props.dishes.isLoading}
       dishesErrMess={this.props.dishes.errMess}
       leader={this.props.leaders.filter((leader) => leader.featured)[0]}
       promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
       promoLoading={this.props.promotions.isLoading}
       promoErrMess={this.props.promotions.errMess} />);
    }

    const DishWithId=({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
         isLoading={this.props.dishes.isLoading}
         errMess={this.props.dishes.errMess}
         comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}
         postComment={this.props.postComment}
         commentsErrMess={this.props.comments.errMess} />
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
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> 
            <Switch location={this.props.location}>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
              <Route exact path="/menu" component={MenuPage} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
              <Redirect to="/home"/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  } 
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
