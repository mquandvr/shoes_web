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
      <b-button @click="storeAdd" size="sm" class="mb-0 fa fa-plus-square" style="position: absolute; right: 15px; top: 5px;"> Thêm cửa hàng</b-button>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :filter="filter" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage"  @filtered="onFiltered">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="name" slot-scope="data">
            <strong>{{data.item.name}}</strong>
          </template>
          <template slot="address" slot-scope="data">
            <strong>{{data.item.address}}</strong>
          </template>
          <template slot="actions" slot-scope="row">
            <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1 fa fa-eye"> </b-button>
            <b-button size="sm" @click.stop="editById(row.item)" class="mr-1 fa fa-pencil-square-o"> </b-button>
            <b-button size="sm" @click.stop="deleteById(row.item)" class="mr-1 fa fa-trash-o"></b-button>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
    <!-- <b-modal id="delete-confirm-popup" ok-title="Đồng ý" cancel-title="Hủy" @ok="handleOk" @shown="clearName" ref="modal" centered title="Xác nhận">
      <p class="my-4">Bạn có chắc muốn xóa cua hang này?</p>
    </b-modal>
    <b-modal id="category-popup" centered size="lg"  ok-title="Thêm" cancel-title="Hủy" @ok="handleOk" @shown="clearName" ref="modal" title="Thêm cua hang">
      <form @submit.stop.prevent="handleSubmit">
        <b-container fluid>
          <b-form-group id="storeName1"
                    label="Tên cửa hàng"
                    label-for="storeName">
            <b-form-input id="storeName"
                      type="text"
                      required
                      placeholder="Cửa hàng A"
                      v-model="storeName">
            </b-form-input>
          </b-form-group>
          <b-form-group id="address1"
                    label="Địa chỉ"
                    label-for="address">
            <b-form-input id="address"
                      type="text"
                      required
                      placeholder=""
                      v-model="address">
            </b-form-input>
          </b-form-group>
        </b-container>
      </form>
    </b-modal> -->
  </b-row>
</template>

<script>
import storeData from './StoreData'
export default {
  name: 'Stores',
  props: {
    caption: {
      type: String,
      default: 'Cửa hàng'
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
        {key: 'name', label: 'Tên', sortable: true},
        {key: 'address', label: 'Dia chi', sortable: true},
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
      return `stores/${id.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.id)
      //this.$router.push({path: userLink})
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    storeAdd () {
      this.$router.push({name:'StoreAdd'})
    },
    deleteById(item) {
      const id = item.id
      this.$store.dispatch('stores/deleteStoreById', id)
    },
    editById(item, index, button) {
      this.$router.push({name:'StoresEdit', params: { storeId: item.id }})
    },
    info (item, index, button) {
      alert('info')
    }

  }, 
  mounted() {
    this.$store.dispatch('stores/getStoreList')
    .then(resp => {
      this.items = this.$store.state.stores.data
    })
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
