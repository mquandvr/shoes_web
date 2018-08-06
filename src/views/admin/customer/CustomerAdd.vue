<template> 
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-form>
          <b-row>
            <b-col cols="12" xl="12">
              <span style="font-size: larger;"><b>Thông tin chung</b></span><span style="color: #c5c3c3;">&nbsp;&nbsp;&nbsp;Cung cấp thông tin cơ bản về khách hàng</span>
              <hr />
            </b-col>

            <b-col cols="12" xl="12">
              <b-form-group horizontal
                :label-cols="4"
                label-size="sm"
                label-text-align="right"
                label="Tên khách hàng(*):"
                label-for="customerName">
                <b-form-input id="customerName" size="sm" class="col-md-8 col-xs-8"></b-form-input>
              </b-form-group>
              <b-form-group horizontal
                :label-cols="4"
                label-size="sm"
                label-text-align="right"
                label="Mã khách hàng(*):"
                label-for="customerCode">
                <b-form-input disabled="true" id="customerCode" size="sm" class="col-md-8 col-xs-8" placeholder="KH123"/>
              </b-form-group>
              <b-form-group horizontal
                :label-cols="4"
                label-size="sm"
                label-text-align="right"
                label="Số điện thoại(*):"
                label-for="customerPhone">
                <b-form-input id="customerPhone" size="sm" class="col-md-8 col-xs-8" placeholder="01656-352-176"/>
              </b-form-group>
              <b-form-group horizontal
                :label-cols="4"
                label-size="sm"
                label-text-align="right"
                label="Email:"
                label-for="customerEmail">
                <b-form-input id="customerEmail" size="sm" class="col-md-8 col-xs-8" placeholder="nguyenvana@gmail.com"/>
              </b-form-group>
              <b-form-group horizontal
                :label-cols="4"
                label-size="sm"
                label-text-align="right"
                label="Giới tính:"
                label-for="customerSex">
                <b-form-select id="customerSex" v-model="selected" :options="sexOpts" class="col-md-8 col-xs-8" />
              </b-form-group>
              <b-form-group horizontal
                :label-cols="4"
                label-size="sm"
                label-text-align="right"
                label="Ngày sinh:"
                label-for="customerDateOfBirth">
                <datepicker id="customerDateOfBirth" placeholder="dd/MM/yyyy" format="dd/MM/yyyy"></datepicker>
              </b-form-group>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col cols="12" xl="12">
              <span style="font-size: larger;"><b>Thông tin liên hệ</b></span><span style="color: #c5c3c3;">&nbsp;&nbsp;&nbsp;Cung cấp thông tin về địa chỉ khách hàng</span>
              <hr />
            </b-col>
            <b-col cols="12" xl="12">
              <b-form-group horizontal
                  :label-cols="4"
                  label-size="sm"
                  label-text-align="right"
                  label="Nhãn:"
                  label-for="customerLabel">
                  <b-form-input id="customerLabel" size="sm" class="col-md-8 col-xs-8" placeholder="Tòa nhà ABC"/>
                </b-form-group>
                <b-form-group horizontal
                  :label-cols="4"
                  label-size="sm"
                  label-text-align="right"
                  label="Địa chỉ:"
                  label-for="customerAddress">
                  <b-form-input id="customerAddress" size="sm" class="col-md-8 col-xs-8"/>
                </b-form-group>
                <b-form-group horizontal
                  :label-cols="4"
                  label-size="sm"
                  label-text-align="right"
                  label="Khu vực:"
                  label-for="customerArea">
                  <b-form-select id="customerArea" v-model="selected" :options="areaOpts" class="col-md-8 col-xs-8" />
                </b-form-group>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col cols="12" xl="12">
              <span style="font-size: larger;"><b>Thông tin khác</b></span><span style="color: #c5c3c3;">&nbsp;&nbsp;&nbsp;Cung cấp thông tin khác về khách hàng</span>
              <hr />
            </b-col>
            <b-col cols="12" xl="12">
              <b-form-group horizontal
                  :label-cols="4"
                  label-size="sm"
                  label-text-align="right"
                  label="Nhãn:"
                  label-for="customerNote">
                  <textarea id="customerNote" size="sm" class="col-md-8 col-xs-8 form-control" rows="3" max-rows="5"/>
                </b-form-group>
            </b-col>
          </b-row>
          <hr>
          <b-container>
            <b-row>
              <b-col cols="auto" class="mr-auto"></b-col>
              <b-col cols="auto">
                <b-button variant="secondary" style="margin-right: 20px">Hủy bỏ</b-button>
                <b-button variant="success" >Thêm</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'Thêm mới',
  components : {
    Datepicker
  },
  props: {
    caption: {
      type: String,
      default: '<h2>Thêm mới</h2>'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
data () {
    return {
      selected: null,
      sexOpts: [
        { value: -1, text: 'Chọn giới tính' },
        { value: 0, text: 'Nữ' },
        { value: 1, text: 'Nam' },
        { value: 2, text: 'Khác' }
      ],
      areaOpts: [
        { value: -1, text: 'Chọn khu vực' },
        { value: 0, text: 'Hồ Chí Minh - Quận 1' },
        { value: 1, text: 'Hồ Chí Minh - Quận 2' },
        { value: 2, text: 'Hồ Chí Minh - Quận 3' }
      ]
    }
  },
  computed: {
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.id)
      this.$router.push({path: userLink})
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
