import React, { Component } from "react";
import Note from "./Note";
import NoteInputForm from "./NoteInputForm";
import NoteContent from "./NoteContent";
import ranDomString from "randomstring";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NoteEdit:null,
      Data: [],
    };
  }
  
  onSubmit = (data) => {   
     /// id của phần tử mình chọn
    let { Data } = this.state; /// Dặt dữ liệu bằng state
    if(data.id ===""){
      data.id = ranDomString.generate(); //thêm id để thêm được dữ liệu vào mãng
      Data.push(data); ///push data từ file con vào data cha
      this.setState({
        Data: Data,    /// đẩy dữ liệu vào onsubmit
        NoteEdit:null,
      });
    }
    else{
      var index = this.findIndex(data.id)
      Data[index]=data;
      this.setState({
        Data: Data,    /// đẩy dữ liệu vào onsubmit
        NoteEdit:null, 
      });
    }
    localStorage.setItem("Note", JSON.stringify(Data));
  };

  onDelete = (id) => {
    // let id = Object.assign({}, id);
    // let an = id.toString(id);
    // console.log("sau khi set",id)
    let {Data}=this.state
    let index = this.findIndex(id)
    if(index !==-1){
      Data.splice(index,1);  
      this.setState({
        Data:Data,
      });
    localStorage.setItem("Note", JSON.stringify(Data));
    }
  };
  findIndex = (id) => {
    ///Tìm vị trí của ID
    var { Data } = this.state;
    var result = -1;
    Data.forEach((Data, index) => {
      if (Data.id === id) {
        result = index;
      }
    });
    return result;
  };
  componentWillMount(){
    if (localStorage && localStorage.getItem("Note")){
      let Data = JSON.parse(localStorage.getItem("Note"));
      this.setState({
        Data: Data,
      });
    }
  }
  onUpdate=(id)=>{
    // console.log("Id Update",id)
    let {Data}=this.state;
    let index = this.findIndex(id);
    let NoteEdit=Data[index]
    // console.log("noteedit",NoteEdit)
    this.setState({
      NoteEdit : NoteEdit
    })
  }
  render() {
    let { Data,NoteEdit } = this.state;
    return (
      <div>
        <Note />
        <main>
          <NoteInputForm onSubmit={this.onSubmit} NoteEdit={NoteEdit} />
          <hr className="Content_hr" />
          <NoteContent Data={Data} onDelete={this.onDelete} onUpdate={this.onUpdate}/>
        </main>
      </div>
    );
  }
}
