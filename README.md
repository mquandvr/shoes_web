This is UI module for SHOES project

## Cài đặt

* [Node](https://nodejs.org/en/)
* Nodist
* [Git](https://git-scm.com/)
* [VSCode](https://code.visualstudio.com/)


#### Cài đặt thư viện
 
```
    npm install -g @vue/cli-service-global
    npm install
```

## Khởi động server

```
    npm run serve
```

## Tài liệu tham khảo

 Các công nghệ được áp dụng trên web:

- [Vue](https://vi.vuejs.org/v2/guide/index.html)
- [Vuex](https://vuex.vuejs.org/)
- [VueRouter](https://router.vuejs.org/)
- [Scss](https://sass-lang.com/guide)
- [Axios](https://goo.gl/rnYwRX)
- [ES6](https://devhints.io/es6)

## Cấu trúc WEB

 Tham khảo cấu trúc web bên dưới để thống nhất code:
    
```
api                                        : common liên kết tới api. 
    http-common.js                     
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
```