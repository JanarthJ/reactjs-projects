import "antd/dist/antd.css";
import "./App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react"; 

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isView, setIsView] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [addStudent, setAddStudent] = useState(null);

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      fname: "John",
      lname:"Rich",
      email: "john@gmail.com",
       
    },
    {
      id: 2,
      fname: "David",
      lname:"chistoper",
      email: "david@gmail.com", 
    },
    {
      id: 3,
      fname: "James",
      lname:"D",
      email: "james@gmail.com", 
    },
    {
      id: 4,
      fname: "Sam",
      lname:"s",
      email: "sam@gmail.com", 
    },
  ]);

  const columns = [
    
    {
      key: "2",
      title: "Employee First Name",
      dataIndex: "fname",
    },
    {
      key: "3",
      title: "Employee Last Name",
      dataIndex: "lname",
    },
    {
      key: "4",
      title: "Employee Email",
      dataIndex: "email",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button
              onClick={() => {
                onEditStudent(record);
              }}
              style={{ color: "grey"}}
            >
              Update
            </Button>
            <Button
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            >Delete</Button>
            <Button
              onClick={() => {
                onViewStudent(record);
              }}
              style={{ color: "grey", marginLeft: 12 }}
            >
              View
            </Button>
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    console.log('called')
    setIsAdd(true);
     const newStudent = {
      id: dataSource.length + 1,
      fname: "",
      lname:"",
      email: "", 
    };
    console.log('add',newStudent);
    setAddStudent(newStudent);
    console.log('add',newStudent,addStudent);
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  
  const onViewStudent = (record) => {
    setIsView(true);
    setEditingStudent({ ...record });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setIsAdd(false);
    setIsView(false);
    setEditingStudent(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button className="addbutton"
        onClick={onAddStudent}>
          Add Employee</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title={isEditing ? "Edit Employee" :isEditing ? "Add Employee":"View Employee"}
          visible={isEditing || isAdd || isView}
          okText={isAdd ? "Add" :isEditing ? "Save" : ""}
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            if(isEditing){
              setDataSource((pre) => {
                return pre.map((student) => {
                  if (student.id === editingStudent.id) {
                    return editingStudent;
                  } else {
                    return student;
                  }
                });
              });
          }
          if(isAdd){
            setDataSource((pre) => {
              return [...pre,addStudent];
            });
          }

            resetEditing();
          }}
        >
          <Input
          placeholder={"Fisrt name"}
          style={{marginBottom:"10px"}}
          disabled={isView}
            value={isAdd ? addStudent?.fname : editingStudent?.fname}
            onChange={(e) => {
              if(isEditing){
              setEditingStudent((pre) => {
                return { ...pre, fname: e.target.value };
              });
            }
              else{
                setAddStudent((pre) => {
                  return { ...pre, fname: e.target.value };
                });
              }
            }}
          />
          <Input
          disabled={isView}
          placeholder={"Last name"}
          style={{marginBottom:"10px"}}
          value={isAdd ? addStudent?.lname : editingStudent?.lname}
            onChange={(e) => {
              if(isEditing){
              setEditingStudent((pre) => {
                return { ...pre, lname: e.target.value };
              });}
              else{
                setAddStudent((pre) => {
                  return { ...pre, lname: e.target.value };
                });
              }
            }}
          />
          <Input
            disabled={isView}
            style={{marginBottom:"10px"}}
            placeholder={"email"}
            value={isAdd ? addStudent?.email : editingStudent?.email}
            onChange={(e) => {
              if(isEditing){
                setEditingStudent((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }else{
                setAddStudent((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }
              
            }}
          />
          
        </Modal>
      </header>
    </div>
  );
}

export default App;
