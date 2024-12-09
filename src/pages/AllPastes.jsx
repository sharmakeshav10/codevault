import { useState } from "react";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePaste, removeAllPastes } from "../redux/slices/pasteSlice";
import { MdOutlineContentCopy } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { toast } from "react-toastify";
import Button from "../components/Button";

const AllPastes = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
          className="w-[50%] border p-2 rounded-lg"
          type="text"
          placeholder="Search snippet here"
          value={searchQuery}
          onChange={handleChange}
        />
        <div className="flex gap-2">
          <Link to={"/create-paste"}>
            <Button content={"New Paste"} />
          </Link>

          <Button onClick={handleRemoveAllPastes} content={"Remove All"} />
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
              className="flex flex-row justify-between border p-8 mb-2"
            >
              <div>
                <div>{filteredPaste.title}</div>
                <div>{filteredPaste.content}</div>
              </div>

              <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                  <div className="mr-4 cursor-pointer border p-2">
                    <Link to={`/pastes/${filteredPaste._id}`}>
                      <FaRegEye />
                    </Link>
                  </div>
                  <div className="mr-4 cursor-pointer border p-2">
                    <Link to={`/create-paste?pasteId=${filteredPaste._id}`}>
                      <FaRegEdit />
                    </Link>
                  </div>
                  <div
                    className="mr-4 cursor-pointer border p-2"
                    onClick={() => handleDeletePaste(filteredPaste._id)}
                  >
                    <RiDeleteBinLine />
                  </div>
                  <div className="mr-4 cursor-pointer border p-2">
                    <MdOutlineContentCopy
                      onClick={() => {
                        navigator.clipboard.writeText(filteredPaste?.content);
                        toast("copied to clipboard");
                      }}
                    />
                  </div>
                  <div className="cursor-pointer border p-2">
                    <CiShare2 />
                  </div>
                </div>
                <div>{filteredPaste.createdAt}</div>
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
