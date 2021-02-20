import React, {useEffect} from 'react';
import {FaQuoteRight, FaListUl, GrAdd, AiOutlineWallet, BiStopCircle, GrCompliance, FaRegCheckCircle, BiRevision, FiEdit, GiCancel} from "react-icons/all";
import { ListGroup, ListGroupItem, Card, CardBody } from "shards-react";
import { getAllIssues } from '../store/issues/actions/issueActions';
import { useDispatch, useSelector } from 'react-redux';
import profile from '../assets/profile.jpeg';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const issueSelector = useSelector(state => state.Issues);
  const allIssues = issueSelector.issues;

  const dispatch = useDispatch();

  const listAllIssues = () => dispatch(getAllIssues());

  const issues = allIssues.map(issue => { return (
    <div>
          <ListGroupItem style={{borderRadius:"unset", fontSize:"20px"}}>{issue.repository.name}
          <Tag style={{float:"right", borderRadius:"10px"}} color="#2db7f5"><a href={`${issue.repository.html_url}/issues`}>{issue.number}</a></Tag></ListGroupItem>
        </div>
  )})

  useEffect(()=>{
    listAllIssues();
  },[])
    return ( 
        <div>
    <Card className="sidebar-card1 d-none d-sm-block"> 
    <article className="review">
      <div className='imgcontainer'>
        <img src={profile} alt="github_avatar" className='personimg' />
        <span className='quoteicon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>gitx5622</h4>
      </article> 
        <ListGroup style={{borderBottomRightRadius:"unset"}}>
        <Link to="/"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><GrCompliance/>&nbsp;&nbsp;&nbsp;All Issues<Tag style={{float:"right", borderRadius:"10px"}} color="volcano">{issues.length}</Tag></ListGroupItem></Link>
        <Link to="/created_issues"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><FaRegCheckCircle/>&nbsp;&nbsp;&nbsp;Created Issues</ListGroupItem></Link>
        <Link to="/mentioned_issues"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><FaListUl/>&nbsp;&nbsp;&nbsp;Mentioned Issues</ListGroupItem></Link>
        <Link to="/assigned_issues"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><GrAdd/>&nbsp;&nbsp;&nbsp;Assigned Issues</ListGroupItem></Link>
        <Link to="/toprated_repo_issues"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><FiEdit/>&nbsp;&nbsp;&nbsp;Topratedprofessors Issues</ListGroupItem></Link>
        <Link to="/likee_repo_issues"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><AiOutlineWallet/>&nbsp;&nbsp;&nbsp;Likee Issues</ListGroupItem></Link>
        <Link to="/eshop_repo_issues"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><BiStopCircle/>&nbsp;&nbsp;&nbsp;Eshop Issues</ListGroupItem></Link>
        <Link to="/advanced_repo_issues"><ListGroupItem style={{color:"#000000", backgroundColor:  '#ffffff', borderTopRightRadius:"unset",borderBottomRightRadius:"unset"}}><FaRegCheckCircle/>&nbsp;&nbsp;&nbsp;Advanced Issues</ListGroupItem></Link>
        </ListGroup>
        </Card>
        </div>
     );
}
 
export default Sidebar;