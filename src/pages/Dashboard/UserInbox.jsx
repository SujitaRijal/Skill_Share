import React, { useState } from "react";
import { MessageSquare, User, Send, ArrowLeft } from "lucide-react";

const sampleMessages = [
  {
    id: 1,
    sender: "Prakriti Sharma",
    subject: "Regarding Advanced React Hooks session",
    lastMessage: "Hi Sujita, looking forward to our session on Tuesday!",
    timestamp: "2025-06-24T10:30:00Z",
    read: false,
    messages: [
      {
        id: 101,
        sender: "Prakriti Sharma",
        text: "Hi Sujita, looking forward to our session on Tuesday!",
        timestamp: "2025-06-24T10:30:00Z",
      },
      {
        id: 102,
        sender: "You",
        text: "Me too, Prakriti! Just confirming the Google Meet link.",
        timestamp: "2025-06-24T10:35:00Z",
      },
      {
        id: 103,
        sender: "Prakriti Sharma",
        text: "Yes, it's the same one from the calendar invite.",
        timestamp: "2025-06-24T10:36:00Z",
      },
    ],
  },
  {
    id: 2,
    sender: "Prashant Dahal",
    subject: "Feedback on Python Data Analysis",
    lastMessage: "Thanks for the great session!",
    timestamp: "2025-06-20T15:00:00Z",
    read: true,
    messages: [
      {
        id: 201,
        sender: "Prashant Dahal",
        text: "Hi Sujita, just wanted to thank you for the Python Data Analysis session. It was very helpful!",
        timestamp: "2025-06-20T15:00:00Z",
      },
      {
        id: 202,
        sender: "You",
        text: "You're most welcome, Prashant! Glad it helped. Let me know if you have any more questions.",
        timestamp: "2025-06-20T15:05:00Z",
      },
    ],
  },
  {
    id: 3,
    sender: "Skill Share Admin",
    subject: "New Feature Alert!",
    lastMessage: 'Check out our new "Find Skills" feature.',
    timestamp: "2025-06-19T09:00:00Z",
    read: false,
    messages: [
      {
        id: 301,
        sender: "Skill Share Admin",
        text: 'Dear User, we\'ve just launched a new "Find Skills" feature to help you discover more learning opportunities!',
        timestamp: "2025-06-19T09:00:00Z",
      },
    ],
  },
];

const UserInbox = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessageText, setNewMessageText] = useState("");

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() === new Date().toLocaleDateString()
      ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : date.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  const handleSendMessage = () => {
    if (newMessageText.trim() === "" || !selectedConversation) return;

    const newMsg = {
      id: selectedConversation.messages.length + 1,
      sender: "You", // Assuming the current user is 'You'
      text: newMessageText,
      timestamp: new Date().toISOString(),
    };

    // This is a dummy update. In a real app, you'd send to API, then refetch or update state
    setSelectedConversation((prev) => ({
      ...prev,
      messages: [...prev.messages, newMsg],
      lastMessage: newMessageText, // Update last message in the list view
      timestamp: newMsg.timestamp,
    }));

    // Also update the main sampleMessages array to reflect the new last message
    // (This part is crucial for the list view to update correctly after sending)
    const updatedSampleMessages = sampleMessages.map((conv) =>
      conv.id === selectedConversation.id
        ? { ...conv, lastMessage: newMsg.text, timestamp: newMsg.timestamp }
        : conv
    );
    // You'd typically re-sort updatedSampleMessages by timestamp here if you wanted the newest at top
    // For this example, we'll just log it.
    console.log(
      "Updated sample messages (for demo purposes):",
      updatedSampleMessages
    );

    setNewMessageText(""); // Clear input
  };

  const handleSelectConversation = (conversation) => {
    setSelectedConversation({ ...conversation, read: true }); // Mark as read when opened
    // In a real app, send API call to mark as read
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Inbox</h2>

      <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row min-h-[600px]">
        {/* Conversation List Sidebar */}
        <div
          className={`w-full md:w-1/3 border-r border-gray-200 ${
            selectedConversation ? "hidden md:block" : "block"
          }`}
        >
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Conversations</h3>
          </div>
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(600px - 60px)" }}
          >
            {" "}
            {/* Adjust height */}
            {sampleMessages
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
              .map((conv) => (
                <div
                  key={conv.id}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedConversation?.id === conv.id
                      ? "bg-blue-50 border-l-4 border-blue-600"
                      : ""
                  } ${!conv.read ? "font-semibold" : ""}`}
                  onClick={() => handleSelectConversation(conv)}
                >
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <span
                      className={`${
                        !conv.read ? "text-blue-700" : "text-gray-800"
                      }`}
                    >
                      {conv.sender}
                    </span>
                    <span className="text-gray-500">
                      {formatTimestamp(conv.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-900 truncate">{conv.subject}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {conv.lastMessage}
                  </p>
                </div>
              ))}
            {sampleMessages.length === 0 && (
              <div className="py-6 text-sm text-center text-gray-500">
                No messages yet.
              </div>
            )}
          </div>
        </div>

        {/* Message View / Detail Pane */}
        <div
          className={`flex-1 flex flex-col ${
            selectedConversation ? "block" : "hidden md:flex"
          }`}
        >
          {selectedConversation ? (
            <>
              {/* Conversation Header */}
              <div className="flex items-center p-4 border-b border-gray-200">
                <button
                  onClick={() => setSelectedConversation(null)}
                  className="mr-3 text-gray-600 md:hidden hover:text-gray-800"
                >
                  <ArrowLeft className="w-5 h-5" />{" "}
                  {/* Requires importing ArrowLeft from lucide-react */}
                </button>
                <div className="flex items-center justify-center w-10 h-10 mr-3 font-bold text-gray-600 bg-gray-200 rounded-full">
                  {selectedConversation.sender[0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedConversation.sender}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedConversation.subject}
                  </p>
                </div>
              </div>

              {/* Message History */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {selectedConversation.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "You" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === "You"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "You"
                            ? "text-blue-200"
                            : "text-gray-500"
                        }`}
                      >
                        {formatTimestamp(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex items-center p-4 border-t border-gray-200">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 mr-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={newMessageText}
                  onChange={(e) => setNewMessageText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-1 text-lg text-gray-500">
              <MessageSquare className="w-16 h-16 mr-4 text-gray-300" /> Select
              a conversation
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInbox;
