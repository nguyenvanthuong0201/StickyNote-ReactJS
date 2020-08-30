import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default class NoteInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      content: "",
    };
  }
  componentWillMount(){
    if(this.props.NoteEdit){
      this.setState({
        id:this.props.NoteEdit.id,
        title:this.props.NoteEdit.title,
        content:this.props.NoteEdit.content
      })
    }
    // console.log("state",this.props.NoteEdit);
  }
  componentWillReceiveProps(next){
    if(next && next.NoteEdit){
      this.setState({
        id:next.NoteEdit.id, 
        title:next.NoteEdit.title,
        content:next.NoteEdit.content
      })
    }
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = () => {
    // event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  };

  onClear = () => {   /// onClear mỗi khi mình click onSubmit
    this.setState({      
      id:"",
      title: "",
      content: "",
    });
  };
  render() {
    return (
      <div>
        <div className="input_content">
          <FormControl>
            <InputLabel htmlFor="my-input">Title Note</InputLabel>
            <Input
              id="my-input"
              value={this.state.title}
              name="title"
              onChange={this.onChange}
            />
            <FormHelperText id="my-helper-text">Your job title.</FormHelperText>
          </FormControl>
          <FormControl style={{ marginLeft: "50px" }} className="Content_note">
            <InputLabel htmlFor="my-input">Content Note</InputLabel>
            <Input
              id="my-input"
              style={{ width: "450px" }}
              value={this.state.content}
              name="content"
              onChange={this.onChange}
            />
            <FormHelperText id="my-helper-text">
              Content you need to complete
            </FormHelperText>
          </FormControl>
          <FormControl
            style={{ marginLeft: "50px", marginTop: "20px", width: "150px" }}
          >
            <Button
              variant="contained"
              style={{
                background:
                  " linear-gradient(250deg, rgba(207,235,15,1) 0%,  rgba(250,124,21,1) 100%)",
              }}
              startIcon={<SaveIcon />}
              onClick={this.onSubmit}
            >
              Save
            </Button>
          </FormControl>
        </div>
      </div>
    );
  }
}
