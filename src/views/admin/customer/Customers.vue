<template>
  <b-row>
    <b-col cols="12" lg="12">
      <b-card no-header>
        <template slot="header">
          <h1>Khách hàng</h1>
          <button class="btn float-left btn-primary fa fa-download"> Xuất file</button>
          <button class="btn mg-l-15 btn-success fa fa-upload"> Nhập danh sách</button>
          <button class="btn float-right btn-primary fa fa-plus-square"> Thêm khách hàng</button>
        </template>
        <template>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false">Lọc khách hàng</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Điều kiện lọc</a>
              </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" 
              placeholder="Tìm kiếm khách hàng">
          </div>

          <table class="table table-noborder b-table table-striped table-hover">
            <thead>
              <tr>
                <th><input type="checkbox" name="" id=""></th>
                <th>Mã KH</th>
                <th>Họ tên</th>
                <th>Nhóm KH</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Mã số thuế</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>982342823</td>
                <td><a href="http://localhost:8080/admin/customer">Trần Văn Dũng</a></td>
                <td>Bán lẻ</td>
                <td>vandung@freshbrand.vn</td>
                <td>01689064929</td>
                <td>2824374273</td>
                <td><span class="label label-warning">Đang giao dịch</span></td>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>982342118</td>
                <td><a href="http://localhost:8080/admin/customer">Trần Văn Dũng</a></td>
                <td>Bán lẻ</td>
                <td>vandung@freshbrand.vn</td>
                <td>01689064928</td>
                <td>2824332311</td>
                <td><span class="label label-success">Đã hoàn thành</span></td>
              </tr>
            </tbody>
          </table>
          <div>Hiển thị kết quả từ 2 - 2 trên tổng 2</div>
        </template>
        <template slot="footer">

        </template>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  
}
</script>
