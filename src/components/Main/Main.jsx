import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    input,
    setInput,
    loading,
    recentPrompt,
    showResult,
    resultData,
    onSent,
  } = useContext(Context);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && input.trim()) {
      onSent();
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places for a road trip</p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div className="card">
                <p>Help me brainstorm creative ideas</p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div className="card">
                <p>Write a professional email</p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div className="card">
                <p>Help me debug my code</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <div className="search-box-icon">
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              {input.trim() && (
                <img src={assets.send_icon} alt="Send" onClick={onSent} />
              )}
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <a href="https://support.google.com/gemini/answer/13594961?visit_id=638488069169109558-2959892032&p=privacy_notice&rd=1#privacy_notice">
              Your privacy & Gemini Apps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
