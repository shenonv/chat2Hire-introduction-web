import { Database, Cpu, Globe, Settings, Layers, Code, Brain, Zap, Shield, Users, GitBranch, TestTube, RefreshCw, Sparkles, ArrowRight, ArrowDown, ChevronRight, Activity, Server, Cloud, CheckCircle, Clock, Target, TrendingUp, Calendar } from "lucide-react"
import Image from "next/image"

export function SystemDesign() {
  const technologies = [
    {
      name: "Next.js",
      description: "Modern React Framework",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      logo: "./nextjs-logo.svg",
      features: ["React 18", "TypeScript", "Tailwind CSS"],
      stats: { performance: 95, reliability: 98, community: 99 }
    },
    {
      name: "NestJS",
      description: "Scalable Backend Framework",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      logo: "./nestjs-logo.svg",
      features: ["Node.js", "TypeScript", "REST API"],
      stats: { performance: 92, reliability: 96, community: 94 }
    },
    {
      name: "PostgreSQL",
      description: "Advanced Database",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      logo: "postgresql-logo.svg",
      features: ["ACID", "JSON Support", "Scalable"],
      stats: { performance: 98, reliability: 99, community: 97 }
    },
    {
      name: "DeepSeek R1",
      description: "AI-Powered Intelligence",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      logo: "./deepseek-logo.svg",
      features: ["Large Language Model", "Real-time", "Accurate"],
      stats: { performance: 94, reliability: 95, community: 93 }
    },
  ]

  const systemArchitecture = [
    {
      title: "Frontend Layer",
      subtitle: "User Experience & Interface",
      description: "Modern React application with real-time updates and responsive design",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      icon: Globe,
      features: [
        { name: "Responsive UI", description: "Mobile-first design", icon: Users, status: "active" },
        { name: "Real-time Updates", description: "Live data synchronization", icon: RefreshCw, status: "active" },
        { name: "Performance Optimized", description: "Fast loading times", icon: Zap, status: "active" }
      ],
      metrics: { users: "10K+", uptime: "99.9%", performance: "95%" }
    },
    {
      title: "Backend Layer",
      subtitle: "API & Business Logic",
      description: "Robust server architecture with authentication and AI integration",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/5 to-purple-500/5",
      icon: Server,
      features: [
        { name: "Secure Authentication", description: "JWT-based security", icon: Shield, status: "active" },
        { name: "AI Integration", description: "Seamless AI processing", icon: Brain, status: "active" },
        { name: "RESTful APIs", description: "Clean API design", icon: Code, status: "active" }
      ],
      metrics: { requests: "1M+", response: "<200ms", security: "A+" }
    },
    {
      title: "Data & AI Layer",
      subtitle: "Intelligence & Storage",
      description: "Advanced database with AI-powered question generation and evaluation",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/5 to-emerald-500/5",
      icon: Cloud,
      features: [
        { name: "Smart Question Generation", description: "AI-powered content", icon: Brain, status: "active" },
        { name: "Intelligent Evaluation", description: "Automated scoring", icon: TestTube, status: "active" },
        { name: "Data Analytics", description: "Performance insights", icon: Activity, status: "active" }
      ],
      metrics: { accuracy: "96%", speed: "<1s", storage: "1TB+" }
    }
  ]

  const developmentRoadmap = [
    {
      sprint: "Sprint 1 - Planning & Setup",
      duration: "June 1 - June 16, 2025",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      icon: Target,
      progress: 100,
      tasks: [
        { name: "Conduct requirement gathering & feasibility", duration: "3 days", progress: 100, dates: "6/1/25 - 6/4/25" },
        { name: "Define user stories / Responsibilities", duration: "3 days", progress: 100, dates: "6/4/25 - 6/7/25" },
        { name: "Design initial system architecture & S", duration: "4 days", progress: 100, dates: "6/5/25 - 6/10/25" },
        { name: "Set up Git repository, tools & completion of Project Proposal", duration: "5 days", progress: 100, dates: "6/10/25 - 6/16/25" }
      ]
    },
    {
      sprint: "Sprint 2 - Core Infrastructure Development",
      duration: "June 16 - June 26, 2025",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      icon: Code,
      progress: 100,
      tasks: [
        { name: "Develop frontend UI components (Login)", duration: "5 days", progress: 100, dates: "6/16/25 - 6/21/25" },
        { name: "Develop backend APIs (User Registration, Roles)", duration: "4 days", progress: 100, dates: "6/17/25 - 6/20/25" },
        { name: "Database schema setup (User, Roles)", duration: "4 days", progress: 100, dates: "6/20/25 - 6/23/25" },
        { name: "Unit test basic features", duration: "3 days", progress: 100, dates: "6/23/25 - 6/26/25" }
      ]
    },
    {
      sprint: "Sprint 3 - AI Integration & Question Flow",
      duration: "June 27 - July 19, 2025",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      icon: Brain,
      progress: 100,
      tasks: [
        { name: "Integrate Deepbook R1 for question generation", duration: "10 days", progress: 100, dates: "6/27/25 - 7/10/25" },
        { name: "Create backend service for generating questions", duration: "3 days", progress: 100, dates: "7/5/25 - 7/8/25" },
        { name: "Build frontend 'Interview Page' to display questions", duration: "2 days", progress: 100, dates: "7/10/25 - 7/12/25" },
        { name: "Implement answer submission & backend API for storing responses", duration: "3 days", progress: 100, dates: "7/12/25 - 7/15/25" },
        { name: "Begin integration testing", duration: "3 days", progress: 100, dates: "7/16/25 - 7/19/25" }
      ]
    },
    {
      sprint: "Sprint 4 - Feedback & Performance Tracking",
      duration: "July 14 - July 27, 2025",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      icon: TestTube,
      progress: 100,
      tasks: [
        { name: "Add feedback module & scoring logic", duration: "3 days", progress: 100, dates: "7/14/25 - 7/17/25" },
        { name: "Polish UI (feedback, dashboard)", duration: "2 days", progress: 100, dates: "7/17/25 - 7/19/25" },
        { name: "Full system integration & functional testing", duration: "3 days", progress: 100, dates: "7/20/25 - 7/23/25" },
        { name: "Bug fixing and iteration", duration: "3 days", progress: 100, dates: "7/24/25 - 7/27/25" }
      ]
    },
    {
      sprint: "Sprint 5 - Finalization",
      duration: "July 27 - August 8, 2025",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      icon: CheckCircle,
      progress: 100,
      tasks: [
        { name: "Final user acceptance testing (UAT)", duration: "3 days", progress: 100, dates: "7/27/25 - 7/30/25" },
        { name: "Final documentation", duration: "4 days", progress: 100, dates: "7/30/25 - 8/3/25" },
        { name: "Conduct retrospective meeting to review project process", duration: "3 days", progress: 100, dates: "8/3/25 - 8/6/25" },
        { name: "Create and rehearse final project presentation", duration: "2 days", progress: 100, dates: "8/6/25 - 8/8/25" }
      ]
    }
  ]

  const successMetrics = [
    { name: "Interview Success Rate", value: 94, unit: "%", icon: TrendingUp, color: "from-green-400 to-emerald-500" },
    { name: "User Satisfaction", value: 96, unit: "%", icon: Users, color: "from-blue-400 to-cyan-500" },
    { name: "System Performance", value: 98, unit: "%", icon: Zap, color: "from-purple-400 to-pink-500" },
    { name: "Response Time", value: 150, unit: "ms", icon: Clock, color: "from-orange-400 to-red-500" }
  ]

  const developmentProcess = [
    {
      name: "Planning",
      description: "Requirements gathering and system design",
      duration: "2 weeks",
      gradient: "from-blue-500 to-cyan-500",
      icon: Target
    },
    {
      name: "Development",
      description: "Agile sprints with continuous integration",
      duration: "8 weeks",
      gradient: "from-emerald-500 to-teal-500",
      icon: Code
    },
    {
      name: "Testing",
      description: "Comprehensive testing and quality assurance",
      duration: "2 weeks",
      gradient: "from-orange-500 to-red-500",
      icon: TestTube
    },
    {
      name: "Deployment",
      description: "Production deployment and monitoring",
      duration: "1 week",
      gradient: "from-purple-500 to-pink-500",
      icon: Zap
    }
  ]

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span>Modern Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            System Architecture
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Built with cutting-edge technologies following modern development practices for scalability, performance, and maintainability
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Stack
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Carefully selected technologies for optimal performance and developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Logo */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/20">
                    <div className="relative w-12 h-12">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {tech.name}
                  </h4>
                  <p className="text-gray-400 mb-6 text-sm">{tech.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    {Object.entries(tech.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${tech.gradient} rounded-full transition-all duration-1000`}
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-300 font-medium">{value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              System Architecture
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Three-layer architecture designed for scalability, security, and performance
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative max-w-6xl mx-auto">
              <div className="flex items-stretch justify-between space-x-8">
                {systemArchitecture.map((layer, index) => (
                  <div key={index} className="flex-1 group">
                    <div className="relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl overflow-hidden h-full flex flex-col">
                        {/* Header */}
                        <div className="p-8 border-b border-white/10">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg border border-white/20">
                              <layer.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                {layer.title}
                              </h4>
                              <p className="text-sm text-gray-400">{layer.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">{layer.description}</p>
                        </div>
                        
                        {/* Features */}
                        <div className="p-8 flex-1 flex flex-col">
                          <div className="space-y-4 mb-6 flex-1">
                            {layer.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center">
                                  <feature.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold text-white/90 text-sm">{feature.name}</div>
                                  <div className="text-gray-400 text-xs">{feature.description}</div>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                  <span className="text-green-400 text-xs font-medium">{feature.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                            {Object.entries(layer.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-white">{value}</div>
                                <div className="text-xs text-gray-400 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connection Arrow */}
                    {index < systemArchitecture.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                          <ArrowRight className="w-6 h-6 text-blue-400 animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="space-y-8">
              {systemArchitecture.map((layer, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="p-6 border-b border-white/10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center">
                          <layer.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {layer.title}
                          </h4>
                          <p className="text-sm text-gray-400">{layer.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{layer.description}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="p-6">
                      <div className="space-y-3 mb-4">
                        {layer.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center">
                              <feature.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white/90 text-sm">{feature.name}</div>
                              <div className="text-gray-400 text-xs">{feature.description}</div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-green-400 text-xs">{feature.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                        {Object.entries(layer.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-base font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  {index < systemArchitecture.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"></div>
                        <ArrowDown className="w-5 h-5 text-blue-400 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Development Process */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Development Process
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Agile methodology ensuring quality, adaptability, and continuous improvement throughout the development lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 border border-white/10 hover:border-white/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${process.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${process.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <process.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white/90 mb-2">{process.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{process.description}</p>
                  <div className="inline-flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{process.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Continuous</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <span className="text-sm">Iterative</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <span className="text-sm">Collaborative</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm">Adaptive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Roadmap */}
        <div className="mt-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <Calendar className="w-5 h-5" />
                <span>Project Timeline</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Development Roadmap
              </h3>
              <div className="flex items-center justify-center space-x-4 text-lg text-gray-300 mb-6">
                <span className="font-semibold">June 1, 2025</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                <span className="font-semibold">August 15, 2025</span>
              </div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive sprint-based development plan with detailed task breakdown and real-time progress tracking
              </p>
            </div>

            <div className="space-y-8">
              {developmentRoadmap.map((sprint, sprintIndex) => (
                <div key={sprintIndex} className="group relative overflow-hidden">
                  {/* Sprint Card */}
                  <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] shadow-xl">
                    {/* Sprint Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${sprint.bgGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <sprint.icon className="w-8 h-8 text-white" />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br ${sprint.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">{sprint.sprint}</h4>
                          <p className="text-lg text-gray-300">{sprint.duration}</p>
                        </div>
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {sprint.progress === 100 ? (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center shadow-lg">
                              <Clock className="w-5 h-5 text-white" />
                            </div>
                          )}
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${sprint.progress === 100 ? 'text-green-400' : 'text-gray-400'}`}>
                              {sprint.progress}%
                            </div>
                            <div className="text-sm text-gray-400">Complete</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tasks Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {sprint.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="group/task relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h5 className="font-semibold text-white mb-2 leading-tight">{task.name}</h5>
                              <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <span className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{task.duration}</span>
                                </span>
                                <span className="text-gray-500">•</span>
                                <span>{task.dates}</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              {task.progress === 100 ? (
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-md">
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Enhanced Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-400">Progress</span>
                              <span className="text-xs font-medium text-gray-300">{task.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                              <div 
                                className={`h-3 rounded-full bg-gradient-to-r ${sprint.gradient} transition-all duration-700 ease-out shadow-lg`}
                                style={{ width: `${task.progress}%` }}
                              >
                                <div className="h-full w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Project Summary */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-white/30 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">Project Overview</h4>
                <p className="text-gray-300">Complete development timeline summary</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
                  <div className="text-gray-300 font-medium">Sprints</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">75</div>
                  <div className="text-gray-300 font-medium">Days Total</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">20</div>
                  <div className="text-gray-300 font-medium">Tasks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
