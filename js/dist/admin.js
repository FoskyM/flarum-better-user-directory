(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};(()=>{"use strict";const t=flarum.core.compat["common/app"];e.n(t)().initializers.add("foskym/flarum-better-user-directory",(function(){console.log("[foskym/flarum-better-user-directory] Hello, forum and admin!")}));const r=flarum.core.compat["admin/app"];var o=e.n(r);const s=flarum.core.compat["common/components/LinkButton"];var i=e.n(s);o().initializers.add("foskym/flarum-better-user-directory",(function(){o().extensionData.for("foskym-better-user-directory").registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,m(i(),{href:o().route("extension",{id:"fof-user-directory"})},o().translator.trans("foskym-sorts-for-user-directory.admin.go_to_user_directory_extension"))))})).registerSetting({setting:"foskym-better-user-directory.hide_search",label:o().translator.trans("foskym-better-user-directory.admin.settings.hide_search"),type:"boolean"}).registerSetting({setting:"foskym-better-user-directory.hide_filter_groups",label:o().translator.trans("foskym-better-user-directory.admin.settings.hide_filter_groups"),type:"boolean"}).registerSetting({setting:"foskym-better-user-directory.podium_style",label:o().translator.trans("foskym-better-user-directory.admin.settings.podium_style"),type:"boolean"}).registerSetting({setting:"foskym-better-user-directory.show_all_items_in_top_cards",label:o().translator.trans("foskym-better-user-directory.admin.settings.show_all_items_in_top_cards"),type:"boolean"}).registerSetting({setting:"foskym-better-user-directory.show_all_items_in_bottom_cards",label:o().translator.trans("foskym-better-user-directory.admin.settings.show_all_items_in_bottom_cards"),type:"boolean"})}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map