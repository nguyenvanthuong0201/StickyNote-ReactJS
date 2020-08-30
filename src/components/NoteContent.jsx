import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default class NoteContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  onDelete = (data) => {
    // console.log("Props:", data);
    let id = data;
    // console.log("id", id);
    // this.setState({
    //   id: id,
    // });
    this.props.onDelete(id);
  };
  onUpdate = (id) =>{
    let idUpdate=id;
    this.props.onUpdate(idUpdate)
  }
  render() {
    let { Data } = this.props;
    return (
      <ul className="stick mt-4">
        {Data.map((Data, index) => {
          return (
            <li key={index} onClick={() => this.onUpdate(Data.id)}>
              <div className="stick_header">
                <div className="stick_title">
                  <b>{Data.title}</b>
                </div>
                <IconButton onClick={() => this.onDelete(Data.id)}>    {/* nếu có tham số thì phải là {()=>this....} */}
                  <HighlightOffIcon className="stick-icon" />
                </IconButton>
              </div>
              <div className="stick_content">
                <p>{Data.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
