import { AlertTriangle, CheckCircle, Users, Clock, DollarSign, TrendingUp } from "lucide-react"

export function ProjectOverview() {
  return (
    <section id="overview" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6 neon-text">Project Overview</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing interview preparation through intelligent AI-driven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Problem Statement */}
          <div className="space-y-8">
            <div className="glass glass-hover rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <h3 className="text-2xl font-bold">Current Challenges</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-destructive">Lack of Personalization</h4>
                    <p className="text-sm text-muted-foreground">
                      Generic materials don't fit specific job roles or experience levels
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-destructive">Expensive Coaching</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional coaching is costly and not accessible to everyone
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-destructive">No Real-Time Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional methods lack structured, immediate evaluation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-destructive">Outdated Methods</h4>
                    <p className="text-sm text-muted-foreground">
                      Static question banks and passive learning approaches
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proposed Solution */}
          <div className="space-y-8">
            <div className="glass glass-hover rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Our AI Solution</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary">Dynamic Question Generation</h4>
                    <p className="text-sm text-muted-foreground">
                      AI creates role-specific questions tailored to your career path
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-secondary">Interactive Simulation</h4>
                    <p className="text-sm text-muted-foreground">
                      Realistic interview environment with immediate response evaluation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-accent">Intelligent Feedback</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time scoring with personalized improvement recommendations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-primary">24/7 Accessibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Practice anytime, anywhere with affordable, scalable access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass glass-hover rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-muted-foreground">Job Roles Supported</div>
          </div>
          <div className="glass glass-hover rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-muted-foreground">Available Access</div>
          </div>
          <div className="glass glass-hover rounded-xl p-6 text-center">
            <DollarSign className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold">Free</div>
            <div className="text-sm text-muted-foreground">Core Features</div>
          </div>
          <div className="glass glass-hover rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold">85%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
