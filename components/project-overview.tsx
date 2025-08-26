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

        {/* System Aim & Objectives */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">System Vision</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">System Aim & Objectives</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear vision and strategic goals driving our platform development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* System Aim */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass glass-hover rounded-2xl p-8 border border-primary/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">System Aim</h3>
                      <p className="text-sm text-muted-foreground">Our mission and vision</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-accent/50 rounded-full"></div>
                      <p className="text-muted-foreground leading-relaxed pl-6 text-base">
                        To develop an intelligent and user-friendly web platform that enables job seekers to practice for job interviews by generating customized AI-driven questions, providing real-time feedback, and tracking their performance to improve their interview readiness.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">Key Focus Areas:</h4>
                      <div className="space-y-3">
                        {[
                          "Intelligent AI-driven question generation tailored to specific job roles and industries",
                          "Real-time feedback system with comprehensive scoring and improvement suggestions",
                          "Personalized dashboard for tracking progress and identifying improvement areas"
                        ].map((focus, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mt-0.5 shadow-sm">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{focus}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Objectives */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass glass-hover rounded-2xl p-8 border border-secondary/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-secondary/10 to-transparent rounded-full -translate-y-14 -translate-x-14"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent rounded-full translate-y-10 translate-x-10"></div>
                
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">System Objectives</h3>
                      <p className="text-sm text-muted-foreground">Key goals we aim to achieve</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Design an AI-based engine that generates role-specific interview questions dynamically.",
                      "Give users immediate scoring and thorough feedback on their responses.",
                      "Give people access to a customized dashboard so they can track their progress.",
                      "Provide online access to the system at all times for flexible, self-paced practice.",
                      "Ensure the system supports multiple job roles across various industries."
                    ].map((objective, index) => (
                      <div key={index} className="group/item flex items-start space-x-3 p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform duration-300">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-secondary to-primary"></div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
