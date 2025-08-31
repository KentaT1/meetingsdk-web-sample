import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-200 group">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-zoom-blue/10 rounded-xl flex items-center justify-center group-hover:bg-zoom-blue/20 transition-colors duration-200">
          <Icon className="w-6 h-6 text-zoom-blue" />
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-zoom-gray-dark mb-1">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard