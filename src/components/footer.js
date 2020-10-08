import React, {Component} from 'react';

class Footer extends Component{

    state = {
        name: "Shahed"
    }

    change = (evt) =>{
        // console.log(this.state.name)
         console.log('Changed',evt.target.value)
         this.setState({name: evt.target.value})
    }

    CreateAlert(){
        alert("This is not gonna be me");
    }

    render(){
        return(
            <React.Fragment>
                <h1 onClick={this.CreateAlert}>This is our {this.props.info}</h1>
                <h2>This is our {this.props.take}</h2>
                <p onClick={this.props.myAlert}>Click Here</p>
                <input value={this.state.name} type="text" onChange={this.change}/>
            </React.Fragment>
        )
    }
}

export default Footer;