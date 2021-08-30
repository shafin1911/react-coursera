/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'

const RenderComments = ({ comments }) => {
  if (comments) {
    return (
      <>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author},{' '}
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          )
        })}
      </>
    )
  } else return <div></div>
}

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="row">
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
            <RenderComments comments={dish.comments} />
          </div>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <RenderDish dish={props.dish} />
    </div>
  )
}

export default DishDetail
