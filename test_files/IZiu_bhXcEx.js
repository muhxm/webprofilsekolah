if (self.CavalryLogger) { CavalryLogger.start_js(["p9dAzMQ"]); }

__d("ProfilePlusFollowerInviteDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4335077733278362"}),null);
__d("ProfilePlusFollowerInviteDialogQuery$Parameters",["ProfilePlusFollowerInviteDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfilePlusFollowerInviteDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfilePlusFollowerInviteDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useCometDisplayTimingTracker",["cr:1791501","performanceAbsoluteNow","react"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useCallback,i=e.useRef;function a(a,d){var e=i(null);return h(function(f){if(e.current!==f){e.current=f;if(f&&b("cr:1791501")){var g=c("performanceAbsoluteNow")();if(d!=null){var h=b("cr:1791501").getCurrentVCTraces().get(d);h&&h.addMountPoint(f,g,a)}else{h=b("cr:1791501").getCurrentVCTraces();h.forEach(function(b){b.addMountPoint(f,g,a)})}}}},[d,a])}g["default"]=a}),98);
__d("ProfilePlusFollowerInviteDialog.entrypoint",["JSResourceForInteraction","ProfilePlusFollowerInviteDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a=c("JSResourceForInteraction")("ProfilePlusFollowerInviteDialog.react").__setRef("ProfilePlusFollowerInviteDialog.entrypoint");b={getPreloadProps:function(a){var b=a.actorID!=null?{actorID:a.actorID}:void 0;return{queries:{queryReference:{environmentProviderOptions:b,options:{fetchPolicy:"network-only"},parameters:c("ProfilePlusFollowerInviteDialogQuery$Parameters"),variables:{profileID:a.profileID,scale:d("WebPixelRatio").get()}}}}},root:a};e=b;g["default"]=e}),98);
__d("ProfilePlusFollowChainingContext.react",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState,k=h.createContext({setShouldShowFollowChaining:c("emptyFunction"),shouldShowFollowChaining:!1});function a(a){a=a.children;var b=j(!1),c=b[0],d=b[1];b=i(function(){return{setShouldShowFollowChaining:d,shouldShowFollowChaining:c}},[c]);return h.jsx(k.Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g.ProfilePlusFollowChainingContext=k;g.ProfilePlusFollowChainingContextProvider=a}),98);