export type Message = {
  id: string
  created_at: string
  content: string
  user_id: string
}

export type Database = {
  public: {
    Tables: {
      messages: {
        Row: Message
        Insert: Omit<Message, 'id' | 'created_at'>
        Update: Partial<Message>
      }
    }
  }
} 