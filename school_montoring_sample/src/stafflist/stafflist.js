import React from 'react';
import SideMenu from '../main/sidemenu';
import '../main/main.css'; 
import ReactTable from 'react-table-6';  
import 'react-table-6/react-table.css';  
import SearchField from "react-search-field"; 

export default  class StaffList extends React.Component {  


  render() {  
    console.log("Staff");

    const data = [{ 
      name : 'Ashok',  
      desg  : 'Jr. staff',
      exp  : 4,
      subj  : 'Maths',    
     },{  
      name : 'Arjun',  
      desg  : 'Sr.staff',
      exp  : 9,
      subj  : 'Biology',
     },{  
      name : 'Rani',  
      desg  : 'HOD',
      exp  : 15,
      subj  : 'Chemistry',      
     },{  
      name : 'James',  
      desg  : 'staff',
      exp  : 4,
      subj  : 'English',
     },{  
      name : 'Samuel',  
      desg  : 'Jr.staff',
      exp  : 3,
      subj  : 'science',  
     },{  
      name : 'Angel',  
      desg  : 'asst. proffesor',
      exp  : 6,
      subj  : 'Computers', 
      }]  
  const columns = [{  
    Header: 'Name',  
    accessor: 'name'  
    },{  
    Header: 'Designation',  
    accessor: 'desg'  
    },{  
    Header: 'Experience',  
    accessor: 'exp'  
    },{  
    Header: 'subject',  
    accessor: 'subj'  
    }] 

    return(
        <div className='divGrid'>
            <SideMenu/>
          <div className='divRightContent'>
            <div>
                <h2>Staff    List </h2>
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
