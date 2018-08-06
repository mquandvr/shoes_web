<template> 
  <b-row>
    <b-col md="6" class="my-1">
      <b-input-group>
        <b-form-input v-model="filter" placeholder="Tìm kiếm" />
        <b-input-group-append>
          <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
          </b-input-group-append>
      </b-input-group>
    </b-col>
    <b-col md="6" class="my-1" style="position: relative">
      <b-button @click="employeesAdd" size="sm" class="mb-0 fa fa-plus-square" style="position: absolute; right: 15px; top: 5px;"> Thêm nhân viên</b-button>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :filter="filter" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="userList" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked" @filtered="onFiltered">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="username" slot-scope="data">
            <strong>{{data.item.fullname}}</strong>
          </template>
          <template slot="email" slot-scope="data">
            <strong>{{data.item.email}}</strong>
          </template>
          <template slot="username" slot-scope="data">
            <strong>{{data.item.username}}</strong>
          </template>
          <template slot="mobilePhone" slot-scope="data">
            <strong>{{data.item.mobilePhone}}</strong>
          </template>
          <template slot="address" slot-scope="data">
            <strong>{{data.item.address}}</strong>
          </template>
          <template slot="birthday" slot-scope="data">
            <strong>{{data.item.birthday}}</strong>
          </template>
          <template slot="role" slot-scope="data">
            <strong>{{data.item.role}}</strong>
          </template>
          <template slot="storeId" slot-scope="data">
            <strong>{{data.item.storeId}}</strong>
          </template>
          <template slot="remark" slot-scope="data">
            <strong>{{data.item.remark}}</strong>
          </template>
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.active)">{{data.item.active}}</b-badge>
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
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import employeesData from './EmployeesData'
export default {
  name: 'Employees',
  props: {
    caption: {
      type: String,
      default: 'Danh sách nhân viên'
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
      items: [],
      fields: [
        {key: 'id', label: 'STT', sortable: true},
        {key: 'fullname', label: 'Tên', sortable: true},
        {key: 'email', label: 'Email', sortable: true},
        {key: 'username', label: 'Tên đăng nhập', sortable: true},
        {key: 'address', label: 'Địa chỉ', sortable: true},
        {key: 'mobilePhone', label: 'SĐT', sortable: true},
        {key: 'birthday', label: 'Ngày sinh', sortable: true},
        {key: 'role', label: 'Vai trò', sortable: true},
        {key: 'storeId', label: 'Chi nhánh', sortable: true},
        {key: 'remark', label: 'Ghi chú', sortable: true},
        {key: 'status', label: 'Trạng thái', sortable: true},
        {key: 'actions', label: 'Actions'}
      ],
      currentPage: 1,
      perPage: 20,
      totalRows: 10,
      filter: null,
    }
  },
  computed: {
    userList() {
      return this.$store.getters['user/getUserList']
    }
  },  
  methods: {
    getBadge (status) {
      return status === true ? 'success' : 'danger'
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
      this.$router.push({path: 'create-employee'})
    }
  },
  mounted () {
    this.$store.dispatch('user/getUsers');
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
