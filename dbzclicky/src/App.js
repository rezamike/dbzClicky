import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
import "./App.css";

class App extends Component {

  state = {
    characters,
    score: 0,
    arr: [],
    count: 0,
    high: 0
  }

  clickyThing = (id) => {
    let newArr = this.state.arr;
    let highScore = this.state.high

    if (newArr.includes(id)) {
      if(this.state.score > highScore){
        highScore = this.state.score;
      }
      this.setState({
        high: highScore,
        score: 0, 
        arr: []
      })
    }

    else {
      newArr.push(id);
      this.setState({ 
        score: this.state.score + 1,
        arr: newArr
       });
    }

    if (this.state.score === 12) {
      this.setState({
        score: 0, 
        arr: []
      })
    }

    this.mixErUp(this.state.characters);
    // console.log(this.state.score)
  }

  mixErUp = (array) => {
    var i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          high={this.state.high}
        />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              race={character.race}
              clickyThing={() => { this.clickyThing(character.id) }}
            />
          )
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
