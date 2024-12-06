import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const pastesData = localStorage.getItem("pastes");
let pastes = [];
try {
  pastes = pastesData ? JSON.parse(pastesData) : [];
} catch (error) {
  console.error("Error parsing 'pastes' from localStorage:", error);
  pastes = []; // Set to empty array if parsing fails
}

const initialState = {
  pastes,
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    createPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully", {
        autoClose: 4000,
        position: "top-right",
        pauseOnHover: true,
        className: "p-2 bg-green",
      });
    },
    editPaste: (state, action) => {
      const pasteId = action.payload;
    },
  },
});

export const { createPaste } = pasteSlice.actions;
export default pasteSlice.reducer;
