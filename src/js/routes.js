
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import SchedulePage from '../pages/schedule.f7.html';
import ProductPage from '../pages/product.f7.html';
import SettingsPage from '../pages/settings.f7.html';
import ProfilePage from '../pages/settings/profile.f7.html';

import PurchasePage from '../pages/purchase.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import LeftPage1 from '../pages/left-page-1.f7.html';
import LeftPage2 from '../pages/left-page-2.f7.html';

import CruiseAjaxLoad from '../pages/cruise-ajax-load.f7.html';
import CruiseAjaxLinkSumry from '../pages/cruise-ajax-link-summry.f7.html';

import AboutLinkAjaxLoadPage from '../pages/about-link-ajax.f7.html';

import EvnTypeChooser from '../pages/events/event_type_chooser.f7.html';
import EvnBaseInformation from '../pages/events/event_base_information.f7.html';
import EvnAddiMedicine from '../pages/events/event_addi_medicine.f7.html';
import EvnAddiEquipment from '../pages/events/event_addi_equipment.f7.html';
import EvnAddiAttachment from '../pages/events/event_addi_attachment.f7.html';
import EvnInfoSummary from '../pages/events/event_info_summary.f7.html';

import AprvlTodoListPage from '../pages/approval/todo-list.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/order/',
    component: PurchasePage,
  },
  {
    path: '/about-link-ajax/:linkId',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var linkId = to.params.linkId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var vCatg = {
          firstName: 'Dear',
          lastName: 'My Passengers',
          about: ' 我们为您提供以下服务，希望您喜欢!',
          links: [
            {
              title: 'Fall in lover with YangY Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Loving Eva Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Tony Adding Main Logic of AJAX :  1. Larabel 2. CCS Studio
        app.request.get('https://adverse.kideduc.com/services/view_link.php?link_id='+linkId, function(data) {
              // Hide Preloader
              app.preloader.hide();

              // Resolve route to load page
              resolve(
                  {
                      component: AboutLinkAjaxLoadPage,
                  },
                  {
                      props: {
                          catg: vCatg,
                          prdt: data,
                      }
                  }
              );

          });
/*
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: AboutLinkAjaxLoadPage,
          },
          {
            props: {
              catg: catg,
            }
          }
        );
*/
      }, 1000);
    },
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/schedule/',
    component: SchedulePage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/request-and-load/catg/:catgId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var cateId = to.params.catgId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var vCatg = {
          firstName: 'Dear',
          lastName: 'My Passengers',
          about: '我们为您提供以下特色服务，希望您喜欢!',
          links: [
            {
              title: 'Fall in lover with YangY Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Loving Eva Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Tony Adding Main Logic of AJAX :  1. Larabel 2. CCS Studio
//      app.request.get('https://localhost:8083/products', function(data) {
        app.request.get('https://adverse.kideduc.com/services/link_categories.php?node='+cateId, function(data) {
              // Hide Preloader
              app.preloader.hide();

              // Resolve route to load page
              resolve(
                  {
                      component: CruiseAjaxLoad,
                  },
                  {
                      props: {
                          catg: vCatg,
                          prdt: data,
                      }
                  }
              );

          });
/*
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: CruiseAjaxLoad,
          },
          {
            props: {
              catg: catg,
            }
          }
        );
*/
      }, 1000);
    },
  },
  {
    path: '/request-and-load/links/:catgId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var cateId = to.params.catgId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var vCatg = {
          firstName: 'Dear',
          lastName: 'My Passengers',
          about: ' 我们为您提供以下服务，希望您喜欢!',
          links: [
            {
              title: 'Fall in lover with YangY Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Loving Eva Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Tony Adding Main Logic of AJAX :  1. Larabel 2. CCS Studio
//      app.request.get('https://localhost:8083/products', function(data) {
        app.request.get('https://adverse.kideduc.com/services/links.php?node='+cateId, function(data) {
              // Hide Preloader
              app.preloader.hide();

              // Resolve route to load page
              resolve(
                  {
                      component: CruiseAjaxLinkSumry,
                  },
                  {
                      props: {
                          catg: vCatg,
                          prdt: data,
                      }
                  }
              );

          });
/*
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: CruiseAjaxLinkSumry,
          },
          {
            props: {
              catg: catg,
            }
          }
        );
*/
      }, 1000);
    },
  },
  {
    path: '/evn-type-chooser/',
    component: EvnTypeChooser,
  },
  {
    path: '/evn-base-information/',
    component: EvnBaseInformation,
  },
  {
    path: '/evn-addi-medicine/',
    component: EvnAddiMedicine,
  },
  {
    path: '/evn-addi-equipment/',
    component: EvnAddiEquipment,
  },
  {
    path: '/evn-addi-attachment/',
    component: EvnAddiAttachment,
  },
  {
    path: '/evn-info-summary/:Evntid/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var Evntid = to.params.Evntid;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var vCatg = {
          firstName: 'Dear',
          lastName: 'My Passengers',
          about: ' 我们为您提供以下服务，希望您喜欢!',
          links: [
            {
              title: 'Fall in lover with YangY Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Loving Eva Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Tony Adding Main Logic of AJAX :  1. Larabel 2. CCS Studio
        app.request.get('https://adverse.kideduc.com/services/event_full_detail.php?event_id='+Evntid, function(data) {
              // Hide Preloader
              app.preloader.hide();

              // Resolve route to load page
              resolve(
                  {
                      component: EvnInfoSummary,
                  },
                  {
                      props: {
                          catg: vCatg,
                          prdt: data,
                      }
                  }
              );

          });
/*
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: EvnInfoSummary,
          },
          {
            props: {
              catg: catg,
            }
          }
        );
*/
      }, 1000);
    },
  },
  {
    path: '/aprvl-todo-list/',
    component: AprvlTodoListPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;