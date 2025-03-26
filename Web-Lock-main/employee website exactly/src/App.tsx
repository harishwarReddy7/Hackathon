import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 ml-64 lg:ml-64">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/team" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 pt-20"
                >
                  <h1 className="text-3xl font-bold">Team</h1>
                  <p className="text-gray-600 mt-4">Team management coming soon...</p>
                </motion.div>
              } />
              <Route path="/documents" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 pt-20"
                >
                  <h1 className="text-3xl font-bold">Documents</h1>
                  <p className="text-gray-600 mt-4">Document management coming soon...</p>
                </motion.div>
              } />
              <Route path="/messages" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 pt-20"
                >
                  <h1 className="text-3xl font-bold">Messages</h1>
                  <p className="text-gray-600 mt-4">Messaging system coming soon...</p>
                </motion.div>
              } />
              <Route path="/settings" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 pt-20"
                >
                  <h1 className="text-3xl font-bold">Settings</h1>
                  <p className="text-gray-600 mt-4">Settings configuration coming soon...</p>
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;