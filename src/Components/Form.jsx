import React, { Component } from 'react'

class Form extends React.Component {
    state = {
        title:'text',
        text:'javaScript is awesome',
        library:"React",
        isAwesome:"true"
    }
    handleChange = (e)=>{
         if(e.target.type === "text"){
              this.setState ({
              title :e.target.value
          })
         }
         else if(e.target.type === "textarea"){
              this.setState ({
              text :e.target.value
          })
         }
         else if (e.target.type === "select-one"){
              this.setState({
                  library:e.target.value
              })

         }
         else if(e.target.type === "checkbox"){
             this.setState({
                 isAwesome:e.target.checked
             })
         }
         else{
             console.log('return null')
         }
    }
    render() { 
        const {title, text, library, isAwesome} = this.state
        return <div>
        <form>
        <input type="text" value={title} onChange = {this.handleChange} />
        <br/>
        <br/>
        <textarea name="text" value={text} onChange={this.handleChange}></textarea>
        <br/>
        <br/>
        <select value={library} onChange={this.handleChange} >
        <option value="React">React</option>
        <option value="Angular">Angular</option>

        </select>
        <br/>
        <br/>
        <input type = "checkbox" checked={isAwesome} onChange={this.handleChange}/>
        </form>
        </div>;
    }
}
 
export default Form;