import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import LeftPanel from "../Components/LeftPanel";

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
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">All Available Jobs</h2>

            <div className="flex flex-col md:flex-row gap-8">
                <LeftPanel></LeftPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    {jobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllJobs;
