import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Results = (props) => {

  if (props.drinks.length < 1) {
    return null;
  }
  if (!props.result) {
    return null;
  }
  return props.drinks.map((drink) => {
    return (
      <div className="drink-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <strong> {drink.name} </strong>
            </div>
            <div className="flip-card-back" style={drink.instructions?.length < 180 ? { display: "flex" } : {}}>
              <div style={{ padding: "1em" }}>
                <strong>Main Liquor:</strong> {drink.main_liquor}<br /><br />
                <strong>Ingredients:</strong> {drink.ingredients}<br /><br />
                <strong>Instructions:</strong> {drink.instructions}<br /><br />
                <Link to={`/drink/${drink.id}`} ><strong>View This Drink</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
}

export default Results