<template> 
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-form>
          <b-row>
            <b-col cols="4" xl="4">
              <p>Chi tiết nhân viên</p>
              <p>Thông tin chi tiết nhân viên để quản lý cho việc phục vụ sau này.</p>
            </b-col>
            <b-col cols="8" xl="8">
                <b-row>
                  <b-col cols="6" xl="6">
                    <b-form-group>
                      <label for="name">Tên nhân viên:</label>
                      <b-form-input id="name"
                                type="text"
                                required
                                placeholder="Nguyễn văn A">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group id="phone1"
                              label="Số điện thoại:"
                              label-for="phone">
                      <b-form-input id="phone"
                                type="text"
                                required
                                placeholder="">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group id="address1"
                              label="Địa chỉ:"
                              label-for="address">
                      <b-form-input id="address"
                                type="text"
                                required
                                placeholder="">
                      </b-form-input>
                    </b-form-group>                  
                    <b-form-group id="birthay1"
                              label="Ngày sinh:"
                              label-for="birthay">
                        <b-input-group>
                          <b-input-group-text slot="append">
                              <strong class="text-danger">!</strong>
                          </b-input-group-text>
                          <b-form-input></b-form-input>
                        </b-input-group>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6" xl="6">
                    <b-form-group id="email1"
                              label="Email:"
                              label-for="email">
                      <b-form-input id="email"
                                type="text"
                                required
                                placeholder="">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group id="password1"
                              label="Mật khẩu:"
                              label-for="password">
                      <b-form-input id="password"
                                type="text"
                                required
                                placeholder="">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group id="rePassword1"
                              label="Nhập lại mật khẩu:"
                              label-for="rePassword">
                      <b-form-input id="rePassword"
                                type="text"
                                required
                                placeholder="">
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-form-group id="note1"
                              label="Ghi chú:"
                              label-for="note">
                    <b-form-textarea id="note"
                      placeholder="Enter something"
                      :rows="3"
                      :max-rows="6">
                    </b-form-textarea>  
                  </b-form-group>  
            </b-col>
          </b-row>
          <hr>
          <b-row>
            <b-col cols="4" xl="4">
              <p>Vai trò nhân viên</p>
              <p>Cho phép phân quyền hạn của nhân viên cho tất cả chi nhánh.</p>
            </b-col>
            <b-col cols="8" xl="8">
              <b-form-group id="role1"
                              label="Chọn vai trò:">
                <b-form-select v-model="selected" :options="roles" class="mb-2 mr-sm-2 mb-sm-0"  />
              </b-form-group>  
              <hr>
              <label>Chi tiết thông tin phân quyền nhân viên</label>
              <b-table :hover="hover" :filter="filter" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked" @filtered="onFiltered">
                <template slot="id" slot-scope="data">
                  <strong>{{data.item.id}}</strong>
                </template>
                <template slot="vaitro" slot-scope="data">
                  <strong>{{data.item.vaitro}}</strong>
                </template>
                <template slot="chinhanh" slot-scope="data">
                  <strong>{{data.item.chinhanh}}</strong>
                </template>
                <template slot="actions" slot-scope="row">
                  <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1 fa fa-eye"> </b-button>
                  <b-button size="sm" @click.stop="row.toggleDetails" class="mr-1 fa fa-pencil-square-o"> </b-button>
                  <b-button size="sm" @click.stop="row.toggleDetails" class="mr-1 fa fa-trash-o"></b-button>
                </template>
              </b-table>
              <nav>
                <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
              </nav>    
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
import employeesData from './EmployeesData'
export default {
  name: 'Thêm mới',
  props: {
    caption: {
      type: String,
      default: 'Thêm mới'
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
  data: () => {
    return {
      selected: null,
      roles: [
        { value: null, text: 'Chọn vai trò' },
        { value: '1', text: 'Nhân viên kho' },
        { value: '2', text: 'Nhân viên bán hàng' },
        { value: '3', text: 'Quản lý kho' }
      ],
      items: employeesData.filter((user) => user.id < 42),
      fields: [
        {key: 'id', label: 'STT', sortable: true},
        {key: 'vaitro', label: 'Vai trò', sortable: true},
        {key: 'chinhanh', label: 'Chi nhánh', sortable: true}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      filter: null,
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
    employeesAdd () {
      this.$router.push({name:'EmployeeAdd'})
    }


  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
