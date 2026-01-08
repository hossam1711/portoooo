"use client"

import { useState } from "react"
import { Menu, X } from "react-icons/fa"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-lg text-foreground">SaaS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
            Product
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
            Docs
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-foreground hover:text-accent transition-colors text-sm font-medium">Log in</button>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-6 py-4 space-y-3">
            <a href="#" className="block text-foreground hover:text-accent transition-colors text-sm font-medium">
              Product
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors text-sm font-medium">
              Docs
            </a>
            <button className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium text-sm">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
