import React from 'react';
import { Link } from'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <section>
      <div className="error-container">
        <h2>Error 404</h2>
        <h3>Oops, This Page Doesn't Exist</h3>
        <Link to={'/'} className='btn btn-primary'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default ErrorPage