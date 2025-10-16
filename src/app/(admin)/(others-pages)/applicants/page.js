'use client';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  fetchApplicantsByUserJobs,
  clearApplicantsState,
  updateApplicantStatus,
} from '../../../../store/jobsSlice';
import { ToastContainer, toast } from 'react-toastify';
import { FaSearch, FaList, FaTh } from 'react-icons/fa';

// Applicant Row Component
const ApplicantRow = ({ applicant, index, showJobId, onAction }) => (
  <tr className="border-t border-gray-200 hover:bg-slate-50">
    <td className="px-4 py-2 text-slate-900">{index + 1}</td>
    {showJobId && <td className="px-4 py-2 text-slate-600">{applicant.jobId || 'N/A'}</td>}
    <td className="px-4 py-2 text-slate-900">{applicant.fullName || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.email || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.phone || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.location || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.experience || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.jobTitle || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.company || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.qualification || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.specialization || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.university || 'N/A'}</td>
    <td className="px-4 py-2 text-slate-600">{applicant.skills.join(', ') || 'N/A'}</td>
    <td className="px-4 py-2">
      {applicant.resume ? (
        <a
          href={`/api/files/${applicant.resume.split('/').pop()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48adb9] hover:text-[#3a929d] underline"
        >
          View
        </a>
      ) : (
        <span className="text-slate-500">N/A</span>
      )}
    </td>
    <td className="px-4 py-2">
      {applicant.coverLetter ? (
        <a
          href={`/api/files/${applicant.coverLetter.split('/').pop()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48adb9] hover:text-[#3a929d] underline"
        >
          View
        </a>
      ) : (
        <span className="text-slate-500">N/A</span>
      )}
    </td>
    <td className="px-4 py-2">
      {applicant.linkedIn ? (
        <a
          href={applicant.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48adb9] hover:text-[#3a929d] underline"
        >
          View
        </a>
      ) : (
        <span className="text-slate-500">N/A</span>
      )}
    </td>
    <td className="px-4 py-2 text-slate-600">
      {applicant.createdAt
        ? new Date(applicant.createdAt).toLocaleDateString()
        : 'N/A'}
    </td>
    <td className="px-4 py-2 font-medium">
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          applicant.status === 'Shortlisted'
            ? 'bg-green-100 text-green-700'
            : applicant.status === 'Interview Scheduled'
            ? 'bg-blue-100 text-blue-700'
            : applicant.status === 'Rejected'
            ? 'bg-red-100 text-red-700'
            : 'bg-slate-100 text-slate-700'
        }`}
      >
        {applicant.status || 'Pending'}
      </span>
    </td>
    <td className="px-4 py-2 flex gap-2">
      <button
        onClick={() => onAction(applicant, 'Shortlisted')}
        className="px-2 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded hover:from-green-600 hover:to-green-700 transition-all duration-300"
      >
        Shortlist
      </button>
      <button
        onClick={() => onAction(applicant, 'Interview Scheduled')}
        className="px-2 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        Interview
      </button>
      <button
        onClick={() => onAction(applicant, 'Rejected')}
        className="px-2 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm rounded hover:from-red-600 hover:to-red-700 transition-all duration-300"
      >
        Reject
      </button>
    </td>
  </tr>
);

// Applicant Card Component
const ApplicantCard = ({ applicant, showJobId, onAction }) => (
  <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
    {showJobId && (
      <p className="text-slate-900">
        <strong>Job ID:</strong> {applicant.jobId || 'N/A'}
      </p>
    )}
    <p className="text-slate-900">
      <strong>Name:</strong> {applicant.fullName || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Email:</strong> {applicant.email || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Phone:</strong> {applicant.phone || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Location:</strong> {applicant.location || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Experience:</strong> {applicant.experience || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Job Title:</strong> {applicant.jobTitle || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Company:</strong> {applicant.company || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Qualification:</strong> {applicant.qualification || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Specialization:</strong> {applicant.specialization || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>University:</strong> {applicant.university || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Skills:</strong> {applicant.skills.join(', ') || 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Resume:</strong>{' '}
      {applicant.resume ? (
        <a
          href={`/api/files/${applicant.resume.split('/').pop()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48adb9] hover:text-[#3a929d] underline"
        >
          View
        </a>
      ) : (
        <span className="text-slate-500">N/A</span>
      )}
    </p>
    <p className="text-slate-600">
      <strong>Cover Letter:</strong>{' '}
      {applicant.coverLetter ? (
        <a
          href={`/api/files/${applicant.coverLetter.split('/').pop()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48adb9] hover:text-[#3a929d] underline"
        >
          View
        </a>
      ) : (
        <span className="text-slate-500">N/A</span>
      )}
    </p>
    <p className="text-slate-600">
      <strong>LinkedIn:</strong>{' '}
      {applicant.linkedIn ? (
        <a
          href={applicant.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#48adb9] hover:text-[#3a929d] underline"
        >
          View
        </a>
      ) : (
        <span className="text-slate-500">N/A</span>
      )}
    </p>
    <p className="text-slate-600">
      <strong>Applied On:</strong>{' '}
      {applicant.createdAt
        ? new Date(applicant.createdAt).toLocaleDateString()
        : 'N/A'}
    </p>
    <p className="text-slate-600">
      <strong>Status:</strong>{' '}
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          applicant.status === 'Shortlisted'
            ? 'bg-green-100 text-green-700'
            : applicant.status === 'Interview Scheduled'
            ? 'bg-blue-100 text-blue-700'
            : applicant.status === 'Rejected'
            ? 'bg-red-100 text-red-700'
            : 'bg-slate-100 text-slate-700'
        }`}
      >
        {applicant.status || 'Pending'}
      </span>
    </p>
    <div className="flex gap-2 mt-4">
      <button
        onClick={() => onAction(applicant, 'Shortlisted')}
        className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white rounded text-sm hover:from-green-600 hover:to-green-700 transition-all duration-300"
      >
        Shortlist
      </button>
      <button
        onClick={() => onAction(applicant, 'Interview Scheduled')}
        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        Interview
      </button>
      <button
        onClick={() => onAction(applicant, 'Rejected')}
        className="px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white rounded text-sm hover:from-red-600 hover:to-red-700 transition-all duration-300"
      >
        Reject
      </button>
    </div>
  </div>
);

// Main Component
const AllApplicants = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('table');
  const fetchedRef = useRef(false);

  const { userInfo, userType } = useSelector((state) => state.user || {});
  const jobsSlice = useSelector((state) => state.jobs || {}, shallowEqual);
  const { applicants = [], applicantsStatus = 'idle', applicantsError = null } = jobsSlice;

  useEffect(() => {
    if (fetchedRef.current) return;
    // if (!userInfo?.token || userType !== 'employer') {
    //   toast.error('Please log in as an employer to view applicants', {
    //     position: 'top-right',
    //     autoClose: 3000,
    //   });
    //   router.push('/login');
    //   return;
    // }

    fetchedRef.current = true;
    dispatch(clearApplicantsState());
    if (userInfo?.id) {
      dispatch(fetchApplicantsByUserJobs(userInfo.id));
    }
  }, [dispatch, userInfo, userType, router]);

// Compute normalized applicants without side effects
const normalizedApplicants = useMemo(() => {
  const arrayForm = Array.isArray(applicants) ? applicants : Object.values(applicants).flat();
  const normalized = arrayForm.map((applicant) => ({
    ...applicant,
    skills: Array.isArray(applicant.skills)
      ? applicant.skills
      : applicant.skills?.replace(/["]/g, '').split(',') || [],
    resume: applicant.resume?.replace(/\\/g, '/'),
    coverLetter: applicant.coverLetter?.replace(/\\/g, '/'),
    status: applicant.status || 'Pending',
  }));

  // Remove duplicates
  const uniqueMap = new Map();
  return normalized.filter((applicant) => {
    if (uniqueMap.has(applicant.id)) return false;
    uniqueMap.set(applicant.id, true);
    return true;
  });
}, [applicants]);


  const handleApplicantAction = async (applicant, newStatus) => {
    try {
      await dispatch(
        updateApplicantStatus({
          applicationId: applicant.id,
          status: newStatus,
        })
      ).unwrap();
      toast.success(`${applicant.fullName} has been marked as ${newStatus}.`, {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error || `Failed to update status for ${applicant.fullName}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  const filteredApplicants = useMemo(() => {
    return normalizedApplicants.filter((applicant) =>
      [
        applicant.fullName,
        applicant.email,
        applicant.skills.join(','),
        applicant.jobTitle,
        applicant.company,
        applicant.qualification,
        applicant.specialization,
        applicant.university,
      ].some((field) => field?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [normalizedApplicants, searchTerm]);

//   if (!userInfo?.token || userType !== 'employer') {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-red-600 text-lg">
//           Access denied: Only employers can view applicants.
//         </p>
//       </div>
//     );
//   }

  if (applicantsStatus === 'loading') {
    return <p className="text-slate-500 text-lg">Loading applicants...</p>;
  }

  if (applicantsStatus === 'failed') {
    return (
      <p className="text-red-600 text-lg">
        {applicantsError?.includes('404')
          ? 'No applicants found for your jobs'
          : `Error: ${applicantsError}`}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">All Applicants</h1>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by name, email, skills, etc."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48adb9]/20 focus:border-[#48adb9] shadow-sm pl-10"
            />
            <FaSearch className="absolute left-3 top-3.5 text-slate-500" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-lg ${
                viewMode === 'table' 
                  ? 'bg-gradient-to-r from-[#48adb9] to-[#3a929d] text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              } transition-all duration-300`}
            >
              <FaList />
            </button>
            <button
              onClick={() => setViewMode('card')}
              className={`p-2 rounded-lg ${
                viewMode === 'card' 
                  ? 'bg-gradient-to-r from-[#48adb9] to-[#3a929d] text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              } transition-all duration-300`}
            >
              <FaTh />
            </button>
          </div>
        </div>

        {filteredApplicants.length === 0 ? (
          <p className="text-slate-500 text-lg">No applicants found for your jobs.</p>
        ) : viewMode === 'table' ? (
          <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden bg-white">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">#</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Job ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Phone</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Location</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Experience</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Job Title</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Company</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Qualification</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Specialization</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">University</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Skills</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Resume</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Cover Letter</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">LinkedIn</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Applied On</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.map((applicant, index) => (
                <ApplicantRow
                  key={applicant.id}
                  applicant={applicant}
                  index={index}
                  showJobId={true}
                  onAction={handleApplicantAction}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredApplicants.map((applicant) => (
              <ApplicantCard
                key={applicant.id}
                applicant={applicant}
                showJobId={true}
                onAction={handleApplicantAction}
              />
            ))}
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AllApplicants;