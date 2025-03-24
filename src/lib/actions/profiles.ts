"use server"

import { serverClient } from "../supabase"

export async function listPublicProfiles() {
    const supabase = await serverClient();
    const user = await supabase.auth.getUser();
    const userData = user.data.user;
    return await supabase
        .from("profiles")
        .select("*")
        .eq('public_profile', true)
        .neq('id', userData?.id);
}