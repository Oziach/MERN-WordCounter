import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            text: "",
            words: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    countWords = () => {
        const words = this.state.text.split(' ')

        let wordCount = 0;
        words.forEach( (word)=>{
            if(word.trim() !== '') {
                wordCount++;
            } 
        })

        return wordCount;
    }


    render(){
        return(
            <div className="container mx-auto w-50 mt-5">
                <h1 className="text-center fw-bold">Responsive Paragraph Word Counter</h1>

                <textarea
                    className="w-100 mt-3 mb-2 border-1 border-dark rounded-2 border-"
                    placeholder="Enter text here"
                    rows={10}
                    onChange={this.handleChange}
                > 
                </textarea>

                <p className="mt-3">Word Count: {this.countWords()} </p>
            </div>
        )
    }   
}

export default Counter