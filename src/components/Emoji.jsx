import React from 'react';

export default ({icon}) => (
    <img 
      src={require('@site/static/img/emoji/'+icon+'.png').default} 
      style={{"height":"1em"}}
    ></img>
  );