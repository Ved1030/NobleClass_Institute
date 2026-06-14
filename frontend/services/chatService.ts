import api from './api';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  reply: string;
}

export async function sendChatMessage(
  messages: ChatMessage[]
): Promise<ChatResponse> {
  const { data } = await api.post<ChatResponse>('/chat', { messages });
  return data;
}
