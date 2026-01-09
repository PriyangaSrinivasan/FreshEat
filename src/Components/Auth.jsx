    // src/components/AuthComponent.js
    import React, { useState } from 'react';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
    // import firebaseApp from '../firebase'; // Assuming you exported 'app' as default

    const auth = getAuth(firebaseApp);

    const Auth =()=> {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User logged in successfully!');
        } catch (error) {
          console.error('Error logging in:', error.message);
        }
      };

      return (
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    }

    export default Auth;