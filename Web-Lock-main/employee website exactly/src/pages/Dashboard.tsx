import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Users, FileText, Clock, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const stats = [
    { icon: Clock, title: 'Hours Worked', value: '164h', change: '+2.5%' },
    { icon: Users, title: 'Team Members', value: '12', change: '+1' },
    { icon: FileText, title: 'Tasks Complete', value: '48', change: '+12%' },
    { icon: BarChart, title: 'Projects', value: '6', change: 'On Track' },
  ];

  const recentActivity = [
    { title: 'Project Alpha Update', time: '2 hours ago', description: 'New features implemented for the dashboard' },
    { title: 'Team Meeting', time: '4 hours ago', description: 'Weekly sync with the development team' },
    { title: 'Code Review', time: '6 hours ago', description: 'Reviewed PR #123 for the authentication module' },
    { title: 'Documentation Update', time: '8 hours ago', description: 'Updated API documentation' },
    { title: 'Bug Fix', time: '1 day ago', description: 'Fixed critical issue in production' },
  ];

  const upcomingDeadlines = [
    { id: 1, title: 'API Integration', dueDate: '2 days', status: 'pending', priority: 'High' },
    { id: 2, title: 'User Testing', dueDate: '3 days', status: 'pending', priority: 'Medium' },
    { id: 3, title: 'Security Audit', dueDate: '4 days', status: 'pending', priority: 'High' },
    { id: 4, title: 'Performance Review', dueDate: '5 days', status: 'pending', priority: 'Low' },
  ];

  const handleCompleteTask = (taskId: number) => {
    setCompletedTasks([...completedTasks, taskId]);
    setShowCompleteModal(true);
    setTimeout(() => {
      setShowCompleteModal(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 pt-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <AnimatePresence>
        {showCompleteModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-xl shadow-2xl z-50 flex items-center space-x-4"
          >
            <CheckCircle className="text-white w-8 h-8" />
            <p className="text-lg font-semibold text-white">Task Completed!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h1 
        className="text-3xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome back, Sai Charan!
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="text-indigo-600" size={24} />
              <span className={`text-sm ${stat.change.includes('+') ? 'text-emerald-500' : 'text-indigo-500'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Recent Activity</h2>
          <div className="space-y-6 max-h-[400px] overflow-y-auto">
            {recentActivity.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4 border-b border-gray-100 pb-4 last:border-0"
              >
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-800">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                  <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Upcoming Deadlines</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {upcomingDeadlines.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800">{task.title}</p>
                  <p className="text-sm text-gray-500">Due in {task.dueDate}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2
                    ${task.priority === 'High' ? 'bg-red-100 text-red-800' :
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'}`}>
                    {task.priority} Priority
                  </span>
                </div>
                {completedTasks.includes(task.id) ? (
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <CheckCircle size={20} />
                    <span>Completed</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleCompleteTask(task.id)}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg 
                             hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 
                             flex items-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <CheckCircle size={16} />
                    <span>Complete</span>
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}