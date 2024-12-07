import { useEffect, useState } from "react";
import { initialFormData } from "../utils/data";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPaste, editPaste } from "../redux/slices/pasteSlice";

const CreatePaste = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  console.log("SEARCHP: ", pasteId);

  const allPastes = useSelector((store) => store.paste.pastes);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (pasteId) {
      const editPaste = allPastes.find((p) => p._id === pasteId);
      setFormData({
        title: editPaste.title,
        content: editPaste.content,
      });
    }
  }, [pasteId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const paste = {
      title: formData.title,
      content: formData.content,
      _id: pasteId || crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //edit
      dispatch(editPaste(paste));
    } else {
      //create new paste
      dispatch(createPaste(paste));
    }

    setFormData(initialFormData);
    setSearchParams({});
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="my-4 space-y-6">
        <div className="flex flex-col items-center gap-2">
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
        <div className="flex flex-col items-center gap-2">
          <label className="text-md font-medium">Content</label>
          <textarea
            value={formData.content}
            name="content"
            onChange={handleChange}
            rows={20}
            className="border border-slate-300 shadow-sm w-[50%] rounded-lg"
          />
        </div>
        <div className="flex justify-center gap-3">
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
