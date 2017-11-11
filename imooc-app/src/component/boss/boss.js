import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux.js'

import {Card,WhiteSpace,WingBlank} from 'antd-mobile'

@connect(
	state => state.chatuser,
	{getUserList}
)
class Boss extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}

	componentDidMount(){
		this.props.getUserList('genius')
		
	}

	render(){
		const Header = Card.Header
		const Body = Card.Body
		return (

			<WingBlank>
				<WhiteSpace></WhiteSpace>

				{this.props.userlist.map(v => (	
					v.avatar ? (<Card className='card-bottom-10' key={v._id}>
						<Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<div>{v.title}</div>}
						></Header>
						<Body>
							{v.desc.split('\n').map(v => {
								return (
									<div key={v}>{v}</div>	
								)								
							})}
						</Body>
					</Card>):null
				))}
			</WingBlank>
		)
	}
}

export default Boss