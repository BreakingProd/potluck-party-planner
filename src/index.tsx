import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.less';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  public render = () => <div>Hello {this.props.name}</div>;
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
