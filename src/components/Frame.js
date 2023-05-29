import React from 'react'

function Frame(props) {
  return (
    <div className='custom-frame' style={{marginTop: props.marginTop, marginLeft: props.marginLeft}}>
      <div className='custom-frame-text'>{props.text}</div>
      <button type='button' className='custom-next-btn'>Next</button>
    </div>
  );
}
export default Frame