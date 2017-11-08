import React from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, WingBlank,Radio,WhiteSpace,Button } from 'antd-mobile'


class Register extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			type:'genius'
		}
	}

	render(){
		const RadioItem = Radio.RadioItem
		return (
			<div>
				<Logo></Logo>
				<List>
					<InputItem>用户名</InputItem>
					<WhiteSpace/>
					<InputItem>密码</InputItem>
					<WhiteSpace/>
					<InputItem>确认密码</InputItem>
					<WhiteSpace/>
					<RadioItem checked={this.state.type === 'genius'}>
						牛人
					</RadioItem>
					<RadioItem checked={this.state.type === 'boss'}>
						BOSS
					</RadioItem>
					<WhiteSpace/>
					<Button type='primary'>注册</Button>		
				</List>				
			</div>
		)
	}
}

export default Register