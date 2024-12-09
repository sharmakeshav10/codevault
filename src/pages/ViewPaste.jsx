import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";

const ViewPaste = () => {
  const { id } = useParams();

  const allPastes = useSelector((store) => store.paste.pastes);
  console.log(allPastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div className="my-8 space-y-6 ">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={""}
          name="title"
          value={paste.title}
          disabled
          className="border border-slate-300 shadow-sm w-[50%] rounded-lg p-2"
        />
        <Link to={"/pastes"}>
          <div className="ml-10">
            <Button content={"View All Pastes"} />
          </div>
        </Link>
      </div>
      <div className="flex gap-2">
        <textarea
          name="content"
          value={paste.content}
          rows={20}
          disabled
          className="border border-slate-300 shadow-sm w-[50%] rounded-lg p-2"
        />
      </div>
    </div>
  );
};

export default ViewPaste;
