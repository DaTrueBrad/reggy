import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [count, setCount] = useState(0);
  let compliments = [
    "Your smile lights up the room and brightens my day.",
    "You have an incredible sense of style that always makes heads turn.",
    "Your intelligence is inspiring and you constantly amaze me with your knowledge.",
    "Your determination and capability are truly admirable.",
    "You're not just beautiful on the outside, but also on the inside.",
    "Your confidence is captivating and it's one of the things I love most about you.",
    "Your sense of humor always brings a smile to my face and makes me laugh.",
    "You're incredibly sexy and it's impossible to resist your charm.",
    "Your wit and quick thinking make you a great conversationalist.",
    "You have a unique ability to make people feel comfortable and at ease.",
    "Your intelligence is both impressive and sexy.",
    "Your ambition and drive inspire me to reach for my own goals.",
    "You have a natural grace and elegance that is captivating.",
    "Your kindness and empathy make you a truly wonderful person.",
    "You're not just smart, but also street-smart, which is incredibly attractive.",
    "Your adventurous spirit and willingness to try new things is exhilarating.",
    "Your capability to handle any situation with ease and confidence is admirable.",
    "You have a way of making everyone around you feel special and valued.",
    "Your passion for life is infectious and makes me want to live every moment to the fullest.",
    "You're the complete package – cute, sexy, smart, and capable – and I'm so lucky to have you in my life."
  ];

  let handleClick = () => {
    Swal.fire({
      title: "I Love you 😘",
      text: compliments[Math.floor(Math.random() * compliments.length)]
    })
  }

  return (
    <div className="App">
      <h1>Hey Reggy 😍</h1>
      <h3 className="card">I know you're sad, and a frustrated, and angry at the whole situation right now, but I want you to know that <span className="colored-text">I love you,</span> many people including your family, <span className="colored-text">they love you,</span> and your friends from work, <span className="colored-text">they love you.</span><br /> <br />We are all rooting for you, and we <span className="colored-text">know</span> you can do it 😊</h3>
      <button onClick={handleClick}>Tap for Assistance</button>
    </div>
  );
}

export default App;
