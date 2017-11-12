import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'

@withRouter
class UserCard extends React.Component {

	static propTypes = {
		userlist:PropTypes.array.isRequired
	}		

	handleClick(v){
		this.props.history.push(`/chat/${v.user}`)
	}
	render(){
		const Header = Card.Header
		const Body = Card.Body
		return(
			<WingBlank>
				<WhiteSpace></WhiteSpace>

				{this.props.userlist.map(v => (	
					v.avatar ? (<Card 
						className='card-bottom-10' 
						key={v._id}
						onClick={()=>this.handleClick(v)}
						>
						<Header
							title={v.user}
							thumb={require(`../img/${v.avatar}.png`)}
							extra={<div>{v.title}</div>}
						></Header>
						<Body>
						{v.type === 'boss' ? <div>公司 : {v.company}</div>:null}
							{v.desc.split('\n').map(d => {
								return (
									<div key={d}>{d}</div>	
								)								
							})}
							{v.type === 'boss' ? <div>薪资 : {v.money}</div>:null}
						</Body>
						
					</Card>):null
				))}
			</WingBlank>

		)
	}
}

export default UserCard