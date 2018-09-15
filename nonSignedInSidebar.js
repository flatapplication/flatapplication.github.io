class nonSignedInSidebar extends React.Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            F L A T
                    </a>
                    </li>
                    <li style={{fontSize:17}}>
                        <a href="support.html">Support</a>
                    </li>
                </ul>
            </div>
        )
    }
}

const e = React.createElement;
const domContainer = document.querySelector('#sidebar');
ReactDOM.render(e(Sidebar), domContainer);
