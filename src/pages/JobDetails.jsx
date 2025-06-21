import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaGraduationCap,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";
import JobDetailsAside from "../Components/JobDetailsAside";


const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    company,
    location,
    employmentType,
    jobType,
    experience,
    qualification,
    salaryRange,
    datePosted,
    description,
    responsibilities,
    requirements,
    company_logo,
    _id
  } = job;

  return (
    <section className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Left Sticky Sidebar */}
      <div className="md:w-1/3 lg:sticky top-4 h-fit bg-base-100 border border-base-200 rounded-xl p-6 shadow-sm">
        <JobDetailsAside
          title={title}
          company={company}
          location={location}
          jobType={jobType}
          employmentType={employmentType}
          experience={experience}
          qualification={qualification}
          salaryRange={salaryRange}
          datePosted={datePosted}
          company_logo={company_logo}
        />
      </div>

      {/* Main Content */}

      <div className="md:w-2/3 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-base-100 hover:bg-blue-100 border border-base-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <FaBriefcase className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Employment Type</p>
              <p className="font-semibold text-base-content">{employmentType}</p>
            </div>
          </div>

          <div className="bg-base-100 hover:bg-blue-100 border border-base-200 rounded-xl p-4 flex items-center gap-4 shadow-sm ">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Location</p>
              <p className="font-semibold text-base-content">{location}</p>
            </div>
          </div>

          <div className="bg-base-100 hover:bg-blue-100 border border-base-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <FaClock className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Job Type</p>
              <p className="font-semibold text-base-content">{jobType}</p>
            </div>
          </div>

          <div className="bg-base-100 hover:bg-blue-100 border border-base-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <FaClock className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Experience</p>
              <p className="font-semibold text-base-content">{experience}</p>
            </div>
          </div>

          <div className="bg-base-100 hover:bg-blue-100 border border-base-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <FaGraduationCap className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Qualification</p>
              <p className="font-semibold text-base-content">{qualification}</p>
            </div>
          </div>

          <div className="bg-base-100 hover:bg-blue-100 border border-base-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <FaMoneyBillWave className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Salary Range</p>
              <p className="font-semibold text-base-content">
                ${salaryRange.min} - ${salaryRange.max}
              </p>
            </div>
          </div>

          <div className="bg-base-100 hover:bg-blue-100 border border-base-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <FaCalendarAlt className="text-primary text-xl" />
            <div>
              <p className="text-sm text-base-content/60">Date Posted</p>
              <p className="font-semibold text-base-content">
                {new Date(datePosted).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-primary mb-2">Job Description</h2>
          <p className="text-base-content/90 whitespace-pre-line">{description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-2">Responsibilities and Duties</h2>
          <p className="text-base-content/90 whitespace-pre-line">{responsibilities}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-2">Required Experience, Skills & Qualifications</h2>
          <ul className="list-disc list-inside text-base-content/90 space-y-1">
            {requirements?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-right">
          <Link to={`/apply-job/${_id}`}>
            <button className="btn btn-primary mt-4">Apply Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
