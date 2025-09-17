import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, Code, Layers, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PluginSpecGeneratorProps {
  query: string;
}

const PluginSpecGenerator = ({ query }: PluginSpecGeneratorProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedSpec, setGeneratedSpec] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const steps = [
    { id: 1, title: "Context Retrieved", icon: CheckCircle, description: "Plugin specification template loaded" },
    { id: 2, title: "AI Processing", icon: Layers, description: "Generating custom plugin specification" },
    { id: 3, title: "Specification Ready", icon: Code, description: "Plugin specification generated successfully" }
  ];

  useEffect(() => {
    const generateSpec = async () => {
      setIsGenerating(true);
      
      // Step 1: Context Retrieved
      setCurrentStep(1);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Step 2: AI Processing
      setCurrentStep(2);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Step 3: Generate the plugin specification
      const spec = `TYPE OF THIS DOCUMENT: PLUGIN SPECIFICATION  
EDITION NUMBER: 1.0.0  
TARGET HOST SYSTEM: OpenWebUI  
PROGRAMMING LANGUAGE: TypeScript

PREAMBLE  
The "Context Analyzer" plugin was created on October 15, 2025 by Contexta AI. It adds intelligent context analysis to chat responses inside OpenWebUI, improving response accuracy and consistency.

PLUGIN ARCHITECTURE OVERVIEW  
- Integrates with OpenWebUI via its plugin API and message processing hooks.  
- Contains a core context engine, a UI injection module, and a context storage service for saving analysis results.

MANIFEST FILE (plugin.json)
\`\`\`json
{
  "name": "context-analyzer",
  "id": "contexta.context.analyzer",
  "version": "1.0.0",
  "description": "Analyzes message context and provides intelligent recommendations.",
  "author": "Contexta AI",
  "license": "MIT",
  "permissions": ["read:messages", "write:ui", "access:storage"],
  "entry_point": "src/index.ts"
}
\`\`\`

PLUGIN API INTERFACE
\`\`\`typescript
export interface ContextPlugin {
  analyzeContext(text: string): Promise<{relevance: number, suggestions: string[]}>;
  displayRecommendations(recommendations: string[]): void;
  storeContext(context: any): Promise<void>;
}
\`\`\`

CORE LOGIC IMPLEMENTATION
Uses advanced NLP and vector similarity for context matching.
Maintains a knowledge base of domain-specific contexts.
Provides real-time suggestions based on conversation flow.

EVENT HANDLING / TRIGGERS
Triggered on every onMessageSent and onMessageReceived event in OpenWebUI.
Analyzes context relevance and displays suggestions when relevance > 0.7.

INSTALLATION & CONFIGURATION
\`\`\`bash
git clone https://github.com/contexta-ai/context-analyzer.git
cd context-analyzer
npm install
npm run build
openwebui plugins install ./dist
\`\`\`

TESTING & VALIDATION
Example Input: "I need help with legal documents"
Expected Output: {relevance: 0.9, suggestions: ["lease agreement", "services contract"]}
Test Command: npm run test

SECURITY CONSIDERATIONS
Plugin only accesses message content with explicit user permission.
Context data is encrypted and stored locally.
All API requests are validated and rate-limited.

FOLDER STRUCTURE
\`\`\`
context-analyzer/
├── plugin.json
├── src/
│   ├── index.ts
│   ├── context.ts
│   ├── nlp.ts
│   └── ui.ts
├── tests/
│   └── context.test.ts
├── docs/
│   └── API.md
└── README.md
\`\`\``;

      setGeneratedSpec(spec);
      setCurrentStep(3);
      setIsGenerating(false);
    };

    generateSpec();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedSpec);
      toast({
        title: "Copied to clipboard",
        description: "Plugin specification has been copied to your clipboard.",
      });
    } catch (error) {
      console.error("Failed to copy:", error);
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <Card className="border-primary/20 shadow-elegant">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-3">
            <Code className="text-primary" size={28} />
            Plugin Specification Generator
          </CardTitle>
          <p className="text-muted-foreground">
            Creating a custom plugin specification based on: "{query}"
          </p>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* Progress Steps */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep >= step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="flex flex-col items-center space-y-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isCompleted 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : isActive 
                          ? 'border-primary text-primary animate-pulse' 
                          : 'border-muted text-muted-foreground'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div className="text-center">
                      <p className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground max-w-24">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Loading State */}
          {isGenerating && (
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent"></div>
                <span className="text-muted-foreground">
                  {currentStep === 1 && "Retrieving plugin specification context..."}
                  {currentStep === 2 && "AI is generating your custom plugin specification..."}
                </span>
              </div>
            </div>
          )}

          {/* Generated Specification */}
          {currentStep === 3 && generatedSpec && (
            <div className="space-y-4 animate-scale-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Plugin Specification Generated
                  </Badge>
                  <Badge variant="outline">
                    <Settings size={12} className="mr-1" />
                    OpenWebUI Compatible
                  </Badge>
                </div>
                <Button onClick={copyToClipboard} variant="outline" size="sm">
                  <Copy size={16} className="mr-2" />
                  Copy Specification
                </Button>
              </div>
              
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed overflow-x-auto">
                    {generatedSpec}
                  </pre>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PluginSpecGenerator;