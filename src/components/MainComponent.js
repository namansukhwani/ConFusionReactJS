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
import {postComment,postFeedback,fetchDishes,fetchComments,fetchPromos,fetchLeaders} from '../redux/ActionCreators'
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
  postFeedback:(firstname,lastname,telnum,email,agree,contactType,message) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),
  fetchDishes:() => dispatch(fetchDishes()),
  fetchComments:() => dispatch(fetchComments()),
  fetchPromos:() => dispatch(fetchPromos()),
  fetchLeaders:() => dispatch(fetchLeaders()),
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
  
});

class Main extends React.Component {
  
  componentDidMount()
  {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render()
  {
    const HomePage=() => {
      return(<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
       dishesLoading={this.props.dishes.isLoading}
       dishesErrMess={this.props.dishes.errMess}
       leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
       leadersLoading={this.props.leaders.isLoading}
       leadersErrMess={this.props.leaders.errMess}
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

    const AboutPage=() => {
      return(<About 
        leaders={this.props.leaders.leaders} 
        isLoading={this.props.leaders.isLoading}
        errMess={this.props.leaders.errMess}
        />);
    }

    const MenuPage=()  =>{
      return(
        <Menu dishes={this.props.dishes} />
      );
    };
    
    const ContactPage=() => {
      return(
        <Contact 
        resetFeedbackForm={this.props.resetFeedbackForm}
        postFeedback={this.props.postFeedback}
        />
      );
    }

    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}> 
            <Switch location={this.props.location}>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/aboutus" component={AboutPage}/>
              <Route exact path="/menu" component={MenuPage} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={ContactPage}/>
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
