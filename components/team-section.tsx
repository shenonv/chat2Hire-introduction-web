import { User, Github, Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "M.D Shenon Vidusha",
      role: "Database & Software Engineer",
      id: "CL/HDCSE/CMU/121/04",
      responsibilities: "Backend development, AI integration, database design",
      avatar: "./professional-developer-avatar.jpg",
    },
    {
      name: "Sawanee Anulya Wedamestrige",
      role: "Project Manager",
      id: "CL/HDCSE/CMU/121/52",
      responsibilities: "Project coordination, planning, risk management",
      avatar: "./professional-manager-avatar.jpg",
    },
    {
      name: "Madara Priyankara",
      role: "System Analyst",
      id: "CL/HDCSE/CMU/121/79",
      responsibilities: "Requirements analysis, system workflows, documentation",
      avatar: "./professional-analyst-avatar.jpg",
    },
    {
      name: "Galle Arachchige Sanuki Lithanga Perera",
      role: "System Designer",
      id: "CL/HDCSE/CMU/121/36",
      responsibilities: "UI/UX design, system architecture, interface mockups",
      avatar: "./professional-designer-avatar.jpg",
    },
    {
      name: "Aldeen Sathyanathan",
      role: "Quality Assurance Engineer",
      id: "CL/HDCSE/CMU/121/67",
      responsibilities: "Testing strategies, quality control, bug tracking",
      avatar: "./qa-engineer-avatar.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 neon-text">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Talented developers and designers from Cardiff Metropolitan University bringing Chat2Hire to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:animate-pulse-glow">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center neon-glow">
                  <User className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold mb-2">{member.name}</h3>
              <div className="text-sm text-primary font-semibold mb-2">{member.role}</div>
              <div className="text-xs text-muted-foreground mb-4 font-mono">{member.id}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.responsibilities}</p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
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
          ))}
        </div>

        {/* University Info */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-blue-300 font-medium text-sm">Academic Collaboration</span>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Academic Partnership
              </h3>
              <p className="text-xl text-gray-300 font-light">
                HND in Computing & Software Engineering
              </p>
            </div>

            {/* Partnership Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* University Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">University</h4>
                  <p className="text-white font-medium leading-relaxed">Cardiff Metropolitan University</p>
                </div>
              </div>

              {/* Institution Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">Institution</h4>
                  <p className="text-white font-medium leading-relaxed">ICBT Campus</p>
                </div>
              </div>

              {/* Group Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-pink-300 mb-2">Group</h4>
                  <p className="text-white font-medium leading-relaxed">Group 04</p>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="hidden md:block mt-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
