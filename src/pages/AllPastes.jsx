import { useState } from "react";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllPastes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allPastes = useSelector((store) => store.paste.pastes);
  console.log(allPastes);

  const filteredData = allPastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mt-4">
      {/* search input */}
      <div className="flex justify-between">
        <input
          className="w-[50%] border p-2 rounded-lg"
          type="text"
          placeholder="Search snippet here"
          value={searchQuery}
          onChange={handleChange}
        />
        <div className="border flex items-center p-2 rounded-lg px-4">
          <Link to={"/create-paste"}>
            <button>New Paste</button>
          </Link>
        </div>
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
                    <FaRegEye />
                  </div>
                  <div className="mr-4 cursor-pointer border p-2">
                    <FaRegEdit />
                  </div>
                  <div className="cursor-pointer border p-2">
                    <RiDeleteBinLine />
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
