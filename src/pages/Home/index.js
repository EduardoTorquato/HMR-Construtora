import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function Home() {
  return (
    <>
      <Container>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Hello, world!</h1>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5" id="content">
          <div className="row">
            <div className="col-md-4 col-6 mt-5">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Link to="/" className="btn btn-details">
                View Details &gt;&gt;
              </Link>
            </div>
            <div className="col-md-4 col-6 mt-5">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Link to="/" className="btn btn-details">
                View Details &gt;&gt;
              </Link>
            </div>
            <div className="col-md-4 col-6 mt-5">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Link to="/" className="btn btn-details">
                View Details &gt;&gt;
              </Link>
            </div>
            <div className="col-md-4 col-6 mt-5">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Link to="/" className="btn btn-details">
                View Details &gt;&gt;
              </Link>
            </div>
            <div className="col-md-4 col-6 mt-5">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Link to="/" className="btn btn-details">
                View Details &gt;&gt;
              </Link>
            </div>
            <div className="col-md-4 col-6 mt-5">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Link to="/" className="btn btn-details">
                View Details &gt;&gt;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
