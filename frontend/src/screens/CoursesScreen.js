import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Container } from 'react-bootstrap'
import Course from '../components/courses'

const CoursesScreen = () => {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		const fetchcourses = async () => {
			const { data } = await axios.get('/api/courses')

			setCourses(data)
		}
		fetchcourses()
	}, [])

	return (
		<>
			<Container className='py-3'>
				<h1 className='py-5'>Latest Courses</h1>
				<Row>
					{courses.map((course, index) => (
						<Col key={index} sm={12} md={6} lg={4}>
							<Course course={course} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	)
}

export default CoursesScreen
