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
    arr: []
  }

  clickyThing = (id) => {
    let newArr = this.state.arr;

    if (newArr.includes(id)) {
      // console.log("poop")
    }
    else {
      newArr.push(id);
      this.setState({ score: this.state.score + 1 });
    }

    this.setState({
      arr: newArr
    })

    this.mixErUp();
    // console.log(this.state.score)
  }

  mixErUp = () => {
    let char = this.state.characters[Math.floor(Math.random()*this.state.characters.length)];

    console.log(char);
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
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
