// types/database.types.ts
export type ContactStatus = 'pending' | 'accepted' | 'blocked'
export type ConversationType = 'private' | 'group'
export type ParticipantRole = 'admin' | 'member' | 'moderator'
export type AttachmentType = 'image' | 'video' | 'document' | 'audio'

export interface User {
  id: string
  username: string
  email: string
  avatar_url?: string
  bio?: string
  last_online?: Date
  is_online?: boolean
  created_at?: Date
  updated_at?: Date
  is_public?: boolean
}

export interface Contact {
  id: string
  user_id: string
  contact_user_id: string
  status: ContactStatus
  created_at?: Date
}

export interface Conversation {
  id: string
  type: ConversationType
  name?: string
  is_anonymous?: boolean
  is_public?: boolean
  created_by: string
  created_at?: Date
  updated_at?: Date
}

export interface ConversationParticipant {
  conversation_id: string
  user_id: string
  role: ParticipantRole
  joined_at?: Date
  last_read_at?: Date
}

export interface Message {
  id: string
  conversation_id: string
  sender_id: string
  content: string
  is_anonymous?: boolean
  reply_to_message_id?: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}

export interface Attachment {
  id: string
  message_id: string
  user_id: string
  file_url: string
  file_type: AttachmentType
  file_name: string
  file_size?: number
  created_at?: Date
}

export interface UserStatus {
  user_id: string
  is_online?: boolean
  last_online?: Date
  current_conversation_id?: string
  is_typing?: boolean
  updated_at?: Date
}