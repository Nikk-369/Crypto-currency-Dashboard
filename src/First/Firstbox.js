import React, { useState } from "react";
import { LineChart, Line } from "recharts";
import img1 from "../Images/dollar-sign.png";
import img2 from "../Images/dollar.png";
import img3 from "../Images/bitcoin.png";

const MyComponent = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeText, setActiveText] = useState(null);

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 4567, amt: 2400 },
    { name: "Page C", uv: 200, pv: 1398, amt: 2400 },
    { name: "Page D", uv: 278, pv: 3908, amt: 2400 },
    { name: "Page E", uv: 189, pv: 4800, amt: 2400 },
  ];

  const renderLineChart = () => (
    <LineChart width={300} height={150} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );

  const [secondBoxContent, setSecondBoxContent] = useState(renderLineChart());

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleClick = (text) => {
    setActiveText(text === activeText ? null : text);

    // Update content of the second box based on the clicked text
    switch (text) {
      case "Text 1":
        setSecondBoxContent(renderLineChart());
        break;
      case "Text 2":
        // You can render a different chart or content for Text 2 if needed
        setSecondBoxContent(renderLineChart());
        break;
      case "Text 3":
        // You can render a different chart or content for Text 3 if needed
        setSecondBoxContent(renderLineChart());
        break;
      case "Text 4":
        // You can render a different chart or content for Text 4 if needed
        setSecondBoxContent(renderLineChart());
        break;
      default:
        setSecondBoxContent("Default content for second box");
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          border: '2px solid #ddd',
          borderRadius: '15px',
          boxShadow: '0 8px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* First line with two lines in a row */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={img3} />
          <h3>Bitcoin</h3>
          <p>BTC</p>
        </div>

        {/* Second line */}
        <h1 style={{ display: "flex" }}>3.529020BTC</h1>

        {/* Third line with two lines in a row */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <h3>$19.153 USD</h3>
          </p>
          <h3
            style={{
              backgroundColor: "red",
              padding: "5px",
              border: "2px solid #ddd",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              color: "white",
            }}
          >
            <p>-2.32%</p>
          </h3>
        </div>

        {isContentVisible && (
          <div
            style={{
              backgroundColor: "lightgray",
              padding: "5px",
              marginTop: "20px",
              border: "2px solid #ddd",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "5px",
              }}
            >
              <button onClick={() => alert("Buy clicked")}>Buy</button>
              <button onClick={() => alert("Sell clicked")}>Sell</button>
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            cursor: "pointer",
          }}
          onClick={toggleContentVisibility}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style={{
              transform: isContentVisible ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 15.5l-4.5-4.5 1-1 3.5 3.5 3.5-3.5 1 1z"
              fill="rgba(0, 0, 0, 0.54)"
            />
          </svg>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <p
          style={{
            cursor: "pointer",
            backgroundColor:
              activeText === "Text 1" ? "lightgrey" : "transparent",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={() => handleClick("Text 1")}
        >
          Day
        </p>
        <p
          style={{
            cursor: "pointer",
            backgroundColor:
              activeText === "Text 2" ? "lightgrey" : "transparent",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={() => handleClick("Text 2")}
        >
          Week
        </p>
        <p
          style={{
            cursor: "pointer",
            backgroundColor:
              activeText === "Text 3" ? "lightgrey" : "transparent",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={() => handleClick("Text 3")}
        >
          Month
        </p>
        <p
          style={{
            cursor: "pointer",
            backgroundColor:
              activeText === "Text 4" ? "lightgrey" : "transparent",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={() => handleClick("Text 4")}
        >
          Year
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "5px",
          boxShadow: "0 8px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "20px",
        }}
      >
        <p>{secondBoxContent}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "lightgrey",
            padding: "20px",
            border: "2px solid #ddd",
            borderRadius: "15px",
            boxShadow: "0 8px 8px rgba(0, 0, 0, 0.1)",
            margin: "5px",
          }}
        >
          <img src={img1} />
          <p>Buy BTC</p>
        </div>
        <div
          style={{
            backgroundColor: "lightgrey",
            padding: "20px",
            border: "2px solid #ddd",
            borderRadius: "15px",
            boxShadow: "0 8px 8px rgba(0, 0, 0, 0.1)",
            margin: "5px",
          }}
        >
          <img src={img2} /> <p>Sell BTC</p>
        </div>
      </div>

      {/* Footer section with four icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        {/* Icon 1 */}
        <div
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "lightgrey")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          {/* Your icon component or image for Icon 1 */}
          <i class="fi fi-sr-wallet"></i>
        </div>

        {/* Icon 2 */}
        <div
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "lightgrey")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          {/* Your icon component or image for Icon 2 */}
          <i class="fi fi-ss-navigation"></i>
        </div>

        {/* Icon 3 */}
        <div
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "lightgrey")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          {/* Your icon component or image for Icon 3 */}
          <i class="fi fi-ss-bell"></i>
        </div>

        {/* Icon 4 */}
        <div
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "lightgrey")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          {/* Your icon component or image for Icon 4 */}
          <i class="fi fi-sr-settings"></i>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
