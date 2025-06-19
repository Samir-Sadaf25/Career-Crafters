import { Link } from "react-router";
import { motion } from "motion/react"
import { MdAttachMoney, MdCalendarToday, MdLocationOn, MdWork } from "react-icons/md";
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
        <motion.div
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border border-base-200"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="card-body space-y-2">
                <div className="flex items-center gap-3">
                    <img src={company_logo} alt={company} className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-sm text-base-content/70">{company}</p>
                    </div>
                </div>

                <div className="text-sm text-base-content/80 space-y-1">
                    <p className="flex items-center gap-2"><MdLocationOn className="text-primary" /> {location}</p>
                    <p className="flex items-center gap-2"><MdWork className="text-primary" /> {jobType}</p>
                    <p className="flex items-center gap-2"><MdCalendarToday className="text-primary" /> Deadline: {applicationDeadline}</p>
                    <p className="flex items-center gap-2">
                        <MdAttachMoney className="text-primary" />
                        ৳{salaryRange.min} - ৳{salaryRange.max}
                    </p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/jobs/details/${_id}`} className="btn btn-sm btn-outline btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;
