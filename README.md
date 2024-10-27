## User Management App with Next.js & Supabase

This is a simple user management app built with Next.js and Supabase. It allows you to create, read, update, and delete users.

Supabase Database - a Postgres database for storing your user data and Row Level Security so data is protected and users can only access their own information.
Supabase Auth - allow users to sign up and log in.
Supabase Storage - users can upload a profile photo.


You can easily pull the database schema down to your local project by running the db pull command. Read the local development docs for detailed instructions.

supabase link --project-ref <project-id>
# You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>
supabase db pull


## Supabase Server-Side Auth
Next.js is a highly versatile framework offering pre-rendering at build time (SSG), server-side rendering at request time (SSR), API routes, and middleware edge-functions.

To better integrate with the framework, we've created the @supabase/ssr package for Server-Side Auth. It has all the functionalities to quickly configure your Supabase project to use cookies for storing user sessions.

## Supabase utilities#
There are two different types of clients in Supabase:

Client Component client - To access Supabase from Client Components, which run in the browser.
Server Component client - To access Supabase from Server Components, Server Actions, and Route Handlers, which run only on the server.