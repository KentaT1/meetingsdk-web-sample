import React, { useState } from 'react'
import { Video, Lock, User, Mail, Globe } from 'lucide-react'

interface MeetingFormProps {
  isJoining: boolean
  setIsJoining: (joining: boolean) => void
}

const MeetingForm: React.FC<MeetingFormProps> = ({ isJoining, setIsJoining }) => {
  const [formData, setFormData] = useState({
    meetingNumber: '',
    password: '',
    displayName: '',
    email: '',
    role: 'attendee'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.meetingNumber || !formData.displayName) {
      alert('Please fill in the meeting number and your name')
      return
    }

    setIsJoining(true)
    
    try {
      // Simulate joining process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real implementation, you would:
      // 1. Get a signature from your auth endpoint
      // 2. Initialize the Zoom Meeting SDK
      // 3. Join the meeting
      
      alert(`Joining meeting ${formData.meetingNumber} as ${formData.displayName}`)
      
    } catch (error) {
      console.error('Failed to join meeting:', error)
      alert('Failed to join meeting. Please try again.')
    } finally {
      setIsJoining(false)
    }
  }

  const clearForm = () => {
    setFormData({
      meetingNumber: '',
      password: '',
      displayName: '',
      email: '',
      role: 'attendee'
    })
  }

  return (
    <div className="glass-effect rounded-2xl p-8 shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Meeting Number */}
        <div className="space-y-2">
          <label htmlFor="meetingNumber" className="flex items-center text-sm font-medium text-gray-700">
            <Video className="w-4 h-4 mr-2 text-zoom-blue" />
            Meeting Number
          </label>
          <input
            type="text"
            id="meetingNumber"
            name="meetingNumber"
            value={formData.meetingNumber}
            onChange={handleInputChange}
            placeholder="Enter meeting number"
            className="input-field"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="flex items-center text-sm font-medium text-gray-700">
            <Lock className="w-4 h-4 mr-2 text-zoom-blue" />
            Meeting Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter meeting password (optional)"
            className="input-field"
          />
        </div>

        {/* Display Name */}
        <div className="space-y-2">
          <label htmlFor="displayName" className="flex items-center text-sm font-medium text-gray-700">
            <User className="w-4 h-4 mr-2 text-zoom-blue" />
            Your Name
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleInputChange}
            placeholder="Enter your display name"
            className="input-field"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4 mr-2 text-zoom-blue" />
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="input-field"
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label htmlFor="role" className="flex items-center text-sm font-medium text-gray-700">
            <Globe className="w-4 h-4 mr-2 text-zoom-blue" />
            Join as
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="attendee">Attendee</option>
            <option value="host">Host</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            disabled={isJoining}
            className="btn-primary flex-1 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isJoining ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Joining...</span>
              </>
            ) : (
              <>
                <Video className="w-5 h-5" />
                <span>Join Meeting</span>
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={clearForm}
            className="btn-secondary flex-1"
            disabled={isJoining}
          >
            Clear Form
          </button>
        </div>
      </form>

      {/* Help Text */}
      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-800">
          <strong>Need help?</strong> You can paste a Zoom meeting invite link in the meeting number field, 
          and we'll automatically extract the meeting ID and password for you.
        </p>
      </div>
    </div>
  )
}

export default MeetingForm