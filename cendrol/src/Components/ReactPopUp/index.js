import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import "./index.css";

const ReactPopUp = (props) => {
  const { blog, Blog, url } = props;

  return (
    <div className="popup-container">
      <Popup
        trigger={
          <a href={url} className="url">
            Unlimited Jokes On {blog}
          </a>
        }
        modal
        nested
      >
        <div>
          <div className="joke-container shadow">
            <h1 className="joke-title">{Blog}</h1>
            <p className="joke">
              {" "}
              Oops! Currently Jokes are Not Available on {Blog} 😉😆
            </p>

            <Popup
              trigger={
                <div className="btn-container">
                  <button className="btn">Next Joke</button>
                </div>
              }
              modal
              nested
            >
              <div className="btn-containe">
                <p className="error"> Sorry! ☹️🙁</p>
                <p className="error">Not Able to Fetch Jokes😐</p>
              </div>
            </Popup>
          </div>
        </div>
      </Popup>
    </div>
  );
};
export default ReactPopUp;
