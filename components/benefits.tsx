import { Target, TrendingUp, Clock, DollarSign, Users, Shield, CheckCircle, Star, TrendingUp as TrendingUpIcon, Headphones } from "lucide-react"

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

  const successMetrics = [
    {
      icon: CheckCircle,
      label: "Interview Success Rate",
      value: 85,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      description: "Users who secured jobs after using our platform"
    },
    {
      icon: Star,
      label: "User Satisfaction",
      value: 92,
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      description: "Average satisfaction score from user feedback"
    },
    {
      icon: TrendingUpIcon,
      label: "Confidence Increase",
      value: 78,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      description: "Average confidence improvement reported by users"
    },
    {
      icon: Headphones,
      label: "Available Support",
      value: 95,
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/20 to-purple-500/20",
      description: "Platform uptime and support availability"
    }
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

        {/* Success Metrics - Redesigned */}
        <div className="mt-20 relative">
          {/* Main container with glassmorphism effect */}
          <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background gradients and blur effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/10 to-blue-900/15 backdrop-blur-xl"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 p-[1px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
                  <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                    Success Metrics
                  </span>
                </h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Real results from users who transformed their interview preparation with Chat2Hire
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="group relative">
                    {/* Card background with minimal styling */}
                    <div className="relative rounded-2xl p-6 bg-transparent border border-white/5 hover:border-white/15 transition-all duration-300">
                      {/* Removed glow effect for cleaner look */}
                      
                      <div className="relative z-10">
                        <div className="text-center mb-6">
                          {/* Icon container with gradient background */}
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.bgGradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20`}>
                            <metric.icon className="w-8 h-8 text-white drop-shadow-sm" />
                          </div>
                          
                          {/* Percentage with enhanced gradient */}
                          <div className={`text-4xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-3 drop-shadow-sm`}>
                            {metric.value}%
                          </div>
                          
                          {/* Metric title */}
                          <div className="text-base font-semibold text-white mb-2 drop-shadow-sm">
                            {metric.label}
                          </div>
                          
                          {/* Description */}
                          <div className="text-sm text-gray-400 leading-relaxed mb-6">
                            {metric.description}
                          </div>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <div className="w-full h-4 bg-slate-700/30 rounded-full overflow-hidden border border-white/10">
                            <div 
                              className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full transition-all duration-1000 ease-out group-hover:scale-105 relative shadow-lg`}
                              style={{ width: `${metric.value}%` }}
                            >
                              {/* Progress bar shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                          
                          {/* Enhanced progress indicator */}
                          <div 
                            className={`absolute -top-1 w-3 h-6 bg-gradient-to-b ${metric.gradient} rounded-full transition-all duration-300 group-hover:scale-125 shadow-lg border border-white/20`}
                            style={{ left: `calc(${metric.value}% - 6px)` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Additional stats row */}
              <div className="pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative group">
                    <div className="relative rounded-xl p-8 bg-transparent border border-white/5 hover:border-white/15 transition-all duration-300">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                          5
                        </div>
                        <div className="text-sm text-gray-300 font-medium">Questions Per Session</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="relative rounded-xl p-8 bg-transparent border border-white/5 hover:border-white/15 transition-all duration-300">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-xl"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                          500+
                        </div>
                        <div className="text-sm text-gray-300 font-medium">Job Roles Supported</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="relative rounded-xl p-8 bg-transparent border border-white/5 hover:border-white/15 transition-all duration-300">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-xl"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                          24/7
                        </div>
                        <div className="text-sm text-gray-300 font-medium">Platform Availability</div>
                      </div>
                    </div>
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
