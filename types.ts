
export type Role = 'admin' | 'user';

export interface UserProfile {
  id: string;
  fullName: string;
  role: Role;
}

export interface Message {
  id: string;
  role: 'assistant' | 'user' | 'admin';
  content: string;
  timestamp: Date;
}

export interface ServiceEstimate {
  serviceType: string;
  locationType: 'remote' | 'on-site';
  estimatedHours: string;
  estimatedCostRange: string;
  confidence: number;
  clarifyingQuestions?: string[];
  suggestedAction: 'schedule' | 'book' | 'contact';
}

export interface ServiceRequest {
  id: string;
  conversationId: string;
  clientName: string;
  serviceType: string;
  status: 'pending' | 'quoted' | 'scheduled' | 'completed';
  estimatedCost: string;
  createdAt: string;
}
