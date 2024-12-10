import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

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
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        toast.error("Paste already exists");
        return;
      }

      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste added successfully");
    },
    editPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste updated successfully");
      }
    },
    deletePaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted");
      }
    },
    removeAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
  },
});

export const { createPaste, editPaste, deletePaste, removeAllPastes } =
  pasteSlice.actions;
export default pasteSlice.reducer;
