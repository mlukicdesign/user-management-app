## User Management App with Next.js & Supabase

This is a simple user management app built with Next.js and Supabase. It allows you to create, read, update, and delete users.

Supabase Database - a Postgres database for storing your user data and Row Level Security so data is protected and users can only access their own information.
Supabase Auth - allow users to sign up and log in.
Supabase Storage - users can upload a profile photo.

W2L3CNHfGDoe1IKP

You can easily pull the database schema down to your local project by running the db pull command. Read the local development docs for detailed instructions.

supabase link --project-ref <project-id>
# You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>
supabase db pull
