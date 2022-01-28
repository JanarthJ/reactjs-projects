import React,{Component} from 'react';
import './main.css'; 
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem,FaAtlas } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class SideMenu extends Component{
    

    render(){
        return( 
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>
                            Dashboard
                            <Link to="/dashboard" />
                        </MenuItem>
                        <MenuItem icon={<FaAtlas />}>
                            Staff List
                            <Link to="/stafflist" />
                        </MenuItem>
                    </Menu>
                </ProSidebar>  
        );
    }
}