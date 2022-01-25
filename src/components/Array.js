import React from 'react';
import '../styles/Array.css';

class Array extends React.Component {

    render() {
        let renderArray = []
        var isActive = this.props.isActive;
        var isNext = this.props.isNext;
        for (let i = 0; i < this.props.array.length; i++) {
            let current_width = String(10 + this.props.array[i] * 4.5) + "px"
            renderArray.push(
                <div className={i === isActive ? 'active' : i === isNext ? 'next' : 'rectangle'} key={i} style={{width: current_width}}>
                </div>
        )

        }
      return (
          <div className="array">
              {renderArray}
          </div>
      )
    }
  }

  export default Array;