import React from 'react'
import {connect} from 'react-redux'


@connect(
	state => state.user
)
class User extends React.Component {

	render(){
		console.log(this.props)	
		return null;  	
	}

}

export default User