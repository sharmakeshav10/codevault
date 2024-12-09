import { useEffect, useState } from "react";
import { initialFormData } from "../utils/data";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPaste, editPaste } from "../redux/slices/pasteSlice";
import Button from "../components/Button";

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
    <div className="mt-10 ">
      <div>
        <h1 className="text-3xl font-bold">
          {pasteId ? "Edit Snippet" : "Create a New Paste"}
        </h1>
      </div>
      <form onSubmit={handleFormSubmit} className="my-8 space-y-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter title here"
            value={formData.title}
            name="title"
            onChange={handleChange}
            className="border border-slate-300 dark:bg-black shadow-sm w-[50%] rounded-lg p-2"
          />
          <Link to={"/pastes"}>
            <div className="ml-10">
              <Button content={"View All Pastes"} />
            </div>
          </Link>
        </div>
        <div className="flex gap-2">
          <textarea
            value={formData.content}
            name="content"
            placeholder="Enter content here"
            onChange={handleChange}
            rows={10}
            className="border border-slate-300 dark:bg-black shadow-sm w-[50%] rounded-lg p-2"
          />
        </div>
        <div className="flex gap-3">
          <Button content={pasteId ? "Edit Paste" : "Create Paste"} />
          <Link to={"/pastes"}>
            <Button content={"Cancel"} />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreatePaste;
