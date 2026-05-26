import { useEffect, useState } from 'react';

function AIChat() {

  const [prompt, setPrompt] = useState('');

  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: 'Hello 👋 I am DevSphere AI. Ask me anything.',
    },
  ]);

  const [typing, setTyping] = useState(false);

  const fakeAIResponse = (text) => {

    const response =
      `You asked: "${text}". DevSphere AI is generating an intelligent response for your workspace.`;

    let index = 0;

    setTyping(true);

    const interval = setInterval(() => {

      index++;

      setMessages((prev) => {

        const updated = [...prev];

        const lastMessage = updated[updated.length - 1];

        if (lastMessage?.role === 'ai-stream') {

          lastMessage.content =
            response.slice(0, index);

        } else {

          updated.push({
            role: 'ai-stream',
            content: response.slice(0, index),
          });

        }

        return [...updated];
      });

      if (index >= response.length) {

        clearInterval(interval);

        setTyping(false);

        setMessages((prev) => {

          const updated = [...prev];

          updated[updated.length - 1] = {
            role: 'ai',
            content: response,
          };

          return updated;
        });
      }

    }, 25);
  };

  const handleSend = () => {

    if (!prompt.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        content: prompt,
      },
    ]);

    fakeAIResponse(prompt);

    setPrompt('');
  };

  return (

    <div className="bg-[#081028] border border-white/10 rounded-3xl p-6 shadow-2xl">

      <div className="space-y-4 h-[500px] overflow-y-auto pr-2">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.role === 'user'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >

            <div
              className={`max-w-[75%] px-5 py-4 rounded-2xl text-sm leading-relaxed transition-all duration-300 ${
                msg.role === 'user'
                  ? 'bg-[#b9ff66] text-black rounded-br-md'
                  : 'bg-[#131f3a] text-white rounded-bl-md'
              }`}
            >

              {msg.content}

            </div>

          </div>
        ))}

        {typing && (

          <div className="flex justify-start">

            <div className="bg-[#131f3a] text-white px-5 py-4 rounded-2xl rounded-bl-md flex items-center gap-2">

              <span className="w-2 h-2 bg-[#b9ff66] rounded-full animate-bounce"></span>

              <span className="w-2 h-2 bg-[#b9ff66] rounded-full animate-bounce delay-100"></span>

              <span className="w-2 h-2 bg-[#b9ff66] rounded-full animate-bounce delay-200"></span>

            </div>

          </div>
        )}

      </div>

      {/* Input */}

      <div className="mt-6 flex items-center gap-4">

        <input
          type="text"
          placeholder="Ask DevSphere AI..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 bg-[#131f3a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#b9ff66]"
        />

        <button
          onClick={handleSend}
          className="bg-[#b9ff66] text-black font-semibold px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default AIChat;