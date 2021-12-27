if (self.CavalryLogger) { CavalryLogger.start_js(["zFCJ11U"]); }

__d("FriendingCometManageFriendsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2832366396868895"}),null);
__d("FriendingCometManageFriendsDialogQuery$Parameters",["FriendingCometManageFriendsDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometManageFriendsDialogQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometManageFriendsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4623969057694084"}),null);
__d("FriendingCometFriendsBadgeCountClearMutation.graphql",["FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmarkIDs"},c={defaultValue:null,kind:"LocalArgument",name:"hasBookmark"},d={defaultValue:null,kind:"LocalArgument",name:"hasTopTab"},e={defaultValue:null,kind:"LocalArgument",name:"input"},f=[{kind:"Variable",name:"data",variableName:"input"}],g=[{kind:"Variable",name:"bookmark_ids",variableName:"bookmarkIDs"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}],j={condition:"hasBookmark",kind:"Condition",passingValue:!0,selections:[{alias:"bookmark_unread_count",args:i,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'}]};i={alias:"bookmark_unread_count_string",args:i,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'};var k={condition:"hasTopTab",kind:"Condition",passingValue:!0,selections:[{alias:"tab_unread_count",args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'}]},l={alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendConfirmedNotificationsConnection",kind:"LinkedField",name:"friend_confirmed_notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendConfirmedNotificationsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_unseen",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FriendingPossibilitiesConnection",kind:"LinkedField",name:"friending_possibilities",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendingPossibilitiesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e],kind:"Fragment",metadata:null,name:"FriendingCometFriendsBadgeCountClearMutation",selections:[{alias:null,args:f,concreteType:"ViewerFriendsBadgeCountClearResponsePayload",kind:"LinkedField",name:"viewer_friends_badge_count_clear",plural:!1,selections:[{alias:"viewer_for_badge_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:g,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[h],storageKey:null},j,i,k],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},l],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,d,c,e],kind:"Operation",name:"FriendingCometFriendsBadgeCountClearMutation",selections:[{alias:null,args:f,concreteType:"ViewerFriendsBadgeCountClearResponsePayload",kind:"LinkedField",name:"viewer_friends_badge_count_clear",plural:!1,selections:[{alias:"viewer_for_badge_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:g,concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h],storageKey:null},j,i,k,h],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},l],storageKey:null}]},params:{id:b("FriendingCometFriendsBadgeCountClearMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometFriendsBadgeCountClearMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2963531890425143"}),null);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql",["FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ProactiveFriendingAlertImpressionUpdateResponsePayload",kind:"LinkedField",name:"proactive_friending_alert_impression_update",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",selections:c},params:{id:b("FriendingCometProactiveFriendingAlertImpressionUpdateMutation_facebookRelayOperation"),metadata:{},name:"FriendingCometProactiveFriendingAlertImpressionUpdateMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FriendingCometFriendRequestsScrollHoldingContainer.react",["BaseScrollableAreaContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect,k=b.useLayoutEffect,l=b.useRef;function a(a){var b=i(c("BaseScrollableAreaContext")),d=l(null),e=l(null),f=l(0),g=l(null),m=b[b.length-1];j(function(){var a=m.getDOMNode();if(a!=null){f.current=a.scrollTop;var b=function(){f.current=a.scrollTop};a.addEventListener("scroll",b,{passive:!0});return function(){a.removeEventListener("scroll",b,{passive:!0})}}},[m]);k(function(){if(d.current!=null){var b=d.current.getBoundingClientRect();if(e.current!=null){if(g.current===a.firstRequesterID){g.current=a.firstRequesterID;e.current=b;return}var c=b.height-e.current.height,h=m.getDOMNode();h!=null&&h.scrollTop===f.current&&(h.scrollTop+=c)}g.current=a.firstRequesterID;e.current=b}});return h.jsx("div",{ref:d,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometManageFriendsDialog.entrypoint",["FriendingCometManageFriendsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:b("FriendingCometManageFriendsDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("FriendingCometManageFriendsDialog.react").__setRef("FriendingCometManageFriendsDialog.entrypoint")};g["default"]=a}),98);
__d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation",["CometRelay","FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("FriendingCometProactiveFriendingAlertImpressionUpdateMutation.graphql");function a(a,b,c){return d("CometRelay").commitMutation(a,{mutation:i,onError:c,variables:{input:b}})}g.commit=a}),98);
__d("ManageFriendsEntryPointClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743888");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_click",a);e.exports=c}),null);
__d("ManageFriendsEntryPointDismissalFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743889");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_dismissal",a);e.exports=c}),null);
__d("ManageFriendsEntryPointImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743890");c=b("FalcoLoggerInternal").create("manage_friends_entry_point_impression",a);e.exports=c}),null);
__d("FriendingCometFriendLimitWarning.react",["fbt","ix","CometCard.react","CometRelay","FriendingCometManageFriendsDialog.entrypoint","FriendingCometProactiveFriendingAlertImpressionUpdateMutation","ManageFriendsEntryPointClickFalcoEvent","ManageFriendsEntryPointDismissalFalcoEvent","ManageFriendsEntryPointImpressionFalcoEvent","TetraButton.react","TetraCircleButton.react","TetraIcon.react","TetraTextPairing.react","fbicon","react","useCometEntryPointDialog","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useRef;function a(a){var b=d("CometRelay").useRelayEnvironment();a=c("useCometEntryPointDialog")(c("FriendingCometManageFriendsDialog.entrypoint"),{});var e=a[0],f=l(!1);a=k(function(){f.current||(d("FriendingCometProactiveFriendingAlertImpressionUpdateMutation").commit(b,{}),c("ManageFriendsEntryPointImpressionFalcoEvent").log(function(){return{entry_point:"proactive_module"}}),f.current=!0)},[b]);a=c("useVisibilityObserver")({onVisible:a});var g=j.jsx("div",{className:"datstx6m",children:j.jsx("div",{className:"ciadx1gn l9j0dhe7 a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys taijpn5t mudddibn j83agx80 rq0escxv sk4xxmp2 agehan2d n8ej3o3l rt8b4zig spb7xbtv bkmhp75w emlxlaya s45kfl79 ibgm0fz6 bp9cbjyn",children:j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("502061"),16)})})}),m=j.jsx("div",{className:"knvmm38d h676nmdw oi9244e8 ama3r5zh buofh1pr",children:j.jsx(c("TetraTextPairing.react"),{body:h._(/*FBT_CALL*/"The maximum is 5,000. Consider removing some friends before adding new ones."/*FBT_CALL*/),headline:h._(/*FBT_CALL*/"Reaching friend limit"/*FBT_CALL*/),level:3})}),n=j.jsx("div",{className:"datstx6m",children:j.jsx(c("TetraCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("478238"),20),label:h._(/*FBT_CALL*/"Close"/*FBT_CALL*/),onPress:function(){d("CometRelay").commitLocalUpdate(b,function(a){a=a.get(d("CometRelay").VIEWER_ID);a==null?void 0:a.setValue(!1,"should_show_proactive_friending_alert")}),c("ManageFriendsEntryPointDismissalFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},size:32})}),o=j.jsx(c("TetraButton.react"),{label:h._(/*FBT_CALL*/"Manage friends"/*FBT_CALL*/),onPress:function(){e({}),c("ManageFriendsEntryPointClickFalcoEvent").log(function(){return{entry_point:"proactive_module"}})},padding:"wide",type:"secondary"});return j.jsx("div",{className:"jei6r52m dhix69tm wkznzc2l n851cfcs",ref:a,children:j.jsx(c("CometCard.react"),{dropShadow:2,children:j.jsxs("div",{className:"lb8aey2d a5h7je3r oj5qckz4 p6qk8glf",children:[j.jsxs("div",{className:"j83agx80",children:[g,m,n]}),o]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FriendingCometFriendsBadgeCountClearMutation",["CometHomepageBadgeCountClearingMutationHelper","CometRelay","FriendingCometFriendsBadgeCountClearMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i={bookmarkIDs:["2356318349"],hasBookmark:!0,hasTopTab:!0},j=h!==void 0?h:h=b("FriendingCometFriendsBadgeCountClearMutation.graphql");function k(a){d("CometHomepageBadgeCountClearingMutationHelper").clearBadgeCount(babelHelpers["extends"]({},i,{store:a}))}var l=function(a){d("CometHomepageBadgeCountClearingMutationHelper").onCompleted(i.bookmarkIDs,a==null?void 0:(a=a.viewer_friends_badge_count_clear)==null?void 0:a.viewer_for_badge_count)};function a(a,b,c){var e=function(a){if(b==null)return;k(a)};return d("CometRelay").commitMutation(a,{mutation:j,onCompleted:l,onError:c,optimisticUpdater:e,variables:babelHelpers["extends"]({},i,{input:b})})}g.commit=a}),98);/*FB_PKG_DELIM*/
__d("NullStateNotifications",["IconSource"],(function(a,b,c,d,e,f,g){"use strict";a={dark:new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/notifications/null_states_notifications_dark_mode.svg",112),"default":new(c("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/notifications/null_states_notifications_gray_wash.svg",112)};g["default"]=a}),98);
__d("CometNoNotifications.react",["fbt","CometContentArea.react","NullStateNotifications","TetraNullState.react","react","requireDeferred"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect,k=c("requireDeferred")("NoNotificationsFalcoEvent").__setRef("CometNoNotifications.react");function a(a){var b=a.loggingSurface,d=a.userId;j(function(){k.onReady(function(a){a=a.log;return a(function(){return{ref:b,user_id:d}})})},[b,d]);return i.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:i.jsx(c("TetraNullState.react"),{"data-testid":void 0,headline:h._(/*FBT_CALL*/"You have no notifications"/*FBT_CALL*/),icon:c("NullStateNotifications")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometNotificationsInteractionLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=d("react");var h=b.useMemo,i=b.useRef;c=function(){var a=i(!1),b=h(function(){return{notifsLoadCompleteRef:a}},[a]);return b};e=a.createContext({notifsLoadCompleteRef:{current:!1}});g.useInteractionLoggingRefs=c;g.CometNotificationsInteractionLoggingContext=e}),98);
__d("CometNotificationsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({renderLocation:null});g["default"]=b}),98);
__d("CometNotificationsRenderLocations",[],(function(a,b,c,d,e,f){"use strict";a="dropdown";b="rail";f.DROPDOWN=a;f.RAIL=b}),66);
__d("CometNotificationsScrollHoldingContainer.react",["BaseScrollableAreaContext","HiddenSubtreePassiveContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useEffect,k=b.useLayoutEffect,l=b.useRef;function a(a){var b=i(c("BaseScrollableAreaContext")),d=i(c("HiddenSubtreePassiveContext")),e=l(null),f=l(null),g=l(null),m=l(0),n=b[b.length-1];j(function(){var a=n.getDOMNode();if(a!=null){m.current=a.scrollTop;var b=function(){m.current=a.scrollTop};a.addEventListener("scroll",b,{passive:!0});return function(){a.removeEventListener("scroll",b,{passive:!0})}}},[n]);k(function(){if(e.current!=null&&!d.getCurrentState().hiddenOrBackgrounded_FIXME){var b=e.current.getBoundingClientRect();if(g.current!=null&&f.current!=null){var c=b.height-g.current.height;if(c===0||f.current===a.firstNotificationID){f.current=a.firstNotificationID;g.current=b;return}var h=n.getDOMNode();h!=null&&(h.scrollTop===m.current||g.current==null)&&(h.scrollTop+=c)}f.current=a.firstNotificationID;g.current=b}});return h.jsx("div",{ref:e,children:a.children})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useHandleUpdateMultiNotifReadState",["CometNotificationsMutationLogger","CometNotificationsUpdateSeenStateMutation","recoverableViolation","useGetCancellableSeenStateCallback","useTriggerAccessibilityAlert"],(function(a,b,c,d,e,f,g){"use strict";var h="MAIN_SURFACE";function i(a){var b=a.accessibilityString,e=a.environment,f=a.queryID,g=a.receivedNotificationIdsRef,i=a.timestamp,j=a.triggerAccessibilityAlert;if(g==null||g.current==null)return;d("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(e,{environment:h,input:{environment:h,is_comet:!0,last_notif_sync_time:i,notif_ids:Array.from(g.current),query_id:f,source:"unknown",update_type:"MARK_ALL_READ"}},{mutationLogger:d("CometNotificationsMutationLogger").notificationMarkAllAsReadStart,onError:function(a){c("recoverableViolation")("Update read state (multi) mutation failed with an error: ","Notifications",{error:a})},onSuccess:function(){b!=null&&j!=null&&j(b)},updater:function(a){d("CometNotificationsUpdateSeenStateMutation").updateMultiNotifReadState(a),d("CometNotificationsUpdateSeenStateMutation").clearBadgeCount(a)}})}function a(a){var b=c("useTriggerAccessibilityAlert")();return c("useGetCancellableSeenStateCallback")(babelHelpers["extends"]({},a,{triggerAccessibilityAlert:b,updater:i}))}g["default"]=a}),98);
__d("useHandleUpdateMultiNotifSeenState",["CometNotificationsMutationLogger","CometNotificationsUpdateSeenStateMutation","recoverableViolation","useGetCancellableSeenStateCallback"],(function(a,b,c,d,e,f,g){"use strict";var h="MAIN_SURFACE";function i(a){var b=a.environment,e=a.queryID,f=a.receivedNotificationIdsRef;a=a.timestamp;if(f==null||f.current==null)return;d("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation(b,{environment:h,input:{environment:h,is_comet:!0,last_notif_sync_time:a,notif_ids:Array.from(f.current),query_id:e,source:"unknown",update_type:"MARK_ALL_SEEN"}},{mutationLogger:d("CometNotificationsMutationLogger").notificationMarkAllAsSeenStart,onError:function(a){c("recoverableViolation")("Update seen state (multi) mutation failed with an error: ","Notifications",{error:a})},updater:function(a){d("CometNotificationsUpdateSeenStateMutation").updateMultiNotifSeenState(a),d("CometNotificationsUpdateSeenStateMutation").clearBadgeCount(a)}})}function a(a){return c("useGetCancellableSeenStateCallback")(babelHelpers["extends"]({},a,{updater:i}))}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}];return{argumentDefinitions:[{kind:"RootArgument",name:"bookmarkID"}],kind:"Fragment",metadata:null,name:"CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer",selections:[{alias:null,args:[{items:[{kind:"Variable",name:"bookmark_ids.0",variableName:"bookmarkID"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"FAVORITES"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:"bookmark_unread_count",args:a,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:"bookmark_unread_count_string",args:a,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometHomepageBadgeCountClearingMutationHelper_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}];return{argumentDefinitions:[{kind:"RootArgument",name:"bookmarkIDs"},{kind:"RootArgument",name:"hasBookmark"},{kind:"RootArgument",name:"hasTopTab"}],kind:"Fragment",metadata:null,name:"CometHomepageBadgeCountClearingMutationHelper_viewer",selections:[{alias:null,args:[{kind:"Variable",name:"bookmark_ids",variableName:"bookmarkIDs"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{condition:"hasBookmark",kind:"Condition",passingValue:!0,selections:[{alias:"bookmark_unread_count",args:a,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'}]},{alias:"bookmark_unread_count_string",args:a,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'},{condition:"hasTopTab",kind:"Condition",passingValue:!0,selections:[{alias:"tab_unread_count",args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'}]}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometHomepageBadgeCountClearingMutationHelper",["CometHomeProductBadgedNavigationLogger","CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql","CometHomepageBadgeCountClearingMutationHelper_viewer.graphql","RelayFBConnectionHandler_UNSTABLE","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h,i;h!==void 0?h:h=b("CometHomepageBadgeCountClearingMutationHelper_viewer.graphql");i!==void 0?i:i=b("CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer.graphql");function a(a){var b=a.bookmarkIDs,e=a.hasBookmark,f=a.hasTopTab;a=a.store;if(f===!1&&e===!1)return;var g=a.getRoot();if(!g)return;g=g.getLinkedRecord("viewer");if(!g)return;var h=g.getLinkedRecord("bookmarks",{bookmark_ids:b,environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"]});if(!h&&e){e=g.getLinkedRecord("bookmark_folder",{folder:"PRODUCT"});if(e!=null){a=d("RelayFBConnectionHandler_UNSTABLE").unstable_getAllConnectionsWithKey(a,e,"CometHomeLeftRailWithBlueRankingRefetchSection_bookmarks");a&&a.length>0&&(h=a[0])}}!h&&f&&c("gkx")("2204")&&(h=g.getLinkedRecord("tab_bookmarks",{environment:"COMET",folder_id:"PRODUCT"}));if(!h)return;e=h.getLinkedRecords("edges");if(!e)return;a=null;e.forEach(function(c){var d;c=c==null?void 0:c.getLinkedRecord("node");d=c==null?void 0:(d=c.getLinkedRecord("bookmarked_node"))==null?void 0:d.getValue("id");b.includes(d)&&(a=c)});if(!a)return;a.setValue(0,"unread_count",{bookmark_render_location:"COMET_LEFT_NAV"});a.setValue(null,"unread_count_string",{bookmark_render_location:"COMET_LEFT_NAV"});a.setValue(0,"unread_count",{bookmark_render_location:"COMET_TOP_TAB"})}function e(a,b){var c=b==null?void 0:(b=b.bookmarks)==null?void 0:b.edges;c!=null&&c.length>0&&(a==null?void 0:a.forEach(function(a){var b=c.find(function(b){return(b==null?void 0:(b=b.node)==null?void 0:(b=b.bookmarked_node)==null?void 0:b.id)===a});b=b==null?void 0:b.node;var e=b==null?void 0:b.bookmark_unread_count,f=b==null?void 0:b.bookmark_unread_count_string;b=b==null?void 0:b.tab_unread_count;e===0&&(b==null||b===0)&&f==null?d("CometHomeProductBadgedNavigationLogger").markerEnd(a,2):(e==null?d("CometHomeProductBadgedNavigationLogger").markerAnnotate({string:{bookmark_unread_count:"null"}},a):e>0&&d("CometHomeProductBadgedNavigationLogger").markerAnnotate({"int":{bookmark_unread_count:e}},a),b==null?d("CometHomeProductBadgedNavigationLogger").markerAnnotate({string:{tab_unread_count:"null"}},a):b>0&&d("CometHomeProductBadgedNavigationLogger").markerAnnotate({"int":{tab_unread_count:b}},a),f!=null&&d("CometHomeProductBadgedNavigationLogger").markerAnnotate({string:{bookmark_unread_count_string:f}},a),d("CometHomeProductBadgedNavigationLogger").markerEnd(a,3))}))}g.clearBadgeCount=a;g.onCompleted=e}),98);
__d("GroupsCometEndOfFeedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4420893367957000"}),null);/*FB_PKG_DELIM*/
__d("CometNotificationsMutationLogger",["QuickPerformanceLogger","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h=c("qpl")._(3473469,"7351"),i="client_action",j="status",k="seen_state",l=0;function m(a,b){var d;b===void 0&&(b=null);var e=l++;c("QuickPerformanceLogger").markerStart(h,e);c("QuickPerformanceLogger").markerAnnotate(h,{string:(d={},d[i]=a,d)},{instanceKey:e});c("QuickPerformanceLogger").markerAnnotate(h,{string:(a={},a[j]="started",a)},{instanceKey:e});c("QuickPerformanceLogger").markerAnnotate(h,{string:{environment:"MAIN_SURFACE"}},{instanceKey:e});if(b){c("QuickPerformanceLogger").markerAnnotate(h,{string:(d={},d[k]=b,d)},{instanceKey:e})}return p(e)}function n(a){var b;c("QuickPerformanceLogger").markerAnnotate(h,{string:(b={},b[j]="success",b)},{instanceKey:a});c("QuickPerformanceLogger").markerEnd(h,2,a)}function o(a,b){c("QuickPerformanceLogger").markerAnnotate(h,{string:{status:"error"}},{instanceKey:a}),c("QuickPerformanceLogger").markerAnnotate(h,{string:{error_localized_description:b==null?void 0:b.message}},{instanceKey:a}),c("QuickPerformanceLogger").markerAnnotate(h,{string:{error_domain:b==null?void 0:b.name}},{instanceKey:a}),c("QuickPerformanceLogger").markerEnd(h,87,a)}function p(a){return{logOnError:function(b){return o(a,b)},logOnSuccess:function(){return n(a)}}}function a(){return m("HIDE")}function b(){return m("MARK_ALL_AS_READ")}function d(){return m("MARK_ALL_AS_SEEN")}function e(a){return m("MARK_AS_READ",a)}function f(){return m("MARK_AS_SEEN")}function q(a){return m("MARK_AS_UNREAD",a)}function r(){return m("UNHIDE")}g.notificationHideStart=a;g.notificationMarkAllAsReadStart=b;g.notificationMarkAllAsSeenStart=d;g.notificationMarkAsReadStart=e;g.notificationMarkAsSeenStart=f;g.notificationMarkAsUnreadStart=q;g.notificationUnhideStart=r}),98);
__d("CometNotificationsTimestamp.react",["CometRelativeTimestamp.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.date,d=a.format;a=a.seenAndRead;return a?h.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:h.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})}):h.jsx(c("TetraText.react"),{color:"highlight",type:"bodyLink4",children:h.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometNotificationsDropdownMenuContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4498122803638702"}),null);