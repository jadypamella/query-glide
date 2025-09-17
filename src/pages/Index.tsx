import { useState } from "react";
import { SearchInput } from "@/components/SearchInput";
import { SearchResults, SearchResult } from "@/components/SearchResults";
import { searchDocuments } from "@/lib/mockDatabase";
import { useToast } from "@/hooks/use-toast";
import contextaLogo from "@/assets/contexta-logo.png";

const Index = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setCurrentQuery(query);
    
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
      // Simulate adding document
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Document Added",
        description: `"${title}" has been added to your documentation.`,
      });
      // Clear results to return to initial state
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
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img
              src={contextaLogo}
              alt="Contexta"
              className="h-16 md:h-20 object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Intelligent Documentation Search
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find exactly what you're looking for in your documentation. 
            Ask questions naturally and get contextual, relevant answers instantly.
          </p>
        </header>

        {/* Search Interface */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-full animate-scale-in">
            <SearchInput onSearch={handleSearch} onAddDocument={handleAddDocument} isLoading={isLoading} />
          </div>
          
          {/* Search Examples */}
          {results.length === 0 && !currentQuery && (
            <div className="mt-8 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Try searching for:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "summarize plugin docs",
                  "generate onboarding guide", 
                  "API authentication",
                  "webhook setup",
                  "database migration"
                ].map((example) => (
                  <button
                    key={example}
                    onClick={() => handleSearch(example)}
                    className="px-4 py-2 text-sm bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors duration-200"
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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-xl shadow-soft">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent"></div>
              <span className="text-muted-foreground">Processing...</span>
            </div>
          </div>
        )}

        {/* Search Results */}
        {!isLoading && results.length > 0 && (
          <SearchResults results={results} query={currentQuery} />
        )}

        {/* No Results */}
        {!isLoading && currentQuery && results.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-medium text-foreground mb-2">
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
                className="px-4 py-2 text-primary hover:bg-primary/5 border border-primary rounded-lg transition-colors duration-200"
              >
                Start New Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by Contexta • Intelligent Documentation Search
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;