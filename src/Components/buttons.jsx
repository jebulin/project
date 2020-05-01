import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import customStyles2 from './Style2';
import customStyles1 from './Style1';

class Buttons extends Component {
    constructor(){
        super();
        this.state={
          bgColor1:'#000000',
          bgColor2:'#D7D3D3',
          align1:'right',
          align2:'false',
        }
      }
      changeToDark(){
        this.props.changeDark(this.state.bgColor1);
      }
      changeToLight(){
      this.props.changeLight(this.state.bgColor2);
      }
      large(){
        this.props.large(customStyles2);
      }
      small(){
        this.props.small(customStyles1);
     }
  render() {
    return (
      <div className="d-inline-flex mt-2 mb-2">
        <Dropdown>
          <Dropdown.Toggle
            className=" bg-secondary sm d-inline mr-3 ml-4 "
            variant="secondary"
            id="dropdown-basic"
          >
            Themes
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onSelect={this.changeToDark.bind(this)} className="small">
              Dark
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.changeToLight.bind(this)} className="small">
              Light
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            className=" bg-secondary sm d-inline"
            variant="secondary"
            id="dropdown-basic"
          >
            Font Size
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onSelect={this.large.bind(this)} className="small">
              Large
            </Dropdown.Item>
            <Dropdown.Item onSelect={this.small.bind(this)} className="small">Small</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
export default Buttons;