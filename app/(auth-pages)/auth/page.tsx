// pages/auth/callback.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createBrowserClient } from '@supabase/ssr';

const supabase = createBrowserClient('your-supabase-url', 'your-anon-key');

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      // Get the session from Supabase
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error getting session:', error);
        // Optionally redirect to an error page or show a message
      } else if (session) {
        console.log('User session:', session);
        // Redirect to a protected route or dashboard
        router.push('/dashboard'); // Change this to your desired route
      } else {
        // No session found, handle accordingly (e.g., redirect to login)
        router.push('/login'); // Change this to your login route
      }
    };

    handleAuth();
  }, [router]);

  return <div>Loading...</div>; // Show a loading state while processing
};

export default AuthCallback;
