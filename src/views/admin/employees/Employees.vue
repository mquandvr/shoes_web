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
      <b-button @click="addEmployee" size="sm" class="mb-0 fa fa-plus-square" style="position: absolute; right: 15px; top: 5px;"> Thêm nhân viên</b-button>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :filter="filter" :small="small" responsive :fixed="fixed"  :striped="striped" :bordered="bordered" stacked="md" :items="userList" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked" @filtered="onFiltered">
          <template slot="fullname" slot-scope="data">
            {{data.item.fullName}}
          </template>
          <template slot="username" slot-scope="data">
            {{data.item.username}}
          </template>
          <template slot="email" slot-scope="data">
            {{data.item.email}}
          </template>
          <template slot="role" slot-scope="data">
            {{data.item.role}}
          </template>
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.active)">{{data.item.active}}</b-badge>
          </template>
          <template slot="actions" slot-scope="row">
            <b-button size="sm" class="mr-1 fa fa-eye" @click.stop="viewById(row.item.id)"> </b-button>
            <b-button size="sm" class="mr-1 fa fa-pencil-square-o" @click.stop="editById(row.item.id)"> </b-button>
            <b-button size="sm" class="mr-1 fa fa-trash-o" @click.stop="deleteById(row.item.id)"></b-button>
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
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      items: [],
      fields: [
        {key: 'fullname', label: 'Tên', sortable: true},
        {key: 'email', label: 'Email', sortable: true},
        {key: 'username', label: 'Tên đăng nhập', sortable: true},
        {key: 'role', label: 'Vai trò', sortable: true},
        {key: 'status', label: 'Trạng thái', sortable: true},
        {key: 'actions', label: 'Hành động'}
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
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    addEmployee () {
      this.$store.dispatch('user/doChangeModeScreen', {modeScreen: '1'})
      .then(this.$router.push({name: 'EmployeeAdd'}))
      
    },
    viewById() {
      this.$store.dispatch('user/doChangeModeScreen', {modeScreen: '0'})
      .then(this.$router.push({name: 'EmployeeView'}))
    },
    editById(id) {
      this.$store.dispatch('user/doChangeModeScreen', {modeScreen: '2'})
      .then(this.$router.push({name: 'EmployeeEdit', params: { userId: id }}))
    },
    deleteById(userId) {
      this.$store.dispatch('user/deleteUserById', {id: userId})
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
