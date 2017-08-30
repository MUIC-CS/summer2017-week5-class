import React from 'react'

function ListHandView({data}) {
  return  (
    <ul>
      data.map(d => {
        return <li>{d.username}:{d.hand}</li>
      })
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

  render() {
    const {data} = this.state
    if(!data) return null
    return <ListHandView data={data}/>
  }

}

/*









*/
