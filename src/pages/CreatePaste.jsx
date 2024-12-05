import { useState } from "react";
import { initialFormData } from "../utils/data";
import { useSearchParams } from "react-router-dom";

const CreatePaste = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  console.log("SEARCHP: ", pasteId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="my-4 space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-md font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter title here"
            value={formData.title}
            name="title"
            onChange={handleChange}
            className="border border-slate-300 shadow-sm w-[50%] rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-md font-medium">Content</label>
          <textarea
            value={formData.content}
            name="content"
            onChange={handleChange}
            rows={20}
            className="border border-slate-300 shadow-sm w-[50%] rounded-lg"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-black text-white text-md font-semibold p-2 px-4 rounded-lg"
          >
            {pasteId ? "Edit Paste" : "Create Paste"}
          </button>
          <button className="bg-black text-white text-md font-semibold p-2 px-4 rounded-lg">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePaste;
