This is UI module for SHOES project

api                                        : common liên kết tới api.
    + http-common.js                     -> Tham khảo: https://goo.gl/rnYwRX
asset                                      
    |_ scss
        + ...
containers                                 : Khung sườn chính của web. 
    |_ admin                                 Hiện tại chia làm 2 phần: 
        + DefaultContainer.vue               admin và customer
        + DefaultAside.vue
        + DefaultHeaderDropdownAccnt.vue
    |_ customer
        + ...
router                                     : Điều hướng web.
    + index.js
shared
    + ...
store                                      : Xử lý data. Sử dụng vuex.
    + index.js
    |_ modules
        |_ auth
            + auth-actions.js            
            + auth-getters.js
            + auth-mutations.js
            + auth-state.js
            + auth-mutation-types.js
        |_ nhanvien
            + ....
utils                                      : Xử lý chung. 
    + constants.js                          -> Ví dụ method blank, null, ...
    + ...
views                                      : Chứa component của web. 
    |_ admin                                 Hiện tại chia làm 2 phần: 
        |_ page                                 admin và customer
            + login.vue
            + register.vue
            + ...
        |_ nhanvie\n
            + ...
        |_ ...
    |_ customer
        + ...