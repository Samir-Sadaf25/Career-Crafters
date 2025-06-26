import React, { useState, useRef, use } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const MyApplicationCard = ({ job }) => {
    const {user} = use(AuthContext);
    const {
        _id,
        title,
        company,
        location,
        jobType,
        employmentType,
        salaryRange,
        datePosted,
        description,
        company_logo
    } = job;


    const [isRightRevealed, setIsRightRevealed] = useState(false);
    const x = useMotionValue(0);
    const isDragging = useRef(false);
    const rightActionsOpacity = useTransform(x, [0, 40, 80], [0, 0.5, 1]);

    const handleDragEnd = () => {
        const xValue = x.get();
        isDragging.current = false;

        if (xValue < -40) {
            setIsRightRevealed(true);
            //setIsLeftRevealed(false);
        } else if (xValue > 40) {
            //setIsLeftRevealed(true);
            setIsRightRevealed(false);
        } else {
            //setIsLeftRevealed(false);
            setIsRightRevealed(false);
        }
    };

    const resetCard = () => {
        //setIsLeftRevealed(false);
        setIsRightRevealed(false);
        x.set(0);
    };

    const handleAction = (action) => {
        if (action === "Delete") {
            if (window.confirm("Withdraw your application for this job?")) {
                fetch(`http://localhost:3000/applications/${job.jobId}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        //onWithdraw(_id); // this removes the job from UI
                        resetCard();
                    });
            }
        } else {
            resetCard();
        }
    };
    return (
        <div className="relative overflow-hidden bg-base-100 border border-base-200 rounded-xl shadow-sm">
            {/* Swipe-to-Delete Action */}
            <div
                className="absolute top-0 right-0 h-full flex items-center justify-end pr-4 bg-red-500 w-1/3"
                style={{ opacity: rightActionsOpacity }}
            >
                <button

                    className="p-2 bg-red-600 text-white rounded-full"
                >
                    <AiOutlineDelete className="text-xl" />
                </button>
            </div>


            {/* Right Actions */}
            <div
                className="absolute top-0 right-0 h-full flex items-center justify-end pr-[19px] bg-red-500 w-1/3"
                style={{ opacity: rightActionsOpacity }}
            >
                <button
                    onClick={() => handleAction("Delete")}
                    className="p-2 bg-red-600 text-white rounded-full"
                >
                    <AiOutlineDelete className="text-[1.5rem]" />
                </button>
            </div>


            <AnimatePresence initial={false}>
                <motion.div
                    className="bg-white dark:bg-slate-800 p-5 w-full z-10 relative"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragStart={() => (isDragging.current = true)}
                    onDragEnd={handleDragEnd}
                    initial={{ x: 0 }}
                    animate={{
                        x: isRightRevealed ? -80 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 25,
                    }}
                    style={{ x }}
                >

                    <div
                        className="flex items-center gap-3 cursor-grab active:cursor-grabbing"
                        onClick={() => {
                            if (!isDragging.current) resetCard();
                        }}
                    >
                        <img
                            src={company_logo || "/placeholder-logo.png"}
                            alt={company}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-grow">
                            <h3 className="font-semibold text-base-content">{title}</h3>
                            <p className="text-sm text-base-content/70">{company} — {location}</p>
                            <p className="text-xs text-base-content/60">{new Date(datePosted).toDateString()}</p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <p className="text-sm text-base-content/80 line-clamp-2">{description}</p>
                        <div className="text-xs text-base-content/60 flex flex-wrap gap-2">
                            <span>{employmentType}</span>
                            <span>• {jobType}</span>
                            <span>• ${salaryRange?.min} - ${salaryRange?.max}</span>
                        </div>
                        <div className="text-right">

                            <Link to={`/jobs/details/${title.toLowerCase().replace(/\s+/g, "-")}`} className="btn btn-primary btn-sm mt-2">
                                View Details
                            </Link>
                        </div>
                        <p className="text-gray-600 text-xs text-center dark:text-[#abc2d3]">Swipe to withdraw application</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MyApplicationCard;
