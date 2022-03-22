(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{2247:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i(8),s=i(50),r=i(1),l=i(69),o=i(51),c=i(295),v=i(225),d=i(16),m=i(18),_=Object(a.c)({layout:"empty",setup(){var t=Object(a.v)(),e=Object(l.d)({query:o.p,variables:{inviteID:t.value.query.id},defer:!0});Object(d.i)((()=>{"string"==typeof t.value.query.id&&e.execute({inviteID:t.value.query.id})}));var i=Object(m.g)(d.j,null),s=Object(m.g)(d.c,null),r=Object(a.a)((()=>!!i.value&&!s.value));return{E:n,inviteDetails:e,loadingCurrentUser:r,currentUser:s}},data:()=>({invalidLink:!1,showLogin:!1,loading:!1,revokedLink:!1,inviteID:"",joinTeamSuccess:!1}),beforeMount(){Object(v.a)()},mounted(){"string"==typeof this.$route.query.id&&(this.inviteID=this.$route.query.id),this.invalidLink=!this.inviteID},methods:{joinTeam(){this.loading=!0,Object(r.pipe)(Object(c.a)(this.inviteID),s.p((()=>{this.loading=!1,this.$toast.error("".concat(this.$t("error.something_went_wrong")))}),(()=>{this.joinTeamSuccess=!0,this.loading=!1})))()},getErrorMessage(t){if("network_error"===t.type)return this.$t("error.network_error");switch(t.error){case"team_invite/not_valid_viewer":return this.$t("team.not_valid_viewer");case"team_invite/not_found":return this.$t("team.not_found");case"team_invite/no_invite_found":return this.$t("team.no_invite_found");case"team_invite/already_member":return this.$t("team.already_member");case"team_invite/email_do_not_match":return this.$t("team.email_do_not_match");default:return this.$t("error.something_went_wrong")}}}}),u=i(15),f=Object(u.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-col items-center justify-between min-h-screen"},[t.invalidLink?i("div",{staticClass:"flex flex-col items-center justify-center flex-1"},[i("i",{staticClass:"pb-2 opacity-75 material-icons"},[t._v("error_outline")]),t._v(" "),i("h1",{staticClass:"text-center heading"},[t._v("\n      "+t._s(t.$t("team.invalid_invite_link"))+"\n    ")]),t._v(" "),i("p",{staticClass:"mt-2 text-center"},[t._v("\n      "+t._s(t.$t("team.invalid_invite_link_description"))+"\n    ")])]):t.loadingCurrentUser?i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[i("SmartSpinner")],1):null===t.currentUser?i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[i("h1",{staticClass:"heading"},[t._v(t._s(t.$t("team.login_to_continue")))]),t._v(" "),i("p",{staticClass:"mt-2"},[t._v(t._s(t.$t("team.login_to_continue_description")))]),t._v(" "),i("ButtonPrimary",{staticClass:"mt-8",attrs:{label:t.$t("auth.login_to_hoppscotch")},nativeOn:{click:function(e){t.showLogin=!0}}})],1):i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[t.inviteDetails.loading?i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[i("SmartSpinner")],1):i("div",[!t.inviteDetails.loading&&t.E.isLeft(t.inviteDetails.data)?i("div",{staticClass:"flex flex-col items-center p-4"},[i("i",{staticClass:"mb-4 material-icons"},[t._v("error_outline")]),t._v(" "),i("p",[t._v("\n          "+t._s(t.getErrorMessage(t.inviteDetails.data.left))+"\n        ")]),t._v(" "),i("p",{staticClass:"flex flex-col items-center p-4 mt-8 border rounded border-dividerLight"},[i("span",{staticClass:"mb-4"},[t._v("\n            "+t._s(t.$t("team.logout_and_try_again"))+"\n          ")]),t._v(" "),i("span",{staticClass:"flex"},["gql_error"===t.inviteDetails.data.left.type?i("FirebaseLogout",{attrs:{outline:""}}):t._e()],1)])]):t._e(),t._v(" "),t.inviteDetails.loading||!t.E.isRight(t.inviteDetails.data)||t.joinTeamSuccess?t._e():i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[i("h1",{staticClass:"heading"},[t._v("\n          "+t._s(t.$t("team.join_team",{team:t.inviteDetails.data.right.teamInvitation.team.name}))+"\n        ")]),t._v(" "),i("p",{staticClass:"mt-2 text-secondaryLight"},[t._v("\n          "+t._s(t.$t("team.invited_to_team",{owner:t.inviteDetails.data.right.teamInvitation.creator.displayName,team:t.inviteDetails.data.right.teamInvitation.team.name}))+"\n        ")]),t._v(" "),i("div",{staticClass:"mt-8"},[i("ButtonPrimary",{attrs:{label:t.$t("team.join_team",{team:t.inviteDetails.data.right.teamInvitation.team.name}),loading:t.loading,disabled:t.revokedLink},nativeOn:{click:function(e){return t.joinTeam.apply(null,arguments)}}})],1)]),t._v(" "),!t.inviteDetails.loading&&t.E.isRight(t.inviteDetails.data)&&t.joinTeamSuccess?i("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[i("h1",{staticClass:"heading"},[t._v("\n          "+t._s(t.$t("team.joined_team",{team:t.inviteDetails.data.right.teamInvitation.team.name}))+"\n        ")]),t._v(" "),i("p",{staticClass:"mt-2 text-secondaryLight"},[t._v("\n          "+t._s(t.$t("team.joined_team_description",{team:t.inviteDetails.data.right.teamInvitation.team.name}))+"\n        ")]),t._v(" "),i("div",{staticClass:"mt-8"},[i("ButtonSecondary",{attrs:{to:"/",svg:"home",filled:"",label:t.$t("app.home")}})],1)]):t._e()])]),t._v(" "),i("div",{staticClass:"p-4"},[i("ButtonSecondary",{staticClass:"tracking-wide !font-bold !text-secondaryDark",attrs:{label:"HOPPSCOTCH",to:"/"}})],1),t._v(" "),i("FirebaseLogin",{attrs:{show:t.showLogin},on:{"hide-modal":function(e){t.showLogin=!1}}})],1)}),[],!1,null,null,null);e.default=f.exports;installComponents(f,{SmartSpinner:i(143).default,ButtonPrimary:i(170).default,FirebaseLogout:i(462).default,ButtonSecondary:i(85).default,FirebaseLogin:i(463).default})}}]);