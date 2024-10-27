import { login, signup } from "./actions";

// To Do: Set up following logic;
// Retrieve the user's information.
// Send that information to Supabase as a signup request, which in turns will send a confirmation email.
// Handle any error that arises.


export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
