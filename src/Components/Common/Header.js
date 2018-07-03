import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {authVerifyActions} from '../../actions'
class Header extends Component{

	constructor(props){
		super(props);
		this.state={
			loggedIn:false,
			authProgress:false,
			userData:{}}
		this.handleAuth=this.handleAuth.bind(this);
	}

	componentDidMount(){
		console.log(this.props)
	}

handleAuth(e){
	e.preventDefault();
	console.log('here')
	this.props.checkAuth;
	if(this.props.authProgress){
		console.log('loggin user in....')
	}
	if(this.props.loggedIn){
		console.log('logged in successfully',this.props.userData)
	}
	console.log(this.props)
}
	render(){
		return(

			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/contactform">ContactForm</Link></li>
					<li><Link onClick={this.handleAuth} to="/admin">Administration</Link></li>
					<li><Link to="/signin">SignIn</Link></li>
				</ul>
			</div>

			)
	}

}

const mapStateToProps = state => ({
  loggedIn:state.loggedIn,
  authProgress:state.authProgress,
  userData:state.userData
	});


const mapDispatchToProps = (dispatch)=> ({
  checkAuth:()=>{dispatch(authVerifyActions.checkAuth)}
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));