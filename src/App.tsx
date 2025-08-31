import React, { useState } from 'react'
import { Video, Users, Shield, Globe } from 'lucide-react'
import MeetingForm from './components/MeetingForm'
import FeatureCard from './components/FeatureCard'

function App() {
  const [isJoining, setIsJoining] = useState(false)

  const features = [
    {
      icon: Video,
      title: "HD Video & Audio",
      description: "Crystal clear video calls with advanced audio processing"
    },
    {
      icon: Users,
      title: "Up to 1000 Participants",
      description: "Host large meetings with enterprise-grade reliability"
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Your meetings are protected with industry-leading security"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Join from anywhere in the world with optimized performance"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-zoom-blue rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-zoom-gray-dark">Zoom Meeting Web</h1>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
              <span>Secure</span>
              <span>•</span>
              <span>Reliable</span>
              <span>•</span>
              <span>Easy to Use</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Meeting Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-zoom-gray-dark mb-4">
                Join Your Meeting
              </h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                Enter your meeting details below to join instantly from your browser. 
                No downloads required.
              </p>
            </div>
            
            <MeetingForm isJoining={isJoining} setIsJoining={setIsJoining} />
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-zoom-gray-dark mb-6">
                Why Choose Zoom Web?
              </h3>
            </div>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 Zoom Meeting Web. Built with React and Tailwind CSS.</p>
            <p className="mt-2">
              Powered by{' '}
              <a 
                href="https://developers.zoom.us/docs/meeting-sdk/web/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zoom-blue hover:text-zoom-blue-dark transition-colors"
              >
                Zoom Meeting SDK
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App