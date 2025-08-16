import { AlertTriangle, CheckCircle, Users, Clock, DollarSign, TrendingUp, Sparkles, Target, Zap, Globe, Brain, Shield } from "lucide-react"

export function ProjectOverview() {
  return (
    <section id="overview" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Innovation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 neon-text">Project Overview</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing interview preparation through intelligent AI-driven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Current Challenges */}
          <div className="space-y-6">
            <div className="glass glass-hover rounded-2xl p-8 border border-destructive/20">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Current Challenges</h3>
                  <p className="text-sm text-muted-foreground">The problems we're solving</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Lack of Personalization",
                    description: "Generic materials don't fit specific job roles or experience levels"
                  },
                  {
                    icon: DollarSign,
                    title: "Expensive Coaching",
                    description: "Professional coaching is costly and not accessible to everyone"
                  },
                  {
                    icon: Clock,
                    title: "No Real-Time Feedback",
                    description: "Traditional methods lack structured, immediate evaluation"
                  },
                  {
                    icon: TrendingUp,
                    title: "Outdated Methods",
                    description: "Static question banks and passive learning approaches"
                  }
                ].map((challenge, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-destructive/5 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <challenge.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-destructive mb-1">{challenge.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our AI Solution */}
          <div className="space-y-6">
            <div className="glass glass-hover rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Our AI Solution</h3>
                  <p className="text-sm text-muted-foreground">The future of interview prep</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Brain,
                    title: "Dynamic Question Generation",
                    description: "AI creates role-specific questions tailored to your career path",
                    color: "primary"
                  },
                  {
                    icon: Zap,
                    title: "Interactive Simulation",
                    description: "Realistic interview environment with immediate response evaluation",
                    color: "secondary"
                  },
                  {
                    icon: Shield,
                    title: "Intelligent Feedback",
                    description: "Real-time scoring with personalized improvement recommendations",
                    color: "accent"
                  },
                  {
                    icon: Globe,
                    title: "24/7 Accessibility",
                    description: "Practice anytime, anywhere with affordable, scalable access",
                    color: "primary"
                  }
                ].map((solution, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-${solution.color}/10 flex items-center justify-center group-hover:bg-${solution.color}/20 transition-colors`}>
                      <solution.icon className={`w-5 h-5 text-${solution.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-${solution.color} mb-1`}>{solution.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Impact & Results</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform has already made a significant impact on interview preparation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                value: "500+",
                label: "Job Roles Supported",
                color: "primary"
              },
              {
                icon: Clock,
                value: "24/7",
                label: "Available Access",
                color: "secondary"
              },
              {
                icon: DollarSign,
                value: "Free",
                label: "Core Features",
                color: "accent"
              },
              {
                icon: TrendingUp,
                value: "85%",
                label: "Success Rate",
                color: "primary"
              }
            ].map((metric, index) => (
              <div key={index} className="glass glass-hover rounded-xl p-6 text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${metric.color}/10 rounded-2xl mb-4 group-hover:bg-${metric.color}/20 transition-colors`}>
                  <metric.icon className={`w-8 h-8 text-${metric.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
