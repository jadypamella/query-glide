import { User, Brain, Database, FileText, ArrowDown, ArrowRight, Settings, Sparkles, ChevronDown } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="relative py-24 bg-gradient-elegant overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            System Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our Context Management System bridges user needs with AI capabilities through 
            intelligent context processing and tool orchestration.
          </p>
        </div>

        {/* Modern Flow Diagram */}
        <div className="max-w-6xl mx-auto relative">
          
          {/* User Input */}
          <div className="flex justify-center mb-16 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center justify-center gap-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elegant">
                    <User className="text-primary-foreground" size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">User Input</h3>
                    <p className="text-muted-foreground italic">"I need an employment contract"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-col items-center gap-2">
              <ChevronDown className="text-primary animate-bounce" size={32} />
              <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
          </div>

          {/* Main Processing Layer */}
          <div className="relative mb-16">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-3 gap-12 relative">
              {/* Context Management */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-background/70 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <Database className="text-primary-foreground" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Context Management</h3>
                  </div>
                  <div className="space-y-4">
                    {['Context Creation & Storage', 'Context Retrieval', 'Metadata & Quality Metrics', 'Context Improvement'].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tool Management */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-background/70 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 hover:border-secondary/40 transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <Settings className="text-secondary-foreground" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Tool Management</h3>
                  </div>
                  <div className="space-y-4">
                    {['Dynamic Tool Registration', 'Tool-Context Matching', 'Automated Tool Discovery', 'Tool Activation'].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LLM Integration */}
              <div className="relative group animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-background/70 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <Brain className="text-accent-foreground" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-accent mb-2">LLM Integration</h3>
                  </div>
                  <div className="space-y-4">
                    {['AI Capabilities Integration', 'Context Improvement & Analysis', 'Metadata Extraction', 'Content Tagging'].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Flow Arrows Between Components */}
            <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between items-center transform -translate-y-1/2 px-12">
              <div className="flex-1 flex justify-end pr-8">
                <ArrowRight className="text-primary/60" size={24} />
              </div>
              <div className="flex-1 flex justify-center">
                <ArrowRight className="text-secondary/60" size={24} />
              </div>
            </div>
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-col items-center gap-2">
              <ChevronDown className="text-accent animate-bounce" size={32} />
              <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent"></div>
            </div>
          </div>

          {/* Central Database */}
          <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative group max-w-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-12">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                    <Database className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Persistent Knowledge Layer</h3>
                  <p className="text-muted-foreground">
                    Centralized storage for contexts, tools, metadata, and learning patterns
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { icon: FileText, label: 'Contexts', color: 'primary' },
                    { icon: Settings, label: 'Tools', color: 'secondary' },
                    { icon: Brain, label: 'Metadata', color: 'accent' }
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className={`w-16 h-16 bg-${item.color}/20 border border-${item.color}/30 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-${item.color}/30 transition-colors`}>
                        <item.icon className={`text-${item.color}`} size={20} />
                      </div>
                      <span className="text-muted-foreground font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-col items-center gap-2">
              <ChevronDown className="text-destructive animate-bounce" size={32} />
              <div className="w-px h-8 bg-gradient-to-b from-destructive to-transparent"></div>
            </div>
          </div>

          {/* Enhanced Output */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-primary/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-destructive/20 rounded-3xl p-8 hover:border-destructive/30 transition-all duration-500">
                <div className="flex items-center justify-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-destructive to-primary rounded-2xl flex items-center justify-center shadow-elegant">
                    <Sparkles className="text-destructive-foreground" size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-destructive mb-2">Enhanced Output</h3>
                    <p className="text-muted-foreground italic">
                      "Employment Contract Draft" • "Plugin Guide" • "API Documentation"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-24">
          {/* Efficiency & Optimization */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-background/70 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all duration-500">
              <h3 className="text-xl font-bold text-foreground mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Efficiency & Optimization
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Token Budget', description: 'Context Reducer MCP compresses docs for cheaper, faster processing' },
                  { title: 'Context Pruning', description: 'Drop irrelevant info for cleaner prompts and better accuracy' },
                  { title: 'Metrics & Evaluation', description: 'Track context reuse, success rates, and token costs for clear ROI' }
                ].map((item, index) => (
                  <div key={index} className="group/item">
                    <strong className="text-foreground block mb-1 text-sm">{item.title}:</strong>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Intelligence & Learning */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="absolute inset-0 bg-gradient-secondary rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-background/70 backdrop-blur-sm border border-secondary/20 rounded-3xl p-8 hover:border-secondary/40 transition-all duration-500">
              <h3 className="text-xl font-bold text-foreground mb-6 bg-gradient-secondary bg-clip-text text-transparent">
                Intelligence & Learning
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Few-Shot Learning', description: 'Example-driven context with structured snippets for better results' },
                  { title: 'Memory Systems', description: 'Context Memory MCP persists knowledge across sessions' },
                  { title: 'Retrieval Augmentation', description: 'Context Selector MCP finds relevant docs on demand' }
                ].map((item, index) => (
                  <div key={index} className="group/item">
                    <strong className="text-foreground block mb-1 text-sm">{item.title}:</strong>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise & Control */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '1.6s' }}>
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-background/70 backdrop-blur-sm border border-accent/20 rounded-3xl p-8 hover:border-accent/40 transition-all duration-500">
              <h3 className="text-xl font-bold text-foreground mb-6 bg-gradient-accent bg-clip-text text-transparent">
                Enterprise & Control
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Control Flow', description: 'Sequential Thinking MCP orchestrates multi-step reasoning' },
                  { title: 'Cognitive Tools', description: 'Reusable prompt patterns and templates for consistent quality' },
                  { title: 'Symbolic Mechanisms', description: 'Rule-based compliance checks ensure policy adherence' }
                ].map((item, index) => (
                  <div key={index} className="group/item">
                    <strong className="text-foreground block mb-1 text-sm">{item.title}:</strong>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Future Technologies */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-destructive/20 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative bg-background/70 backdrop-blur-sm border border-destructive/20 rounded-3xl p-8 hover:border-destructive/40 transition-all duration-500">
              <h3 className="text-xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
                Future Technologies
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Neural Field Theory', description: 'Dynamic context auto-adaptation as new data arrives' },
                  { title: 'Quantum Semantics', description: 'Context-dependent meaning interpretation in superposition' },
                  { title: 'Multi-Context Exploration', description: 'Parallel prompt execution with intelligent selection' }
                ].map((item, index) => (
                  <div key={index} className="group/item">
                    <strong className="text-foreground block mb-1 text-sm">{item.title}:</strong>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;