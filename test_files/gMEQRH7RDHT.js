if (self.CavalryLogger) { CavalryLogger.start_js(["fya\/ABS"]); }

__d("CometGroupRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4909726869061955"}),null);
__d("CometGroupRootQuery$Parameters",["CometGroupRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGroupRootQuery_facebookRelayOperation"),metadata:{},name:"CometGroupRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupDiscussionRootSuccessQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4271513722953232"}),null);
__d("CometGroupDiscussionRootSuccessQuery$Parameters",["CometGroupDiscussionRootSuccessQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGroupDiscussionRootSuccessQuery_facebookRelayOperation"),metadata:{},name:"CometGroupDiscussionRootSuccessQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupPermalinkRootContentFeedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6521782457895381"}),null);
__d("CometGroupPermalinkRootContentFeedQuery$Parameters",["CometGroupPermalinkRootContentFeedQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGroupPermalinkRootContentFeedQuery_facebookRelayOperation"),metadata:{},name:"CometGroupPermalinkRootContentFeedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometContextualProfileRootQuery$Parameters",["ProfileCometContextualProfileRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometContextualProfileRootQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometContextualProfileRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometContextualProfileLandingDialogEntrypointQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4483800841686498"}),null);
__d("ProfileCometContextualProfileLandingDialogEntrypointQuery$Parameters",["ProfileCometContextualProfileLandingDialogEntrypointQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometContextualProfileLandingDialogEntrypointQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometContextualProfileLandingDialogEntrypointQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildGroupCometRootRoute.entrypoint",["CometGroupRootQuery$Parameters","CometImageMediaType","JSResourceForInteraction","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("createContentAreaCompoundEntryPointBuilder")(c("JSResourceForInteraction")("CometGroupRoot.react").__setRef("buildGroupCometRootRoute.entrypoint"),function(a){var e=a.routeParams;a=a.routeProps;var f=a.groupID;a=a.section;return{rootQueryReference:{parameters:b("CometGroupRootQuery$Parameters"),variables:{currentSection:a,enablePrefetchGroupsHeaderImage:c("gkx")("1109"),groupID:f,imageMediaType:c("CometImageMediaType").get(),inviteShortLinkKey:e==null?void 0:e.invite_short_link_key,isChainingRecommendationUnit:(e==null?void 0:e.action_source)==="group_mall_recommendation_affordance",scale:d("WebPixelRatio").get()}}}});g["default"]=a}),98);
__d("GroupFeedType.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["BUY_AND_SELL","BUY_AND_SELL_DISCUSSION","BUY_AND_SELL_MANAGE_LISTINGS","DISCUSSION","QUESTIONS","SUBGROUP","WORK_GARDEN"]);c=a;f["default"]=c}),66);
__d("createCometGroupDiscussionRootQueries.entrypointutils",["CometGroupDiscussionRootSuccessQuery$Parameters","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h="DISCUSSION",i=new Map([[0,"DISCUSSION"],[1,"BUY_AND_SELL_DISCUSSION"],[2,"BUY_AND_SELL"]]);function j(a){a=a===void 0?{}:a;var b=a.params,e=a.regularStoriesCount;e=e===void 0?c("gkx")("4307")?1:2:e;var f=a.regularStoriesStreamInitialCount;f=f===void 0?c("gkx")("4307")?1:2:f;a=a.shouldDeferMainFeed;var g=b.routeProps,j=g.creative_provider_id,k=g.feedType,l=g.focusCommentID,m=g.groupID,n=g.hoistStories,o=g.renderLocation;o=o===void 0?"group":o;var p=g.storiesCount;g=g.storiesStreamInitialCount;b=b.routeParams;var q=b.hoisted_section_end_timestamp,r=b.hoisted_section_header_type;b=b.sorting_setting;return{parameters:c("CometGroupDiscussionRootSuccessQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometGroupDiscussionRootSuccessQuery",creative_provider_id:j,enableRecAffordance:c("gkx")("3409"),feedLocation:"GROUP",feedType:(j=i.get(k))!=null?j:h,feedbackSource:0,focusCommentID:l,gridImageHeight:c("gkx")("3793")?104:420,gridImageWidth:c("gkx")("3793")?104:420,groupID:m,hasHoistStories:n!=null&&n.length>0,highlight_unit_initial_load_count:c("gkx")("979")?2:3,hoistStories:n,hoistStoriesCount:Math.min((k=n==null?void 0:n.length)!=null?k:0,6),hoistedSectionEndTimestamp:q,hoistedSectionHeaderType:r,privacySelectorRenderLocation:"COMET_STREAM",recent_media_initial_load_count:c("gkx")("2013")?4:6,regular_stories_count:p!=null&&p>0?p:e,regular_stories_stream_initial_count:g!=null&&g>0?g:f,renderLocation:o,scale:d("WebPixelRatio").get(),shouldDeferMainFeed:(j=a)!=null?j:n!=null&&n.length>0,sortingSetting:b,useCometPhotoViewerPlaceholderFrag:c("gkx")("686"),useDefaultActor:!1}}}function a(a){a=a===void 0?{}:a;var b=a.params,c=a.regularStoriesCount,d=a.regularStoriesStreamInitialCount;a=a.shouldDeferMainFeed;b=j({params:b,regularStoriesCount:c,regularStoriesStreamInitialCount:d,shouldDeferMainFeed:a});return{queries:{queryReference:b}}}g.createCometGroupDiscussionRootQueryReference=j;g.createCometGroupDiscussionRootQueries=a}),98);
__d("createCometGroupDiscussionRoot.entrypoint",["buildGroupCometRootRoute.entrypoint","createCometGroupDiscussionRootQueries.entrypointutils"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a===void 0?{}:a;var b=a.regularStoriesCount,e=a.regularStoriesStreamInitialCount,f=a.resource,g=a.shouldDeferMainFeed;return c("buildGroupCometRootRoute.entrypoint")(f,function(a){return d("createCometGroupDiscussionRootQueries.entrypointutils").createCometGroupDiscussionRootQueries({params:a,regularStoriesCount:b,regularStoriesStreamInitialCount:e,shouldDeferMainFeed:g})})}g["default"]=a}),98);
__d("CometGroupDiscussionRoot.entrypoint",["JSResourceForInteraction","createCometGroupDiscussionRoot.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("createCometGroupDiscussionRoot.entrypoint")({resource:c("JSResourceForInteraction")("CometGroupDiscussionRoot.react").__setRef("CometGroupDiscussionRoot.entrypoint")});g["default"]=a}),98);
__d("createCometGroupPermalinkRootQueries.entrypointutils",["CometGroupPermalinkRootContentFeedQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a===void 0?{}:a;a=a.params;var b=a.routeParams,e=b.comment_id;b=b.reply_comment_id;a=a.routeProps;var f=a.focusCommentID,g=a.groupID,h=a.renderLocation;a=a.storyID;return{queries:{queryReference:{parameters:c("CometGroupPermalinkRootContentFeedQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometGroupPermalinkRootFeedQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"GROUP_PERMALINK",feedbackSource:2,focusCommentID:(f=(f=f)!=null?f:b)!=null?f:e,groupID:g,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:(b=h)!=null?b:"group_permalink",scale:d("WebPixelRatio").get(),storyID:a,useDefaultActor:!1}}}}}g.createCometGroupPermalinkRootQueries=a}),98);
__d("CometGroupPermalinkRoot.entrypoint",["JSResourceForInteraction","buildGroupCometRootRoute.entrypoint","createCometGroupPermalinkRootQueries.entrypointutils"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildGroupCometRootRoute.entrypoint")(c("JSResourceForInteraction")("CometGroupPermalinkRoot.react").__setRef("CometGroupPermalinkRoot.entrypoint"),function(a){return d("createCometGroupPermalinkRootQueries.entrypointutils").createCometGroupPermalinkRootQueries({params:a})});g["default"]=a}),98);
__d("ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint",["JSResourceForInteraction","ProfileCometContextualProfileLandingDialogEntrypointQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.groupID,e=a.landingAssociatedID,f=a.landingType;a=a.userID;return{queries:{ref:{parameters:b("ProfileCometContextualProfileLandingDialogEntrypointQuery$Parameters"),variables:{groupID:c,landingAssociatedID:e,landingType:f,scale:d("WebPixelRatio").get(),userID:a}}}}},root:c("JSResourceForInteraction")("ProfileCometContextualProfileLandingDialogEntrypoint.react").__setRef("ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint")};g["default"]=a}),98);
__d("ProfileCometContextualProfileRoot.entrypoint",["JSResourceForInteraction","ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint","ProfileCometContextualProfileRootQuery$Parameters","WebPixelRatio","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b;b=((b=a.routeProps)==null?void 0:b.landingType)!=null?{entryPoint:c("ProfileCometContextualProfileLandingDialogEntrypoint.entrypoint"),entryPointParams:{groupID:a.routeProps.groupID,landingAssociatedID:a.routeProps.landingAssociatedID,landingType:a.routeProps.landingType,userID:a.routeProps.userID}}:null;return{entryPoints:{ProfileCometContextualProfileLandingDialogEntrypoint:b},queries:{contextualProfileQueryReference:{parameters:c("ProfileCometContextualProfileRootQuery$Parameters"),variables:{contextualProfileContext:{associated_context_id:a.routeProps.groupID,render_location:"GROUP"},feedLocation:"GROUP_MEMBER_BIO_FEED",groupID:a.routeProps.groupID,groupMemberActionSource:"COMET_GROUP_MEMBER_PROFILE",postsToLoad:(b=c("qex")._("504"))!=null?b:1,privacySelectorRenderLocation:"COMET_STREAM",profileID:a.routeProps.userID,renderLocation:"group_bio",scale:d("WebPixelRatio").get(),shouldUseFXIMProfilePicEditor:!1,useDefaultActor:!1,useVNextHeader:(b=c("qex")._("153"))!=null?b:!1}}}}},root:c("JSResourceForInteraction")("ProfileCometContextualProfileRoot.react").__setRef("ProfileCometContextualProfileRoot.entrypoint")};g["default"]=a}),98);