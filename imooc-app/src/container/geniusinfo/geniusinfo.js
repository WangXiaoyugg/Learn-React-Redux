import React from 'react'
import { NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector.js'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux.js'
import { Redirect } from 'react-router-dom'
@connect(
	state => state.user,
	{ update }
)
class GeniusInfo extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title:'',
			desc:'',
			avatar:''
		}
	}

	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}

	render(){
		const path = this.props.location.pathname 
		const redirectTo = this.props.redirectTo
		return (
			<div>
				{redirectTo && redirectTo !== path ? <Redirect to={this.props.redirectTo}/> : null}
				<NavBar mode="dark">牛人完善信息页</NavBar>
				<AvatarSelector selectAvatar={(imgname) => {
					this.setState({
						avatar:imgname
					})
				}}></AvatarSelector>
				<InputItem onChange={(v) => this.handleChange('title',v)}>求职岗位</InputItem>
				<TextareaItem onChange={(v) => this.handleChange('desc',v)}
					rows={5}
					autoHeight
					title='个人简历'
				></TextareaItem>
				<Button onClick={() => {
					this.props.update(this.state)
				}} type='primary'>保存</Button>	
			</div>
			
		)
	}
}

export default GeniusInfo