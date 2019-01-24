import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Viewer extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      sessionSelected: '',
      newPlayer: {Name: '', Phone: '', Session: '', Deleted: 'false'},
      newPlayerName:'',
      newPlayerPhone:'',
      newPlayerSession:'',      
    };
    this.handleSessionSelectedChange = this.handleSessionSelectedChange.bind(this);
    this.handleNewPlayerName = this.handleNewPlayerName.bind(this);
    this.handleNewPlayerPhone = this.handleNewPlayerPhone.bind(this);
    this.handleNewPlayerSession = this.handleNewPlayerSession.bind(this);
    this.handleNewPlayerChange = this.handleNewPlayerChange.bind(this);
  }

  handleSessionSelectedChange(sessionSelected) {
    this.setState({
      sessionSelected: sessionSelected
      
    });
  }

  handleNewPlayerName(event){
    this.setState({newPlayerName: event.target.value});
    
  }

  handleNewPlayerPhone(event){
    this.setState({newPlayerPhone: event.target.value});
    
  }

  handleNewPlayerSession(event){
    this.setState({newPlayerSession: event.target.value});    
  }

  handleNewPlayerChange(){
    this.setState({
      newPlayer: {Name: this.state.newPlayerName, Phone: this.state.newPlayerPhone, Session: this.state.newPlayerSession, Deleted: 'false'}
    })
  }

  handleSubmit(event) {  
    this.handleNewPlayerChange();
    this.props.players.push(this.state.newPlayer);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        
        <PlayerTable
        players={this.props.players}
        sessionSelected={this.state.sessionSelected}
        />
        <p></p>
        <form>
          <label>Name:<br></br>
          <input
          type="text"
          value={this.state.newPlayerName}
          onChange={this.handleNewPlayerName}
          />
          </label><p></p>
          <label>Phone:<br></br>
          <input
          type="text"
          value={this.state.newPlayerPhone}
          onChange={this.handleNewPlayerPhone}
          />
          </label><p></p>
          <label>Session:<br></br>
          <input
          type="text"
          value={this.state.newPlayerSession}
          onChange={this.handleNewPlayerSession}
          />
          </label><p></p>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
/*
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
        onClick={(A) => this.handleSessionSelectedChange(A)}
        />
        Session A
        </p>

        <p>
        <input
        type="button"
        onClick={(B) => this.handleSessionSelectedChange(B)}
        />
        Session B
        </p>
      </form>
    );
  }
}*/

class PlayerTable extends React.Component {
   

  render() {
    const sessionSelected = this.props.sessionSelected;

    const rows =[];    
    this.props.players.forEach((player) =>{      
    if (player.Deleted === 'false'){
    rows.push(
      <PlayerRow
      player ={player}
      key={player.Name}
      />
    );
    }
  });
  
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Session</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      
    </table>    
  )
}
}

class PlayerRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deleted: this.props.player.Deleted,

    };
    this.handleDeletedChanged = this.handleDeletedChanged.bind(this);
  }

  handleDeletedChanged() {
    this.setState({
      deleted: 'true'
    });
  }
  
  DeletePlayer(){
    this.props.player.Deleted = 'true'; 
    this.handleDeletedChanged()  
  }
  
  render() {
    const player = this.props.player;    
    if (player.Deleted === 'false'){

    return (      
      <tr>
        <td>{player.Name}</td>
        <td>{player.Phone}</td>
        <td>{player.Session}</td>       
        <button onClick={() => this.DeletePlayer()}>Delete Player</button>
      </tr>
    )    
    }
    return(
      <tr></tr>
    )
  }
}

const PLAYERS = [
  {Name: 'Sam Smith', Phone: '07582369741', Session: 'A', Deleted: 'false'},
  {Name: 'John Beer', Phone: '07568974128', Session: 'B', Deleted: 'false'},
  {Name: 'Jason Finch', Phone: '07852369741', Session: 'A', Deleted: 'false'},
  {Name: 'Ben Shearer', Phone: '07951753864', Session: 'A', Deleted: 'false'},
  {Name: 'Mike Richards', Phone: '07826469821', Session: 'B', Deleted: 'false'},
  {Name: 'Lewis Pilchard', Phone: '07654937826', Session: 'B', Deleted: 'false'},
  {Name: 'Louise Brown', Phone: '07972364729', Session: 'A', Deleted: 'false'},
  {Name: 'Kim Geer', Phone: '07952875637', Session: 'B', Deleted: 'false'},
]

ReactDOM.render(
    <Viewer players={PLAYERS}/>,
    document.getElementById('root')
  );