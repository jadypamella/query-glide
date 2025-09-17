import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

interface SearchInputProps {
  onSearch: (query: string) => void;
  onAddDocument?: (title: string) => void;
  isLoading?: boolean;
}

export const SearchInput = ({ onSearch, onAddDocument, isLoading = false }: SearchInputProps) => {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<'search' | 'add'>('search');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (mode === 'search') {
        onSearch(query.trim());
      } else if (mode === 'add' && onAddDocument) {
        onAddDocument(query.trim());
      }
    }
  };

  const toggleMode = () => {
    setMode(mode === 'search' ? 'add' : 'search');
    setQuery(""); // Clear input when switching modes
  };

  const CurrentIcon = mode === 'search' ? Search : Plus;
  const placeholder = mode === 'search' 
    ? "Ask anything about your documentation..."
    : "Enter document title to add...";
  const buttonText = mode === 'search' ? "Search" : "Add Document";
  const loadingText = mode === 'search' ? "Searching..." : "Adding...";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pr-16 pl-12 py-4 text-lg border-2 border-border rounded-xl shadow-soft focus:border-primary focus:shadow-glow transition-all duration-200 bg-card"
            disabled={isLoading}
          />
          <CurrentIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          
          {/* Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleMode}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg hover:bg-accent transition-colors duration-200 text-muted-foreground hover:text-foreground"
            disabled={isLoading}
            title={mode === 'search' ? 'Switch to Add Document' : 'Switch to Search'}
          >
            {mode === 'search' ? <Plus className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>
        </div>
        <Button
          type="submit"
          variant="search"
          disabled={!query.trim() || isLoading}
          className="px-8 py-4 text-lg rounded-xl"
        >
          {isLoading ? loadingText : buttonText}
        </Button>
      </div>
    </form>
  );
};