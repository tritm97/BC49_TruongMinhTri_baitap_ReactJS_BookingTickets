import { configureStore } from "@reduxjs/toolkit";
import { BaiTapDatVeReducer } from "./reducer/BaiTapDatVeReducer";

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "minh long";
    },
    BaiTapDatVeReducer: BaiTapDatVeReducer,
  },
});
