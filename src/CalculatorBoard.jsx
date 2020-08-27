import React,{Component} from "react";
import ValButton from "./ValButton";
import "./CalculatorBoard.css"
class CalculatorBoard extends Component
{
    static defaultProps={
        valbuttons:["1","2","3","4","5","6","7","8","9",".","0"],
        calcbuttons:["<","+","-","^","/","*","%"]
    }
    constructor(props)
    {
        super(props);
        this.state={
            display:"",
            innercalculate:""
           

        }
        this.numberdisplay=this.numberdisplay.bind(this);
        this.evaluate=this.evaluate.bind(this);
        this.clear=this.clear.bind(this);
    }
    numberdisplay(number)
    {
        //console.log(eval(this.state.display*number));
       
        if(number==="<")
        {
                var lastval=this.state.display[this.state.display.length-1];
                if(lastval!=="^")
                {
                    var newdisplay=this.state.display.substr(0,(this.state.display.length)-1);
                    var newinnercalculate=this.state.innercalculate.substr(0,(this.state.innercalculate.length)-1);
                    

                      this.setState({
                          display:newdisplay,
                          innercalculate:newinnercalculate
                      })

                }
                else
                {

                    
                    var newdisplay=this.state.display.substr(0,(this.state.display.length)-1);
                    var newinnercalculate=this.state.innercalculate.substr(0,(this.state.innercalculate.length)-2);
                    

                      this.setState({
                          display:newdisplay,
                          innercalculate:newinnercalculate
                      })

                }
                
                
        }
        else if(number==="^")
        {
            this.setState(curState=>(
                {
                    display:`${curState.display}${number}`,
                    innercalculate:`${curState.display}**`
                }
            )) 
        }
        else
        {
           
            this.setState(curState=>(
                {
                    display:`${curState.display}${number}`,
                    innercalculate:`${curState.innercalculate}${number}`
                }
            ))
            
        }
       
    }
    evaluate()
    {
             try{
                var result=eval(this.state.innercalculate);
                this.setState(
                    {
                    display:result.toString(),
                    innercalculate:result.toString()
                    })
                }
                catch{
                    this.setState(
                        {
                            display:this.state.display,
                            innercalculate:this.state.innercalculate
                        }
                    )
                }
        
    }
    clear()
    {
        this.setState({
            display:"",
            innercalculate:""
        })
    }
    render()
    {
        return(
            <div  id="CalculatorBoard">
                    <div className="CalculatorBoard-display">
                        {this.state.display}
                    </div>
                    <div className="container CLR">
                         <div className="CLR-button" onClick={this.clear}>CLR</div>
                    </div>
                      
                        <div className="container" id="Flexbox">
                            <div className="row ValButtons-div">
                            
                                
                                    {this.props.valbuttons.map(b=>
                                            <div className="col-4 column">
                                                    <div id="Number-Buttons">
                                                        <ValButton key={b} numberdisplay={this.numberdisplay} value={b}/>
                                                    
                                                    </div>
                                                    
                                            </div>
                                    )}
                                    <div className="col-4 column">
                                        <div id="Number-Buttons">
                                            <div className="CalculatorBoard-eval-style" onClick={this.evaluate}>=</div>
                                        </div>
                                        
                                    </div>
                                    
                            
                            
                            </div>
                            <div className="CalcButtons-div" >
                                <div className="Calc-Buttons">
                                {this.props.calcbuttons.map(c=><ValButton key={c} numberdisplay={this.numberdisplay} value={c}/>)}
                                </div>
                              
                                
                            
                            </div>
                        </div>
            </div>
            
        )
    }
}
export default CalculatorBoard;