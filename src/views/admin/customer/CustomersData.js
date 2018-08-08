const customersData = [
    {id: 0, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Đang giao dịch'},
    {id: 1, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 2, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Ngừng giao dịch'},
    {id: 3, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Đang giao dịch'},
    {id: 4, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 5, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Đang giao dịch'},
    {id: 6, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 7, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Ngừng giao dịch'},
    {id: 8, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Đang giao dịch'},
    {id: 9, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 10, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Đang giao dịch'},
    {id: 11, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 12, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Ngừng giao dịch'},
    {id: 13, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Đang giao dịch'},
    {id: 14, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 15, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Đang giao dịch'},
    {id: 16, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 17, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Ngừng giao dịch'},
    {id: 18, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Đang giao dịch'},
    {id: 19, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 20, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Đang giao dịch'},
    {id: 21, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 22, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Ngừng giao dịch'},
    {id: 23, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Einar Randall', registered: '2018/02/01', role: 'Admin', status: 'Đang giao dịch'},
    {id: 24, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Félix Troels', registered: '2018/03/21', role: 'Staff', status: 'Đang giao dịch'},
    {id: 25, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Đang giao dịch'},
    {id: 42, email: "test@gmail.com", phone: "0122 142 122", address: "HCM", name: 'Ford Prefex', registered: '2001/05/21', role: 'Alien', status: 'Đang giao dịch'}
  ]
  
  export default customersData
  