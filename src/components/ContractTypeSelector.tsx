import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Building, Briefcase } from "lucide-react";

interface ContractTypeSelectorProps {
  query: string;
  onSelectType: (type: 'lease' | 'services') => void;
}

export const ContractTypeSelector = ({ query, onSelectType }: ContractTypeSelectorProps) => {
  const contractTypes = [
    {
      type: 'lease' as const,
      title: 'Lease Agreement',
      description: 'Property rental and lease contracts',
      icon: Building,
      keywords: ['lease', 'rental', 'property', 'tenant', 'landlord']
    },
    {
      type: 'services' as const,
      title: 'Services & Supply Contract',
      description: 'Service provider and supply agreements',
      icon: Briefcase,
      keywords: ['services', 'supply', 'deliverables', 'supplier', 'client']
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-slide-up">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Contract Type Selection for "{query}"
        </h2>
        <p className="text-muted-foreground">
          Please select the type of contract you need to generate
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contractTypes.map((contractType) => {
          const Icon = contractType.icon;
          return (
            <Card 
              key={contractType.type}
              className="shadow-medium hover:shadow-large transition-all duration-200 border-2 border-border hover:border-primary/20 cursor-pointer animate-fade-in"
              onClick={() => onSelectType(contractType.type)}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  {contractType.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">
                  {contractType.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {contractType.keywords.map((keyword) => (
                    <span 
                      key={keyword}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <Button 
                  className="w-full"
                  onClick={() => onSelectType(contractType.type)}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Generate {contractType.title}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};