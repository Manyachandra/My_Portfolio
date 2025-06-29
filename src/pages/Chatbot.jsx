import React, { useState } from 'react';
import './Chatbot.css'; // ✅ Correct casing!

const Chatbot = () => {
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi! Ask me about Manya.' }]);
  const [input, setInput] = useState('');

  const responses = [
  {
    keywords: ["hello", "hii", "hiii", "hey"],
    answer: "Hello Sir/Mam! 😊 How can I help you today?",
  },
  {
    keywords: ["who are you", "creator", "who built you"],
    answer: "I’m Manya’s portfolio assistant 🤖, created by Manya herself to help you explore her awesome work! 🛠️✨",
  },
  {
    keywords: ["strongest skill", "best skill", "top skill"],
    answer: "Manya's strongest skill is Full Stack Web Development with React, Node.js & MongoDB! 💻",
  },
  {
    keywords: ["best project", "top project"],
    answer: "Definitely ClubHub — a super cool platform for NIT Patna’s clubs & events! 🚀",
  },
  {
    keywords: ["study", "college", "education"],
    answer: "Manya is a final year CSE student at NIT Patna! 🎓",
  },
  {
    keywords: ["email", "gmail", "email of manya"],
    answer: "Sure! It's chandramanya78@gmail.com ",
  },
  {
    keywords: ["contact", "how to contact"],
    answer: "You can contact Manya through the Contact section or email her at: chandramanya78@gmail.com ",
  },
  {
    keywords: ["resume", "cv", "show resume", "manya resume"],
    answer: "Here is Manya’s resume! 📄 [Click to View](https://drive.google.com/file/d/1kuMUEHtN8TrC_j9Sg_-Z84WQgvnVoDL5/view)",
  },
  {
    keywords: ["linkedin", "linkedin link", "where is her linkedin"],
    answer: "You can connect with Manya on LinkedIn here 💼 [LinkedIn](https://www.linkedin.com/in/manyachandra8/)",
  },
  {
    keywords: ["github", "github link", "show github"],
    answer: "Here’s Manya’s GitHub for all her projects! 🐱‍💻 [GitHub Profile](https://github.com/Manyachandra)",
  },
  {
    keywords: ["vercel", "deployment", "deployed", "vercel link"],
    answer: "Most of her projects are deployed on Vercel 🚀 [Check Vercel Projects](https://vercel.com/)",
  },
  {
    keywords: ["dsa", "coding", "questions", "how many coding"],
    answer: "Manya has solved 500+ DSA problems across platforms like LeetCode, GFG, and CodeStudio! 💪🧠",
  },
  {
    keywords: ["how good is she at dsa"],
    answer: "She has strong DSA knowledge with 500+ problems solved! That’s commitment! 💡📚",
  },
  {
    keywords: ["open source", "contribute"],
    answer: "Yes! She loves collaborating on GitHub and has contributed to open-source projects too! 🌍💻",
  },
  {
    keywords: ["tech stack", "technologies", "tools"],
    answer: "Manya works with HTML, CSS, JavaScript, React.js, Node.js, MongoDB, Express, and a sprinkle of Python & Machine Learning! 🧠💻",
  },
  {
    keywords: ["expertise", "experties", "skills", "area"],
    answer: "Full Stack Web Dev, DSA, Core Computer Fundamentals and a bit of Machine Learning too! 💡",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    answer: "Bye-bye! Take care and don’t forget to smile! ",
  }
];

 const handleSend = () => {
  if (!input.trim()) return;

  const userMsg = { from: 'user', text: input };
  const lowerInput = input.toLowerCase();

  const match = responses.find(response =>
    response.keywords.some(keyword => lowerInput.includes(keyword))
  );

  const botReply = match
    ? match.answer
    : "Sorry, I don’t understand that yet 😅";

  setMessages([...messages, userMsg, { from: 'bot', text: botReply }]);
  setInput('');
};


  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-row">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
