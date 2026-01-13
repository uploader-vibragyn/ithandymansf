import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';

type Message = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
};

const INITIAL_MESSAGE =
  "Hi. I’m your IT & AI Handyman assistant. What’s not working or slowing you down right now?";

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: INITIAL_MESSAGE,
      timestamp: new Date()
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const classifyService = (text: string) => {
    const lower = text.toLowerCase();

    if (
      lower.includes('slow') ||
      lower.includes('not working') ||
      lower.includes('error') ||
      lower.includes('crash')
    ) {
      return 'Broken Tech Fix';
    }

    if (
      lower.includes('ai') ||
      lower.includes('automation') ||
      lower.includes('chatgpt') ||
      lower.includes('workflow')
    ) {
      return 'AI Setup for Real Work';
    }

    if (
      lower.includes('new computer') ||
      lower.includes('setup') ||
      lower.includes('migration')
    ) {
      return 'New Computer & System Setup';
    }

    if (
      lower.includes('website') ||
      lower.includes('form') ||
      lower.includes('integration') ||
      lower.includes('instagram') ||
      lower.includes('meta') ||
      lower.includes('facebook') ||
      lower.includes('link in bio') ||
      lower.includes('linktree') ||
      lower.includes('online presence')
    ) {
      return 'Website & Online Tool Fixes';
}


    return null;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const detectedService = classifyService(inputValue);
    const serviceInfo = SERVICES.find(s => s.title === detectedService);

    let assistantReply =
      "Thanks. I’ll need a bit more detail. Is this something that needs to be fixed urgently, or are you planning ahead?";

    if (serviceInfo) {
      assistantReply = `This looks like **${serviceInfo.title}**.

${serviceInfo.description}

Typical rate: ${serviceInfo.startingAt}

You can book directly, or tell me a bit more so I can estimate time and cost.`;
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: assistantReply,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setInputValue('');
  };

  return (
    <div className="assistant-container">
      <div className="assistant-messages">
        {messages.map(m => (
          <div key={m.id} className={`message ${m.role}`}>
            {m.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="assistant-input">
        <input
          type="text"
          placeholder="Describe your issue…"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Assistant;
