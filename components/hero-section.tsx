"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Brain, Target } from "lucide-react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>AI-Powered Interview Preparation</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono leading-tight">
            <span className="neon-text">Chat2Hire</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Interview Question Generator
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An AI-powered web platform that generates role-specific interview questions and provides real-time feedback
            to transform your interview preparation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="gradient-primary neon-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              Start Practicing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass-hover text-lg  py-4 px-8 bg-transparent">
              View Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="glass glass-hover rounded-xl p-6 text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">AI-Generated Questions</h3>
              <p className="text-sm text-muted-foreground">Dynamic, role-specific questions powered by DeepSeek R1</p>
            </div>
            <div className="glass glass-hover rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-Time Feedback</h3>
              <p className="text-sm text-muted-foreground">
                Instant evaluation and personalized improvement suggestions
              </p>
            </div>
            <div className="glass glass-hover rounded-xl p-6 text-center">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Comprehensive dashboard to monitor your growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
