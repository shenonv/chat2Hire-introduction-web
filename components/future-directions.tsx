import { Globe, Video, Gamepad2, Smartphone, Link, Zap } from "lucide-react"

export function FutureDirections() {
  const features = [
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Expand to support interviews in multiple languages for global accessibility",
      color: "text-primary",
    },
    {
      icon: Video,
      title: "Video/Audio Interviews",
      description: "Live mock interviews with AI-powered behavioral analysis and feedback",
      color: "text-secondary",
    },
    {
      icon: Gamepad2,
      title: "Gamification",
      description: "Points, badges, and leaderboards to increase engagement and motivation",
      color: "text-accent",
    },
    {
      icon: Link,
      title: "Job Portal Integration",
      description: "Direct connections with LinkedIn, Indeed, and other job platforms",
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Native iOS and Android applications for on-the-go practice",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Advanced AI Models",
      description: "Enhanced AI capabilities for deeper context understanding and personalization",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 neon-text">Future Directions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exciting roadmap features to revolutionize interview preparation even further
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-accent text-xs px-2 py-1 rounded-full text-white font-semibold">
                Coming Soon
              </div>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:animate-pulse-glow`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Roadmap Timeline */}
        <div className="mt-20 glass rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-12 neon-text">Development Roadmap</h3>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-primary rounded-full neon-glow"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Phase 1: Core Platform</h4>
                  <span className="text-sm text-primary font-semibold">Completed</span>
                </div>
                <p className="text-sm text-muted-foreground">Basic AI question generation and feedback system</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-glow"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Phase 2: Enhanced Features</h4>
                  <span className="text-sm text-secondary font-semibold">Q2 2025</span>
                </div>
                <p className="text-sm text-muted-foreground">Multi-language support and mobile applications</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-accent rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Phase 3: Advanced AI</h4>
                  <span className="text-sm text-accent font-semibold">Q4 2025</span>
                </div>
                <p className="text-sm text-muted-foreground">Video interviews and behavioral analysis</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Phase 4: Ecosystem Integration</h4>
                  <span className="text-sm text-primary font-semibold">2026</span>
                </div>
                <p className="text-sm text-muted-foreground">Job portal integration and gamification features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
