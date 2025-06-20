import { FaMapMarkerAlt } from "react-icons/fa";

const JobDetailsAside = ({ company, company_logo, location }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Company Logo */}
      <img
        src={company_logo || "/placeholder-logo.png"}
        alt={company}
        className="w-16 h-16 rounded-full object-cover shadow"
      />

      {/* Company Name */}
      <h3 className="text-lg font-bold text-base-content">{company}</h3>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-base-content/70">
        <FaMapMarkerAlt className="text-primary" />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default JobDetailsAside;
