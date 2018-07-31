This is UI module for SHOES project

api                                        : common liên kết tới api. -> Tham khảo: https://goo.gl/rnYwRX
    + http-common.js                     
asset                                      
    |_ scss
        + ...
containers                                 : Khung sườn chính của web. Hiện tại chia làm 2 phần: admin và customer
    |_ admin                                  
        + DefaultContainer.vue               
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
utils                                      : Xử lý chung. -> Ví dụ method blank, null, ...
    + constants.js                          
    + ...
views                                      : Chứa component của web. Hiện tại chia làm 2 phần: admin và customer
    |_ admin                                 
        |_ page                                 
            + login.vue
            + register.vue
            + ...
        |_ nhanvie\n
            + ...
        |_ ...
    |_ customer
        + ...