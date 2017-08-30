import React from 'react'
import axios from 'axios'

function SetHandView({hand, onHandChange}) {
  return (
    <select value={hand} onChange={(e) => onHandChange(e.target.value)}>
      <option value="rock">Rock</option>
      <option value="paper">Paper</option>
      <option value="scissors">Scissors</option>
    </select>
  )
}


export default class SetHand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hand: 'rock'}
  }

  componentDidMount() {
    
  }

  onHandChange(newHand) {
    axios.post('/set-hand', {hand: newHand}).then(() => {
      this.setState({hand: newHand})
    })
  }

  render() {
    return (
      <SetHandView
        hand={this.state.hand}
        onHandChange={this.onHandChange.bind(this)}
      />
    )
  }

}
/*









*/
