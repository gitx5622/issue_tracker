import React from 'react';
import {GrAdd,AiOutlineWallet,FiEdit,GiCancel,BiRevision,BiStopCircle,FaRegCheckCircle,GrCompliance,FaListUl} from 'react-icons/all';
import { ListGroup, ListGroupItem, Card } from "shards-react";


const Sidebar = () => {
    return ( 
        <div>
    <Card className="sidebar-card1 d-none d-sm-block">
        <ListGroup style={{borderBottomRightRadius:"unset"}}>
        <ListGroupItem className="sidebar-header">&nbsp;&nbsp;&nbsp;Repositories</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><FaListUl/>&nbsp;&nbsp;&nbsp;Toprated</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><GrAdd/>&nbsp;&nbsp;&nbsp;Portifolio</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><FiEdit/>&nbsp;&nbsp;&nbsp;Gamex</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><AiOutlineWallet/>&nbsp;&nbsp;&nbsp;Likee</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><BiStopCircle/>&nbsp;&nbsp;&nbsp;Eshop</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><GrCompliance/>&nbsp;&nbsp;&nbsp;Admin</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><FaRegCheckCircle/>&nbsp;&nbsp;&nbsp;Wamu</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><BiRevision/>&nbsp;&nbsp;&nbsp;Verifiedprofessors</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><BiStopCircle/>&nbsp;&nbsp;&nbsp;Advanced</ListGroupItem>
            <ListGroupItem className="sidebar-layout"><GiCancel/>&nbsp;&nbsp;&nbsp;Gamelounge</ListGroupItem>
        </ListGroup>
        </Card>
        </div>
     );
}
 
export default Sidebar;