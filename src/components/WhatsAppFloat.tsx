"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false)

  const whatsappNumber = "2347010009558" // Nigerian WhatsApp number
  const defaultMessage = "Hello! I'm interested in your mobile auto repair services. Can you help me with a quote?"

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-300 ${isExpanded ? 'mb-4' : ''}`}>
          {isExpanded && (
            <div className="bg-white rounded-lg shadow-xl p-4 mb-3 max-w-xs animate-fade-in-up">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800">Need Help?</h4>
                              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
                title="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Chat with us on WhatsApp for instant quotes and emergency assistance!
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Start Chat
              </button>
            </div>
          )}
        </div>

        <button
          onClick={isExpanded ? () => setIsExpanded(false) : openWhatsApp}
          className={`bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 ${isExpanded ? 'rotate-45' : ''}`}
          aria-label="Open WhatsApp Chat"
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>

        {/* Pulse animation when not expanded */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
        )}
      </div>
    </>
  )
}
