/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

class DishDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderComments(comments) {
    if (comments) {
      return (
        <>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {comment.date}
                </p>
              </div>
            )
          })}
        </>
      )
    } else return <div></div>
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <div className="list-unstyled">
              {this.renderComments(dish.comments)}
            </div>
          </div>
        </>
      )
    } else {
      return <div></div>
    }
  }

  render() {
    return <div className="row">{this.renderDish(this.props.dish)}</div>
  }
}

export default DishDetail
