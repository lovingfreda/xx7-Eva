
import { createStore } from 'framework7';

const store = createStore({
  state: {
    loading: false,
    users: [],
    calendar: [],
    calendarMonth: [],
    calendarToday: [],
    events: [],
    artidaily: [],
    myarrange: [],
    mysuggest: [],

    mylineadverse: [],

    synday: '2021/01/01',
    access: [],

    products: [
      {
        id: '1',
        title: '上报历史-示例1',
        department: '血管外科',
        ref_dept_1st: '主院区',
        ref_dept_2nd: '手术科室',
        date_add: '04/22/2022',
        time_add: '23:15',
        location: '放射诊疗部门 CT MR',
        ref_ills_name: '张无忌',
        ref_ills_docs: '太极',
        event_catgs: '药物事件,手术事件',
        invo_emp_name: '张三 李四 王五',
        invo_emp_catg: '医护人员 医生 护士',
        presenter: 'helen',
        is_approve: '审核结束',
        date_start: '04/22/2022',
        time_st: '10:15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: '上报历史-示例2',
        department: '产科',
        ref_dept_1st: '东院区',
        ref_dept_2nd: '手术科室',
        date_add: '03/12/2022',
        time_add: '23:15',
        location: '重症监护ICU区域',
        ref_ills_name: '赵敏',
        ref_ills_docs: '格格',
        event_catgs: '输血事件,公共意外事件',
        invo_emp_name: '张三 李四 王五',
        invo_emp_catg: '医护人员 医生 护士',
        presenter: 'helen',
        is_approve: '审核结束',
        date_start: '04/22/2022',
        time_st: '10:15',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: '上报历史-示例3',
        department: '中医科',
        ref_dept_1st: '主院区',
        ref_dept_2nd: '非手术科室',
        date_add: '02/11/2022',
        time_add: '23:15',
        location: '手术区域 住院手术室',
        ref_ills_name: '小昭',
        ref_ills_docs: '西域美女',
        event_catgs: '跌倒事件,伤害行为事件',
        invo_emp_name: '张三 李四 王五',
        invo_emp_catg: '医护人员 医生 护士',
        presenter: 'helen',
        is_approve: '审核结束',
        date_start: '04/22/2022',
        time_st: '10:15',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ]
  },
  getters: {
    loading({ state }) {
      return state.loading;
    },
    users({ state }) {
      return state.users;
    },
    events({ state }) {
      return state.events;
    },
    calendar({ state }) {   // for weekly
      return state.calendar;
    },
    calendarMonth({ state }) {  // for monthly
      return state.calendarMonth;
    },
    calendarToday({ state }) {  // for today
      return state.calendarToday;
    },
    artidaily({ state }) {
      return state.artidaily;
    },
    myarrange({ state }) {
      return state.myarrange;
    },
    mysuggest({ state }) {
      return state.mysuggest;
    },
    mylineadverse({ state }) {
      return state.mylineadverse;
    },

    synday({ state }) {
      return state.synday;
    },
    access({ state }) {
      return state.access;
    },
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    getUsers({ state }) {
      state.loading = true;
      setTimeout(() => {
//      state.users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
        state.users = [{ "id" : "1", "login" : "AAA", "first_name" : "Helen Deering", "last_name" : "Members", "group" : "1", "department" : "57", "age" : "6", "gender" : "1", "education" : "2", "income" : "2", "email" : "eva@kideduc.com", "phone_home" : "(364) 134-5453", "phone_work" : "(364) 134-4777", "phone_cell" : "(960) 393-3466", "fax" : "13006107788" , "city" : "武汉" , "zip" : "430071", "address" : "东城区五道口" }, { "id" : "2", "login" : "BBB", "first_name" : "AdminBBB", "last_name" : "Members", "group" : "2", "department" : "64", "age" : "6", "gender" : "1", "education" : "3", "income" : "3", "email" : "nora@kideduc.com", "phone_home" : "(364) 134-5453", "phone_work" : "(364) 134-4777", "phone_cell" : "(960) 393-3466", "fax" : "13988776677" , "city" : "苏州" , "zip" : "430098", "address" : "金地格林13栋4-203" }, { "id" : "3", "login" : "CCC", "first_name" : "YangCCC", "last_name" : "Members", "group" : "2", "department" : "59", "age" : "6", "gender" : "1", "education" : "2", "income" : "3", "email" : "eva@kideduc.com", "phone_home" : "(364) 134-5453", "phone_work" : "(364) 134-4777", "phone_cell" : "(960) 393-3466", "fax" : "13971167788" , "city" : "洛阳" , "zip" : "438766", "address" : "金地格林13栋4-203" }, { "id" : "4", "login" : "DDD", "first_name" : "EvaDDD", "last_name" : "Members", "group" : "1", "department" : "57", "age" : "6", "gender" : "2", "education" : "3", "income" : "2", "email" : "helen@kideduc.com", "phone_home" : "(364) 134-5453", "phone_work" : "(364) 134-4777", "phone_cell" : "(960) 393-3466", "fax" : "13910726164" , "city" : "北京" , "zip" : "430073", "address" : "金地格林13栋4-203" }];
        state.loading = false;
      }, 3000);
    },
    getUsersBy({ state }, { login , password }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/auth.php?login=${login}&password=${password}`)
            .then((res) => res.json())
            .then((users) => {
              state.loading = false;
              state.users = users['users'];
            })
      }, 3000);
    },
    getEvents({ state }, { catgID }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/events.php?catgID=${catgID}`)
            .then((res) => res.json())
            .then((events) => {
              state.loading = false;
              state.events = events['events'];
            })
      }, 3000);
    },
    getProductsBy({ state }, { userID, f7 }) {
      state.loading = true;
      f7.preloader.show();  // show refresh icon...
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/events.php?userID=${userID}`)
            .then((res) => res.json())
            .then((events) => {
              state.loading = false;
              f7.preloader.hide();  // hidden refresh icon...
              state.products = events['events'];
            })
      }, 3000);
    },
    getCalendar({ state }, { catgID }) { // Clone from above function
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/calendar.php?catgID=${catgID}`)
            .then((res) => res.json())
            .then((calendar) => {
              state.loading = false;
//            state.calendar = calendar['calendar'];    // Older Version ONLY deal with weekly
              if (catgID==1)
              {
                  state.calendar = calendar['calendar'];    // Saving Weekly
              }else if (catgID==2)
              {
                  state.calendarMonth = calendar['calendar'];   // Saving Monthly
              }else if (catgID==3)
              {
                  state.calendarToday = calendar['calendar'];   // Saving Today
              }

            })
      }, 3000);
    },
    getArtiDaily({ state }, { userID }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/articles_daily.php?userID=${userID}`)
            .then((res) => res.json())
            .then((artidaily) => {
              state.loading = false;
              state.artidaily = artidaily['dailydetails'];
            })
      }, 3000);
    },
    getMyArrange({ state }, { userID, f7 }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/articles_arrg.php?userID=${userID}`)
            .then((res) => res.json())
            .then((myarrange) => {
              state.loading = false;
              f7.preloader.hide();  // hidden refresh icon...tony add
              state.myarrange = myarrange['arranges'];
            })
      }, 3000);
    },
    getMySuggest({ state }, { userID, f7 }) {
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/articles_sugg.php?userID=${userID}`)
            .then((res) => res.json())
            .then((mysuggest) => {
              state.loading = false;
              f7.preloader.hide();  // hidden refresh icon...tony add
              state.mysuggest = mysuggest['suggestions'];
            })
      }, 3000);
    },
    getMyLineAdverse({ state }, { userID, f7 }) {   // to be continue    with BUG
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/articles_sugg.php?userID=${userID}`)
            .then((res) => res.json())
            .then((mylineadverse) => {
              state.loading = false;
              f7.preloader.hide();  // hidden refresh icon...tony add
              state.mylineadverse = mylineadverse['suggestions'];
            })
      }, 3000);
    },

    addAccess({ state }, access) {
      state.access = [...state.access, access];
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    resetProduct({ state }) {
      state.products = [
                          {
                            id: '1',
                            title: '上报历史-示例A',
                            date_add: '04/04/2022',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
                          },
                          {
                            id: '2',
                            title: '上报历史-示例B',
                            date_add: '03/12/2022',
                            description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
                          },
                          {
                            id: '3',
                            title: '上报历史-示例C',
                            date_add: '02/11/2022',
                            description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
                          },
                        ];
    },
    resetMyArrange({ state }, { userID }) { // Dom should refresh, otherwise deleted-itme will be always exist ! 
      state.loading = true;
      setTimeout(() => {
          fetch(`https://adverse.kideduc.com/services/articles_arrg.php?userID=${userID}`)
            .then((res) => res.json())
            .then((myarrange) => {
              state.loading = false;
              state.myarrange = myarrange['arranges'];
            })
      }, 1000);
    },
  },
})
export default store;
