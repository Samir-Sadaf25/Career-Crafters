import { motion } from "framer-motion";
import { useState } from "react";
import { MdWorkOutline, MdExplore, MdTrendingUp } from "react-icons/md";

const LeftPanel = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedSalary, setSelectedSalary] = useState("");

    const handleTypeChange = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    return (
        <div className="bg-base-100 border border-base-200 rounded-xl p-6 w-full md:w-80 h-fit sticky top-4 shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">Job Filters</h2>

            <div className="mb-4">
                <label className="label-text font-medium">Search Company</label>
                <input type="text" placeholder="Search…" className="input input-bordered w-full mt-1" />
            </div>

            <div className="mb-4">
                <label className="label-text font-medium">Categories</label>
                <select className="select select-bordered w-full mt-1" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option disabled value="">Select category</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                    <option>Teaching</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="label-text font-medium">Location</label>
                <select className="select select-bordered w-full mt-1" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                    <option disabled value="">Select location</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Remote</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="label-text font-medium mb-2 block">Job Type</label>
                {["Full Time", "Part Time", "Freelancing", "Fixed Price", "Remote", "Hourly Basis"].map((type) => (
                    <label key={type} className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" checked={selectedTypes.includes(type)} onChange={() => handleTypeChange(type)} />
                            <span>{type}</span>
                        </div>
                        <span className="badge badge-ghost">+{Math.floor(Math.random() * 10) + 1}</span>
                    </label>
                ))}
            </div>

            <div className="mb-4">
                <label className="label-text font-medium mb-2 block">Salary</label>
                {["10k - 15k", "15k - 25k", "More than 25k"].map((range) => (
                    <label key={range} className="flex items-center gap-2 py-1">
                        <input type="radio" className="radio radio-sm" name="salary" value={range} checked={selectedSalary === range} onChange={(e) => setSelectedSalary(e.target.value)} />
                        <span>{range}</span>
                    </label>
                ))}
            </div>

            <button className="btn btn-primary w-full mt-4">Apply Filter</button>
        </div>
    );
};

export default LeftPanel;
