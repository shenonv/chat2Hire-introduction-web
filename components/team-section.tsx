import { User, Github, Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "M.D Shenon Vidusha",
      role: "Database & Software Engineer",
      id: "CL/HDCSE/CMU/121/04",
      responsibilities: "Backend development, AI integration, database design",
      avatar: "/professional-developer-avatar.png",
    },
    {
      name: "Sawanee Anulya Wedamestrige",
      role: "Project Manager",
      id: "CL/HDCSE/CMU/121/52",
      responsibilities: "Project coordination, planning, risk management",
      avatar: "/professional-manager-avatar.png",
    },
    {
      name: "Madara Priyankara",
      role: "System Analyst",
      id: "CL/HDCSE/CMU/121/79",
      responsibilities: "Requirements analysis, system workflows, documentation",
      avatar: "/professional-analyst-avatar.png",
    },
    {
      name: "Galle Arachchige Sanuki Lithanga Perera",
      role: "System Designer",
      id: "CL/HDCSE/CMU/121/36",
      responsibilities: "UI/UX design, system architecture, interface mockups",
      avatar: "/professional-designer-avatar.png",
    },
    {
      name: "Aldeen Sathyanathan",
      role: "Quality Assurance Engineer",
      id: "CL/HDCSE/CMU/121/67",
      responsibilities: "Testing strategies, quality control, bug tracking",
      avatar: "/qa-engineer-avatar.png",
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
        <div className="mt-16 glass rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 neon-text">Academic Partnership</h3>
          <p className="text-lg text-muted-foreground mb-6">HND in Computing & Software Engineering</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">University</div>
              <div className="font-semibold">Cardiff Metropolitan University</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Institution</div>
              <div className="font-semibold">ICBT Campus</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Group</div>
              <div className="font-semibold">Group 04</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
