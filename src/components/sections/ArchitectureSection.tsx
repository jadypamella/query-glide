import { User, Brain, Database, FileText, ArrowDown, ArrowRight, Settings, Cpu, Sparkles } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            System Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our Context Management System bridges user needs with AI capabilities through 
            intelligent context processing and tool orchestration.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-7xl mx-auto">
          {/* User Input - Top */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 max-w-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-muted to-muted/60 rounded-xl flex items-center justify-center">
                  <User className="text-foreground" size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground">User Input</h3>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "I need an employment contract"
              </p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="text-primary animate-bounce" size={24} />
          </div>

          {/* Main System Components */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Context Management - Blue */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Database className="text-primary-foreground" size={20} />
                </div>
                <h3 className="text-lg font-bold text-primary">Context Management</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Context Creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Context Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Context Retrieval</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Context Improvement</span>
                </div>
              </div>
            </div>

            {/* Tool Management - Green */}
            <div className="bg-card border-2 border-green-500/20 rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Settings className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-green-500">Tool Management</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Tool Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Smart Matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Tool Activation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Result Processing</span>
                </div>
              </div>
            </div>

            {/* LLM Integration - Purple */}
            <div className="bg-card border-2 border-purple-500/20 rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Brain className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-purple-500">LLM Integration</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Metadata Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Context Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">AI Generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Quality Assurance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Central Database - Knowledge Layer */}
          <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 shadow-elegant max-w-2xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                  <Database className="text-secondary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Persistent Knowledge Layer</h3>
              </div>
              <p className="text-center text-muted-foreground text-sm">
                Centralized storage for contexts, tools, metadata, and learning patterns
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6 text-xs">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <FileText className="text-primary" size={16} />
                  </div>
                  <span className="text-muted-foreground">Contexts</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Settings className="text-green-500" size={16} />
                  </div>
                  <span className="text-muted-foreground">Tools</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Brain className="text-purple-500" size={16} />
                  </div>
                  <span className="text-muted-foreground">Metadata</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="text-primary animate-bounce" size={24} />
          </div>

          {/* Output - Bottom */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-card border-2 border-yellow-500/20 rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 max-w-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-yellow-600 dark:text-yellow-400">Enhanced Output</h3>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Employment Contract Draft" • "Plugin Guide" • "API Documentation"
              </p>
            </div>
          </div>

          {/* Flow Arrows for Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Connecting lines between components */}
            <div className="relative h-full">
              {/* Horizontal connection lines */}
              <div className="absolute top-1/2 left-1/4 right-3/4 h-0.5 bg-gradient-to-r from-primary/30 to-green-500/30 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 right-1/4 h-0.5 bg-gradient-to-r from-green-500/30 to-purple-500/30 transform -translate-y-1/2"></div>
            </div>
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