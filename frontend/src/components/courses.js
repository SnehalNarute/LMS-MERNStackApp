import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './rating.js'

const Courses = ({ course }) => {
	return (
		<>
			<Card className='my-3 p-3 rounded'>
				<Link to={`/mynotes`} course={course}>
					<Card.Img src={course.image} variant='top' />
				</Link>
				<Card.Body>
					<Link to={`/mynotes`} course={course}>
						<Card.Title as='div'>
							<strong>{course.name}</strong>
						</Card.Title>
					</Link>

					<Card.Text as='div'>
						<Rating
							value={course.rating}
							text={` ${course.numReviews} reviews`}
                            course={course}/>
					</Card.Text>

					<Card.Text as='h3' className='h3' course={course}>
						${course.price}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

export default Courses
