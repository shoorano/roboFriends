import React from 'react';


/*
So far we have learned about:
 - Props
 - STATE
 Now we will introduce:
 - Children
*/

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll',
                border: '5px solid black',
                height: '700px'}}>
      {props.children}
    </div>
  );
}

export default Scroll
