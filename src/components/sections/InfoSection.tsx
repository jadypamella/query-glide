import { BookOpen, Lightbulb, ArrowUpRight, MessageCircle, FileText, Zap } from "lucide-react";

const InfoSection = () => {
  const contextExamples = [
    {
      icon: FileText,
      title: "Document Templates",
      examples: ["Employment contracts", "Privacy policies", "Terms of service", "NDAs"]
    },
    {
      icon: Zap,
      title: "Code & APIs",
      examples: ["API documentation", "Code reviews", "Integration guides", "Best practices"]
    },
    {
      icon: MessageCircle,
      title: "Communication",
      examples: ["Customer support", "Meeting summaries", "Email templates", "Training materials"]
    }
  ];

  const usageTips = [
    {
      icon: Lightbulb,
      title: "Be Specific",
      tip: "Instead of 'legal document', try 'employment contract for remote workers'"
    },
    {
      icon: BookOpen,
      title: "Add Context",
      tip: "Include relevant details like industry, region, or specific requirements"
    },
    {
      icon: Zap,
      title: "Iterate",
      tip: "Refine your prompts based on results to get even better context matching"
    }
  ];

  const learnMoreLinks = [
    {
      title: "Context Engineering Guide",
      description: "Deep dive into context engineering principles and best practices",
      url: "#"
    },
    {
      title: "API Documentation",
      description: "Integrate our context engine into your applications",
      url: "#"
    },
    {
      title: "Case Studies",
      description: "See how organizations are transforming their AI workflows",
      url: "#"
    },
    {
      title: "Research Papers",
      description: "Academic insights into context management and AI performance",
      url: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Context Examples */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Context Examples
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the types of context our platform excels at managing and structuring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contextExamples.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-primary-foreground" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.examples.map((example, idx) => (
                      <div
                        key={example}
                        className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tips for Effective Usage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Maximize the power of context engineering with these proven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {usageTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div
                  key={tip.title}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                    <IconComponent className="text-secondary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learn More */}
        <div>
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learn More
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Dive deeper into context engineering and discover advanced techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learnMoreLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.url}
                className="group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200" size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-primary rounded-3xl p-12 shadow-glow">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your AI Interactions?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Start using our context engineering platform today and experience 
              the difference intelligent context management makes.
            </p>
            <button className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-200 hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;