import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import MyApplicationCard from "../Components/MyApplicationCard";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      fetch(`http://localhost:3000/my-applications?userId=${user.uid}`)
        .then((res) => res.json())
        .then((data) => setAppliedJobs(data));
    }
  }, [user?.uid]);

  

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        📁 My Applications
      </h2>
      {appliedJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {appliedJobs.map((job) => (
            <MyApplicationCard
              key={job._id}
              job={job}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-base-content/70">
          You haven't applied to any jobs yet.
        </p>
      )}
    </section>
  );
};

export default MyApplications;
