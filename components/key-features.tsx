import { Brain, MessageSquare, BarChart3, Clock, Shield, Smartphone } from "lucide-react"

export function KeyFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI-Generated Questions",
      description: "Dynamic, role-specific interview questions powered by DeepSeek R1 AI model",
      color: "text-primary",
    },
    {
      icon: MessageSquare,
      title: "Interactive Simulation",
      description: "Real-time interview environment with natural conversation flow",
      color: "text-secondary",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive scoring with detailed feedback and improvement suggestions",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "24/7 Accessibility",
      description: "Practice anytime, anywhere with instant access to interview preparation",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security measures",
      color: "text-secondary",
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Seamless experience across desktop, tablet, and mobile devices",
      color: "text-accent",
    },
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 neon-text">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI technology meets intuitive design for the ultimate interview preparation experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:animate-pulse-glow`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Flow Diagram */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 neon-text">How It Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="glass glass-hover rounded-xl p-6 text-center max-w-xs">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Select Job Role</h4>
              <p className="text-sm text-muted-foreground">
                Choose from 500+ predefined roles or create custom positions
              </p>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>

            <div className="glass glass-hover rounded-xl p-6 text-center max-w-xs">
              <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">AI Generates Questions</h4>
              <p className="text-sm text-muted-foreground">Receive 5 tailored questions based on your selected role</p>
            </div>

            <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>

            <div className="glass glass-hover rounded-xl p-6 text-center max-w-xs">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Get Instant Feedback</h4>
              <p className="text-sm text-muted-foreground">Receive detailed analysis and improvement recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
