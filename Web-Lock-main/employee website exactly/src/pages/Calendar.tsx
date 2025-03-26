import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, MapPin } from 'lucide-react';

export default function Calendar() {
  const events = [
    {
      title: 'Team Standup',
      time: '09:00 AM',
      duration: '30min',
      attendees: 8,
      location: 'Meeting Room A',
      type: 'daily'
    },
    {
      title: 'Project Review',
      time: '11:00 AM',
      duration: '1h',
      attendees: 12,
      location: 'Virtual',
      type: 'important'
    },
    {
      title: 'Client Meeting',
      time: '02:00 PM',
      duration: '1h 30min',
      attendees: 5,
      location: 'Conference Room',
      type: 'external'
    },
    {
      title: 'Sprint Planning',
      time: '04:00 PM',
      duration: '2h',
      attendees: 15,
      location: 'Main Hall',
      type: 'planning'
    }
  ];

  const upcomingDates = [
    { date: 'March 15', day: 'Monday', events: 4 },
    { date: 'March 16', day: 'Tuesday', events: 2 },
    { date: 'March 17', day: 'Wednesday', events: 5 },
    { date: 'March 18', day: 'Thursday', events: 3 },
    { date: 'March 19', day: 'Friday', events: 1 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 pt-20"
    >
      <div className="flex flex-col space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Calendar</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Add Event
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Today's Schedule</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg border"
                >
                  <div className={`p-3 rounded-lg 
                    ${event.type === 'daily' ? 'bg-blue-100' :
                      event.type === 'important' ? 'bg-red-100' :
                        event.type === 'external' ? 'bg-green-100' : 'bg-purple-100'}`}>
                    <CalendarIcon className={`w-6 h-6 
                      ${event.type === 'daily' ? 'text-blue-600' :
                        event.type === 'important' ? 'text-red-600' :
                          event.type === 'external' ? 'text-green-600' : 'text-purple-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{event.title}</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.time} ({event.duration})</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.attendees} attendees</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Upcoming Days</h2>
            <div className="space-y-4">
              {upcomingDates.map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <div>
                    <p className="font-medium">{date.date}</p>
                    <p className="text-sm text-gray-500">{date.day}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {date.events} events
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}