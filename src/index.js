import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Viewer extends React.Component 
{
  constructor(props) {
    super(props);     
    
  }    

  render() {
    return (
      <div>
        
        <PlayerTable
        players={this.props.players}        
        />
        <p></p>
        
      </div>
    );
  }
}
class AddPlayer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {      
      newPlayer: {Name: '', Phone: '', Session: '', Deleted: 'false'},
      newPlayerName:'',
      newPlayerPhone:'',
      newPlayerSession:'',      
    };
    
    this.handleNewPlayerName = this.handleNewPlayerName.bind(this);
    this.handleNewPlayerPhone = this.handleNewPlayerPhone.bind(this);
    this.handleNewPlayerSession = this.handleNewPlayerSession.bind(this);
    this.handleNewPlayerChange = this.handleNewPlayerChange.bind(this);
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


class PlayerTable extends React.Component {
   

  render() {    

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
    <div>
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
    <AddPlayer
    players={this.props.players}
    />   
    </div> 
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
  {Name: 'Joe Caputo', Phone: '07658312387', Session: 'Black Rain', Deleted: 'false'},
  {Name: 'Piper Chapman', Phone: '07142548798', Session: 'Black Rain', Deleted: 'false'},
  {Name: 'Tasha Jefferson', Phone: '07998987220', Session: 'Black Rain', Deleted: 'false'},
  {Name: 'Gloria Mendoza', Phone: '07512645873', Session: 'Black Rain', Deleted: 'false'},
  {Name: 'Theodore Bagwell', Phone: '07561384896', Session: 'One Last Riddle', Deleted: 'false'},
  {Name: 'Brad Bellick', Phone: '07883256418', Session: 'One Last Riddle', Deleted: 'false'},
  {Name: 'Lincoln Burrows', Phone: '07112356983', Session: 'One Last Riddle', Deleted: 'false'},
  {Name: 'Fernando Sucre', Phone: '07963212321', Session: 'One Last Riddle', Deleted: 'false'},
  {Name: 'Sara Tancredi', Phone: '07954186684', Session: 'One Last Riddle', Deleted: 'false'},
  {Name: 'Daryl Dixon', Phone: '07325649845', Session: 'The Burning Plague', Deleted: 'false'},
  {Name: 'Maggie Greene', Phone: '07459832185', Session: 'The Burning Plague', Deleted: 'false'},
  {Name: 'Carol Peletier', Phone: '07124979566', Session: 'The Burning Plague', Deleted: 'false'},
  {Name: 'Eugene Porter', Phone: '07223654987', Session: 'The Burning Plague', Deleted: 'false'},
  {Name: 'Billy Cranston', Phone: '07985645784', Session: 'The Sea Witch', Deleted: 'false'},
  {Name: 'Kimberly Hart', Phone: '07815307459', Session: 'The Sea Witch', Deleted: 'false'},
  {Name: 'Trini Kwan', Phone: '07548755285', Session: 'The Sea Witch', Deleted: 'false'},
  {Name: 'Tommy Oliver', Phone: '07989444568', Session: 'The Sea Witch', Deleted: 'false'},
  {Name: 'Jason Scott', Phone: '07774854987', Session: 'The Sea Witch', Deleted: 'false'},
  {Name: 'Zack Taylor', Phone: '07845222547', Session: 'The Sea Witch', Deleted: 'false'},
  {Name: 'Joyce Byers', Phone: '07954668187', Session: 'Tomb of Horrors', Deleted: 'false'},
  {Name: 'Dustin Henderson', Phone: '07889554857', Session: 'Tomb of Horrors', Deleted: 'false'},
  {Name: 'Jim Hopper', Phone: '07954845148', Session: 'Tomb of Horrors', Deleted: 'false'},
  {Name: 'Nancy Wheeler', Phone: '07445845711', Session: 'Tomb of Horrors', Deleted: 'false'}
]

ReactDOM.render(
    <Viewer players={PLAYERS}/>,
    document.getElementById('root')
  );