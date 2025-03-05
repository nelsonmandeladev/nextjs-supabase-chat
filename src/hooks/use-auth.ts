// hooks/useAuth.ts
import { supabaseServerClient } from '@/lib'
import {  User } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<{ username: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch session and user
    const fetchSession = async () => {
      const { data: { session } } = await supabaseServerClient.auth.getSession()
      
      if (session?.user) {
        // Fetch additional profile information
        const { data: profileData } = await supabaseServerClient
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single()

        setUser(session.user)
        setProfile(profileData)
      }
      
      setLoading(false)
    }

    // Listen to auth changes
    const { data: authListener } = supabaseServerClient.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const { data: profileData } = await supabaseServerClient
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single()

          setUser(session.user)
          setProfile(profileData)
        } else {
          setUser(null)
          setProfile(null)
        }
      }
    )

    fetchSession()

    // Cleanup
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  // Signup method with additional metadata
  const signup = async (email: string, password: string, username: string) => {
    const { data, error } = await supabaseServerClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username
        }
      }
    })

    return { data, error }
  }

  // Update profile method
  const updateProfile = async (profileData: { username: string }) => {
    if (!user) return { error: 'No user logged in' }

    const { error } = await supabaseServerClient
      .from('users')
      .update(profileData)
      .eq('id', user.id)

    return { error }
  }

  return {
    user,
    profile,
    loading,
    signup,
    updateProfile,
    // Other auth methods like login, logout
    login: async (email: string, password: string) => 
      await supabaseServerClient.auth.signInWithPassword({ email, password }),
    logout: async () => await supabaseServerClient.auth.signOut()
  }
}