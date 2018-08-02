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
      <b-button size="sm" v-b-modal.category-popup class="mb-0 fa fa-plus-square" style="position: absolute; right: 15px; top: 5px;"> Thêm danh mục</b-button>
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
          <template slot="description" slot-scope="data">
            <strong>{{data.item.description}}</strong>
          </template>
          <template slot="actions" slot-scope="row">
            <b-button v-b-modal.category-popup size="sm" class="mr-1 fa fa-eye"> </b-button>
            <b-button v-b-modal.category-popup size="sm" class="mr-1 fa fa-pencil-square-o"> </b-button>
            <b-button v-b-modal.delete-confirm-popup size="sm" class="mr-1 fa fa-trash-o"></b-button>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
    <b-modal id="delete-confirm-popup" ok-title="Đồng ý" cancel-title="Hủy" @ok="handleOk" @shown="clearName" ref="modal" centered title="Xác nhận">
      <p class="my-4">Bạn có chắc muốn xóa danh mục này?</p>
    </b-modal>
    <b-modal id="category-popup" centered size="lg"  ok-title="Thêm" cancel-title="Hủy" @ok="handleOk" @shown="clearName" ref="modal" title="Thêm danh mục">
      <form @submit.stop.prevent="handleSubmit">
        <b-container fluid>
          <b-form-group horizontal
                  :label-cols="2"
                  label="Tên:"
                  label-for="category-name">
          <b-form-input id="category-name"/>
          </b-form-group>
          <b-form-group horizontal
                  :label-cols="2"
                  label="Mô tả:"
                  label-for="category-description">
              <textarea :value="my_comment" :rows="3" :max-rows="5" id="category-description"
                  class="form-control"
                  @change="changeComment" />
          </b-form-group>
        </b-container>
      </form>
    </b-modal>
  </b-row>
</template>

<script>
import categoriesData from './CategoriesData'
export default {
  name: 'Categories',
  props: {
    caption: {
      type: String,
      default: 'Danh mục'
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
      items: categoriesData.filter((user) => user.id < 42),
      fields: [
        {key: 'id', label: 'STT', sortable: true},
        {key: 'name', label: 'Tên', sortable: true},
        {key: 'description', label: 'Mô tả', sortable: true},
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
    getRowCount (items) {
      return items.length
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
