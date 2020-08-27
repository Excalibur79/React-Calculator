import React,{Component} from "react";
import "./ValButton.css"
class ValButton extends Component
{
    constructor(props)
    {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        this.props.numberdisplay(this.props.value);
    }
    render()
    {
        return(
        <div className="ValButton" onClick={this.handleClick}>
            {this.props.value}
        </div>
        )
    }
}
export default ValButton;