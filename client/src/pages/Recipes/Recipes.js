import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { RecipeCard } from "../../components/Card";
// import recipes from "./recipes.json";
import API from "../../utils/API";

class Recipes extends Component {
  state = {
    recipes: [],
    // title: "",
    // image: "",
    // ingredients: "",
    // directions: ""
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="s4">
              {this.state.recipes.map(recipe => (
                <RecipeCard key={recipe._id} />
              ))}

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Recipes;