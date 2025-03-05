'use client'

import { useState, useEffect, createContext, type ReactNode } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { supabaseClient } from '@/lib/supabase/client'
export const AuthContext = createContext({
  user: null as User | null,
  session: null as Session | null,
  loading: true
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      const { data } = await supabaseClient.auth.getSession()
      setSession(data.session)
      setUser(data.session?.user || null)
      setLoading(false)
    }

    // Listen to auth changes
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        setSession(session)
        setUser(session?.user || null)
      }
    )

    checkSession()

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, session, loading }}>
      {children}
    </AuthContext.Provider>
  )
}