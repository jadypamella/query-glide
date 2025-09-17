import { SearchResult } from "@/components/SearchResults";

// Mock database with sample documentation entries
const mockDocuments = [
  {
    id: 'lease-context',
    title: 'Legal Lease Agreement Context Template',
    content: 'You are an expert legal document generator. Create a lease document with the following structure and content requirements: Document Type: [Initial Lease / Amendment / Restatement / Joinder / Termination], Edition Number: [e.g. 1st, 2nd, 5th, Restated], Jurisdiction: [Country and legal context, e.g. Sweden]. Required Sections: Preamble, Recitals, Agreement Clauses including Premises, Term, Rent, Operating Expenses, and Execution.',
    keyTakeaways: [
      'Always include document type and edition number',
      'Structure with Preamble, Recitals, and Agreement sections',
      'Include premises description with square meters',
      'Specify clear term dates and rent amounts',
      'Add proper execution signatures'
    ],
    source: 'Legal Document Templates',
    keywords: ['lease', 'agreement', 'rental', 'contract', 'legal', 'property', 'tenant', 'landlord']
  },
  {
    id: 'services-contract-context',
    title: 'Services and Supply Contract Context Template',
    content: 'You are an expert legal document generator. Create a services and supply contract agreement with the following structure and content requirements: Document Type: Services and Supply Contract Agreement, Edition Number: [e.g. 1st, 2nd, Restated], Jurisdiction: [Country and legal context, e.g. Sweden]. Required Sections: Preamble, Recitals, Agreement Clauses including Parties, Scope of Services, Governance, Commercial Terms, Performance Obligations, Warranties, Confidentiality, Dispute Resolution, Term & Termination, Force Majeure, General Provisions, and Execution.',
    keyTakeaways: [
      'Include parties with registration numbers and jurisdictions',
      'Define scope of services and deliverables clearly',
      'Specify commercial terms and pricing model',
      'Include performance obligations and SLAs',
      'Add confidentiality and IP ownership clauses',
      'Define dispute resolution and governing law'
    ],
    source: 'Legal Document Templates',
    keywords: ['services', 'supply', 'contract', 'agreement', 'legal', 'commercial', 'deliverables', 'supplier', 'client']
  },
  {
    id: "doc-1",
    title: "API Authentication Guide",
    content: "Our API uses token-based authentication with JWT tokens. To authenticate, include the Authorization header with 'Bearer <token>' in your requests. Tokens expire after 24 hours and need to be refreshed using the /auth/refresh endpoint.",
    keyTakeaways: [
      "Use JWT tokens for API authentication",
      "Include Authorization header with Bearer token",
      "Tokens expire after 24 hours",
      "Use /auth/refresh endpoint to renew tokens"
    ],
    source: "API Documentation",
    keywords: ["authentication", "api", "jwt", "token", "auth", "bearer", "login", "security"]
  },
  {
    id: "doc-2", 
    title: "Getting Started with Webhooks",
    content: "Webhooks allow your application to receive real-time notifications when events occur. To set up webhooks, configure your endpoint URL in the dashboard and select which events to listen for. We'll send HTTP POST requests to your endpoint with event data.",
    keyTakeaways: [
      "Webhooks provide real-time event notifications",
      "Configure endpoint URL in dashboard", 
      "Select specific events to listen for",
      "Receives HTTP POST requests with event data"
    ],
    source: "Integration Guide",
    keywords: ["webhooks", "notifications", "events", "real-time", "endpoint", "integration", "setup"]
  },
  {
    id: "doc-3",
    title: "Plugin Development Framework", 
    content: "The plugin framework allows developers to extend functionality through custom plugins. Plugins must implement the PluginInterface and be registered in the plugins.json configuration file. Each plugin has access to the core API and can define custom hooks and filters.",
    keyTakeaways: [
      "Implement PluginInterface for custom plugins",
      "Register plugins in plugins.json config file", 
      "Plugins have access to core API",
      "Can define custom hooks and filters"
    ],
    source: "Developer Documentation",
    keywords: ["plugin", "framework", "development", "extend", "custom", "interface", "api", "hooks", "filters"]
  },
  {
    id: "doc-4",
    title: "Onboarding User Flow Best Practices",
    content: "Effective user onboarding should be progressive, contextual, and value-focused. Start with core features, provide tooltips and guided tours, and celebrate early wins. Collect user feedback and iterate based on completion rates and user behavior analytics.",
    keyTakeaways: [
      "Make onboarding progressive and contextual",
      "Focus on demonstrating value early", 
      "Use tooltips and guided tours",
      "Celebrate user achievements and wins",
      "Iterate based on analytics and feedback"
    ],
    source: "UX Design Guide",
    keywords: ["onboarding", "user experience", "ux", "flow", "guide", "tutorial", "progressive", "contextual"]
  },
  {
    id: "doc-5",
    title: "Database Migration Strategy", 
    content: "Database migrations should be versioned, reversible, and tested thoroughly. Use incremental migrations for large datasets, maintain backwards compatibility during transitions, and always backup before major schema changes. Document all migration steps and rollback procedures.",
    keyTakeaways: [
      "Version and document all migrations",
      "Ensure migrations are reversible",
      "Use incremental approach for large datasets",
      "Maintain backwards compatibility",
      "Always backup before schema changes"
    ],
    source: "Database Documentation", 
    keywords: ["database", "migration", "schema", "backup", "versioning", "rollback", "compatibility"]
  }
];

export const searchDocuments = async (query: string): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const searchTerms = query.toLowerCase().split(' ');
  
  // Calculate relevance scores based on keyword and content matching
  const scoredResults = mockDocuments.map(doc => {
    let score = 0;
    const allText = `${doc.title} ${doc.content} ${doc.keywords.join(' ')}`.toLowerCase();
    
    // Score based on exact matches in title (highest weight)
    searchTerms.forEach(term => {
      if (doc.title.toLowerCase().includes(term)) {
        score += 0.4;
      }
      if (doc.keywords.some(keyword => keyword.includes(term))) {
        score += 0.3;
      }
      if (doc.content.toLowerCase().includes(term)) {
        score += 0.2;
      }
    });
    
    // Bonus for multiple term matches
    const matchedTerms = searchTerms.filter(term => allText.includes(term));
    if (matchedTerms.length > 1) {
      score += 0.1 * (matchedTerms.length - 1);
    }
    
    return {
      ...doc,
      relevanceScore: Math.min(score, 1) // Cap at 1.0
    };
  });
  
  // Filter and sort by relevance
  return scoredResults
    .filter(result => result.relevanceScore > 0.1)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 5) // Return top 5 results
    .map(({ keywords, ...rest }) => rest); // Remove keywords from response
};