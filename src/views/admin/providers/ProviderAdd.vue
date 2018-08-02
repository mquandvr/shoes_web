<template> 
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-form>
          <b-row>
            <b-col cols="4" xl="4">
              <p>Chi tiết nhà cung cấp</p>
              <p>Thông tin chi tiết nhà cung cấp để quản lý cho việc phục vụ sau này.</p>
            </b-col>
            <b-col cols="8" xl="8">
                <b-row>
                  <b-col cols="6" xl="6">
                    <b-form-group>
                      <label for="name">Tên nhà cung cấp</label>
                      <b-form-input id="name"
                                type="text"
                                required
                                placeholder="Cửa hàng A">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group id="address1"
                              label="Địa chỉ"
                              label-for="address">
                      <b-form-input id="address"
                                type="text"
                                required
                                placeholder="">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group id="role1"
                                    label="Thuộc danh mục">
                      <b-form-select v-model="selected" :options="categorys" class="mb-2 mr-sm-2 mb-sm-0"  />
                    </b-form-group> 
                  </b-col>                
                </b-row>
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
  name: 'ProviderAdd',
  props: {
    caption: {
      type: String,
      default: 'Thêm nhà cung cấp'
    }
  },
  data () {
    return {
      selected: null,
      categorys: [
        { value: null, text: 'Chọn danh mục' },
        { value: '1', text: 'Nhà may 1' },
        { value: '2', text: 'Nhà may 2' },
      ]
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
