
function Home({mode}) {
  return (
    <>
    
<div className={`container-fluide text-${mode === 'light'? 'dark' :'light'} bg-${mode}`}>

<div className="jumbotron text-center">
    <h1>Welcome to Muskan Restaurant</h1>
    <p>Delicious Food Served with Love</p>
    <a className="btn btn-primary" href="#">View Menu</a>
</div>

{/* <!-- About Us Section --> */}
<div className="container pt-4">
    <div className="row">
        <div className="col-md-6">
            <h2>Restaurant</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1559910369-3924e235c1cf?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyZW50fGVufDB8fDB8fHww" alt="About Us" className="img-fluid"/>
        </div>
    </div>
</div>

{/* <!-- Menu Section --> */}
<div className="container  p">
    <h2 className="text-center">Our Menu</h2>
    <div className="row text-dark">
        <div className="col-md-4">
            <div className="card">
                <img src="https://plus.unsplash.com/premium_photo-1668146930385-c1078da0fb35?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" className="card-img-top" alt="Menu Item 1"/>
                <div className="card-body">
                    <h5 className="card-title">Menu Item 1</h5>
                    <p className="card-text">Description of the menu item goes here.</p>
                    <p className="card-text text-primary">$10.99</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1676300184396-bf9e08b8b223?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" className="card-img-top" alt="Menu Item 2"/>
                <div className="card-body">
                    <h5 className="card-title">Menu Item 2</h5>
                    <p className="card-text">Description of the menu item goes here.</p>
                    <p className="card-text text-primary">$12.99</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1682566509547-5961bc5ea394?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" className="card-img-top" alt="Menu Item 3"/>
                <div className="card-body">
                    <h5 className="card-title">Menu Item 3</h5>
                    <p className="card-text">Description of the menu item goes here.</p>
                    <p className="card-text text-primary">$9.99</p>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Contact Section --> */}
<div className="container pt-4">
    <h2 className="text-center">Contact Us</h2>
    <div className="row">
        <div className="col-md-6">
            <p>Contact information and a map can go here.</p>
        </div>
        <div className="col-md-6">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" style={{background : 'none'}} placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" style={{background : 'none'}} placeholder="Your Email"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="4" style={{background : 'none'}} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary m-2">Send Message</button>
            </form>
        </div>
    </div>
</div>


<footer className="p-4 my-5">
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
</div>
    </>
  )
}

export default Home