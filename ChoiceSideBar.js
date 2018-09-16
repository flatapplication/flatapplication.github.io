import SideBar from "./sidebar"
import nonSignedInSidebar from "./nonSignedInSidebar"

const e = React.createElement;


class ChoiceSideBar extends React.Component{
  state = {
    user: firebase.auth().currentUser
  }
  
  constructor(props){
    super(props)
    
    setInterval(() => firebase.auth().currentUser ? this.setState({user: firebase.auth().currentUser}) : null,1000); 
  }

  render(){
    var user = firebase ? firebase.auth().currentUser : null;
    return (this.state.user ? e(Sidebar) : e(nonSignedInSidebar))
  }
}


const domContainer = document.querySelector('#choiceSideBar');
ReactDOM.render(e(ChoiceSideBar), domContainer);
