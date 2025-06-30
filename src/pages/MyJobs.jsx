import { use, useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import { AuthContext } from "../Provider/AuthContext";
const MyJobs = () => {
  const { user } = use(AuthContext)
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      fetch(`http://localhost:3000/my-jobs?userId=${user.uid}`)
        .then((res) => res.json())
        .then((data) => setMyJobs(data))
        .catch((err) => console.error("Failed to fetch jobs:", err));
    }
  }, [user?.uid]);

  return (
    <section className="container mx-auto px-4 py-10 mb-60">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center ">
        📋 My Posted Jobs
      </h2>

      {myJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {myJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-center text-base-content/70">
          You haven't posted any jobs yet.
        </p>
      )}
    </section>
  );
};

export default MyJobs;
