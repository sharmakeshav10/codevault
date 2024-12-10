import { useState } from "react";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePaste, removeAllPastes } from "../redux/slices/pasteSlice";
import { MdOutlineCalendarToday, MdOutlineContentCopy } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { FormatDate } from "../utils/formatDate";

const AllPastes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [expandContent, setExpandContent] = useState(false);

  const handleExpandContent = () => {
    setExpandContent(!expandContent);
  };

  const allPastes = useSelector((store) => store.paste.pastes);
  console.log(allPastes);

  const filteredData = allPastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeletePaste = (pasteId) => {
    dispatch(deletePaste(pasteId));
  };

  const handleRemoveAllPastes = () => {
    dispatch(removeAllPastes());
  };

  return (
    <div className="my-8 space-y-4">
      {/* search input */}
      <div className="flex justify-between">
        <input
          className="w-[50%] border p-2 rounded-lg dark:bg-black"
          type="text"
          placeholder="Search snippet here"
          value={searchQuery}
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <Link to={"/create-paste"}>
            <Button content={"New Paste"} />
          </Link>

          {filteredData.length > 0 && (
            <Button onClick={handleRemoveAllPastes} content={"Remove All"} />
          )}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">All Pastes</h1>
      </div>

      {/* pastes section  */}
      <div className="mt-4">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((filteredPaste) => (
            <div
              key={filteredPaste._id}
              className="flex flex-col sm:space-y-4 md:flex-row lg:flex-row justify-between border p-8 mb-2 rounded-lg dark:border-gray-600"
            >
              <div className="space-y-3">
                <div>
                  <h1 className="text-2xl font-semibold">
                    {filteredPaste.title}
                  </h1>
                </div>
                <div className="md:w-[70%]">
                  <p className="text-sm text-gray-600">
                    {expandContent
                      ? filteredPaste.content
                      : filteredPaste.content.length > 300
                      ? filteredPaste.content.substring(0, 300) + "..."
                      : filteredPaste.content}
                  </p>
                  {filteredPaste.content.length > 300 && !expandContent && (
                    <p
                      onClick={handleExpandContent}
                      className="text-blue-500 cursor-pointer underline"
                    >
                      Read More
                    </p>
                  )}
                  {expandContent && filteredPaste.content.length > 300 && (
                    <p
                      onClick={handleExpandContent}
                      className="text-blue-500 cursor-pointer underline"
                    >
                      Read Less
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                  <div className="mr-4 cursor-pointer border rounded p-2">
                    <Link to={`/pastes/${filteredPaste._id}`}>
                      <FaRegEye className="hover:fill-purple-400" />
                    </Link>
                  </div>
                  <div className="mr-4 cursor-pointer border rounded p-2">
                    <Link to={`/create-paste?pasteId=${filteredPaste._id}`}>
                      <FaRegEdit className="hover:fill-blue-400" />
                    </Link>
                  </div>
                  <div
                    className="mr-4 cursor-pointer border rounded p-2"
                    onClick={() => handleDeletePaste(filteredPaste._id)}
                  >
                    <RiDeleteBinLine className="hover:fill-red-600" />
                  </div>
                  <div className="cursor-pointer border rounded p-2">
                    <MdOutlineContentCopy
                      className="hover:fill-green-400"
                      onClick={() => {
                        navigator.clipboard.writeText(filteredPaste?.content);
                        toast.success("Copied to clipboard");
                      }}
                    />
                  </div>
                  {/* <div className="cursor-pointer border rounded p-2">
                    <CiShare2 />
                  </div> */}
                </div>
                <div className="flex items-center sm:justify-start md:justify-end gap-2">
                  <span>
                    <MdOutlineCalendarToday />
                  </span>{" "}
                  {FormatDate(filteredPaste.createdAt)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No pastes to show!</div>
        )}
      </div>
    </div>
  );
};

export default AllPastes;
