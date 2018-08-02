<template>
  <b-row>
    <b-col cols="12" lg="12">
      <b-card no-header>
        <template slot="header">
          <a href="#"><i class="fa fa-chevron-left"></i> Khách hàng</a>
          <h1>Trần Văn Dũng</h1>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>
<template>
  <div class="row">
    <div class="col-xs-12 col-md-8">
      <div class="box_style">   
        <div class="box_info">
          <img src="https://secure.gravatar.com/avatar/df50b1870d82637a9259ccdea1231303.jpg?s=80&d=blank" alt="">
          <div class="_info">
            <b>Trần Văn Dũng</b>
            <p>926/42 Nguyễn Kiệm, phường 3, quận Gò Vấp, Quận 1, TP Hồ Chí Minh, Việt Nam</p>
          </div>
          <div class="form-group clear-both pd-t-15">
            <label for="note">Email:</label>
            <textarea name="note" class="form-control" id="" rows="3">Nội dung ghi chú...</textarea>
          </div>
        </div>
      </div> 
      <div class="box_style">
        <div class="_title">Đơn hàng gần đây</div>
        <div class="text-center">
          <i class="fa fa-file-text icon-order" aria-hidden="true"></i>  
          <p>Khách hàng chưa có đơn đặt hàng</p>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div class="box_style">
        <div class="_title">Liên hệ <a href="#">Sửa</a></div>
        <div class="_content">
          <a href="#">tranvandung202@gmail.com</a>
          <li>Không đồng ý nhận tiếp thị</li>
          <li>Chưa có tài khoản</li>
        </div>
        <hr>
        <div class="_title">SỔ ĐỊA CHỈ<a href="#">Sửa</a></div>
        <div class="_content">
          <li>Trần Văn Dũng</li>
          <li>FreshBrand</li>
          <li>1689064929</li>
          <li>926/42 Nguyễn Kiệm, phường 3, quận Gò Vấp, Quận 1, TP Hồ Chí Minh</li>
          <li>700000</li>
          <li>Việt Nam</li>
        </div>
      </div>
      <div class="box_style">
        <div class="_title">Tag <a href="#" class="float-right">Toàn bộ tag</a></div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12 col-lg-12 mg-b-50">
      <hr>
      <button class="btn btn-danger">Xóa khách hàng</button>  
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
