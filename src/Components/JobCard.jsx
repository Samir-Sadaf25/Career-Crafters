import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    company,
    company_logo,
    salaryRange,
    applicationDeadline,
  } = job;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <div className="card-body">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img src={company_logo} alt={company} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-sm text-base-content">{company}</p>
          </div>
        </div>

        {/* Meta info */}
        <div className="text-sm mt-2 space-y-1">
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Type:</strong> {jobType}</p>
          <p><strong>Salary:</strong> ৳{salaryRange.min} – ৳{salaryRange.max}</p>
          <p><strong>Deadline:</strong> {applicationDeadline}</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/jobs/details/${_id}`} className="btn btn-sm btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
