<template> 
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-form>
          <b-row>
            <b-col cols="4" xl="4">
              <p>Chi tiết cửa hàng</p>
              <p>Thông tin chi tiết cửa hàng để quản lý cho việc phục vụ sau này.</p>
            </b-col>
            <b-col cols="8" xl="8">
                <b-row>
                  <b-col cols="6" xl="6">
                    <b-form-group>
                      <label for="name">Tên cửa hàng</label>
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
  name: 'Store add',
  props: {
    caption: {
      type: String,
      default: 'Thêm mới cửa hàng'
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
