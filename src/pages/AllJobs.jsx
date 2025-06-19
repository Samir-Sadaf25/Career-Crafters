import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../Components/JobCard";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setError(false);

                const response = await axios.get('http://localhost:3000/jobs')
                console.log(response.data);
                setJobs(response.data);
            } catch (error) {
                setError(true);
            }
        })()
    }, [])

    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
                All Available Jobs
            </h2>

            {loading && <p className="text-center">Loading all jobs...</p>}
            {error && <p className="text-center text-error">Failed to load jobs.</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </section>
    );
};

export default AllJobs;
