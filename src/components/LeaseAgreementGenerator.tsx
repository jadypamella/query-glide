import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, FileText, Zap, Database, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeaseAgreementGeneratorProps {
  query: string;
}

export const LeaseAgreementGenerator = ({ query }: LeaseAgreementGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const steps = [
    { icon: Database, label: "Retrieving Context", description: "Finding lease agreement template..." },
    { icon: Brain, label: "AI Processing", description: "Generating legal document..." },
    { icon: FileText, label: "Document Ready", description: "Lease agreement created successfully!" }
  ];

  const generateLeaseAgreement = async () => {
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
    const leaseContent = `TYPE OF THIS DOCUMENT: INITIAL LEASE AGREEMENT
NUMBER OF EDITION: 1st

PREAMBLE
This Lease Agreement (the "Agreement") is entered into as of October 1, 2025, by and between Aurora Properties AB, a Swedish limited liability company ("Landlord"), and Quantum Robotics AB, a Swedish limited liability company ("Tenant").

RECITALS
A. Landlord owns the building located at Birger Jarlsgatan 101, 6th Floor, 113 56 Stockholm, Sweden.
B. Tenant desires to lease office space from Landlord under the terms of this Agreement.

AGREEMENT
1. **Premises**
   Tenant leases approximately 1,500 Rentable Square Meters of office space located at Birger Jarlsgatan 101, 6th Floor, 113 56 Stockholm, Sweden.

2. **Term**
   The lease begins on November 1, 2025 and ends on October 31, 2028.

3. **Rent**
   Tenant shall pay a monthly gross rent of SEK 450,000, payable on the first day of each month.

4. **Operating Expenses, Tax Expenses and Insurance Expenses**
   Tenant shall pay Tenant's Share of Operating Expenses, Tax Expenses and Insurance Expenses based on Base Year 2025, with comparison year 2026.

5. **Execution**
   IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

**Aurora Properties AB**
By: ___________________________
Name: _________________________
Title: __________________________
Date: __________________________

**Quantum Robotics AB**
By: ___________________________
Name: _________________________
Title: __________________________
Date: __________________________`;

    try {
      await navigator.clipboard.writeText(leaseContent);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Lease agreement copied successfully",
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
          Generating consistent legal document using stored context templates
        </p>
      </div>

      {!isGenerated && (
        <Card className="shadow-medium border-2 border-primary/20 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Context-Aware Document Generation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isGenerating ? (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Ready to generate a lease agreement using our pre-configured legal context template.
                </p>
                <Button onClick={generateLeaseAgreement} className="px-8">
                  Generate Lease Agreement
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
                  Generated Lease Agreement
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
              <div className="font-bold text-foreground">TYPE OF THIS DOCUMENT: INITIAL LEASE AGREEMENT</div>
              <div className="font-bold text-foreground">NUMBER OF EDITION: 1st</div>
              
              <div className="space-y-2">
                <div className="font-bold text-foreground">PREAMBLE</div>
                <div className="text-muted-foreground">
                  This Lease Agreement (the "Agreement") is entered into as of October 1, 2025, by and between Aurora Properties AB, a Swedish limited liability company ("Landlord"), and Quantum Robotics AB, a Swedish limited liability company ("Tenant").
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-foreground">RECITALS</div>
                <div className="text-muted-foreground space-y-1">
                  <div>A. Landlord owns the building located at Birger Jarlsgatan 101, 6th Floor, 113 56 Stockholm, Sweden.</div>
                  <div>B. Tenant desires to lease office space from Landlord under the terms of this Agreement.</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-bold text-foreground">AGREEMENT</div>
                
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">1. Premises</div>
                  <div className="text-muted-foreground ml-4">
                    Tenant leases approximately 1,500 Rentable Square Meters of office space located at Birger Jarlsgatan 101, 6th Floor, 113 56 Stockholm, Sweden.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">2. Term</div>
                  <div className="text-muted-foreground ml-4">
                    The lease begins on November 1, 2025 and ends on October 31, 2028.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">3. Rent</div>
                  <div className="text-muted-foreground ml-4">
                    Tenant shall pay a monthly gross rent of SEK 450,000, payable on the first day of each month.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">4. Operating Expenses, Tax Expenses and Insurance Expenses</div>
                  <div className="text-muted-foreground ml-4">
                    Tenant shall pay Tenant's Share of Operating Expenses, Tax Expenses and Insurance Expenses based on Base Year 2025, with comparison year 2026.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-foreground">5. Execution</div>
                  <div className="text-muted-foreground ml-4 space-y-4">
                    <div>IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.</div>
                    
                    <div className="space-y-2">
                      <div className="font-semibold">Aurora Properties AB</div>
                      <div>By: ___________________________</div>
                      <div>Name: _________________________</div>
                      <div>Title: __________________________</div>
                      <div>Date: __________________________</div>
                    </div>

                    <div className="space-y-2">
                      <div className="font-semibold">Quantum Robotics AB</div>
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