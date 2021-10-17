import React, { useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import CoursesScreen from '../CoursesScreen'
import rating from '../../components/rating'

function LandingPage({ history }) {
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	useEffect(() => {
		if (userInfo) {
			history.push('/mynotes')
		}
	}, [history, userInfo])

	return (
		<>
			<main className='py-5 main'>
				<Container>
					<Row>
						<Col className='text-center py-3'>
							<h1 className='pt-5 h1-main'>
								Learn Our Courses <br /> And Earn New Skills
							</h1>
							<p className='py-3'>
								Get trained, Work on Live Projects and Get certified in 2 Months
							</p>
							<LinkContainer to='/register'>
								<Button variant='success' className='ctabutton cta'>
									Discover More
								</Button>
							</LinkContainer>
						</Col>
					</Row>
				</Container>
			</main>
			<CoursesScreen rating={rating} />
			<Container className='py-5 ps-lg-5 ps-md-5'>
				<h1 className='py-5 h1-about'>
					Why Choose<span className='text-success'> E-Learning</span>
				</h1>
				<Row className='pb-5'>
					<Col sm={12} md={6} lg={4} xl={3} className='py-3 px-3 about-col'>
						<h3 className='h3-course'>Course Accessibility</h3>
						<p className='course-p py-2'>
							Select a suitable course from vast area of other courses.
						</p>
					</Col>
					<Col sm={12} md={6} lg={4} xl={3} className='py-3 px-3 about-col'>
						<h3 className='h3-course'>Schedule Learning</h3>
						<p className='course-p py-2'>
							Learn at whatever and Whenever at your suitable time and place.
						</p>
					</Col>
					<Col sm={12} md={6} lg={4} xl={3} className='py-3 px-3 about-col'>
						<h3 className='h3-course'>Expert Instructions</h3>
						<p className='course-p py-2'>
							Hold the opportunity to learn from the industry's expert.
						</p>
					</Col>
					<Col sm={12} md={6} lg={4} xl={3} className='py-3 px-3 about-col'>
						<h3 className='h3-course'>Stand Out</h3>
						<p className='course-p py-2'>
							After completion of the training you will stand out amongst your
							peers with industry grade certification.
						</p>
					</Col>
					<Col sm={12} md={6} lg={4} xl={3} className='py-3 px-3 about-col'>
						<h3 className='h3-course'>Internship Certificate</h3>
						<p className='course-p py-2'>
							After completion of your 2 months training you will get an
							Internship Certificate which will be valid in all the colleges.
						</p>
					</Col>
					<Col sm={12} md={6} lg={4} xl={3} className='py-3 px-3 about-col'>
						<h3 className='h3-course'>Practical Learning</h3>
						<p className='course-p py-2'>
							Interact with the real-world while doing the real-world projects.
						</p>
					</Col>
				</Row>
				<div className='about-bg bg-success d-flex align-items-center justify-content-lg-center'>
					<h1 className='about-section-h1 py-lg-5 me-lg-5 text-light'>
						Are you ready to <br /> start your course!
					</h1>
					<LinkContainer to='/register' className='button button1'>
						<Button
							variant='light'
							className='ms-lg-5 ms-md-3 me-lg-4 text-success'
						>
							Lets Get started
						</Button>
					</LinkContainer>

					<LinkContainer to='/courses' className='button button2'>
						<Button variant='outline-light'>Explore</Button>
					</LinkContainer>
				</div>
			</Container>
		</>
	)
}

export default LandingPage
