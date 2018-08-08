<template> 
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-form>
          <b-form-group horizontal
                        breakpoint="lg"
                        label="Chi tiết nhà cung cấp"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0"
                        >
              <b-form-group horizontal
                            id="fullName1"
                            label="Tên nhân viên"
                            label-for="fullName"
                            label-class="text-sm-right"
                            >
                <b-form-input id="fullName"
                              type="text"
                              required
                              placeholder="Nguyễn văn A"
                              v-model="data.fullName"
                              :readonly="isReadOnly"
                              ></b-form-input>
                <b-form-invalid-feedback id="inputLiveFeedback">
                  Enter at least 3 letters
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group horizontal
                            id="mobilePhone1"
                            label="Số điện thoại:"
                            label-for="mobilePhone"
                            label-class="text-sm-right"
                            >
                <b-form-input id="mobilePhone"
                              type="text"
                              required
                              placeholder=""
                              v-model="data.mobilePhone"
                              :readonly="isReadOnly"
                              >
                </b-form-input>
              </b-form-group>
              <b-form-group horizontal
                            id="address1"
                            label="Địa chỉ:"
                            label-for="address"
                            label-class="text-sm-right"
                            >
                <b-form-input id="address"
                              type="text"
                              required
                              placeholder=""
                              v-model="data.address"
                              :readonly="isReadOnly"
                              >
                </b-form-input>
              </b-form-group>                  
              <b-form-group horizontal
                            id="birthay1"
                            label="Ngày sinh:"
                            label-for="birthay"
                            label-class="text-sm-right"
                            >
                  <!-- <datepicker placeholder="Chọn ngày sinh" 
                              v-model="data.birthday"
                              ></datepicker> -->
              </b-form-group>
              <b-form-group horizontal
                            id="email1"
                            label="Email:"
                            label-for="email"
                            label-class="text-sm-right"
                            >
                <b-form-input id="email"
                              type="text"
                              required
                              placeholder=""
                              v-model="data.email"
                              :readonly="isReadOnly"
                              >
                </b-form-input>
              </b-form-group>
                            <b-form-group horizontal
                            id="username1"
                            label="Tên đăng nhập:"
                            label-for="username"
                            label-class="text-sm-right"
                            >
                <b-form-input id="username"
                              type="text"
                              required
                              placeholder=""
                              v-model="data.username"
                              :readonly="isReadOnly"
                              >
                </b-form-input>
              </b-form-group>
              <b-form-group horizontal
                            id="password1"
                            label="Mật khẩu:"
                            label-for="password"
                            label-class="text-sm-right"
                            >
                <b-form-input id="password"
                          type="text"
                          required
                          placeholder=""
                          v-model="data.password"
                          :readonly="isReadOnly"
                          >
                </b-form-input>
              </b-form-group>
              <b-form-group horizontal
                            id="rePassword1"
                            label="Nhập lại mật khẩu:"
                            label-for="rePassword"
                            label-class="text-sm-right"
                            >
                <b-form-input id="rePassword"
                          type="text"
                          required
                          placeholder=""
                          v-model="rePassword"
                          :readonly="isReadOnly"
                          >
                </b-form-input>
              </b-form-group>
              <b-form-group horizontal
                            id="remark1"
                            label="Ghi chú:"
                            label-for="remark"
                            label-class="text-sm-right"
                            >
                <b-form-textarea id="remark"
                                  placeholder="Enter something"
                                  :rows="3"
                                  :max-rows="6"
                                  v-model="data.remarks"
                                  :readonly="isReadOnly"
                                  >
                </b-form-textarea>  
              </b-form-group>  
          </b-form-group>
          <hr>

          <b-form-group horizontal
                        breakpoint="lg"
                        label="Vai trò nhân viên"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0"
                        >
              <b-form-group horizontal
                            id="role1"
                            label="Chọn vai trò:"
                            label-class="text-sm-right"
                            >
                <b-form-select 
                              v-model="data.role"
                              :options="roles"
                              class="mb-2 mr-sm-2 mb-sm-0"
                              :disabled="isReadOnly"
                              />
              </b-form-group> 
              <b-form-group horizontal
                            id="storeId"
                            label="Chọn chi nhánh:"
                            label-class="text-sm-right"
                            >
                <b-form-select 
                              v-model="data.storeId"
                              :options="stores" 
                              class="mb-2 mr-sm-2 mb-sm-0"
                              :disabled="isReadOnly"
                              />
              </b-form-group>  
          </b-form-group>

          <hr>
          <b-container>
            <b-row>
              <b-col cols="auto" class="mr-auto"></b-col>
              <b-col cols="auto">
                <b-button variant="secondary" style="margin-right: 20px" @click="doBack">Hủy bỏ</b-button>
                <b-button variant="success" @click="doAddEmployee" v-show="!isReadOnly">Thêm</b-button>
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
import { USER_REQUEST_UPDATE_USER } from '@/store/modules/admin/user/user-mutation-types'
import _ from 'lodash'
import { mapState, mapGetters  } from 'vuex'

export default {
  name: 'EmployeeAdd',
  props: {
    caption: {
      type: String,
      default: 'Thêm mới'
    }
  },
  data: () => {
    return {
      rePassword: '',
      selected: null,
    }
  },
  computed: {
    ...mapGetters({
      modeScreen: 'user/getModeScreen',
      roles: 'user/getRoleList',
      stores: 'user/getStoreList',
    }),
    data() {
      return _.cloneDeep(this.$store.getters['user/getUserById'])
    },
    isReadOnly() {
      return this.modeScreen === '0' ? true : false
    }
  },
  methods: {
    validateInput() {
      return true
    },
    updateField(field, value) {
      this.$store.commit('user/' + USER_REQUEST_UPDATE_USER, {
     	  [field]: value
      });
    },
    doAddEmployee() {
      const { data } = this
      let action = ''
      if (this.modeScreen === '2') {
        action = 'user/editUser'
      } else if (this.modeScreen === '1') {
        action = 'user/addUser'  
      }

      this.$store.dispatch(action, data)
      .then(this.$router.go(-1))
    },
    doBack() {
      this.$router.go(-1)
    }
  },
  mounted() {
      if (this.modeScreen === '2' || this.modeScreen === '0') {
        if (this.modeScreen === '2') {
          if (this.$route.params.userId) {
            this.$store.dispatch('user/getUserById', this.$route.params.userId)
          } else {
            this.$router.go(-1)
          }
        }
    }
    this.$store.dispatch('user/getUserRoleAndStores')
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
