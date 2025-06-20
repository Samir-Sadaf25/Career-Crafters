import { Link } from "react-router";
import { MdWork, MdLocationOn, MdAccessTime, MdOutlineAccessTime, MdStar, MdVerified } from "react-icons/md";

const JobCard = ({ job }) => {
  const {
    title,
    company,
    location,
    jobType,
    employmentType,
    experience,
    salaryRange,
    description,
    requirements,
    datePosted,
    company_logo
  } = job;

  return (
    <div className="bg-base-100 rounded-xl shadow-md border border-base-200 p-5 space-y-4 hover:shadow-lg transition duration-300">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={company_logo || "/placeholder-logo.png"} alt={company} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-base-content">{company}</h3>
            <p className="text-xs text-base-content/60">{new Date(datePosted).toDateString()}</p>
          </div>
        </div>
        <MdVerified className="text-success text-xl" title="Verified" />
      </div>

      {/* Job Info */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-primary">{title}</h2>
        <p className="text-sm text-base-content/80 line-clamp-2">{description}</p>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-2 text-sm text-base-content/80">
        <div className="flex items-center gap-1"><MdWork /> {employmentType}</div>
        <div className="flex items-center gap-1"><MdOutlineAccessTime /> {experience}</div>
        <div className="flex items-center gap-1"><MdAccessTime /> {jobType}</div>
        <div className="flex items-center gap-1">
          💵 ${salaryRange.min} - ${salaryRange.max}
        </div>
        <div className="flex items-center gap-1"><MdLocationOn /> {location}</div>
        <div className="flex items-center gap-1"><MdStar className="text-warning" /> 4.8</div>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {requirements?.slice(0, 2).map((skill, idx) => (
          <span key={idx} className="badge badge-outline badge-sm bg-blue-100">{skill}</span>
        ))}
      </div>

      {/* CTA */}
      <div className="text-right">
        <Link to={`/jobs/details/${title.toLowerCase().replace(/\s+/g, "-")}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
