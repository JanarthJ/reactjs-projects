import React,{Component} from 'react';
import SideMenu from '../main/sidemenu';
import '../main/main.css'; 
import ReactTable from 'react-table-6';  
import 'react-table-6/react-table.css';  
import SearchField from "react-search-field";

export default  class Dashboard extends React.Component {  
  render() {  
    console.log("dash");
    
    const data = [{ 
       roll : parseInt("01"), 
       name : 'Ashok',  
       eng  : 26,
       mat  : 90,
       sci  : 70,
       tot  : 250 
      },{  
       roll : parseInt("02"),
       name : 'Akil',  
       eng  : 50,
       mat  : 60,
       sci  : 70,
       tot  : 250   
      },{  
       roll : parseInt("03"),
       name : 'Manoj',  
       eng  : 26,
       mat  : 90,
       sci  : 70,
       tot  : 250       
      },{  
       roll : parseInt("04"),
       name : 'Wright',  
       eng  : 55,
       mat  : 50,
       sci  : 50,
       tot  : 250  
      },{  
       roll : parseInt("05"),
       name : 'Rohit',  
       eng  : 75,
       mat  : 45,
       sci  : 40,
       tot  : 250   
      },{  
       roll : parseInt("06"),
       name : 'Dhoni',  
       eng  : 50,
       mat  : 70,
       sci  : 50,
       tot  : 250   
       }]  
   const columns = [{  
     Header: 'Roll No',  
     accessor: 'roll'  
     },{  
     Header: 'Name',  
     accessor: 'name'  
     },{  
     Header: 'English',  
     accessor: 'eng'  
     },{  
     Header: 'Maths',  
     accessor: 'mat'  
     },{  
     Header: 'Science',  
     accessor: 'sci'  
     },{  
     Header: 'Total',  
     accessor: 'tot'  
     }] 

     
    
    return(
      <div className='divGrid'>
        <SideMenu/>
        <div className='divRightContent'>
            <div>
              <h2>My Dashboard</h2>              
            </div>
            
            <SearchField 
                 placeholder='Search item'                 
                 onSearchClick={data}                 
              />
            <div>
            <ReactTable className ="text-center" 
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              /> 
              </div>          
        </div>
      </div>
    ) 
  }  
}  
