import React from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

@withRouter
@connect(
	state => state.chat
)
class NavBarLink extends React.Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	}

	render(){
		const navList = this.props.data.filter(v => !v.hide)
		const {pathname} = this.props.location
		const Item = TabBar.Item		
		return (
			<TabBar>
				{navList.map(v => (
					<Item
						badge={v.path === '/msg' ? this.props.unread:0}
						key={v.path}
						title={v.text}
						icon={{uri:require(`./img/${v.icon}.png`)}}
						selectedIcon={{uri:require(`./img/${v.icon}-active.png`)}}
						selected={pathname === v.path}
						onPress={() => {
							this.props.history.push(v.path)
						}}
					>
					</Item>
				))}
			</TabBar>			
		)
	}
}

export default NavBarLink
