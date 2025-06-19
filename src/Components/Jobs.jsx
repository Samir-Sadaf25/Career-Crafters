import axios from 'axios';
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { Link } from 'react-router';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

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
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Available Jobs</h2>

            {loading && <p>Loading...</p>}
            {error && <p className="text-error">Failed to load jobs.</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.slice(0, 6).map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/Alljobs">
                    <button className="btn btn-outline btn-primary">See All Jobs</button>
                </Link>
            </div>
        </div>

    );
};

export default Jobs;