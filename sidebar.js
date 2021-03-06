class Sidebar extends React.Component {
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
                        <a href="yourroom.html">Your Room</a>
                    </li>
                    <li style={{fontSize:17}}>
                        <a href="youritems.html">Items You Own</a>
                    </li>
                    <li style={{fontSize:17}}>
                        <a href="loaneditems.html">Items Loaned Out</a>
                    </li>
                    <li style={{fontSize:17}}>
                        <a href="requesteditems.html">Items Requested</a>
                    </li>
                    <li style={{fontSize:17}}>
                        <a href="pastitems.html">Past Items</a>
                    </li>
                    <li style={{fontSize:17}}>
                        <a href="nearby.html">Find Item Nearby</a>
                    </li>
                    <li style={{fontSize:17}}>
                        <a href="support.html">Support</a>
                    </li>
                </ul>
            </div>
        )
    }
}


