import React from 'react'
import {connect} from 'react-redux'
import {addUserAction} from '../redux/user/user.actions'
import faker from 'faker'


class Child extends React.Component{

  render(){
    console.log('THIS IS YOUR REDUX STORE',this.props.userList)
    return(
      <div>
      This is a child component
      {
        this.props.userList.map(val=>{
          return(
            <div>{val}</div>
          )
        })
      }
      <div style={{backgroundColor:'salmon'}} onClick={()=>this.props.addUser(faker.name.findName())}>Click me to add a random user</div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  userList:state.user.userList
})

const mapDispatchToProps = (dispatch)=>({
  addUser: (user)=>dispatch(addUserAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Child) 