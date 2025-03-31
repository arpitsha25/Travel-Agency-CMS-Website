import { useEffect } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          router.push("/admin");
          toast.error("Session expired. Please log in again.");
        }
      } catch (error) {
        localStorage.removeItem("token");
        router.push("/admin");
        toast.error("Invalid token. Please log in again.");
      }
    };

    checkToken(); // Run initially
    const interval = setInterval(checkToken, 10000); // Check every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>Welcome to Dashboard</div>;
};

export default Dashboard;
