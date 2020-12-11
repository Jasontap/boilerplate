import React from 'react'
import Child from './component/child'

class App extends React.Component{
  render(){
    return (
      <div>
      This is React
      <Child/>
      </div>
    )
  }
}

export default App