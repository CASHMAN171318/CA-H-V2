'use client';
import { useChat } from 'ai/react';

export default function Chat() {
  // useChat automatically handles the typing state and message history
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch font-sans">
      <h1 className="text-3xl font-black text-emerald-500 mb-8">EMERALD AI</h1>

      <div className="space-y-4 mb-20">
        {messages.map(m => (
          <div key={m.id} className={`p-4 rounded-xl ${m.role === 'user' ? 'bg-emerald-100 ml-8' : 'bg-purple-100 mr-8'}`}>
            <p className="text-sm font-bold uppercase mb-1">{m.role === 'user' ? 'You' : 'AI'}</p>
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md p-4 mb-8 bg-white border-2 border-emerald-500 rounded-2xl shadow-2xl">
        <input
          className="w-full outline-none text-lg"
          value={input}
          placeholder="Ask your AI something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
