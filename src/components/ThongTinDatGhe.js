import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BaiTapDatVeActions";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 text-start">
          <div className="daChon">
            <button className="gheDuocChon me-2"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế đã đặt
            </span>
          </div>

          <div className="dangChon">
            <button className="gheDangChon me-2"></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế đang chọn
            </span>
          </div>

          <div className="chuaDat">
            <button className="ghe me-2" style={{ marginLeft: 0 }}></button>
            <span className="text-light" style={{ fontSize: "30px" }}>
              Ghế chưa đặt
            </span>
          </div>
        </div>
        <div className="mt-5">
          <table className="table text-start" border="2">
            <thead className="text-light" style={{ fontSize: "20px" }}>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btnHuyGhe"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="text-light">Tổng tiền</td>
                <td className="text-warning">
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
