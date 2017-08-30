import React from 'react'
import axios from 'axios'
function ListHandView({data}) {
  return  (
    <ul>
      {data.map(d => {
        return (<li key={d.username}>{d.username}:{d.hand}</li>)
      })}
    </ul>
  )
}


export default class ListHand extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      data: null
    }
  }

  componentDidMount() {
    axios.get('/list-hand').then(res => {
      const {data} = res.data
      console.log(data)
      this.setState({data})
    })
  }

  render() {
    const {data} = this.state
    if(!data) return null
    return <ListHandView data={data}/>
  }

}

/*









*/
