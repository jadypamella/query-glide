import { Target, Lightbulb, Zap, Shield } from "lucide-react";

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize AI context engineering, making powerful AI interactions accessible to everyone, regardless of technical expertise."
    },
    {
      icon: Lightbulb,
      title: "The Problem We Solve",
      description: "Traditional AI interactions often fail because users struggle to provide the right context. We bridge this gap automatically."
    },
    {
      icon: Zap,
      title: "Our Approach",
      description: "Smart context discovery and structuring that transforms simple prompts into comprehensive, AI-ready information payloads."
    },
    {
      icon: Shield,
      title: "Our Commitment",
      description: "Building secure, reliable context management systems that enhance AI performance while protecting user data and privacy."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We envision a future where AI interactions are seamless, intelligent, and contextually aware. 
            Our platform is the bridge between human intent and AI understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {visionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={point.title}
                className="flex gap-6 p-8 bg-card border border-border rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-primary-foreground" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="bg-card/50 border border-border rounded-3xl p-12 backdrop-blur-sm shadow-elegant animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We constantly push the boundaries of what's possible in AI context management."
              },
              {
                title: "User-Centric Design",
                description: "Every feature is designed with the user experience at its core, making complex AI simple."
              },
              {
                title: "Ethical AI",
                description: "We believe in responsible AI development that respects privacy and promotes transparency."
              }
            ].map((value, index) => (
              <div key={value.title} className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Looking Ahead
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building towards a future where AI understands not just what you ask, 
            but what you really need. Our context engineering platform is just the beginning 
            of a revolutionary approach to human-AI collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;