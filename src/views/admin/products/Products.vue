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
      <!--<b-button @click="employeesAdd" size="sm" class="mb-0 fa fa-plus-square" style="position: absolute; right: 15px; top: 5px;"> Thêm sản phẩm</b-button>-->
        <b-button class="fa fa-plus-square" @click="employeesAdd" variant="primary" style="margin-left:66%">
          THÊM MỚI SẢN PHẨM
          </b-button>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :filter="filter" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked" @filtered="onFiltered">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="skuCode" slot-scope="data">
            <strong>{{data.item.skuCode}}</strong>
          </template>
          <template slot="barcode" slot-scope="data">
            <strong>{{data.item.barcode}}</strong>
          </template>
          <template slot="productName" slot-scope="data">
            <strong>{{data.item.productName}}</strong>
          </template>
          <template slot="categoryTypes" slot-scope="data">
            <strong>{{data.item.categoryTypes}}</strong>
          </template>
          <template slot="initPrice" slot-scope="data">
            <strong>{{data.item.initPrice}}</strong>
          </template>
          <template slot="price" slot-scope="data">
            <strong>{{data.item.price}}</strong>
          </template>
           <template slot="branchs" slot-scope="data">
            <strong>{{data.item.branchs}}</strong>
          </template>
          <template slot="registered" slot-scope="data">
            <strong>{{data.item.registered}}</strong>
          </template>
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
          </template>
          <template slot="initStock" slot-scope="data">
            <strong>{{data.item.initStock}}</strong>
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
import productData from './ProductData'
export default {
  name: 'Product',
  props: {
    caption: {
      type: String,
      default: 'Sản phẩm'
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
      items: productData.filter((user) => user.id < 42),
      fields: [
        {key: 'id', label: 'STT', sortable: true},
        {key: 'skuCode', label: 'Mã SKU', sortable: true},
        {key: 'barcode', label: 'Barcode', sortable: true},
        {key: 'productName', label: 'Tên', sortable: true},
        {key: 'categoryTypes', label: 'Loại', sortable: true},
        {key: 'initPrice', label: 'Giá vốn', sortable: true},
        {key: 'price', label: 'Giá bán', sortable: true},
        {key: 'branchs', label: 'Chi nhánh', sortable: true},
        {key: 'registered', label: 'Ngày tạo', sortable: true},
        {key: 'status', label: 'Trạng thái', sortable: true},
        {key: 'initStock', label: 'Tồn kho', sortable:true },
        {key: 'actions', label: 'Action',sortable:true},
      
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
      return status === 'Còn hàng' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Hết hàng' ? 'danger'
            : status === 'Banned' ? 'warning' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    handleChange(e) {
      if(e.target.options.selectedIndex > -1) {
          console.log(e.target.options[e.target.options.selectedIndex].dataset.foo)
      }
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
      this.$router.push({name:'ProductAdd'})
    }
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
