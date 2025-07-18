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
                
                setJobs(response.data);
            } catch (error) {
                setError(true);
            }
        })()
    }, [])

    return (
        <section className="container mx-auto px-4 py-10 mb-24">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">Popular Jobs</h2>
            <p className='text-center text-gray-500 mb-20'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            {loading && <p className="text-center">Loading jobs...</p>}
            {error && <p className="text-center text-error">Something went wrong!</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.slice(0, 6).map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>

            <div className="text-center mt-10">
                <Link to="/AllJobs">
                    <button className="btn btn-outline btn-primary">See All Jobs</button>
                </Link>
            </div>
        </section>
    );
};

export default Jobs;