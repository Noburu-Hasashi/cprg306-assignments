"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

return (
    <div>
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
        <div>
                {user ? (
                    <p>Signed in as {user && user.displayName}, {user?.email}<br/>
                    <Link href="week-8/shopping-list">Continue to your shopping list</Link><br/>
                    <button onClick={firebaseSignOut}>Sign Out</button></p>
                ) : (
                    <div>
                        <button onClick={gitHubSignIn}><h1>Sign In with GitHub</h1></button>
                    </div>
                )}
        </div>
    </div>
);
}