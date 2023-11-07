
function Footer() {
  return (
    <footer className="bg-dark text-light p-4">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h3>Contact Us</h3>
                <address>
                    123 Restaurant Street<br/>
                    City, State ZIP Code<br/>
                    Phone: (123) 456-7890<br/>
                    Email: info@restaurant.com
                </address>
            </div>
            <div className="col-md-4">
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
            <div className="col-md-4">
                <h3>Follow Us</h3>
                <a href="#" className="btn btn-outline-light social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="btn btn-outline-light social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn btn-outline-light social-icon"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-12 text-center">
                &copy; 2023 Restaurant Name. All rights reserved.
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer