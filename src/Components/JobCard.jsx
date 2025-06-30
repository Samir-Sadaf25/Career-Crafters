import { Link } from "react-router";
import {
  MdWork,
  MdLocationOn,
  MdAccessTime,
  MdAttachMoney,
} from "react-icons/md";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    employmentType,
    salaryRange,
    datePosted,
    company_logo,
  } = job;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-3 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Top */}
      <div className="flex items-center gap-4">
        <img
          src={company_logo || "/placeholder-logo.png"}
          alt={company}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h3 className="text-base font-medium text-gray-800">{company}</h3>
          <p className="text-sm text-gray-500">
            Posted {timeAgo(datePosted)}
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      {/* Info Row */}
      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <MdWork /> {employmentType}
        </span>
        <span className="flex items-center gap-1">
          <MdAccessTime /> {jobType}
        </span>
        <span className="flex items-center gap-1">
          <MdAttachMoney className="text-blue-500" />
          ${salaryRange.min} - ${salaryRange.max}/mo
        </span>
        <span className="flex items-center gap-1">
          <MdLocationOn /> {location}
        </span>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Link
          to={`/job-details/${_id}`}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default JobCard;

// Utility to show "Posted 3 days ago"
const timeAgo = (isoDate) => {
  const days =
    Math.floor((new Date() - new Date(isoDate)) / (1000 * 60 * 60 * 24)) || 0;
  return days === 0 ? "Today" : `${days} day${days > 1 ? "s" : ""} ago`;
};
