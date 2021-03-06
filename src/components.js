import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Action from "./components/Action";
import AddOption from "./components/AddOption";
import Options from "./components/Options";
import OptionModal from './OptionModal';

class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handPick = this.handPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        
    }
    handleSelectOption(){
        this.setState(() => ({selectOption : undefined}))
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handPick() {
        const res = Math.floor(Math.random() * this.state.options.length);
        const inf = this.state.options[res];
        this.setState(() => ({ selectOption: inf}))
    }
    handleAddOption(add) {
        if (!add) {
            return 'enter valid data'
        }
        else if (this.state.options.indexOf(add) > -1) {
            return 'Enter unique data'
        }
        this.setState((preState) => (
            {
                options: preState.options.concat(add)
            }
        ))

    }
    render() {
        const title = 'DECISION APP';
        const subtitle = 'Make a decision';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handPick={this.handPick} />
                <Options opt={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption title={this.state.options}
                    handleAddOption={this.handleAddOption} />
                <OptionModal selectOption={this.state.selectOption}
                handleSelectOption={this.handleSelectOption}/>    
            </div>
        )
    }
}


ReactDOM.render(<Indecision />, document.getElementById("comp"));

