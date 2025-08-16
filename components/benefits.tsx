import { Target, TrendingUp, Clock, DollarSign, Users, Shield } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Preparation",
      description: "Role-specific questions tailored to your career path and experience level",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Builds Confidence",
      description: "Structured feedback and practice sessions boost interview confidence",
      color: "text-secondary",
    },
    {
      icon: DollarSign,
      title: "Affordable Access",
      description: "Professional-level preparation at a fraction of traditional coaching costs",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Progress Tracking",
      description: "Monitor skill growth and improvement areas with detailed analytics",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Inclusive Design",
      description: "Accessible to job seekers across all industries and experience levels",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Stress-Free Practice",
      description: "Safe environment to make mistakes and learn without real-world consequences",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 neon-text">Benefits of Chat2Hire</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your interview preparation with AI-powered insights and personalized feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:animate-pulse-glow`}
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 glass rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-12 neon-text">Success Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Interview Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">92%</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Confidence Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Available Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
