import { React, Component } from 'react'

class VoteBox extends Component {
    state = {
        value : ''
    }
  render() {
    return (
      <div class="poll-progress-percent">
        <label>
          <input onClick={() => this.props.func(this.props.addr)} type="radio" name="pool_choose" class="exp-option-box" />
          <span class="checkmark-border position-relative"></span>
          <span class="exp-label">{this.props.value}</span>
        </label>
      </div>
    )
  }
}

export default VoteBox
