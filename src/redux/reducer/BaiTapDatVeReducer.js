import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";

const stateDefault = {
  danhSachGheDangDat: [],
};

export const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      const danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      const index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        // khi click, ghế đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // khi click, ghế đang đặt chưa có trong mảng => push vào mảng
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      //   cập nhật lại state => giao diện render lại
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    case HUY_GHE: {
      const danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      const index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        // khi click, ghế đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    default:
      return { ...state };
  }
};
