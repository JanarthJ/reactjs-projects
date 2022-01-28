import React,{Component} from 'react';
import './main.css'; 
import SideMenu from './sidemenu';

export default class Main extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div> 
                <div className='divGrid'>
                    <SideMenu/>
                    <div className='divRightContent'>
                        <h2>Welcome To Sample School Monitoring System</h2>
                    </div>
                </div>
            </div>
        );
    }
}