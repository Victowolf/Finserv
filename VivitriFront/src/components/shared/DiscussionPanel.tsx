import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ChatMessage } from '@/types';
import { mockChatMessages } from '@/data/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DiscussionPanelProps {
  userRole?: 'company' | 'bank';
}

const DiscussionPanel: React.FC<DiscussionPanelProps> = ({ userRole = 'company' }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: ChatMessage = {
      id: String(Date.now()),
      sender: userRole,
      senderName: userRole === 'company' ? 'You (Company)' : 'You (Bank Officer)',
      message: input,
      timestamp: new Date().toLocaleString(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full border rounded-lg bg-card">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <MessageSquare className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold font-display">Discussion</h3>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn('flex flex-col max-w-[80%]', msg.sender === userRole ? 'ml-auto items-end' : 'items-start')}
            >
              <p className="text-xs text-muted-foreground mb-1">{msg.senderName}</p>
              <div
                className={cn(
                  'rounded-lg px-3 py-2 text-sm',
                  msg.sender === userRole
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                )}
              >
                {msg.message}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2 border-t p-3">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button size="icon" onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DiscussionPanel;
