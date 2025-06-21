import React, { use, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {

    const { id } = useParams();
    const { user } = use(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const applicationData = Object.fromEntries(formData.entries());
        console.log(applicationData);

        const applicantsData = {
            name:applicationData.fullName,
            phone:applicationData.phone,
            jobId: id,
            email: user.email,
        }
        axios.post('http://localhost:3000/applications',applicantsData)
        .then(res => {
           Swal.fire({
                    title: "Applied Successfully",
                    icon: "success",
                    draggable: true

                });
                form.reset();
        })
        .catch(error => console.log(error))
    };

    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Apply for This Job</h2>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-base-100 border border-base-200 rounded-lg p-6 space-y-6 shadow-sm">

                <div>
                    <label className="label-text font-medium">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        className="input input-bordered w-full mt-1"

                        required
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="label-text font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered w-full mt-1"

                            required
                        />
                    </div>
                    <div>
                        <label className="label-text font-medium">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="input input-bordered w-full mt-1"

                        
                        />
                    </div>
                </div>

                <div>
                    <label className="label-text font-medium">Upload Resume (PDF)</label>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        className="file-input file-input-bordered w-full mt-1"

                    
                    />
                </div>

                <div>
                    <label className="label-text font-medium">Cover Letter</label>
                    <textarea
                        name="coverLetter"
                        rows="4"
                        className="textarea textarea-bordered w-full mt-1"

                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="label-text font-medium">Expected Salary (USD)</label>
                        <input
                            type="number"
                            name="expectedSalary"
                            className="input input-bordered w-full mt-1"


                        />
                    </div>
                    <div>
                        <label className="label-text font-medium">Portfolio / Website</label>
                        <input
                            type="url"
                            name="portfolioURL"
                            className="input input-bordered w-full mt-1"

                        />
                    </div>
                </div>

                <div className="text-right">
                    <button type="submit" className="btn btn-primary mt-4">Submit Application</button>
                </div>
            </form>
        </section>
    );
};

export default JobApply;
