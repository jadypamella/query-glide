import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, FileText, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  keyTakeaways: string[];
  source: string;
  relevanceScore: number;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

export const SearchResults = ({ results, query }: SearchResultsProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (result: SearchResult) => {
    const formattedContent = `
# ${result.title}

## Content
${result.content}

## Key Takeaways
${result.keyTakeaways.map(takeaway => `• ${takeaway}`).join('\n')}

Source: ${result.source}
    `.trim();

    try {
      await navigator.clipboard.writeText(formattedContent);
      setCopiedId(result.id);
      toast({
        title: "Copied to clipboard",
        description: "Search result copied successfully",
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-slide-up">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Search Results for "{query}"
        </h2>
        <p className="text-muted-foreground">
          Found {results.length} relevant {results.length === 1 ? 'result' : 'results'}
        </p>
      </div>

      <div className="space-y-6">
        {results.map((result) => (
          <Card 
            key={result.id} 
            className="shadow-medium hover:shadow-large transition-shadow duration-200 border-2 border-border hover:border-primary/20 animate-fade-in"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-xl text-foreground flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {result.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span>{result.source}</span>
                    <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {Math.round(result.relevanceScore * 100)}% relevance
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(result)}
                  className="shrink-0 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {copiedId === result.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="ml-2">
                    {copiedId === result.id ? "Copied!" : "Copy"}
                  </span>
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Content</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.content}
                  </p>
                </div>
                
                {result.keyTakeaways.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Takeaways</h4>
                    <ul className="space-y-1">
                      {result.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};