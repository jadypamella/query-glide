import { User, Brain, Cpu, ArrowRight, Database, Search, Sparkles } from "lucide-react";

const ArchitectureSection = () => {
  const architectureSteps = [
    {
      icon: User,
      title: "User Input",
      description: "Simple prompt or request",
      details: "Users enter natural language queries like 'employment contract' or 'API documentation'"
    },
    {
      icon: Search,
      title: "Context Discovery",
      description: "Smart information retrieval",
      details: "Our engine analyzes the request and identifies relevant context sources automatically"
    },
    {
      icon: Database,
      title: "Context Structuring",
      description: "Information organization",
      details: "Raw data is processed and structured into AI-optimized formats with proper relationships"
    },
    {
      icon: Brain,
      title: "Context Engine",
      description: "Intelligent processing hub",
      details: "Advanced algorithms combine and enrich context data for maximum AI comprehension"
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Optimized payload delivery",
      details: "Structured context is delivered to AI models in the most effective format for processing"
    },
    {
      icon: Sparkles,
      title: "Enhanced Output",
      description: "Superior AI responses",
      details: "AI models produce more accurate, relevant, and contextually appropriate results"
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our context engineering architecture transforms simple user inputs into 
            comprehensive AI-ready information packages through intelligent processing.
          </p>
        </div>

        {/* Architecture Flow - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {architectureSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex flex-col items-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow hover:scale-110 transition-all duration-300 border-4 border-background">
                      <IconComponent className="text-primary-foreground" size={28} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Architecture Flow - Mobile/Tablet */}
        <div className="lg:hidden mb-16">
          <div className="space-y-8">
            {architectureSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-6 p-6 bg-card border border-border rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <IconComponent className="text-primary-foreground" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                  
                  {index < architectureSteps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ArrowRight className="text-primary" size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Context Engineering Matters
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Accuracy:</strong> Proper context reduces AI hallucinations and improves response quality by 70%
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Efficiency:</strong> Automated context discovery saves 90% of the time spent on prompt engineering
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Scalability:</strong> Consistent context management across all AI interactions in your organization
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-soft animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Technical Advantages
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Real-time Processing:</strong> Sub-second context discovery and structuring
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Multi-source Integration:</strong> Combines data from documents, APIs, and knowledge bases
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Adaptive Learning:</strong> Improves context quality based on usage patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;