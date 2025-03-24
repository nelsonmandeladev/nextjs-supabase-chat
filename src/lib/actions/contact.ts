"use server"

import { serverClient } from "../supabase"

// Function to get all contacts for the logged-in user
export async function getUserContacts() {
    const supabase = await serverClient();

    const user = await supabase.auth.getUser();
    const userData = user.data.user
  
  const { data, error } = await supabase
    .from('contacts')
    .select('*, contact_user:contact_user_id(id, email, name), user:user_id(id, email, name)')
    .or(`user_id.eq.${userData?.id},contact_user_id.eq.${userData?.id}`)
  
  if (error) {
    console.error('Error fetching contacts:', error)
    return { error }
  }
  
  return { data }
}

// Function to create a new contact request
export async function createContactRequest(contactUserId: string) {
    const supabase = await serverClient();
      const user = await supabase.auth.getUser();
    const userData = user.data.user
  
  const { data, error } = await supabase
    .from('contacts')
    .insert([
      {
        user_id: userData?.id,
        contact_user_id: contactUserId,
        status: 'pending'
      }
    ])
  
  if (error) {
    console.error('Error creating contact request:', error)
    return { error }
  }
  
  return { data }
}

// Function to update contact status (accept/block)
export async function updateContactStatus(contactId: string, newStatus: 'accepted'|'blocked' ) {
  const supabase = await serverClient()
  
  const { data, error } = await supabase
    .from('contacts')
    .update({ status: newStatus })
    .match({ id: contactId })
    // The RLS policies will ensure the user can only update their own contacts
  
  if (error) {
    console.error('Error updating contact status:', error)
    return { error }
  }
  
  return { data }
}

// Function to delete a contact
export async function deleteContact(contactId: string) {
  const supabase = await serverClient()
  
  const { data, error } = await supabase
    .from('contacts')
    .delete()
    .match({ id: contactId })
    // The RLS policies will ensure the user can only delete their own contacts
  
  if (error) {
    console.error('Error deleting contact:', error)
    return { error }
  }
  
  return { data }
}