<template> 
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-form>
            <b-row class="justify-content-md-center">
              <b-col>
              <b-form-group horizontal
                        id="name1"
                        label="Tên sản phẩm:"
                        label-class="text-sm-right"
                        label-for="productName"
                        >
                <b-form-input 
                          id="productName"
                          type="text"
                          required
                          placeholder="Giay 101"
                          class="w-50"
                          >
                </b-form-input>
              </b-form-group>
              <b-form-group horizontal
                        id="skuCode1"
                        label="Mã SKU:"
                        label-class="text-sm-right"
                        label-for="skuCode"
                        >
                <b-form-input
                          id="skuCode"
                          type="text"
                          placeholder=""
                          class="w-50"
                          >
                </b-form-input>
              </b-form-group>
              <b-form-group horizontal
                        id="barcode1"
                        label="Barcode:"
                        label-class="text-sm-right"
                        label-for="barcode"
                        >
                <b-form-input
                          id="barcode"
                          type="text"
                          required
                          placeholder=""
                          class="w-50"
                          >
                </b-form-input>
              </b-form-group>                  
              <b-form-group 
                        horizontal
                        id="categoryType1"
                        label="Loại sản phẩm:"
                        label-class="text-sm-right"
                        label-for="birthay"
                        >
                <b-form-select v-model="selected" :options="categoryTypes" class="w-50 mb-3" />
              </b-form-group>
              <b-form-group horizontal
                        id="description1"
                        label="Mô tả:"
                        label-class="text-sm-right"
                        label-for="description"
                        >
                <b-form-textarea 
                          id="description"
                          type="text"
                          required
                          placeholder=""
                          class="w-50"
                          :rows="3"
                          :max-rows="6"
                          >
                </b-form-textarea>
              </b-form-group>
              <b-form-group horizontal
                        id="initStock1"
                        label="Tồn kho ban đầu:"
                        label-class="text-sm-right"
                        label-for="initStock"
                        >
                <b-form-input
                          id="initStock"
                          type="text"
                          required
                          placeholder=""
                          class="w-50"
                          >
                </b-form-input>
              </b-form-group>
              <b-form-group horizontal
                        id="initPrice1"
                        label="Giá khởi tạo:"
                        label-class="text-sm-right"
                        label-for="initPrice"
                        >
                <b-form-input
                          id="initPrice"
                          type="text"
                          required
                          placeholder=""
                          class="w-50"
                          >
                </b-form-input>
              </b-form-group> 
              <b-form-group horizontal
                        id="price1"
                        label="Giá bán buôn:"
                        label-class="text-sm-right"
                        label-for="price"
                        >
                <b-form-input
                          id="price"
                          type="text"
                          required
                          placeholder=""
                          class="w-50"
                          >
                </b-form-input>
              </b-form-group>     
              <b-form-group 
                        horizontal
                        id="initBranch1"
                        label="Chi nhánh khởi tạo:"
                        label-class="text-sm-right"
                        label-for="initBranch"
                        >
                <b-form-select :options="branchs" class="w-50 mb-3" />
              </b-form-group>
              <b-form-group 
                        horizontal
                        id="unit1"
                        label="Đơn vị tính:"
                        label-class="text-sm-right"
                        label-for="unit"
                        >
                <b-form-select :options="units" class="w-50 mb-3" />
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
      categoryTypes: [
        { value: null, text: '' },
        { value: '1', text: 'Giày' },
        { value: '2', text: 'Dép' },
        { value: '3', text: 'Quốc' }
      ],
      branchs: [
        { value: null, text: '' },
        { value: '1', text: 'Hà Nội' },
        { value: '2', text: 'Đà Nẵng'},
        { value: '3', text: 'Tp.HCM' }
      ],
      units: [
        { value: null, text: '' },
        { value: '1', text: 'VND' },
        { value: '2', text: 'USD'},
        { value: '3', text: 'Yen' }
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

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
