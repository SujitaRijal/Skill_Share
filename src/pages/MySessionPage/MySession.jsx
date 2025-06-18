import React, { useState } from 'react';
// import { Tabs, Tab } from '@/components/ui/tab';
import { Button } from '@/components/ui/button';

const MySessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const sessions = {
    upcoming: [
      { skill: 'React.js', peer: 'Aashish Shrestha', time: 'June 18, 3:00 PM', status: 'Confirmed' },
      { skill: 'UI/UX Design', peer: 'Bina Adhikari', time: 'June 20, 6:00 PM', status: 'Pending' }
    ],
    completed: [
      { skill: 'Python Basics', peer: 'Sita Thapa', date: 'June 10', yourRating: 4, peerRating: 5, rated: false }
    ],
    requests: [
      { peer: 'Ram KC', offered: 'Graphic Design', wanted: 'JavaScript', status: 'Pending Acceptance', type: 'received' },
      { peer: 'Hari Sharma', offered: 'Web Dev', wanted: 'Photography', status: 'Pending', type: 'sent' }
    ]
  };

  const renderUpcoming = () => (
    <div className="space-y-4">
      {sessions.upcoming.map((s, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">{s.skill}</h4>
            <p className="text-gray-600">With: {s.peer}</p>
            <p className="text-sm text-gray-500">{s.time}</p>
            <p className="text-sm font-medium text-indigo-600">{s.status}</p>
          </div>
          <div className="space-x-2">
            <Button>Join Chat</Button>
            <Button variant="outline">Reschedule</Button>
            <Button variant="destructive">Cancel</Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompleted = () => (
    <div className="space-y-4">
      {sessions.completed.map((s, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">{s.skill}</h4>
            <p className="text-gray-600">With: {s.peer}</p>
            <p className="text-sm text-gray-500">Date: {s.date}</p>
            <p className="text-sm">Your Rating: {s.yourRating} | Peer Rating: {s.peerRating}</p>
          </div>
          <div className="space-x-2">
            <Button variant="outline">View Feedback</Button>
            {!s.rated && <Button>Rate Peer</Button>}
          </div>
        </div>
      ))}
    </div>
  );

  const renderRequests = () => (
    <div className="space-y-4">
      {sessions.requests.map((r, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">{r.peer}</h4>
            <p className="text-gray-600">Offered: {r.offered}</p>
            <p className="text-gray-600">Wants: {r.wanted}</p>
            <p className="text-sm font-medium text-indigo-600">{r.status}</p>
          </div>
          <div className="space-x-2">
            {r.type === 'received' ? (
              <>
                <Button>Accept</Button>
                <Button variant="destructive">Reject</Button>
              </>
            ) : (
              <Button variant="destructive">Cancel Request</Button>
            )}
            <Button variant="outline">View Profile</Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Sessions</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tab label="📅 Upcoming" value="upcoming">
          {renderUpcoming()}
        </Tab>
        <Tab label="✅ Completed" value="completed">
          {renderCompleted()}
        </Tab>
        <Tab label="📭 Requests" value="requests">
          {renderRequests()}
        </Tab>
      </Tabs>
    </div>
  );
};

export default MySessions;
