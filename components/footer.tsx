import { Zap, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center neon-glow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-mono neon-text">Chat2Hire</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered interview preparation platform revolutionizing how job seekers prepare for their dream careers.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 glass glass-hover rounded-full flex items-center justify-center cursor-pointer">
                <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </div>
              <div className="w-8 h-8 glass glass-hover rounded-full flex items-center justify-center cursor-pointer">
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </div>
              <div className="w-8 h-8 glass glass-hover rounded-full flex items-center justify-center cursor-pointer">
                <Mail className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#team" className="text-muted-foreground hover:text-accent transition-colors">
                  About Team
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Chat2Hire. Built by Group 04 - Cardiff Metropolitan University.
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-muted-foreground">Powered by</span>
              <div className="flex items-center space-x-2">
                <span className="text-primary font-semibold">Next.js</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-secondary font-semibold">NestJS</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-accent font-semibold">DeepSeek R1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      </div>
    </footer>
  )
}
