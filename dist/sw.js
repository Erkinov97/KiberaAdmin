if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-74eda642"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_...all_.2cdd2c6e.js",revision:null},{url:"assets/_...all_.48334cfb.css",revision:null},{url:"assets/@ckeditor_ckeditor5-build-classic.4e9d1354.js",revision:null},{url:"assets/@ckeditor_ckeditor5-build-classic.f04365fa.css",revision:null},{url:"assets/@vueform_multiselect.0e90c6e5.js",revision:null},{url:"assets/@vueform_slider.8fdfa57d.js",revision:null},{url:"assets/AnimatedLogo.39a758e9.css",revision:null},{url:"assets/AnimatedLogo.7cf672a4.js",revision:null},{url:"assets/app.8e10c847.js",revision:null},{url:"assets/app.d8aa7891.css",revision:null},{url:"assets/auth.15ff1ddb.css",revision:null},{url:"assets/auth.679c6f11.js",revision:null},{url:"assets/create.bc46d1dc.js",revision:null},{url:"assets/edit.4fa34d4b.js",revision:null},{url:"assets/forgot.3e825f4c.js",revision:null},{url:"assets/index.0b347379.js",revision:null},{url:"assets/index.251feaf3.js",revision:null},{url:"assets/index.a5116b01.js",revision:null},{url:"assets/index.ab631930.css",revision:null},{url:"assets/index.b15502eb.css",revision:null},{url:"assets/index.b1c67338.js",revision:null},{url:"assets/index.cb9817a0.css",revision:null},{url:"assets/index.f190e72f.css",revision:null},{url:"assets/LandingLayout.vue_vue_type_script_setup_true_lang.f25e6376.js",revision:null},{url:"assets/login.f298b3f3.js",revision:null},{url:"assets/mediateka.dd12bd1c.js",revision:null},{url:"assets/notyf.9ad42824.js",revision:null},{url:"assets/publish.707b81e9.js",revision:null},{url:"assets/templates.34522ade.js",revision:null},{url:"assets/useNotyf.ff761b1d.js",revision:null},{url:"assets/v-calendar.97d38ef5.js",revision:null},{url:"assets/VCheckbox.335f9cad.css",revision:null},{url:"assets/VCheckbox.vue_vue_type_style_index_0_lang.b2130110.js",revision:null},{url:"assets/VControl.7628137c.js",revision:null},{url:"assets/VControl.fdd36048.css",revision:null},{url:"assets/VDropdown.dbc05ea0.css",revision:null},{url:"assets/VDropdown.vue_vue_type_style_index_0_lang.864e1dad.js",revision:null},{url:"assets/viewWrapper.3c54c69e.js",revision:null},{url:"assets/VInput.vue_vue_type_script_setup_true_lang.adbe0588.js",revision:null},{url:"index.html",revision:"fb70e643807bfb7dba060b193cc49bea"},{url:"vendors/font-awesome-v5.css",revision:"4c8b74382b4f6b2cf5f8afcb87e80abc"},{url:"vendors/line-icons-pro.css",revision:"4bb4c5797d6ce8bd02b13e2d12c34bcd"},{url:"vendors/prism-coldark-cold.css",revision:"238822f024eb9bd172d4d6494cacd69c"},{url:"favicon.svg",revision:"524cab7b5e455d34a449368438cdbfea"},{url:"favicon.ico",revision:"2608995d3ce047aed1b4f12314b971e6"},{url:"apple-touch-icon.png",revision:"3483d045409e842f56d487e9d1dbd49c"},{url:"pwa-192x192.png",revision:"0d44461ec0ee15a7f1a74ff2dbad1247"},{url:"pwa-512x512.png",revision:"3584115539362f85fb8b9dc35ccd3e57"},{url:"manifest.webmanifest",revision:"dffbc68d6792c8e2ee5bb914d28267c8"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
