import { useState } from "react";
import { SearchInput } from "@/components/SearchInput";
import { SearchResults, SearchResult } from "@/components/SearchResults";
import { LeaseAgreementGenerator } from "@/components/LeaseAgreementGenerator";
import { searchDocuments } from "@/lib/mockDatabase";
import { useToast } from "@/hooks/use-toast";
import { ArrowDown } from "lucide-react";

interface HomeSectionProps {
  onNavigateToSection: (section: string) => void;
}

const HomeSection = ({ onNavigateToSection }: HomeSectionProps) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [showLeaseGenerator, setShowLeaseGenerator] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setCurrentQuery(query);
    setShowLeaseGenerator(false);
    
    // Check if this is a lease agreement request
    const isLeaseRequest = query.toLowerCase().includes('lease') && 
                          (query.toLowerCase().includes('agreement') || 
                           query.toLowerCase().includes('contract'));
    
    if (isLeaseRequest) {
      setShowLeaseGenerator(true);
      setIsLoading(false);
      return;
    }
    
    try {
      const searchResults = await searchDocuments(query);
      setResults(searchResults);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddDocument = async (title: string) => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Document Added",
        description: `"${title}" has been added to your documentation.`,
      });
      setResults([]);
      setCurrentQuery("");
    } catch (error) {
      console.error("Failed to add document:", error);
      toast({
        title: "Error",
        description: "Failed to add document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Consolidated Hero Content */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="max-w-5xl mx-auto bg-card/50 border border-border rounded-3xl p-12 backdrop-blur-sm shadow-elegant">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Stop getting generic AI responses.
              <span className="block text-primary mt-4">Start getting results.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <span className="text-accent font-semibold">Millions waste hours daily</span> crafting perfect prompts, only to get cookie-cutter answers. 
              Our platform automatically finds and structures the right context so your AI delivers 
              <span className="text-primary font-semibold"> faster, more accurate responses every time.</span>
            </p>
          </div>
        </div>

        {/* Search Interface */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-full max-w-3xl animate-scale-in">
            <SearchInput onSearch={handleSearch} onAddDocument={handleAddDocument} isLoading={isLoading} />
          </div>
          
          {/* Search Examples */}
          {results.length === 0 && !currentQuery && (
            <div className="mt-12 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Try context engineering examples:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "employment contract template",
                  "optimize prompt for code review",
                  "I want a lease agreement",
                  "API integration patterns",
                  "troubleshooting workflows"
                ].map((example) => (
                  <button
                    key={example}
                    onClick={() => handleSearch(example)}
                    className="px-6 py-3 text-sm bg-card border border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 shadow-soft hover:shadow-glow"
                    disabled={isLoading}
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12 animate-fade-in">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-card rounded-2xl shadow-soft">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent"></div>
              <span className="text-muted-foreground text-lg">Processing your context...</span>
            </div>
          </div>
        )}

        {/* Lease Agreement Generator */}
        {showLeaseGenerator && (
          <LeaseAgreementGenerator query={currentQuery} />
        )}

        {/* Search Results */}
        {!isLoading && !showLeaseGenerator && results.length > 0 && (
          <SearchResults results={results} query={currentQuery} />
        )}

        {/* No Results */}
        {!isLoading && !showLeaseGenerator && currentQuery && results.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="max-w-md mx-auto bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h3 className="text-xl font-medium text-foreground mb-3">
                No results found
              </h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any documentation matching "{currentQuery}". 
                Try refining your search or using different keywords.
              </p>
              <button
                onClick={() => {
                  setResults([]);
                  setCurrentQuery("");
                }}
                className="px-6 py-3 text-primary hover:bg-primary/5 border border-primary rounded-xl transition-all duration-200 shadow-soft"
              >
                Start New Search
              </button>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        {results.length === 0 && !currentQuery && (
          <div className="text-center mt-16 animate-fade-in">
            <button
              onClick={() => onNavigateToSection('about')}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="text-sm">Learn more about our team</span>
              <ArrowDown className="animate-bounce" size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;