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
      <b-button @click="employeesAdd" size="sm" class="mb-0 fa fa-plus-square" style="position: absolute;right: 15px;background-color: #76bae5;color: #fff;padding: 10px;bottom: 0px;border-radius: 5px;font-size: 15px;"> Thêm nhà cung cấp</b-button>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :filter="filter" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked" @filtered="onFiltered">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="name" slot-scope="data">
            <strong>{{data.item.name}}</strong>
          </template>
          <template slot="address" slot-scope="data">
            <strong>{{data.item.address}}</strong>
          </template>
          <template slot="category" slot-scope="data">
            <strong>{{data.item.category}}</strong>
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
import providerData from './ProviderData'
export default {
  name: 'Providers',
  props: {
    caption: {
      type: String,
      default: 'Nhà cung cấp'
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
      items: providerData.filter((user) => user.id < 42),
      fields: [
        {key: 'id', label: 'STT', sortable: true},
        {key: 'name', label: 'Tên', sortable: true},
        {key: 'address', label: 'Dia chi', sortable: true},
        {key: 'category', label: 'Hang Hoa', sortable: true},
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
      this.$router.push({name:'ProviderAdd'})
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
