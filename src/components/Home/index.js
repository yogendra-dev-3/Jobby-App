import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => (
  <>
    <Header />
    <div className="home-container">
      <div className="content-container">
        <h1 className="home-heading">
          Find The Job That Fits <br /> Your Life
        </h1>
        <p className="home-content">
          Millions of People are searching for jobs, salary information,company
          reviews.Find the job that fits your abilities and potential
        </p>
        <Link to="/jobs">
          <button type="button" className="find-jobs-button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
