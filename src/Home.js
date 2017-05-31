import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
      <div className="index-background">
          <div className="navbar navbar-default navbar-inverse navbar-custom" role="navigation">
              <div className="container">
                  <ul className="nav navbar-nav">
                      <li className="nav-item active">
                          <a className="nav-link" href="./index.html">Home Roasting United <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link navbar-white" href="./about.html">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./contact.html">Contact</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./submit.html">Submit a Post</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./sign-up.html">Sign Up</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="./log-in.html">Log In</a>
                      </li>
                  </ul>
              </div>
          </div>

          <header>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-lg-offset-2">
                          <div className="custom-header">
                              <h1>
                                  United We Roast.
                              </h1>
                          </div>
                      </div>
                  </div>
              </div>
          </header>

      </div>
      <div>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>
                            <u>
                                Featured Recipes
                            </u>
                        </h1>
                    </div>
                </div>
            </div>
        </section>

      <section>
          <div className="container">
              <div className="row" id="first-row-cards">
                  <div className="col-lg-3">
                      <div className="card">
                          <div className="card-block">
                              <h2 className="card-title">
                                  Test Recipe Post
                              </h2>
                              <h4 className="card-subtitle">
                                  Recipe might have a clickable link to it
                              </h4>
                          </div>
                          <div className="card-block">
                              <p>This recipe is for a roast for a Sumatra Blend that is rad</p>
                              <a href="./login" className="card-link">Link to Recipe</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="card">
                          <div className="card-block">
                              <h2 className="card-title">
                                  Test Recipe Post
                              </h2>
                          </div>
                          <div className="card-block">
                              <p>This recipe is for a roast for a Sumatra Blend that is rad</p>
                              <a href="./login" className="card-link">Link to Recipe</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="card">
                          <div className="card-block">
                              <h2 className="card-title">
                                  Test Recipe Post
                              </h2>
                              <h4 className="card-subtitle">
                                  Recipe might have a clickable link to it
                              </h4>
                          </div>
                          <div className="card-block">
                              <p>This recipe is for a roast for a Sumatra Blend that is rad</p>
                              <a href="./login" className="card-link">Link to Recipe</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="card">
                          <div className="card-block">
                              <h2 className="card-title">
                                  Test Recipe Post
                              </h2>
                              <h4 className="card-subtitle">
                                  Recipe might have a clickable link to it
                              </h4>
                          </div>
                          <div className="card-block">
                              <p>This recipe is for a roast for a Sumatra Blend that is rad</p>
                              <a href="./login" className="card-link">Link to Recipe</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <h2>
                          What this site is
                      </h2>
                      <h4>
                          A community driven home coffee roasting recipe repository. Come and learn, teach, and collaborate with other home roasters to expand the community!
                      </h4>
                  </div>
              </div>
          </div>
      </section>

      <section>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <h2>
                          This is a post option
                      </h2>
                      <h4>
                          First post for roasting about how to find a recipe and use the website and look at stuff and be productive at coffee roasting. And now testing the legth of these posts and making sure the post looks good and maybe adding a date and time of post later in time.
                      </h4>
                  </div>
              </div>
          </div>
      </section>

      <section>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <h2>
                          This is a post option
                      </h2>
                      <h4>
                          First post for roasting about how to find a recipe and use the website and look at stuff and be productive at coffee roasting. And now testing the legth of these posts and making sure the post looks good and maybe adding a date and time of post later in time.
                      </h4>
                  </div>
              </div>
          </div>
      </section>

      <section>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <h2>
                          This is a post option
                      </h2>
                      <h4>
                          First post for roasting about how to find a recipe and use the website and look at stuff and be productive at coffee roasting. And now testing the legth of these posts and making sure the post looks good and maybe adding a date and time of post later in time.
                      </h4>
                  </div>
              </div>
          </div>
      </section>

      <hr className="hr-custom"></hr>

      <div className="second-background">

      </div>

      <footer className="footer">
          <h4>
              Copyright
          </h4>
      </footer>
      </div>
      </div>
    )
  }
}

export default Home;
