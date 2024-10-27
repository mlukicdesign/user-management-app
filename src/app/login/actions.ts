'use server'

// Server Actions are asynchronous functions that are executed on the server. They can be called in Server and Client Components to handle form submissions and data mutations in Next.js applications.

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supbase/server'

// The `login` function is an asynchronous function that handles user login. It takes a `FormData` object as an argument and uses the `supabase.auth.signIn` method to authenticate the user with Supabase.

export async function login(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        return ('/error')
    }
}

// Retrieve the user's information.
// Send that information to Supabase as a signup request, which in turns will send a confirmation email.
// Handle any error that arises.


export async function signup(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        return ('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/account')
}
 
