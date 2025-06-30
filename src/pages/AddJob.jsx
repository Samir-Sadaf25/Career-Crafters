import axios from "axios";
import { use, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";

const AddJob = () => {
  const [step, setStep] = useState(1);
  const {user} = use(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "Remote",
    employmentType: "Full-Time",
    experience: "",
    qualification: "",
    description: "",
    responsibilities: "",
    requirements: [""],
    salaryRange: { min: "", max: "" },
    company_logo: "",
    datePosted: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = () => {
    console.log("🟢 Submitting form", form);
    axios
      .post("http://localhost:3000/jobs", {...form,userId:user.uid})
      .then((res) => {
        Swal.fire({
          title: "Posted Successfully",
          icon: "success",
          draggable: true,
        });
        navigate("/AllJobs");
      })
      .catch((error) =>{
        
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [outer, inner] = name.split(".");
      setForm((prev) => ({
        ...prev,
        [outer]: { ...prev[outer], [inner]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const updateRequirement = (i, value) => {
    const updated = [...form.requirements];
    updated[i] = value;
    setForm((prev) => ({ ...prev, requirements: updated }));
  };

  const addRequirement = () =>
    setForm((prev) => ({
      ...prev,
      requirements: [...prev.requirements, ""],
    }));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Input
              label="Job Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
            <Input
              label="Company"
              name="company"
              value={form.company}
              onChange={handleChange}
            />
            <Input
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
            />
            <Select
              label="Job Type"
              name="jobType"
              value={form.jobType}
              onChange={handleChange}
              options={["Remote", "On Site", "Hybrid"]}
            />
            <Select
              label="Employment Type"
              name="employmentType"
              value={form.employmentType}
              onChange={handleChange}
              options={["Full-Time", "Part-Time", "Contract"]}
            />
          </>
        );
      case 2:
        return (
          <>
            <Input
              label="Experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
            />
            <Input
              label="Qualification"
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
            />
            <Textarea
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            <Textarea
              label="Responsibilities"
              name="responsibilities"
              value={form.responsibilities}
              onChange={handleChange}
            />
            <div>
              <label className="label">Requirements</label>
              {form.requirements.map((req, i) => (
                <input
                  key={i}
                  type="text"
                  className="input input-bordered w-full mb-2"
                  value={req}
                  onChange={(e) => updateRequirement(i, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                    }
                  }}
                />
              ))}
              <button
                type="button"
                className="btn btn-sm"
                onClick={addRequirement}
              >
                + Add
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Input
              label="Salary Min"
              name="salaryRange.min"
              value={form.salaryRange.min}
              onChange={handleChange}
              type="number"
            />
            <Input
              label="Salary Max"
              name="salaryRange.max"
              value={form.salaryRange.max}
              onChange={handleChange}
              type="number"
            />
            <Input
              label="Company Logo URL"
              name="company_logo"
              value={form.company_logo}
              onChange={handleChange}
            />
            <Input
              label="Date Posted"
              name="datePosted"
              value={form.datePosted}
              onChange={handleChange}
              type="date"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">📝 Add Job</h2>
      <div>
        {renderStep()}

        <div className="mt-6 flex justify-between">
          <button
            type="button"
            className="btn btn-outline"
            disabled={step === 1}
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </button>

          {step < 3 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setStep((s) => s + 1)}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddJob;

const Input = ({ label, ...rest }) => (
  <div className="mb-4">
    <label className="label">{label}</label>
    <input {...rest} className="input input-bordered w-full" />
  </div>
);

const Textarea = ({ label, ...rest }) => (
  <div className="mb-4">
    <label className="label">{label}</label>
    <textarea {...rest} className="textarea textarea-bordered w-full" />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div className="mb-4">
    <label className="label">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="select select-bordered w-full"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
