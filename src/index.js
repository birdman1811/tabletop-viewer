import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Viewer extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      sessionSelected: '',

    };
    this.handleSessionSelectedChange = this.handleSessionSelectedChange.bind(this);
  }

  handleSessionSelectedChange(sessionSelected) {
    this.setState({
      sessionSelected: sessionSelected
    });
  }

  render() {
    return (
      <div>
        <SessionBar
        sessionSelected={this.state.sessionSelected}
        onSessionSelectedChange={this.handleSessionSelectedChange}
        />
        <PlayerTable
        players={this.props.players}
        sessionSelected={this.state.sessionSelected}
        />
      </div>
    );
  }
}

class SessionBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSessionSelectedChange = this.handleSessionSelectedChange.bind(this);
  }

  handleSessionSelectedChange(x) {
    this.props.onSessionSelectedChange(x.target.value);
  }

  render() {
    return (
      <form>
        <p>
        <input
        type="button"
        onClick={this.handleSessionSelectedChange(a)}
        />
        Session A
        </p>

        <p>
        <input
        type="button"
        onClick={this.handleSessionSelectedChange(b)}
        />
        Session B
        </p>
      </form>
    );
  }
}

class PlayerTable extends React.Component {
  
}



const PLAYERS = [
  {Name: 'Sam Smith', Phone: '07582369741', Session: 'Session A', Deleted: false},
  {Name: 'John Beer', Phone: '07568974128', Session: 'Session B', Deleted: false},
  {Name: 'Jason Finch', Phone: '07852369741', Session: 'Session A', Deleted: false},
  {Name: 'Ben Shearer', Phone: '07951753864', Session: 'Session A', Deleted: false},
  {Name: 'Mike Richards', Phone: '07826469821', Session: 'Session B', Deleted: false},
  {Name: 'Lewis Pilchard', Phone: '07654937826', Session: 'Session B', Deleted: false},
  {Name: 'Louise Brown', Phone: '07972364729', Session: 'Session A', Deleted: false},
  {Name: 'Kim Geer', Phone: '07952875637', Session: 'Session B', Deleted: false},
]

ReactDOM.render(
    <Viewer players={PLAYERS}/>,
    document.getElementById('container')
  );