"use client"

import { FaArrowRight } from "react-icons/fa"

export function Hero() {

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          <span className="text-accent text-sm font-medium">New: Advanced Analytics</span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
            The modern platform for <span className="text-accent">building</span> the web
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Streamline your workflow with intelligent automation, powerful integrations, and an intuitive interface
            designed for teams of all sizes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-base hover:opacity-90 transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
            Start Building Free
          </button>
          <button className="px-8 py-4 border border-border bg-transparent text-foreground rounded-full font-semibold text-base hover:bg-muted transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
            Watch Demo <FaArrowRight size={16} />
          </button>
        </div>

        {/* Social Proof */}
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Google", "Microsoft", "Vercel", "Figma", "Slack"].map((company) => (
              <span key={company} className="text-foreground/60 font-semibold text-sm">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
