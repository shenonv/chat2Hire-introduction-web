"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center neon-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-mono neon-text">Chat2Hire</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-muted-foreground hover:text-primary transition-colors">
              Overview
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">
              Team
            </a>
            <Button className="gradient-primary neon-glow hover:scale-105 transition-transform">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-border/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#overview" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Overview
            </a>
            <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Features
            </a>
            <a href="#technology" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Technology
            </a>
            <a href="#team" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Team
            </a>
            <div className="px-3 py-2">
              <Button className="w-full gradient-primary neon-glow">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
