import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // ✅ Jobs state
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York, NY",
      time: "1d",
      applied: false,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Biz Solutions",
      location: "San Francisco",
      time: "2d",
      applied: false,
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Data Insights",
      location: "Chicago, IL",
      time: "3d",
      applied: false,
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Creative Agency",
      location: "Austin, TX",
      time: "1w",
      applied: false,
    },
  ]);

  // ✅ Apply handler
  const handleApply = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, applied: true } : job
      )
    );
  };

  const appliedCount = jobs.filter((job) => job.applied).length;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <div className="card wide">
        <div className="header">
          <h2>Dashboard</h2>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <h1>Interview Jobs Apply</h1>

        {/* ✅ STATS */}
        <div className="stats">
          <div className="stat-box">
            <h2>10</h2>
            <p>Interviews</p>
          </div>
          <div className="stat-box">
            <h2>{jobs.length}</h2>
            <p>Jobs</p>
          </div>
          <div className="stat-box">
            <h2>{appliedCount}</h2>
            <p>Applied</p>
          </div>
        </div>

        <h3>Recent Jobs</h3>

        {/* ✅ JOB LIST */}
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div>
              <b>{job.title}</b>
              <p>
                {job.company} · {job.location} · {job.time}
              </p>
            </div>

            {job.applied ? (
              <button className="applied-btn" disabled>
                Applied ✅
              </button>
            ) : (
              <button
                className="apply-btn"
                onClick={() => handleApply(job.id)}
              >
                Apply
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;








