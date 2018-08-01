<template> 
  <b-row>
    <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
    </b-col>
    <b-col md="6" class="my-1">
        <b-form-group horizontal class="mb-0">
            <b-input-group-append>
              <b-btn @click="employeesAdd" class="btn-info">Thêm mới</b-btn>
            </b-input-group-append>
        </b-form-group>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :filter="filter" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked" @filtered="onFiltered">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="email" slot-scope="data">
            <strong>{{data.item.email}}</strong>
          </template>
          <template slot="name" slot-scope="data">
            <strong>{{data.item.name}}</strong>
          </template>
          <template slot="phone" slot-scope="data">
            <strong>{{data.item.phone}}</strong>
          </template>
          <template slot="registered" slot-scope="data">
            <strong>{{data.item.registered}}</strong>
          </template>
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
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
  name: 'Nhân viên',
  props: {
    caption: {
      type: String,
      default: 'Nhân viên'
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
      items: employeesData.filter((user) => user.id < 42),
      fields: [
        {key: 'id', label: 'STT', sortable: true},
        {key: 'email', label: 'Email', sortable: true},
        {key: 'name', label: 'Tên', sortable: true},
        {key: 'phone', label: 'SĐT', sortable: true},
        {key: 'registered', label: 'Ngày tạo', sortable: true},
        {key: 'status', label: 'Trạng thái', sortable: true},
        { key: 'actions', label: 'Actions' }
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
      this.$router.push({name:'EmployeesAdd'})
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
