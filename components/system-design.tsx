import { Database, Cpu, Globe, Settings } from "lucide-react"

export function SystemDesign() {
  const technologies = [
    {
      icon: Globe,
      name: "Next.js",
      description: "Frontend Framework",
      color: "text-primary",
    },
    {
      icon: Settings,
      name: "NestJS",
      description: "Backend Framework",
      color: "text-secondary",
    },
    {
      icon: Database,
      name: "PostgreSQL",
      description: "Database",
      color: "text-accent",
    },
    {
      icon: Cpu,
      name: "DeepSeek R1",
      description: "AI Model",
      color: "text-primary",
    },
  ]

  return (
    <section id="technology" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 neon-text">System Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technologies following Agile SDLC methodology
          </p>
        </div>

        {/* Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:animate-pulse-glow`}
              >
                <tech.icon className={`w-8 h-8 ${tech.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-12 neon-text">System Flow</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Frontend */}
            <div className="text-center">
              <div className="glass glass-hover rounded-2xl p-6 mb-4">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Frontend Layer</h4>
                <p className="text-sm text-muted-foreground mb-4">Next.js React Application</p>
                <div className="space-y-2 text-xs">
                  <div className="bg-primary/20 rounded px-2 py-1">User Interface</div>
                  <div className="bg-secondary/20 rounded px-2 py-1">Responsive Design</div>
                  <div className="bg-accent/20 rounded px-2 py-1">Real-time Updates</div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="text-center">
              <div className="glass glass-hover rounded-2xl p-6 mb-4">
                <Settings className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Backend Layer</h4>
                <p className="text-sm text-muted-foreground mb-4">NestJS API Server</p>
                <div className="space-y-2 text-xs">
                  <div className="bg-primary/20 rounded px-2 py-1">Authentication</div>
                  <div className="bg-secondary/20 rounded px-2 py-1">Business Logic</div>
                  <div className="bg-accent/20 rounded px-2 py-1">AI Integration</div>
                </div>
              </div>
            </div>

            {/* Database & AI */}
            <div className="text-center">
              <div className="glass glass-hover rounded-2xl p-6 mb-4">
                <div className="flex justify-center space-x-2 mb-4">
                  <Database className="w-6 h-6 text-accent" />
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">Data & AI Layer</h4>
                <p className="text-sm text-muted-foreground mb-4">PostgreSQL + DeepSeek R1</p>
                <div className="space-y-2 text-xs">
                  <div className="bg-primary/20 rounded px-2 py-1">Data Storage</div>
                  <div className="bg-secondary/20 rounded px-2 py-1">Question Generation</div>
                  <div className="bg-accent/20 rounded px-2 py-1">Answer Evaluation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Methodology */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-6">Agile Development Process</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass rounded-lg px-4 py-2 text-sm">Sprint Planning</div>
              <div className="glass rounded-lg px-4 py-2 text-sm">Daily Standups</div>
              <div className="glass rounded-lg px-4 py-2 text-sm">Continuous Testing</div>
              <div className="glass rounded-lg px-4 py-2 text-sm">Sprint Reviews</div>
              <div className="glass rounded-lg px-4 py-2 text-sm">Retrospectives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
