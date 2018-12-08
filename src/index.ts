
/* IMPORT */

import * as React from 'react';

/* REACT NO RENDER */

class Component<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {

  render () {

    return null;

  }

}

class PureComponent<P = {}, S = {}, SS = any> extends React.PureComponent<P, S, SS> {

  render () {

    return null;

  }

}


/* EXPORT */

export {Component, PureComponent};
