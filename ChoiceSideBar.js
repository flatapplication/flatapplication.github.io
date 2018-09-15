const e = React.createElement;

class ChoiceSideBar extends React.Component{
  render(){
    var user = firebase.auth().currentUser;
    return (user ? e(Sidebar) : e(nonSignedInSidebar))
  }
}


const domContainer = document.querySelector('#choiceSideBar');
ReactDOM.render(e(ChoiceSideBar), domContainer);
