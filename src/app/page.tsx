"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkUserSession } from "@/lib/auth";

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const loggedIn = await checkUserSession();

      if (loggedIn) {
        router.push("/recruiterDashboard");
      } else {
        router.push("/login");
      }
    };

    verifyUser().finally(() => setLoading(false));
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      {loading && (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-sm font-medium">
            Checking session...
          </p>
        </div>
      )}
    </div>
  );
}
