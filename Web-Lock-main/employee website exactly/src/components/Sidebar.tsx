import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  Menu,
  X,
  Bell,
  ChevronDown
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [notifications] = useState(3);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const menuItems = [
    { icon: Home, text: 'Dashboard', path: '/' },
    { icon: Calendar, text: 'Calendar', path: '/calendar' },
    { icon: Users, text: 'Team', path: '/team' },
    { icon: FileText, text: 'Documents', path: '/documents' },
    { icon: MessageSquare, text: 'Messages', path: '/messages' },
    { icon: Settings, text: 'Settings', path: '/settings' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg z-30 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-md text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 hover:bg-white/10 rounded-lg p-2 transition-colors"
            >
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white/50"
              />
              <div className="text-left hidden md:block">
                <p className="text-white font-semibold">Sai Charan</p>
                <p className="text-white/70 text-sm">Software Engineer</p>
              </div>
              <ChevronDown className="w-4 h-4 text-white/70" />
            </button>
            {showProfileMenu && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-white" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gradient-to-b from-indigo-700 to-purple-700 shadow-xl z-40 
        ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 border-b border-white/10">
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              WorkSpace
            </motion.h1>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-4 p-3 rounded-lg transition-all duration-200
                    ${isActive ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`
                  }
                >
                  <item.icon size={24} />
                  <span className={`${!isOpen && 'hidden'}`}>{item.text}</span>
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}