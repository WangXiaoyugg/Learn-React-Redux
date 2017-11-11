import React from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

@withRouter
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
