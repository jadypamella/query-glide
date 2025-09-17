import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, FileText, Zap, Database, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServicesContractGeneratorProps {
  query: string;
}

export const ServicesContractGenerator = ({ query }: ServicesContractGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const steps = [
    { icon: Database, label: "Retrieving Context", description: "Finding services contract template..." },
    { icon: Brain, label: "AI Processing", description: "Generating services agreement..." },
    { icon: FileText, label: "Document Ready", description: "Contract created successfully!" }
  ];

  const generateServicesContract = async () => {
    setIsGenerating(true);
    setCurrentStep(0);

    // Simulate the process with delays
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    setIsGenerating(false);
    setIsGenerated(true);
  };

  const copyToClipboard = async () => {
    const contractContent = `TYPE OF THIS DOCUMENT: SERVICES AND SUPPLY CONTRACT AGREEMENT
NUMBER OF EDITION: 1st

PREAMBLE
This Services and Supply Contract Agreement (the "Agreement") is entered into as of October 15, 2025, by and between NordicTech Solutions AB, a Swedish limited liability company ("Supplier"), and Polar Energy Systems AB, a Swedish limited liability company ("Client").

RECITALS
A. Supplier provides advanced software development and hardware supply services.
B. Client desires to engage Supplier to provide services and deliver certain equipment under the terms of this Agreement.

AGREEMENT

1. **Parties**
   Supplier: NordicTech Solutions AB, Reg. No. 556123-4567, Sweden
   Client: Polar Energy Systems AB, Reg. No. 559987-6543, Sweden

2. **Scope of Services and Deliverables**
   Supplier shall deliver specified IoT sensor units and provide accompanying software installation, configuration, and support services as outlined in Annex A.

3. **Governance**
   Each party shall appoint a project manager who will serve as the main contact point. Any changes to scope or schedule must be approved in writing by both project managers.

4. **Commercial Terms and Pricing**
   The total contract price is SEK 2,400,000. Invoices shall be issued upon delivery milestones and payable within 30 days. All prices exclude VAT.

5. **Performance Obligations**
   Supplier shall meet the service levels specified in Annex B. Client shall accept deliverables only after formal acceptance testing.

6. **Warranties and Liability**
   Supplier warrants that deliverables will be free from defects for 12 months from delivery. Liability shall be limited to direct damages up to the total contract value.

7. **Confidentiality and IP**
   Both parties shall keep all information confidential. Intellectual property created under this Agreement shall belong to the Client upon full payment.

8. **Dispute Resolution**
   Any dispute shall first be negotiated in good faith. If unresolved, it shall be settled by arbitration in Stockholm under Swedish law.

9. **Term and Termination**
   This Agreement is effective from October 15, 2025 and shall continue until October 14, 2026. Either party may terminate for cause with 30 days' notice.

10. **Force Majeure**
    Neither party shall be liable for delays caused by events beyond their reasonable control, including natural disasters, strikes, or war.

11. **General Provisions**
    This Agreement constitutes the entire agreement between the parties. Any amendments must be in writing signed by both parties.

**EXECUTION**

**NordicTech Solutions AB**
By: ___________________________
Name: _________________________
Title: __________________________
Date: __________________________

**Polar Energy Systems AB**
By: ___________________________
Name: _________________________
Title: __________________________
Date: __________________________`;

    try {
      await navigator.clipboard.writeText(contractContent);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Services contract copied successfully",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-slide-up">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          AI Context Management for "{query}"
        </h2>
        <p className="text-muted-foreground">
          Generating consistent services and supply contract using stored context templates
        </p>
      </div>

      {!isGenerated && (
        <Card className="shadow-medium border-2 border-primary/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Context-Aware Contract Generation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isGenerating ? (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Ready to generate a services and supply contract using our pre-configured legal context template.
                </p>
                <Button onClick={generateServicesContract} className="px-8">
                  Generate Services Contract
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === currentStep;
                  const isCompleted = index < currentStep;

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? 'border-primary bg-primary/5 animate-pulse'
                          : isCompleted
                          ? 'border-green-500/50 bg-green-500/5'
                          : 'border-border bg-background'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-full transition-colors duration-300 ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">{step.label}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {isGenerated && (
        <Card className="shadow-large border-2 border-green-500/20 animate-scale-in">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-xl text-foreground flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-green-500" />
                  Generated Services Contract
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Document generated using context template • Swedish jurisdiction
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="shrink-0 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="ml-2">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="bg-muted/30 p-6 rounded-lg font-mono text-sm space-y-4 max-h-96 overflow-y-auto">
              <div className="font-bold text-foreground">TYPE OF THIS DOCUMENT: SERVICES AND SUPPLY CONTRACT AGREEMENT</div>
              <div className="font-bold text-foreground">NUMBER OF EDITION: 1st</div>
              
              <div className="space-y-2">
                <div className="font-bold text-foreground">PREAMBLE</div>
                <div className="text-muted-foreground">
                  This Services and Supply Contract Agreement (the "Agreement") is entered into as of October 15, 2025, by and between NordicTech Solutions AB, a Swedish limited liability company ("Supplier"), and Polar Energy Systems AB, a Swedish limited liability company ("Client").
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-foreground">RECITALS</div>
                <div className="text-muted-foreground space-y-1">
                  <div>A. Supplier provides advanced software development and hardware supply services.</div>
                  <div>B. Client desires to engage Supplier to provide services and deliver certain equipment under the terms of this Agreement.</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-bold text-foreground">AGREEMENT</div>
                
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">1. Parties</div>
                  <div className="text-muted-foreground ml-4 space-y-1">
                    <div>Supplier: NordicTech Solutions AB, Reg. No. 556123-4567, Sweden</div>
                    <div>Client: Polar Energy Systems AB, Reg. No. 559987-6543, Sweden</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">2. Scope of Services and Deliverables</div>
                  <div className="text-muted-foreground ml-4">
                    Supplier shall deliver specified IoT sensor units and provide accompanying software installation, configuration, and support services as outlined in Annex A.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">3. Governance</div>
                  <div className="text-muted-foreground ml-4">
                    Each party shall appoint a project manager who will serve as the main contact point. Any changes to scope or schedule must be approved in writing by both project managers.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">4. Commercial Terms and Pricing</div>
                  <div className="text-muted-foreground ml-4">
                    The total contract price is SEK 2,400,000. Invoices shall be issued upon delivery milestones and payable within 30 days. All prices exclude VAT.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">5. Performance Obligations</div>
                  <div className="text-muted-foreground ml-4">
                    Supplier shall meet the service levels specified in Annex B. Client shall accept deliverables only after formal acceptance testing.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">6-11. Additional Clauses</div>
                  <div className="text-muted-foreground ml-4">
                    [Warranties, Confidentiality, Dispute Resolution, Term & Termination, Force Majeure, General Provisions...]
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">EXECUTION</div>
                  <div className="text-muted-foreground ml-4 space-y-4">
                    <div className="space-y-2">
                      <div className="font-semibold">NordicTech Solutions AB</div>
                      <div>By: ___________________________</div>
                      <div>Name: _________________________</div>
                      <div>Title: __________________________</div>
                      <div>Date: __________________________</div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-semibold">Polar Energy Systems AB</div>
                      <div>By: ___________________________</div>
                      <div>Name: _________________________</div>
                      <div>Title: __________________________</div>
                      <div>Date: __________________________</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};