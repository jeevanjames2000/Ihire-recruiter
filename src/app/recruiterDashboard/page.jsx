"use client";
import { Briefcase, PlusCircle, Users, Building, BarChart, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchEmployerDashboard, clearDashboard } from "../../store/dashboardSlice";
import { createSelector } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import theme from '../../../theme.json';
import SendInviteForm from "../../components/invites/SendInviteForm";
export const dynamic = 'force-dynamic';
// Memoized selectors for stability
const selectUserState = createSelector(
  [(state) => state.user || {}],
  (user) => ({
    userInfo: user.userInfo || null,
    userType: user.userType || null,
  })
);

const selectDashboardState = createSelector(
  [(state) => state.dashboard || {}],
  (dashboard) => ({
    profile: dashboard.profile || null,
    notifications: dashboard.notifications || [],
    jobs: dashboard.jobs || [],
    stats: dashboard.stats || { activePostings: 0, totalApplications: 0, views: 0 },
    isLoading: dashboard.isLoading || false,
    error: dashboard.error || null,
  })
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Card Components
const WelcomeCard = ({ profile, userInfo }) => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border flex justify-center items-center border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] w-full"
    initial="hidden"
    animate="visible"
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
  >
    <h4 className="text-xl font-semibold mr-2 text-slate-900 dark:text-white/90 mb-4">
      Welcome, {profile?.name || userInfo?.name || "Employee"}
    </h4>
 <Link
  href="/EmpPosting"
  className="bg-gradient-to-r from-[#48adb9] to-[#3a929d] text-white hover:from-[#3a929d] hover:to-[#2c7d84] px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm w-full sm:w-auto text-center"
>
  <PlusCircle className="inline w-4 h-4 mr-2" />
  Post New Job
</Link>


  </motion.div>
);

const AnalyticsCard = ({ stats }) => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <BarChart className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Analytics Overview</h4>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="text-center p-2">
        <p className="text-2xl font-semibold text-[#48adb9]">{stats.activePostings || 0}</p>
        <p className="text-slate-900 text-sm">Active Postings</p>
      </div>
      <div className="text-center p-2">
        <p className="text-2xl font-semibold text-[#48adb9]">{stats.totalApplications || 0}</p>
        <p className="text-slate-900 text-sm">Total Applicants</p>
      </div>
      <div className="text-center p-2">
        <p className="text-2xl font-semibold text-[#48adb9]">{stats.views || 0}</p>
        <p className="text-slate-900 text-sm">Job Views</p>
      </div>
    </div>
  </motion.div>
);

const JobListingsCard = ({ jobs }) => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <Briefcase className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Job Listings</h4>
    <p className="text-slate-900 mb-4 text-sm">
      {jobs.length || 0} jobs available {jobs.length === 0 && "No jobs available yet"}
    </p>
    <Link href="/joblisting" className="text-[#48adb9] hover:text-[#3a929d] font-semibold transition-colors text-sm">
      Explore Jobs →
    </Link>
  </motion.div>
);

const PostingsCard = ({ jobs }) => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <PlusCircle className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Your Postings</h4>
    <p className="text-slate-900 mb-4 text-sm">
      {jobs.length || 0} active jobs {jobs.length === 0 && "No active jobs yet"}
    </p>
    <Link href="/EmpPosting" className="text-[#48adb9] hover:text-[#3a929d] font-semibold transition-colors text-sm">
      Manage Jobs →
    </Link>
  </motion.div>
);

const ApplicantsCard = ({ stats }) => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <Users className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Recent Applicants</h4>
    <p className="text-slate-900 mb-4 text-sm">
      {stats.totalApplications || 0} new applicants {stats.totalApplications === 0 && "No applicants yet"}
    </p>
    <Link href="/applicants" className="text-[#48adb9] hover:text-[#3a929d] font-semibold transition-colors text-sm">
      Review Applicants →
    </Link>
  </motion.div>
);

const CompanyProfileCard = ({ profile, userInfo }) => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <Building className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Company Profile</h4>
    <p className="text-slate-900 mb-4 text-sm">
      {profile?.company_name ? `Manage ${profile.company_name}` : "Update your company details"}
    </p>
    <Link href="/profile" className="text-[#48adb9] hover:text-[#3a929d] font-semibold transition-colors text-sm">
      Edit Profile →
    </Link>
  </motion.div>
);

const JobPerformanceCard = () => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <BarChart className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Job Performance</h4>
    <p className="text-slate-900 mb-4 text-sm">Track job views and applications</p>
    <Link href="/jobperformance" className="text-[#48adb9] hover:text-[#3a929d] font-semibold transition-colors text-sm">
      View Metrics →
    </Link>
  </motion.div>
);

const TeamCollaborationCard = () => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <Share2 className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Team Collaboration</h4>
    <p className="text-slate-900 mb-4 text-sm">Invite team members to collaborate</p>
    <Link href="/teamcollaboration" className="text-[#48adb9] hover:text-[#3a929d] font-semibold transition-colors text-sm">
      Invite →  
    </Link>
  </motion.div>
);

const InterviewsCard = ({ notifications }) => (
  <motion.div 
    variants={itemVariants}
    className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
  >
    <Calendar className="text-[#48adb9] w-6 h-6 mb-3" />
    <h4 className="text-xl font-semibold text-slate-900 dark:text-white/90 mb-4">Scheduled Interviews</h4>
    <p className="text-slate-900 mb-4 text-sm">
      {notifications.filter((n) => n.type === "interview")?.length || 0} upcoming interviews
      {notifications.filter((n) => n.type === "interview")?.length === 0 && " No upcoming interviews"}
    </p>
    <Link href="/interviews" className="text-[#48adb9] hover:text-[#3a929d] font-semibold transition-colors text-sm">
      View Schedule →
    </Link>
  </motion.div>
);

const EmpDashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo, userType } = useSelector(selectUserState);
  const { profile, notifications, jobs, stats, isLoading, error } = useSelector(selectDashboardState);
  console.log("profile", profile);
  console.log("jobs", jobs);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const token = userInfo?.token || (typeof window !== "undefined" ? window.localStorage.getItem("token") : null);

  useEffect(() => {
    // Authentication and role check (commented out as per your code)
    const normalizedUserType = userType?.toLowerCase();
    const allowedRoles = ["employer", "admin", "company"];

    // Timeout for API call
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setTimeoutReached(true);
        toast.error("Request timed out. Please try again.");
      }
    }, 10000);

    dispatch(fetchEmployerDashboard());

    return () => {
      clearTimeout(timeoutId);
      dispatch(clearDashboard());
    };
  }, [dispatch, router, userInfo, userType, token]);

  // Error handling (commented out as per your code)
  // if (error) { ... }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50 p-4">
      <motion.div 
        className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white/90 lg:mb-7">
         Recruiter Dashboard
        </h3>
        {isLoading && !timeoutReached ? (
          <div className="flex flex-col justify-center items-center py-8 space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#48adb9]"></div>
            <span className="text-slate-500 text-sm">Loading dashboard...</span>
          </div>
        ) : (
          <>
            <WelcomeCard profile={profile} userInfo={userInfo} />
            <div className=" mx-auto mt-6">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnalyticsCard stats={stats} />
                  <JobListingsCard jobs={jobs} />
                  <PostingsCard jobs={jobs} />
                  <ApplicantsCard stats={stats} />
                  <CompanyProfileCard profile={profile} userInfo={userInfo} />
                  <JobPerformanceCard />
                  <TeamCollaborationCard />
                  <InterviewsCard notifications={notifications} />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default EmpDashboard;