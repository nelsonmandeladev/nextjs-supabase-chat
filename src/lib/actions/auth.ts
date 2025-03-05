import { createServerSupabaseClient } from '../supabase/server'
import { revalidatePath } from 'next/cache'

export async function signUp(formData: FormData) {
  const supabase = createServerSupabaseClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/')
  return { success: true }
}

export async function signIn(formData: FormData) {
  const supabase = createServerSupabaseClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/')
  return { success: true }
}

export async function signOut() {
  const supabase = createServerSupabaseClient()
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    return { error: error.message }
  }

  revalidatePath('/')
  return { success: true }
} 