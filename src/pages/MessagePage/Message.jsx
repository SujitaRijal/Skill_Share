import React, { useState } from 'react';
import { FaArrowLeft, FaRegStar } from 'react-icons/fa';

const mockConversations = [
  {
    id: 1,
    name: 'Bishnu Thapa',
    avatar: 'https://i.pravatar.cc/150?img=32',
    lastMessage: 'Thanks for sharing the resources!',
    time: '2h ago',
    unread: true,
    messages: [
      { fromSelf: false, text: 'Hey, do you want to learn Django?', timestamp: '10:45 AM' },
      { fromSelf: true, text: 'Sure! I’m interested.', timestamp: '10:47 AM' },
      { fromSelf: false, text: 'Cool. I’ll send you some resources.', timestamp: '10:48 AM' },
    ]
  },
  {
    id: 2,
    name: 'Sita Dahal',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'Looking forward to learning React!',
    time: '1d ago',
    unread: false,
    messages: []
  }
];

function Message() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    const updatedChat = { ...selectedChat };
    updatedChat.messages.push({ fromSelf: true, text: newMessage, timestamp: 'Now' });
    setSelectedChat(updatedChat);
    setNewMessage('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
      <div className={`bg-white border-r md:col-span-1 ${selectedChat ? 'hidden md:block' : 'block'}`}>
        <h2 className="text-2xl font-bold p-4 border-b">My Messages</h2>
        {mockConversations.map((conv) => (
          <div
            key={conv.id}
            className={`flex items-center gap-4 p-4 border-b cursor-pointer hover:bg-gray-100 ${conv.unread ? 'font-bold' : ''}`}
            onClick={() => setSelectedChat(conv)}
          >
            <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <p>{conv.name}</p>
              <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
            </div>
            <span className="text-sm text-gray-400">{conv.time}</span>
          </div>
        ))}
      </div>

      {selectedChat && (
        <div className="md:col-span-2 flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <button onClick={() => setSelectedChat(null)} className="md:hidden text-xl">
              <FaArrowLeft />
            </button>
            <div className="flex items-center gap-4">
              <img src={selectedChat.avatar} alt={selectedChat.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">{selectedChat.name}</p>
                <a href="#" className="text-xs text-indigo-500 hover:underline">View Profile</a>
              </div>
            </div>
            <button className="text-yellow-500 hover:text-yellow-600">
              <FaRegStar className="inline mr-1" /> Leave Rating
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {selectedChat.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-xs p-3 rounded-xl ${msg.fromSelf ? 'bg-indigo-600 text-white ml-auto' : 'bg-white text-gray-800'}`}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-gray-400 block mt-1">{msg.timestamp}</span>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
