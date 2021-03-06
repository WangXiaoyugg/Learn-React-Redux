import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavlinkBar from '../navlink/navlink.js'
import {Switch, Route} from 'react-router-dom'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux.js'

function Msg(){
	return <h2>Msg 首页</h2>
}



@connect(
	state => state,
	{getMsgList,recvMsg}
)
 class Dashboard extends React.Component {

 	componentDidMount(){
 		this.props.getMsgList()
		this.props.recvMsg()
 	}

 	render(){
 		const user = this.props.user
 		const {pathname} = this.props.location		
 		const navList = [
 			{
 				path:'/boss',
 				text:'牛人',
 				icon:'boss',
 				title:'牛人列表',
 				component:Boss,
 				hide:user.type === 'genius'
 			},
 			{
 				path:'/genius',
 				text:'boss',
 				icon:'job',
 				title:'Boss列表',
 				component:Genius,
 				hide:user.type === 'boss'
 			},
 			{
 				path:'/msg',
 				text:'消息',
 				icon:'msg',
 				title:'消息列表',
 				component:Msg,
 			},
 			{
 				path:'/me',
 				text:'我',
 				icon:'user',
 				title:'个人中心',
 				component:User,
 			},
 		]

 		return (
 			<div>
 				<NavBar className='fix-header ' mode='dark'>
 					{navList.find(v => v.path === pathname).title}
 				</NavBar>
 				<div style={{marginTop:45}}>
 					<Switch>
 						{navList.map(v =>(
 							<Route key={v.path} path={v.path} component={v.component}/>
 						))}
 					</Switch>
 				</div>		
 				<NavlinkBar data={navList}></NavlinkBar>
 			</div>
 		)
 	}
 }

 export default Dashboard