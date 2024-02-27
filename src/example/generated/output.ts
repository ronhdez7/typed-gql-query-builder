export type Schema = {
Query: {
Page: [{
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["Page"] | null
],
Media: [{
id: Schema["Int"] | null,
idMal: Schema["Int"] | null,
startDate: Schema["FuzzyDateInt"] | null,
endDate: Schema["FuzzyDateInt"] | null,
season: Schema["MediaSeason"] | null,
seasonYear: Schema["Int"] | null,
type: Schema["MediaType"] | null,
format: Schema["MediaFormat"] | null,
status: Schema["MediaStatus"] | null,
episodes: Schema["Int"] | null,
duration: Schema["Int"] | null,
chapters: Schema["Int"] | null,
volumes: Schema["Int"] | null,
isAdult: Schema["Boolean"] | null,
genre: Schema["String"] | null,
tag: Schema["String"] | null,
minimumTagRank: Schema["Int"] | null,
tagCategory: Schema["String"] | null,
onList: Schema["Boolean"] | null,
licensedBy: Schema["String"] | null,
licensedById: Schema["Int"] | null,
averageScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
source: Schema["MediaSource"] | null,
countryOfOrigin: Schema["CountryCode"] | null,
isLicensed: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
idMal_not: Schema["Int"] | null,
idMal_in: (Schema["Int"] | null)[] | null,
idMal_not_in: (Schema["Int"] | null)[] | null,
startDate_greater: Schema["FuzzyDateInt"] | null,
startDate_lesser: Schema["FuzzyDateInt"] | null,
startDate_like: Schema["String"] | null,
endDate_greater: Schema["FuzzyDateInt"] | null,
endDate_lesser: Schema["FuzzyDateInt"] | null,
endDate_like: Schema["String"] | null,
format_in: (Schema["MediaFormat"] | null)[] | null,
format_not: Schema["MediaFormat"] | null,
format_not_in: (Schema["MediaFormat"] | null)[] | null,
status_in: (Schema["MediaStatus"] | null)[] | null,
status_not: Schema["MediaStatus"] | null,
status_not_in: (Schema["MediaStatus"] | null)[] | null,
episodes_greater: Schema["Int"] | null,
episodes_lesser: Schema["Int"] | null,
duration_greater: Schema["Int"] | null,
duration_lesser: Schema["Int"] | null,
chapters_greater: Schema["Int"] | null,
chapters_lesser: Schema["Int"] | null,
volumes_greater: Schema["Int"] | null,
volumes_lesser: Schema["Int"] | null,
genre_in: (Schema["String"] | null)[] | null,
genre_not_in: (Schema["String"] | null)[] | null,
tag_in: (Schema["String"] | null)[] | null,
tag_not_in: (Schema["String"] | null)[] | null,
tagCategory_in: (Schema["String"] | null)[] | null,
tagCategory_not_in: (Schema["String"] | null)[] | null,
licensedBy_in: (Schema["String"] | null)[] | null,
licensedById_in: (Schema["Int"] | null)[] | null,
averageScore_not: Schema["Int"] | null,
averageScore_greater: Schema["Int"] | null,
averageScore_lesser: Schema["Int"] | null,
popularity_not: Schema["Int"] | null,
popularity_greater: Schema["Int"] | null,
popularity_lesser: Schema["Int"] | null,
source_in: (Schema["MediaSource"] | null)[] | null,
sort: (Schema["MediaSort"] | null)[] | null,
},
Schema["Media"] | null
],
MediaTrend: [{
mediaId: Schema["Int"] | null,
date: Schema["Int"] | null,
trending: Schema["Int"] | null,
averageScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
episode: Schema["Int"] | null,
releasing: Schema["Boolean"] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
date_greater: Schema["Int"] | null,
date_lesser: Schema["Int"] | null,
trending_greater: Schema["Int"] | null,
trending_lesser: Schema["Int"] | null,
trending_not: Schema["Int"] | null,
averageScore_greater: Schema["Int"] | null,
averageScore_lesser: Schema["Int"] | null,
averageScore_not: Schema["Int"] | null,
popularity_greater: Schema["Int"] | null,
popularity_lesser: Schema["Int"] | null,
popularity_not: Schema["Int"] | null,
episode_greater: Schema["Int"] | null,
episode_lesser: Schema["Int"] | null,
episode_not: Schema["Int"] | null,
sort: (Schema["MediaTrendSort"] | null)[] | null,
},
Schema["MediaTrend"] | null
],
AiringSchedule: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
episode: Schema["Int"] | null,
airingAt: Schema["Int"] | null,
notYetAired: Schema["Boolean"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
episode_not: Schema["Int"] | null,
episode_in: (Schema["Int"] | null)[] | null,
episode_not_in: (Schema["Int"] | null)[] | null,
episode_greater: Schema["Int"] | null,
episode_lesser: Schema["Int"] | null,
airingAt_greater: Schema["Int"] | null,
airingAt_lesser: Schema["Int"] | null,
sort: (Schema["AiringSort"] | null)[] | null,
},
Schema["AiringSchedule"] | null
],
Character: [{
id: Schema["Int"] | null,
isBirthday: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["CharacterSort"] | null)[] | null,
},
Schema["Character"] | null
],
Staff: [{
id: Schema["Int"] | null,
isBirthday: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["StaffSort"] | null)[] | null,
},
Schema["Staff"] | null
],
MediaList: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
userName: Schema["String"] | null,
type: Schema["MediaType"] | null,
status: Schema["MediaListStatus"] | null,
mediaId: Schema["Int"] | null,
isFollowing: Schema["Boolean"] | null,
notes: Schema["String"] | null,
startedAt: Schema["FuzzyDateInt"] | null,
completedAt: Schema["FuzzyDateInt"] | null,
compareWithAuthList: Schema["Boolean"] | null,
userId_in: (Schema["Int"] | null)[] | null,
status_in: (Schema["MediaListStatus"] | null)[] | null,
status_not_in: (Schema["MediaListStatus"] | null)[] | null,
status_not: Schema["MediaListStatus"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
notes_like: Schema["String"] | null,
startedAt_greater: Schema["FuzzyDateInt"] | null,
startedAt_lesser: Schema["FuzzyDateInt"] | null,
startedAt_like: Schema["String"] | null,
completedAt_greater: Schema["FuzzyDateInt"] | null,
completedAt_lesser: Schema["FuzzyDateInt"] | null,
completedAt_like: Schema["String"] | null,
sort: (Schema["MediaListSort"] | null)[] | null,
},
Schema["MediaList"] | null
],
MediaListCollection: [{
userId: Schema["Int"] | null,
userName: Schema["String"] | null,
type: Schema["MediaType"] | null,
status: Schema["MediaListStatus"] | null,
notes: Schema["String"] | null,
startedAt: Schema["FuzzyDateInt"] | null,
completedAt: Schema["FuzzyDateInt"] | null,
forceSingleCompletedList: Schema["Boolean"] | null,
chunk: Schema["Int"] | null,
perChunk: Schema["Int"] | null,
status_in: (Schema["MediaListStatus"] | null)[] | null,
status_not_in: (Schema["MediaListStatus"] | null)[] | null,
status_not: Schema["MediaListStatus"] | null,
notes_like: Schema["String"] | null,
startedAt_greater: Schema["FuzzyDateInt"] | null,
startedAt_lesser: Schema["FuzzyDateInt"] | null,
startedAt_like: Schema["String"] | null,
completedAt_greater: Schema["FuzzyDateInt"] | null,
completedAt_lesser: Schema["FuzzyDateInt"] | null,
completedAt_like: Schema["String"] | null,
sort: (Schema["MediaListSort"] | null)[] | null,
},
Schema["MediaListCollection"] | null
],
GenreCollection: (Schema["String"] | null)[] | null,
MediaTagCollection: [{
status: Schema["Int"] | null,
},
(Schema["MediaTag"] | null)[] | null
],
User: [{
id: Schema["Int"] | null,
name: Schema["String"] | null,
isModerator: Schema["Boolean"] | null,
search: Schema["String"] | null,
sort: (Schema["UserSort"] | null)[] | null,
},
Schema["User"] | null
],
Viewer: Schema["User"] | null,
Notification: [{
type: Schema["NotificationType"] | null,
resetNotificationCount: Schema["Boolean"] | null,
type_in: (Schema["NotificationType"] | null)[] | null,
},
Schema["NotificationUnion"]
],
Studio: [{
id: Schema["Int"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["StudioSort"] | null)[] | null,
},
Schema["Studio"] | null
],
Review: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
userId: Schema["Int"] | null,
mediaType: Schema["MediaType"] | null,
sort: (Schema["ReviewSort"] | null)[] | null,
},
Schema["Review"] | null
],
Activity: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
messengerId: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
type: Schema["ActivityType"] | null,
isFollowing: Schema["Boolean"] | null,
hasReplies: Schema["Boolean"] | null,
hasRepliesOrTypeText: Schema["Boolean"] | null,
createdAt: Schema["Int"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
userId_not: Schema["Int"] | null,
userId_in: (Schema["Int"] | null)[] | null,
userId_not_in: (Schema["Int"] | null)[] | null,
messengerId_not: Schema["Int"] | null,
messengerId_in: (Schema["Int"] | null)[] | null,
messengerId_not_in: (Schema["Int"] | null)[] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
type_not: Schema["ActivityType"] | null,
type_in: (Schema["ActivityType"] | null)[] | null,
type_not_in: (Schema["ActivityType"] | null)[] | null,
createdAt_greater: Schema["Int"] | null,
createdAt_lesser: Schema["Int"] | null,
sort: (Schema["ActivitySort"] | null)[] | null,
},
Schema["ActivityUnion"]
],
ActivityReply: [{
id: Schema["Int"] | null,
activityId: Schema["Int"] | null,
},
Schema["ActivityReply"] | null
],
Following: [{
userId: Schema["Int"],
sort: (Schema["UserSort"] | null)[] | null,
},
Schema["User"] | null
],
Follower: [{
userId: Schema["Int"],
sort: (Schema["UserSort"] | null)[] | null,
},
Schema["User"] | null
],
Thread: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
replyUserId: Schema["Int"] | null,
subscribed: Schema["Boolean"] | null,
categoryId: Schema["Int"] | null,
mediaCategoryId: Schema["Int"] | null,
search: Schema["String"] | null,
id_in: (Schema["Int"] | null)[] | null,
sort: (Schema["ThreadSort"] | null)[] | null,
},
Schema["Thread"] | null
],
ThreadComment: [{
id: Schema["Int"] | null,
threadId: Schema["Int"] | null,
userId: Schema["Int"] | null,
sort: (Schema["ThreadCommentSort"] | null)[] | null,
},
(Schema["ThreadComment"] | null)[] | null
],
Recommendation: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
mediaRecommendationId: Schema["Int"] | null,
userId: Schema["Int"] | null,
rating: Schema["Int"] | null,
onList: Schema["Boolean"] | null,
rating_greater: Schema["Int"] | null,
rating_lesser: Schema["Int"] | null,
sort: (Schema["RecommendationSort"] | null)[] | null,
},
Schema["Recommendation"] | null
],
Like: [{
likeableId: Schema["Int"] | null,
type: Schema["LikeableType"] | null,
},
Schema["User"] | null
],
Markdown: [{
markdown: Schema["String"],
},
Schema["ParsedMarkdown"] | null
],
AniChartUser: Schema["AniChartUser"] | null,
SiteStatistics: Schema["SiteStatistics"] | null,
ExternalLinkSourceCollection: [{
id: Schema["Int"] | null,
type: Schema["ExternalLinkType"] | null,
mediaType: Schema["ExternalLinkMediaType"] | null,
},
(Schema["MediaExternalLink"] | null)[] | null
],
};

Int: number;

Page: {
pageInfo: Schema["PageInfo"] | null,
users: [{
id: Schema["Int"] | null,
name: Schema["String"] | null,
isModerator: Schema["Boolean"] | null,
search: Schema["String"] | null,
sort: (Schema["UserSort"] | null)[] | null,
},
(Schema["User"] | null)[] | null
],
media: [{
id: Schema["Int"] | null,
idMal: Schema["Int"] | null,
startDate: Schema["FuzzyDateInt"] | null,
endDate: Schema["FuzzyDateInt"] | null,
season: Schema["MediaSeason"] | null,
seasonYear: Schema["Int"] | null,
type: Schema["MediaType"] | null,
format: Schema["MediaFormat"] | null,
status: Schema["MediaStatus"] | null,
episodes: Schema["Int"] | null,
duration: Schema["Int"] | null,
chapters: Schema["Int"] | null,
volumes: Schema["Int"] | null,
isAdult: Schema["Boolean"] | null,
genre: Schema["String"] | null,
tag: Schema["String"] | null,
minimumTagRank: Schema["Int"] | null,
tagCategory: Schema["String"] | null,
onList: Schema["Boolean"] | null,
licensedBy: Schema["String"] | null,
licensedById: Schema["Int"] | null,
averageScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
source: Schema["MediaSource"] | null,
countryOfOrigin: Schema["CountryCode"] | null,
isLicensed: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
idMal_not: Schema["Int"] | null,
idMal_in: (Schema["Int"] | null)[] | null,
idMal_not_in: (Schema["Int"] | null)[] | null,
startDate_greater: Schema["FuzzyDateInt"] | null,
startDate_lesser: Schema["FuzzyDateInt"] | null,
startDate_like: Schema["String"] | null,
endDate_greater: Schema["FuzzyDateInt"] | null,
endDate_lesser: Schema["FuzzyDateInt"] | null,
endDate_like: Schema["String"] | null,
format_in: (Schema["MediaFormat"] | null)[] | null,
format_not: Schema["MediaFormat"] | null,
format_not_in: (Schema["MediaFormat"] | null)[] | null,
status_in: (Schema["MediaStatus"] | null)[] | null,
status_not: Schema["MediaStatus"] | null,
status_not_in: (Schema["MediaStatus"] | null)[] | null,
episodes_greater: Schema["Int"] | null,
episodes_lesser: Schema["Int"] | null,
duration_greater: Schema["Int"] | null,
duration_lesser: Schema["Int"] | null,
chapters_greater: Schema["Int"] | null,
chapters_lesser: Schema["Int"] | null,
volumes_greater: Schema["Int"] | null,
volumes_lesser: Schema["Int"] | null,
genre_in: (Schema["String"] | null)[] | null,
genre_not_in: (Schema["String"] | null)[] | null,
tag_in: (Schema["String"] | null)[] | null,
tag_not_in: (Schema["String"] | null)[] | null,
tagCategory_in: (Schema["String"] | null)[] | null,
tagCategory_not_in: (Schema["String"] | null)[] | null,
licensedBy_in: (Schema["String"] | null)[] | null,
licensedById_in: (Schema["Int"] | null)[] | null,
averageScore_not: Schema["Int"] | null,
averageScore_greater: Schema["Int"] | null,
averageScore_lesser: Schema["Int"] | null,
popularity_not: Schema["Int"] | null,
popularity_greater: Schema["Int"] | null,
popularity_lesser: Schema["Int"] | null,
source_in: (Schema["MediaSource"] | null)[] | null,
sort: (Schema["MediaSort"] | null)[] | null,
},
(Schema["Media"] | null)[] | null
],
characters: [{
id: Schema["Int"] | null,
isBirthday: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["CharacterSort"] | null)[] | null,
},
(Schema["Character"] | null)[] | null
],
staff: [{
id: Schema["Int"] | null,
isBirthday: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["StaffSort"] | null)[] | null,
},
(Schema["Staff"] | null)[] | null
],
studios: [{
id: Schema["Int"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["StudioSort"] | null)[] | null,
},
(Schema["Studio"] | null)[] | null
],
mediaList: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
userName: Schema["String"] | null,
type: Schema["MediaType"] | null,
status: Schema["MediaListStatus"] | null,
mediaId: Schema["Int"] | null,
isFollowing: Schema["Boolean"] | null,
notes: Schema["String"] | null,
startedAt: Schema["FuzzyDateInt"] | null,
completedAt: Schema["FuzzyDateInt"] | null,
compareWithAuthList: Schema["Boolean"] | null,
userId_in: (Schema["Int"] | null)[] | null,
status_in: (Schema["MediaListStatus"] | null)[] | null,
status_not_in: (Schema["MediaListStatus"] | null)[] | null,
status_not: Schema["MediaListStatus"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
notes_like: Schema["String"] | null,
startedAt_greater: Schema["FuzzyDateInt"] | null,
startedAt_lesser: Schema["FuzzyDateInt"] | null,
startedAt_like: Schema["String"] | null,
completedAt_greater: Schema["FuzzyDateInt"] | null,
completedAt_lesser: Schema["FuzzyDateInt"] | null,
completedAt_like: Schema["String"] | null,
sort: (Schema["MediaListSort"] | null)[] | null,
},
(Schema["MediaList"] | null)[] | null
],
airingSchedules: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
episode: Schema["Int"] | null,
airingAt: Schema["Int"] | null,
notYetAired: Schema["Boolean"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
episode_not: Schema["Int"] | null,
episode_in: (Schema["Int"] | null)[] | null,
episode_not_in: (Schema["Int"] | null)[] | null,
episode_greater: Schema["Int"] | null,
episode_lesser: Schema["Int"] | null,
airingAt_greater: Schema["Int"] | null,
airingAt_lesser: Schema["Int"] | null,
sort: (Schema["AiringSort"] | null)[] | null,
},
(Schema["AiringSchedule"] | null)[] | null
],
mediaTrends: [{
mediaId: Schema["Int"] | null,
date: Schema["Int"] | null,
trending: Schema["Int"] | null,
averageScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
episode: Schema["Int"] | null,
releasing: Schema["Boolean"] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
date_greater: Schema["Int"] | null,
date_lesser: Schema["Int"] | null,
trending_greater: Schema["Int"] | null,
trending_lesser: Schema["Int"] | null,
trending_not: Schema["Int"] | null,
averageScore_greater: Schema["Int"] | null,
averageScore_lesser: Schema["Int"] | null,
averageScore_not: Schema["Int"] | null,
popularity_greater: Schema["Int"] | null,
popularity_lesser: Schema["Int"] | null,
popularity_not: Schema["Int"] | null,
episode_greater: Schema["Int"] | null,
episode_lesser: Schema["Int"] | null,
episode_not: Schema["Int"] | null,
sort: (Schema["MediaTrendSort"] | null)[] | null,
},
(Schema["MediaTrend"] | null)[] | null
],
notifications: [{
type: Schema["NotificationType"] | null,
resetNotificationCount: Schema["Boolean"] | null,
type_in: (Schema["NotificationType"] | null)[] | null,
},
(Schema["NotificationUnion"])[] | null
],
followers: [{
userId: Schema["Int"],
sort: (Schema["UserSort"] | null)[] | null,
},
(Schema["User"] | null)[] | null
],
following: [{
userId: Schema["Int"],
sort: (Schema["UserSort"] | null)[] | null,
},
(Schema["User"] | null)[] | null
],
activities: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
messengerId: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
type: Schema["ActivityType"] | null,
isFollowing: Schema["Boolean"] | null,
hasReplies: Schema["Boolean"] | null,
hasRepliesOrTypeText: Schema["Boolean"] | null,
createdAt: Schema["Int"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
userId_not: Schema["Int"] | null,
userId_in: (Schema["Int"] | null)[] | null,
userId_not_in: (Schema["Int"] | null)[] | null,
messengerId_not: Schema["Int"] | null,
messengerId_in: (Schema["Int"] | null)[] | null,
messengerId_not_in: (Schema["Int"] | null)[] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
type_not: Schema["ActivityType"] | null,
type_in: (Schema["ActivityType"] | null)[] | null,
type_not_in: (Schema["ActivityType"] | null)[] | null,
createdAt_greater: Schema["Int"] | null,
createdAt_lesser: Schema["Int"] | null,
sort: (Schema["ActivitySort"] | null)[] | null,
},
(Schema["ActivityUnion"])[] | null
],
activityReplies: [{
id: Schema["Int"] | null,
activityId: Schema["Int"] | null,
},
(Schema["ActivityReply"] | null)[] | null
],
threads: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
replyUserId: Schema["Int"] | null,
subscribed: Schema["Boolean"] | null,
categoryId: Schema["Int"] | null,
mediaCategoryId: Schema["Int"] | null,
search: Schema["String"] | null,
id_in: (Schema["Int"] | null)[] | null,
sort: (Schema["ThreadSort"] | null)[] | null,
},
(Schema["Thread"] | null)[] | null
],
threadComments: [{
id: Schema["Int"] | null,
threadId: Schema["Int"] | null,
userId: Schema["Int"] | null,
sort: (Schema["ThreadCommentSort"] | null)[] | null,
},
(Schema["ThreadComment"] | null)[] | null
],
reviews: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
userId: Schema["Int"] | null,
mediaType: Schema["MediaType"] | null,
sort: (Schema["ReviewSort"] | null)[] | null,
},
(Schema["Review"] | null)[] | null
],
recommendations: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
mediaRecommendationId: Schema["Int"] | null,
userId: Schema["Int"] | null,
rating: Schema["Int"] | null,
onList: Schema["Boolean"] | null,
rating_greater: Schema["Int"] | null,
rating_lesser: Schema["Int"] | null,
sort: (Schema["RecommendationSort"] | null)[] | null,
},
(Schema["Recommendation"] | null)[] | null
],
likes: [{
likeableId: Schema["Int"] | null,
type: Schema["LikeableType"] | null,
},
(Schema["User"] | null)[] | null
],
};

PageInfo: {
total: Schema["Int"] | null,
perPage: Schema["Int"] | null,
currentPage: Schema["Int"] | null,
lastPage: Schema["Int"] | null,
hasNextPage: Schema["Boolean"] | null,
};

Boolean: string;

String: string;

UserSort: {
ID: "ID",
ID_DESC: "ID_DESC",
USERNAME: "USERNAME",
USERNAME_DESC: "USERNAME_DESC",
WATCHED_TIME: "WATCHED_TIME",
WATCHED_TIME_DESC: "WATCHED_TIME_DESC",
CHAPTERS_READ: "CHAPTERS_READ",
CHAPTERS_READ_DESC: "CHAPTERS_READ_DESC",
SEARCH_MATCH: "SEARCH_MATCH",
};

User: {
id: Schema["Int"],
name: Schema["String"],
about: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
avatar: Schema["UserAvatar"] | null,
bannerImage: Schema["String"] | null,
isFollowing: Schema["Boolean"] | null,
isFollower: Schema["Boolean"] | null,
isBlocked: Schema["Boolean"] | null,
bans: Schema["Json"] | null,
options: Schema["UserOptions"] | null,
mediaListOptions: Schema["MediaListOptions"] | null,
favourites: [{
page: Schema["Int"] | null,
},
Schema["Favourites"] | null
],
statistics: Schema["UserStatisticTypes"] | null,
unreadNotificationCount: Schema["Int"] | null,
siteUrl: Schema["String"] | null,
donatorTier: Schema["Int"] | null,
donatorBadge: Schema["String"] | null,
moderatorRoles: (Schema["ModRole"] | null)[] | null,
createdAt: Schema["Int"] | null,
updatedAt: Schema["Int"] | null,
stats: Schema["UserStats"] | null,
moderatorStatus: Schema["String"] | null,
previousNames: (Schema["UserPreviousName"] | null)[] | null,
};

UserAvatar: {
large: Schema["String"] | null,
medium: Schema["String"] | null,
};

Json: any;

UserOptions: {
titleLanguage: Schema["UserTitleLanguage"] | null,
displayAdultContent: Schema["Boolean"] | null,
airingNotifications: Schema["Boolean"] | null,
profileColor: Schema["String"] | null,
notificationOptions: (Schema["NotificationOption"] | null)[] | null,
timezone: Schema["String"] | null,
activityMergeTime: Schema["Int"] | null,
staffNameLanguage: Schema["UserStaffNameLanguage"] | null,
restrictMessagesToFollowing: Schema["Boolean"] | null,
disabledListActivity: (Schema["ListActivityOption"] | null)[] | null,
};

UserTitleLanguage: {
ROMAJI: "ROMAJI",
ENGLISH: "ENGLISH",
NATIVE: "NATIVE",
ROMAJI_STYLISED: "ROMAJI_STYLISED",
ENGLISH_STYLISED: "ENGLISH_STYLISED",
NATIVE_STYLISED: "NATIVE_STYLISED",
};

NotificationOption: {
type: Schema["NotificationType"] | null,
enabled: Schema["Boolean"] | null,
};

NotificationType: {
ACTIVITY_MESSAGE: "ACTIVITY_MESSAGE",
ACTIVITY_REPLY: "ACTIVITY_REPLY",
FOLLOWING: "FOLLOWING",
ACTIVITY_MENTION: "ACTIVITY_MENTION",
THREAD_COMMENT_MENTION: "THREAD_COMMENT_MENTION",
THREAD_SUBSCRIBED: "THREAD_SUBSCRIBED",
THREAD_COMMENT_REPLY: "THREAD_COMMENT_REPLY",
AIRING: "AIRING",
ACTIVITY_LIKE: "ACTIVITY_LIKE",
ACTIVITY_REPLY_LIKE: "ACTIVITY_REPLY_LIKE",
THREAD_LIKE: "THREAD_LIKE",
THREAD_COMMENT_LIKE: "THREAD_COMMENT_LIKE",
ACTIVITY_REPLY_SUBSCRIBED: "ACTIVITY_REPLY_SUBSCRIBED",
RELATED_MEDIA_ADDITION: "RELATED_MEDIA_ADDITION",
MEDIA_DATA_CHANGE: "MEDIA_DATA_CHANGE",
MEDIA_MERGE: "MEDIA_MERGE",
MEDIA_DELETION: "MEDIA_DELETION",
};

UserStaffNameLanguage: {
ROMAJI_WESTERN: "ROMAJI_WESTERN",
ROMAJI: "ROMAJI",
NATIVE: "NATIVE",
};

ListActivityOption: {
disabled: Schema["Boolean"] | null,
type: Schema["MediaListStatus"] | null,
};

MediaListStatus: {
CURRENT: "CURRENT",
PLANNING: "PLANNING",
COMPLETED: "COMPLETED",
DROPPED: "DROPPED",
PAUSED: "PAUSED",
REPEATING: "REPEATING",
};

MediaListOptions: {
scoreFormat: Schema["ScoreFormat"] | null,
rowOrder: Schema["String"] | null,
useLegacyLists: Schema["Boolean"] | null,
animeList: Schema["MediaListTypeOptions"] | null,
mangaList: Schema["MediaListTypeOptions"] | null,
sharedTheme: Schema["Json"] | null,
sharedThemeEnabled: Schema["Boolean"] | null,
};

ScoreFormat: {
POINT_100: "POINT_100",
POINT_10_DECIMAL: "POINT_10_DECIMAL",
POINT_10: "POINT_10",
POINT_5: "POINT_5",
POINT_3: "POINT_3",
};

MediaListTypeOptions: {
sectionOrder: (Schema["String"] | null)[] | null,
splitCompletedSectionByFormat: Schema["Boolean"] | null,
theme: Schema["Json"] | null,
customLists: (Schema["String"] | null)[] | null,
advancedScoring: (Schema["String"] | null)[] | null,
advancedScoringEnabled: Schema["Boolean"] | null,
};

Favourites: {
anime: [{
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["MediaConnection"] | null
],
manga: [{
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["MediaConnection"] | null
],
characters: [{
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["CharacterConnection"] | null
],
staff: [{
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["StaffConnection"] | null
],
studios: [{
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["StudioConnection"] | null
],
};

MediaConnection: {
edges: (Schema["MediaEdge"] | null)[] | null,
nodes: (Schema["Media"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

MediaEdge: {
node: Schema["Media"] | null,
id: Schema["Int"] | null,
relationType: [{
version: Schema["Int"] | null,
},
Schema["MediaRelation"] | null
],
isMainStudio: Schema["Boolean"],
characters: (Schema["Character"] | null)[] | null,
characterRole: Schema["CharacterRole"] | null,
characterName: Schema["String"] | null,
roleNotes: Schema["String"] | null,
dubGroup: Schema["String"] | null,
staffRole: Schema["String"] | null,
voiceActors: [{
language: Schema["StaffLanguage"] | null,
sort: (Schema["StaffSort"] | null)[] | null,
},
(Schema["Staff"] | null)[] | null
],
voiceActorRoles: [{
language: Schema["StaffLanguage"] | null,
sort: (Schema["StaffSort"] | null)[] | null,
},
(Schema["StaffRoleType"] | null)[] | null
],
favouriteOrder: Schema["Int"] | null,
};

Media: {
id: Schema["Int"],
idMal: Schema["Int"] | null,
title: Schema["MediaTitle"] | null,
type: Schema["MediaType"] | null,
format: Schema["MediaFormat"] | null,
status: [{
version: Schema["Int"] | null,
},
Schema["MediaStatus"] | null
],
description: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
startDate: Schema["FuzzyDate"] | null,
endDate: Schema["FuzzyDate"] | null,
season: Schema["MediaSeason"] | null,
seasonYear: Schema["Int"] | null,
seasonInt: Schema["Int"] | null,
episodes: Schema["Int"] | null,
duration: Schema["Int"] | null,
chapters: Schema["Int"] | null,
volumes: Schema["Int"] | null,
countryOfOrigin: Schema["CountryCode"] | null,
isLicensed: Schema["Boolean"] | null,
source: [{
version: Schema["Int"] | null,
},
Schema["MediaSource"] | null
],
hashtag: Schema["String"] | null,
trailer: Schema["MediaTrailer"] | null,
updatedAt: Schema["Int"] | null,
coverImage: Schema["MediaCoverImage"] | null,
bannerImage: Schema["String"] | null,
genres: (Schema["String"] | null)[] | null,
synonyms: (Schema["String"] | null)[] | null,
averageScore: Schema["Int"] | null,
meanScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
isLocked: Schema["Boolean"] | null,
trending: Schema["Int"] | null,
favourites: Schema["Int"] | null,
tags: (Schema["MediaTag"] | null)[] | null,
relations: Schema["MediaConnection"] | null,
characters: [{
sort: (Schema["CharacterSort"] | null)[] | null,
role: Schema["CharacterRole"] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["CharacterConnection"] | null
],
staff: [{
sort: (Schema["StaffSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["StaffConnection"] | null
],
studios: [{
sort: (Schema["StudioSort"] | null)[] | null,
isMain: Schema["Boolean"] | null,
},
Schema["StudioConnection"] | null
],
isFavourite: Schema["Boolean"],
isFavouriteBlocked: Schema["Boolean"],
isAdult: Schema["Boolean"] | null,
nextAiringEpisode: Schema["AiringSchedule"] | null,
airingSchedule: [{
notYetAired: Schema["Boolean"] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["AiringScheduleConnection"] | null
],
trends: [{
sort: (Schema["MediaTrendSort"] | null)[] | null,
releasing: Schema["Boolean"] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["MediaTrendConnection"] | null
],
externalLinks: (Schema["MediaExternalLink"] | null)[] | null,
streamingEpisodes: (Schema["MediaStreamingEpisode"] | null)[] | null,
rankings: (Schema["MediaRank"] | null)[] | null,
mediaListEntry: Schema["MediaList"] | null,
reviews: [{
limit: Schema["Int"] | null,
sort: (Schema["ReviewSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["ReviewConnection"] | null
],
recommendations: [{
sort: (Schema["RecommendationSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["RecommendationConnection"] | null
],
stats: Schema["MediaStats"] | null,
siteUrl: Schema["String"] | null,
autoCreateForumThread: Schema["Boolean"] | null,
isRecommendationBlocked: Schema["Boolean"] | null,
isReviewBlocked: Schema["Boolean"] | null,
modNotes: Schema["String"] | null,
};

MediaTitle: {
romaji: [{
stylised: Schema["Boolean"] | null,
},
Schema["String"] | null
],
english: [{
stylised: Schema["Boolean"] | null,
},
Schema["String"] | null
],
native: [{
stylised: Schema["Boolean"] | null,
},
Schema["String"] | null
],
userPreferred: Schema["String"] | null,
};

MediaType: {
ANIME: "ANIME",
MANGA: "MANGA",
};

MediaFormat: {
TV: "TV",
TV_SHORT: "TV_SHORT",
MOVIE: "MOVIE",
SPECIAL: "SPECIAL",
OVA: "OVA",
ONA: "ONA",
MUSIC: "MUSIC",
MANGA: "MANGA",
NOVEL: "NOVEL",
ONE_SHOT: "ONE_SHOT",
};

MediaStatus: {
FINISHED: "FINISHED",
RELEASING: "RELEASING",
NOT_YET_RELEASED: "NOT_YET_RELEASED",
CANCELLED: "CANCELLED",
HIATUS: "HIATUS",
};

FuzzyDate: {
year: Schema["Int"] | null,
month: Schema["Int"] | null,
day: Schema["Int"] | null,
};

MediaSeason: {
WINTER: "WINTER",
SPRING: "SPRING",
SUMMER: "SUMMER",
FALL: "FALL",
};

CountryCode: any;

MediaSource: {
ORIGINAL: "ORIGINAL",
MANGA: "MANGA",
LIGHT_NOVEL: "LIGHT_NOVEL",
VISUAL_NOVEL: "VISUAL_NOVEL",
VIDEO_GAME: "VIDEO_GAME",
OTHER: "OTHER",
NOVEL: "NOVEL",
DOUJINSHI: "DOUJINSHI",
ANIME: "ANIME",
WEB_NOVEL: "WEB_NOVEL",
LIVE_ACTION: "LIVE_ACTION",
GAME: "GAME",
COMIC: "COMIC",
MULTIMEDIA_PROJECT: "MULTIMEDIA_PROJECT",
PICTURE_BOOK: "PICTURE_BOOK",
};

MediaTrailer: {
id: Schema["String"] | null,
site: Schema["String"] | null,
thumbnail: Schema["String"] | null,
};

MediaCoverImage: {
extraLarge: Schema["String"] | null,
large: Schema["String"] | null,
medium: Schema["String"] | null,
color: Schema["String"] | null,
};

MediaTag: {
id: Schema["Int"],
name: Schema["String"],
description: Schema["String"] | null,
category: Schema["String"] | null,
rank: Schema["Int"] | null,
isGeneralSpoiler: Schema["Boolean"] | null,
isMediaSpoiler: Schema["Boolean"] | null,
isAdult: Schema["Boolean"] | null,
userId: Schema["Int"] | null,
};

CharacterSort: {
ID: "ID",
ID_DESC: "ID_DESC",
ROLE: "ROLE",
ROLE_DESC: "ROLE_DESC",
SEARCH_MATCH: "SEARCH_MATCH",
FAVOURITES: "FAVOURITES",
FAVOURITES_DESC: "FAVOURITES_DESC",
RELEVANCE: "RELEVANCE",
};

CharacterRole: {
MAIN: "MAIN",
SUPPORTING: "SUPPORTING",
BACKGROUND: "BACKGROUND",
};

CharacterConnection: {
edges: (Schema["CharacterEdge"] | null)[] | null,
nodes: (Schema["Character"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

CharacterEdge: {
node: Schema["Character"] | null,
id: Schema["Int"] | null,
role: Schema["CharacterRole"] | null,
name: Schema["String"] | null,
voiceActors: [{
language: Schema["StaffLanguage"] | null,
sort: (Schema["StaffSort"] | null)[] | null,
},
(Schema["Staff"] | null)[] | null
],
voiceActorRoles: [{
language: Schema["StaffLanguage"] | null,
sort: (Schema["StaffSort"] | null)[] | null,
},
(Schema["StaffRoleType"] | null)[] | null
],
media: (Schema["Media"] | null)[] | null,
favouriteOrder: Schema["Int"] | null,
};

Character: {
id: Schema["Int"],
name: Schema["CharacterName"] | null,
image: Schema["CharacterImage"] | null,
description: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
gender: Schema["String"] | null,
dateOfBirth: Schema["FuzzyDate"] | null,
age: Schema["String"] | null,
bloodType: Schema["String"] | null,
isFavourite: Schema["Boolean"],
isFavouriteBlocked: Schema["Boolean"],
siteUrl: Schema["String"] | null,
media: [{
sort: (Schema["MediaSort"] | null)[] | null,
type: Schema["MediaType"] | null,
onList: Schema["Boolean"] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["MediaConnection"] | null
],
updatedAt: Schema["Int"] | null,
favourites: Schema["Int"] | null,
modNotes: Schema["String"] | null,
};

CharacterName: {
first: Schema["String"] | null,
middle: Schema["String"] | null,
last: Schema["String"] | null,
full: Schema["String"] | null,
native: Schema["String"] | null,
alternative: (Schema["String"] | null)[] | null,
alternativeSpoiler: (Schema["String"] | null)[] | null,
userPreferred: Schema["String"] | null,
};

CharacterImage: {
large: Schema["String"] | null,
medium: Schema["String"] | null,
};

MediaSort: {
ID: "ID",
ID_DESC: "ID_DESC",
TITLE_ROMAJI: "TITLE_ROMAJI",
TITLE_ROMAJI_DESC: "TITLE_ROMAJI_DESC",
TITLE_ENGLISH: "TITLE_ENGLISH",
TITLE_ENGLISH_DESC: "TITLE_ENGLISH_DESC",
TITLE_NATIVE: "TITLE_NATIVE",
TITLE_NATIVE_DESC: "TITLE_NATIVE_DESC",
TYPE: "TYPE",
TYPE_DESC: "TYPE_DESC",
FORMAT: "FORMAT",
FORMAT_DESC: "FORMAT_DESC",
START_DATE: "START_DATE",
START_DATE_DESC: "START_DATE_DESC",
END_DATE: "END_DATE",
END_DATE_DESC: "END_DATE_DESC",
SCORE: "SCORE",
SCORE_DESC: "SCORE_DESC",
POPULARITY: "POPULARITY",
POPULARITY_DESC: "POPULARITY_DESC",
TRENDING: "TRENDING",
TRENDING_DESC: "TRENDING_DESC",
EPISODES: "EPISODES",
EPISODES_DESC: "EPISODES_DESC",
DURATION: "DURATION",
DURATION_DESC: "DURATION_DESC",
STATUS: "STATUS",
STATUS_DESC: "STATUS_DESC",
CHAPTERS: "CHAPTERS",
CHAPTERS_DESC: "CHAPTERS_DESC",
VOLUMES: "VOLUMES",
VOLUMES_DESC: "VOLUMES_DESC",
UPDATED_AT: "UPDATED_AT",
UPDATED_AT_DESC: "UPDATED_AT_DESC",
SEARCH_MATCH: "SEARCH_MATCH",
FAVOURITES: "FAVOURITES",
FAVOURITES_DESC: "FAVOURITES_DESC",
};

StaffLanguage: {
JAPANESE: "JAPANESE",
ENGLISH: "ENGLISH",
KOREAN: "KOREAN",
ITALIAN: "ITALIAN",
SPANISH: "SPANISH",
PORTUGUESE: "PORTUGUESE",
FRENCH: "FRENCH",
GERMAN: "GERMAN",
HEBREW: "HEBREW",
HUNGARIAN: "HUNGARIAN",
};

StaffSort: {
ID: "ID",
ID_DESC: "ID_DESC",
ROLE: "ROLE",
ROLE_DESC: "ROLE_DESC",
LANGUAGE: "LANGUAGE",
LANGUAGE_DESC: "LANGUAGE_DESC",
SEARCH_MATCH: "SEARCH_MATCH",
FAVOURITES: "FAVOURITES",
FAVOURITES_DESC: "FAVOURITES_DESC",
RELEVANCE: "RELEVANCE",
};

Staff: {
id: Schema["Int"],
name: Schema["StaffName"] | null,
language: Schema["StaffLanguage"] | null,
languageV2: Schema["String"] | null,
image: Schema["StaffImage"] | null,
description: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
primaryOccupations: (Schema["String"] | null)[] | null,
gender: Schema["String"] | null,
dateOfBirth: Schema["FuzzyDate"] | null,
dateOfDeath: Schema["FuzzyDate"] | null,
age: Schema["Int"] | null,
yearsActive: (Schema["Int"] | null)[] | null,
homeTown: Schema["String"] | null,
bloodType: Schema["String"] | null,
isFavourite: Schema["Boolean"],
isFavouriteBlocked: Schema["Boolean"],
siteUrl: Schema["String"] | null,
staffMedia: [{
sort: (Schema["MediaSort"] | null)[] | null,
type: Schema["MediaType"] | null,
onList: Schema["Boolean"] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["MediaConnection"] | null
],
characters: [{
sort: (Schema["CharacterSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["CharacterConnection"] | null
],
characterMedia: [{
sort: (Schema["MediaSort"] | null)[] | null,
onList: Schema["Boolean"] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["MediaConnection"] | null
],
updatedAt: Schema["Int"] | null,
staff: Schema["Staff"] | null,
submitter: Schema["User"] | null,
submissionStatus: Schema["Int"] | null,
submissionNotes: Schema["String"] | null,
favourites: Schema["Int"] | null,
modNotes: Schema["String"] | null,
};

StaffName: {
first: Schema["String"] | null,
middle: Schema["String"] | null,
last: Schema["String"] | null,
full: Schema["String"] | null,
native: Schema["String"] | null,
alternative: (Schema["String"] | null)[] | null,
userPreferred: Schema["String"] | null,
};

StaffImage: {
large: Schema["String"] | null,
medium: Schema["String"] | null,
};

StaffRoleType: {
voiceActor: Schema["Staff"] | null,
roleNotes: Schema["String"] | null,
dubGroup: Schema["String"] | null,
};

StaffConnection: {
edges: (Schema["StaffEdge"] | null)[] | null,
nodes: (Schema["Staff"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

StaffEdge: {
node: Schema["Staff"] | null,
id: Schema["Int"] | null,
role: Schema["String"] | null,
favouriteOrder: Schema["Int"] | null,
};

StudioSort: {
ID: "ID",
ID_DESC: "ID_DESC",
NAME: "NAME",
NAME_DESC: "NAME_DESC",
SEARCH_MATCH: "SEARCH_MATCH",
FAVOURITES: "FAVOURITES",
FAVOURITES_DESC: "FAVOURITES_DESC",
};

StudioConnection: {
edges: (Schema["StudioEdge"] | null)[] | null,
nodes: (Schema["Studio"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

StudioEdge: {
node: Schema["Studio"] | null,
id: Schema["Int"] | null,
isMain: Schema["Boolean"],
favouriteOrder: Schema["Int"] | null,
};

Studio: {
id: Schema["Int"],
name: Schema["String"],
isAnimationStudio: Schema["Boolean"],
media: [{
sort: (Schema["MediaSort"] | null)[] | null,
isMain: Schema["Boolean"] | null,
onList: Schema["Boolean"] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["MediaConnection"] | null
],
siteUrl: Schema["String"] | null,
isFavourite: Schema["Boolean"],
favourites: Schema["Int"] | null,
};

AiringSchedule: {
id: Schema["Int"],
airingAt: Schema["Int"],
timeUntilAiring: Schema["Int"],
episode: Schema["Int"],
mediaId: Schema["Int"],
media: Schema["Media"] | null,
};

AiringScheduleConnection: {
edges: (Schema["AiringScheduleEdge"] | null)[] | null,
nodes: (Schema["AiringSchedule"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

AiringScheduleEdge: {
node: Schema["AiringSchedule"] | null,
id: Schema["Int"] | null,
};

MediaTrendSort: {
ID: "ID",
ID_DESC: "ID_DESC",
MEDIA_ID: "MEDIA_ID",
MEDIA_ID_DESC: "MEDIA_ID_DESC",
DATE: "DATE",
DATE_DESC: "DATE_DESC",
SCORE: "SCORE",
SCORE_DESC: "SCORE_DESC",
POPULARITY: "POPULARITY",
POPULARITY_DESC: "POPULARITY_DESC",
TRENDING: "TRENDING",
TRENDING_DESC: "TRENDING_DESC",
EPISODE: "EPISODE",
EPISODE_DESC: "EPISODE_DESC",
};

MediaTrendConnection: {
edges: (Schema["MediaTrendEdge"] | null)[] | null,
nodes: (Schema["MediaTrend"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

MediaTrendEdge: {
node: Schema["MediaTrend"] | null,
};

MediaTrend: {
mediaId: Schema["Int"],
date: Schema["Int"],
trending: Schema["Int"],
averageScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
inProgress: Schema["Int"] | null,
releasing: Schema["Boolean"],
episode: Schema["Int"] | null,
media: Schema["Media"] | null,
};

MediaExternalLink: {
id: Schema["Int"],
url: Schema["String"] | null,
site: Schema["String"],
siteId: Schema["Int"] | null,
type: Schema["ExternalLinkType"] | null,
language: Schema["String"] | null,
color: Schema["String"] | null,
icon: Schema["String"] | null,
notes: Schema["String"] | null,
isDisabled: Schema["Boolean"] | null,
};

ExternalLinkType: {
INFO: "INFO",
STREAMING: "STREAMING",
SOCIAL: "SOCIAL",
};

MediaStreamingEpisode: {
title: Schema["String"] | null,
thumbnail: Schema["String"] | null,
url: Schema["String"] | null,
site: Schema["String"] | null,
};

MediaRank: {
id: Schema["Int"],
rank: Schema["Int"],
type: Schema["MediaRankType"],
format: Schema["MediaFormat"],
year: Schema["Int"] | null,
season: Schema["MediaSeason"] | null,
allTime: Schema["Boolean"] | null,
context: Schema["String"],
};

MediaRankType: {
RATED: "RATED",
POPULAR: "POPULAR",
};

MediaList: {
id: Schema["Int"],
userId: Schema["Int"],
mediaId: Schema["Int"],
status: Schema["MediaListStatus"] | null,
score: [{
format: Schema["ScoreFormat"] | null,
},
Schema["Float"] | null
],
progress: Schema["Int"] | null,
progressVolumes: Schema["Int"] | null,
repeat: Schema["Int"] | null,
priority: Schema["Int"] | null,
private: Schema["Boolean"] | null,
notes: Schema["String"] | null,
hiddenFromStatusLists: Schema["Boolean"] | null,
customLists: [{
asArray: Schema["Boolean"] | null,
},
Schema["Json"] | null
],
advancedScores: Schema["Json"] | null,
startedAt: Schema["FuzzyDate"] | null,
completedAt: Schema["FuzzyDate"] | null,
updatedAt: Schema["Int"] | null,
createdAt: Schema["Int"] | null,
media: Schema["Media"] | null,
user: Schema["User"] | null,
};

Float: number;

ReviewSort: {
ID: "ID",
ID_DESC: "ID_DESC",
SCORE: "SCORE",
SCORE_DESC: "SCORE_DESC",
RATING: "RATING",
RATING_DESC: "RATING_DESC",
CREATED_AT: "CREATED_AT",
CREATED_AT_DESC: "CREATED_AT_DESC",
UPDATED_AT: "UPDATED_AT",
UPDATED_AT_DESC: "UPDATED_AT_DESC",
};

ReviewConnection: {
edges: (Schema["ReviewEdge"] | null)[] | null,
nodes: (Schema["Review"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

ReviewEdge: {
node: Schema["Review"] | null,
};

Review: {
id: Schema["Int"],
userId: Schema["Int"],
mediaId: Schema["Int"],
mediaType: Schema["MediaType"] | null,
summary: Schema["String"] | null,
body: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
rating: Schema["Int"] | null,
ratingAmount: Schema["Int"] | null,
userRating: Schema["ReviewRating"] | null,
score: Schema["Int"] | null,
private: Schema["Boolean"] | null,
siteUrl: Schema["String"] | null,
createdAt: Schema["Int"],
updatedAt: Schema["Int"],
user: Schema["User"] | null,
media: Schema["Media"] | null,
};

ReviewRating: {
NO_VOTE: "NO_VOTE",
UP_VOTE: "UP_VOTE",
DOWN_VOTE: "DOWN_VOTE",
};

RecommendationSort: {
ID: "ID",
ID_DESC: "ID_DESC",
RATING: "RATING",
RATING_DESC: "RATING_DESC",
};

RecommendationConnection: {
edges: (Schema["RecommendationEdge"] | null)[] | null,
nodes: (Schema["Recommendation"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

RecommendationEdge: {
node: Schema["Recommendation"] | null,
};

Recommendation: {
id: Schema["Int"],
rating: Schema["Int"] | null,
userRating: Schema["RecommendationRating"] | null,
media: Schema["Media"] | null,
mediaRecommendation: Schema["Media"] | null,
user: Schema["User"] | null,
};

RecommendationRating: {
NO_RATING: "NO_RATING",
RATE_UP: "RATE_UP",
RATE_DOWN: "RATE_DOWN",
};

MediaStats: {
scoreDistribution: (Schema["ScoreDistribution"] | null)[] | null,
statusDistribution: (Schema["StatusDistribution"] | null)[] | null,
airingProgression: (Schema["AiringProgression"] | null)[] | null,
};

ScoreDistribution: {
score: Schema["Int"] | null,
amount: Schema["Int"] | null,
};

StatusDistribution: {
status: Schema["MediaListStatus"] | null,
amount: Schema["Int"] | null,
};

AiringProgression: {
episode: Schema["Float"] | null,
score: Schema["Float"] | null,
watching: Schema["Int"] | null,
};

MediaRelation: {
ADAPTATION: "ADAPTATION",
PREQUEL: "PREQUEL",
SEQUEL: "SEQUEL",
PARENT: "PARENT",
SIDE_STORY: "SIDE_STORY",
CHARACTER: "CHARACTER",
SUMMARY: "SUMMARY",
ALTERNATIVE: "ALTERNATIVE",
SPIN_OFF: "SPIN_OFF",
OTHER: "OTHER",
SOURCE: "SOURCE",
COMPILATION: "COMPILATION",
CONTAINS: "CONTAINS",
};

UserStatisticTypes: {
anime: Schema["UserStatistics"] | null,
manga: Schema["UserStatistics"] | null,
};

UserStatistics: {
count: Schema["Int"],
meanScore: Schema["Float"],
standardDeviation: Schema["Float"],
minutesWatched: Schema["Int"],
episodesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
volumesRead: Schema["Int"],
formats: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserFormatStatistic"] | null)[] | null
],
statuses: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserStatusStatistic"] | null)[] | null
],
scores: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserScoreStatistic"] | null)[] | null
],
lengths: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserLengthStatistic"] | null)[] | null
],
releaseYears: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserReleaseYearStatistic"] | null)[] | null
],
startYears: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserStartYearStatistic"] | null)[] | null
],
genres: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserGenreStatistic"] | null)[] | null
],
tags: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserTagStatistic"] | null)[] | null
],
countries: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserCountryStatistic"] | null)[] | null
],
voiceActors: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserVoiceActorStatistic"] | null)[] | null
],
staff: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserStaffStatistic"] | null)[] | null
],
studios: [{
limit: Schema["Int"] | null,
sort: (Schema["UserStatisticsSort"] | null)[] | null,
},
(Schema["UserStudioStatistic"] | null)[] | null
],
};

UserStatisticsSort: {
ID: "ID",
ID_DESC: "ID_DESC",
COUNT: "COUNT",
COUNT_DESC: "COUNT_DESC",
PROGRESS: "PROGRESS",
PROGRESS_DESC: "PROGRESS_DESC",
MEAN_SCORE: "MEAN_SCORE",
MEAN_SCORE_DESC: "MEAN_SCORE_DESC",
};

UserFormatStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
format: Schema["MediaFormat"] | null,
};

UserStatusStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
status: Schema["MediaListStatus"] | null,
};

UserScoreStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
score: Schema["Int"] | null,
};

UserLengthStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
length: Schema["String"] | null,
};

UserReleaseYearStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
releaseYear: Schema["Int"] | null,
};

UserStartYearStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
startYear: Schema["Int"] | null,
};

UserGenreStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
genre: Schema["String"] | null,
};

UserTagStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
tag: Schema["MediaTag"] | null,
};

UserCountryStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
country: Schema["CountryCode"] | null,
};

UserVoiceActorStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
voiceActor: Schema["Staff"] | null,
characterIds: (Schema["Int"] | null)[],
};

UserStaffStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
staff: Schema["Staff"] | null,
};

UserStudioStatistic: {
count: Schema["Int"],
meanScore: Schema["Float"],
minutesWatched: Schema["Int"],
chaptersRead: Schema["Int"],
mediaIds: (Schema["Int"] | null)[],
studio: Schema["Studio"] | null,
};

ModRole: {
ADMIN: "ADMIN",
LEAD_DEVELOPER: "LEAD_DEVELOPER",
DEVELOPER: "DEVELOPER",
LEAD_COMMUNITY: "LEAD_COMMUNITY",
COMMUNITY: "COMMUNITY",
DISCORD_COMMUNITY: "DISCORD_COMMUNITY",
LEAD_ANIME_DATA: "LEAD_ANIME_DATA",
ANIME_DATA: "ANIME_DATA",
LEAD_MANGA_DATA: "LEAD_MANGA_DATA",
MANGA_DATA: "MANGA_DATA",
LEAD_SOCIAL_MEDIA: "LEAD_SOCIAL_MEDIA",
SOCIAL_MEDIA: "SOCIAL_MEDIA",
RETIRED: "RETIRED",
CHARACTER_DATA: "CHARACTER_DATA",
STAFF_DATA: "STAFF_DATA",
};

UserStats: {
watchedTime: Schema["Int"] | null,
chaptersRead: Schema["Int"] | null,
activityHistory: (Schema["UserActivityHistory"] | null)[] | null,
animeStatusDistribution: (Schema["StatusDistribution"] | null)[] | null,
mangaStatusDistribution: (Schema["StatusDistribution"] | null)[] | null,
animeScoreDistribution: (Schema["ScoreDistribution"] | null)[] | null,
mangaScoreDistribution: (Schema["ScoreDistribution"] | null)[] | null,
animeListScores: Schema["ListScoreStats"] | null,
mangaListScores: Schema["ListScoreStats"] | null,
favouredGenresOverview: (Schema["GenreStats"] | null)[] | null,
favouredGenres: (Schema["GenreStats"] | null)[] | null,
favouredTags: (Schema["TagStats"] | null)[] | null,
favouredActors: (Schema["StaffStats"] | null)[] | null,
favouredStaff: (Schema["StaffStats"] | null)[] | null,
favouredStudios: (Schema["StudioStats"] | null)[] | null,
favouredYears: (Schema["YearStats"] | null)[] | null,
favouredFormats: (Schema["FormatStats"] | null)[] | null,
};

UserActivityHistory: {
date: Schema["Int"] | null,
amount: Schema["Int"] | null,
level: Schema["Int"] | null,
};

ListScoreStats: {
meanScore: Schema["Int"] | null,
standardDeviation: Schema["Int"] | null,
};

GenreStats: {
genre: Schema["String"] | null,
amount: Schema["Int"] | null,
meanScore: Schema["Int"] | null,
timeWatched: Schema["Int"] | null,
};

TagStats: {
tag: Schema["MediaTag"] | null,
amount: Schema["Int"] | null,
meanScore: Schema["Int"] | null,
timeWatched: Schema["Int"] | null,
};

StaffStats: {
staff: Schema["Staff"] | null,
amount: Schema["Int"] | null,
meanScore: Schema["Int"] | null,
timeWatched: Schema["Int"] | null,
};

StudioStats: {
studio: Schema["Studio"] | null,
amount: Schema["Int"] | null,
meanScore: Schema["Int"] | null,
timeWatched: Schema["Int"] | null,
};

YearStats: {
year: Schema["Int"] | null,
amount: Schema["Int"] | null,
meanScore: Schema["Int"] | null,
};

FormatStats: {
format: Schema["MediaFormat"] | null,
amount: Schema["Int"] | null,
};

UserPreviousName: {
name: Schema["String"] | null,
createdAt: Schema["Int"] | null,
updatedAt: Schema["Int"] | null,
};

FuzzyDateInt: any;

MediaListSort: {
MEDIA_ID: "MEDIA_ID",
MEDIA_ID_DESC: "MEDIA_ID_DESC",
SCORE: "SCORE",
SCORE_DESC: "SCORE_DESC",
STATUS: "STATUS",
STATUS_DESC: "STATUS_DESC",
PROGRESS: "PROGRESS",
PROGRESS_DESC: "PROGRESS_DESC",
PROGRESS_VOLUMES: "PROGRESS_VOLUMES",
PROGRESS_VOLUMES_DESC: "PROGRESS_VOLUMES_DESC",
REPEAT: "REPEAT",
REPEAT_DESC: "REPEAT_DESC",
PRIORITY: "PRIORITY",
PRIORITY_DESC: "PRIORITY_DESC",
STARTED_ON: "STARTED_ON",
STARTED_ON_DESC: "STARTED_ON_DESC",
FINISHED_ON: "FINISHED_ON",
FINISHED_ON_DESC: "FINISHED_ON_DESC",
ADDED_TIME: "ADDED_TIME",
ADDED_TIME_DESC: "ADDED_TIME_DESC",
UPDATED_TIME: "UPDATED_TIME",
UPDATED_TIME_DESC: "UPDATED_TIME_DESC",
MEDIA_TITLE_ROMAJI: "MEDIA_TITLE_ROMAJI",
MEDIA_TITLE_ROMAJI_DESC: "MEDIA_TITLE_ROMAJI_DESC",
MEDIA_TITLE_ENGLISH: "MEDIA_TITLE_ENGLISH",
MEDIA_TITLE_ENGLISH_DESC: "MEDIA_TITLE_ENGLISH_DESC",
MEDIA_TITLE_NATIVE: "MEDIA_TITLE_NATIVE",
MEDIA_TITLE_NATIVE_DESC: "MEDIA_TITLE_NATIVE_DESC",
MEDIA_POPULARITY: "MEDIA_POPULARITY",
MEDIA_POPULARITY_DESC: "MEDIA_POPULARITY_DESC",
};

AiringSort: {
ID: "ID",
ID_DESC: "ID_DESC",
MEDIA_ID: "MEDIA_ID",
MEDIA_ID_DESC: "MEDIA_ID_DESC",
TIME: "TIME",
TIME_DESC: "TIME_DESC",
EPISODE: "EPISODE",
EPISODE_DESC: "EPISODE_DESC",
};

NotificationUnion: Schema["AiringNotification"] | Schema["FollowingNotification"] | Schema["ActivityMessageNotification"] | Schema["ActivityMentionNotification"] | Schema["ActivityReplyNotification"] | Schema["ActivityReplySubscribedNotification"] | Schema["ActivityLikeNotification"] | Schema["ActivityReplyLikeNotification"] | Schema["ThreadCommentMentionNotification"] | Schema["ThreadCommentReplyNotification"] | Schema["ThreadCommentSubscribedNotification"] | Schema["ThreadCommentLikeNotification"] | Schema["ThreadLikeNotification"] | Schema["RelatedMediaAdditionNotification"] | Schema["MediaDataChangeNotification"] | Schema["MediaMergeNotification"] | Schema["MediaDeletionNotification"];

AiringNotification: {
id: Schema["Int"],
type: Schema["NotificationType"] | null,
animeId: Schema["Int"],
episode: Schema["Int"],
contexts: (Schema["String"] | null)[] | null,
createdAt: Schema["Int"] | null,
media: Schema["Media"] | null,
};

FollowingNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
user: Schema["User"] | null,
};

ActivityMessageNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
activityId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
message: Schema["MessageActivity"] | null,
user: Schema["User"] | null,
};

MessageActivity: {
id: Schema["Int"],
recipientId: Schema["Int"] | null,
messengerId: Schema["Int"] | null,
type: Schema["ActivityType"] | null,
replyCount: Schema["Int"],
message: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
isLocked: Schema["Boolean"] | null,
isSubscribed: Schema["Boolean"] | null,
likeCount: Schema["Int"],
isLiked: Schema["Boolean"] | null,
isPrivate: Schema["Boolean"] | null,
siteUrl: Schema["String"] | null,
createdAt: Schema["Int"],
recipient: Schema["User"] | null,
messenger: Schema["User"] | null,
replies: (Schema["ActivityReply"] | null)[] | null,
likes: (Schema["User"] | null)[] | null,
};

ActivityType: {
TEXT: "TEXT",
ANIME_LIST: "ANIME_LIST",
MANGA_LIST: "MANGA_LIST",
MESSAGE: "MESSAGE",
MEDIA_LIST: "MEDIA_LIST",
};

ActivityReply: {
id: Schema["Int"],
userId: Schema["Int"] | null,
activityId: Schema["Int"] | null,
text: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
likeCount: Schema["Int"],
isLiked: Schema["Boolean"] | null,
createdAt: Schema["Int"],
user: Schema["User"] | null,
likes: (Schema["User"] | null)[] | null,
};

ActivityMentionNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
activityId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
activity: Schema["ActivityUnion"],
user: Schema["User"] | null,
};

ActivityUnion: Schema["TextActivity"] | Schema["ListActivity"] | Schema["MessageActivity"];

TextActivity: {
id: Schema["Int"],
userId: Schema["Int"] | null,
type: Schema["ActivityType"] | null,
replyCount: Schema["Int"],
text: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
siteUrl: Schema["String"] | null,
isLocked: Schema["Boolean"] | null,
isSubscribed: Schema["Boolean"] | null,
likeCount: Schema["Int"],
isLiked: Schema["Boolean"] | null,
isPinned: Schema["Boolean"] | null,
createdAt: Schema["Int"],
user: Schema["User"] | null,
replies: (Schema["ActivityReply"] | null)[] | null,
likes: (Schema["User"] | null)[] | null,
};

ListActivity: {
id: Schema["Int"],
userId: Schema["Int"] | null,
type: Schema["ActivityType"] | null,
replyCount: Schema["Int"],
status: Schema["String"] | null,
progress: Schema["String"] | null,
isLocked: Schema["Boolean"] | null,
isSubscribed: Schema["Boolean"] | null,
likeCount: Schema["Int"],
isLiked: Schema["Boolean"] | null,
isPinned: Schema["Boolean"] | null,
siteUrl: Schema["String"] | null,
createdAt: Schema["Int"],
user: Schema["User"] | null,
media: Schema["Media"] | null,
replies: (Schema["ActivityReply"] | null)[] | null,
likes: (Schema["User"] | null)[] | null,
};

ActivityReplyNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
activityId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
activity: Schema["ActivityUnion"],
user: Schema["User"] | null,
};

ActivityReplySubscribedNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
activityId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
activity: Schema["ActivityUnion"],
user: Schema["User"] | null,
};

ActivityLikeNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
activityId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
activity: Schema["ActivityUnion"],
user: Schema["User"] | null,
};

ActivityReplyLikeNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
activityId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
activity: Schema["ActivityUnion"],
user: Schema["User"] | null,
};

ThreadCommentMentionNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
commentId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
thread: Schema["Thread"] | null,
comment: Schema["ThreadComment"] | null,
user: Schema["User"] | null,
};

Thread: {
id: Schema["Int"],
title: Schema["String"] | null,
body: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
userId: Schema["Int"],
replyUserId: Schema["Int"] | null,
replyCommentId: Schema["Int"] | null,
replyCount: Schema["Int"] | null,
viewCount: Schema["Int"] | null,
isLocked: Schema["Boolean"] | null,
isSticky: Schema["Boolean"] | null,
isSubscribed: Schema["Boolean"] | null,
likeCount: Schema["Int"],
isLiked: Schema["Boolean"] | null,
repliedAt: Schema["Int"] | null,
createdAt: Schema["Int"],
updatedAt: Schema["Int"],
user: Schema["User"] | null,
replyUser: Schema["User"] | null,
likes: (Schema["User"] | null)[] | null,
siteUrl: Schema["String"] | null,
categories: (Schema["ThreadCategory"] | null)[] | null,
mediaCategories: (Schema["Media"] | null)[] | null,
};

ThreadCategory: {
id: Schema["Int"],
name: Schema["String"],
};

ThreadComment: {
id: Schema["Int"],
userId: Schema["Int"] | null,
threadId: Schema["Int"] | null,
comment: [{
asHtml: Schema["Boolean"] | null,
},
Schema["String"] | null
],
likeCount: Schema["Int"],
isLiked: Schema["Boolean"] | null,
siteUrl: Schema["String"] | null,
createdAt: Schema["Int"],
updatedAt: Schema["Int"],
thread: Schema["Thread"] | null,
user: Schema["User"] | null,
likes: (Schema["User"] | null)[] | null,
childComments: Schema["Json"] | null,
isLocked: Schema["Boolean"] | null,
};

ThreadCommentReplyNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
commentId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
thread: Schema["Thread"] | null,
comment: Schema["ThreadComment"] | null,
user: Schema["User"] | null,
};

ThreadCommentSubscribedNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
commentId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
thread: Schema["Thread"] | null,
comment: Schema["ThreadComment"] | null,
user: Schema["User"] | null,
};

ThreadCommentLikeNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
commentId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
thread: Schema["Thread"] | null,
comment: Schema["ThreadComment"] | null,
user: Schema["User"] | null,
};

ThreadLikeNotification: {
id: Schema["Int"],
userId: Schema["Int"],
type: Schema["NotificationType"] | null,
threadId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
thread: Schema["Thread"] | null,
comment: Schema["ThreadComment"] | null,
user: Schema["User"] | null,
};

RelatedMediaAdditionNotification: {
id: Schema["Int"],
type: Schema["NotificationType"] | null,
mediaId: Schema["Int"],
context: Schema["String"] | null,
createdAt: Schema["Int"] | null,
media: Schema["Media"] | null,
};

MediaDataChangeNotification: {
id: Schema["Int"],
type: Schema["NotificationType"] | null,
mediaId: Schema["Int"],
context: Schema["String"] | null,
reason: Schema["String"] | null,
createdAt: Schema["Int"] | null,
media: Schema["Media"] | null,
};

MediaMergeNotification: {
id: Schema["Int"],
type: Schema["NotificationType"] | null,
mediaId: Schema["Int"],
deletedMediaTitles: (Schema["String"] | null)[] | null,
context: Schema["String"] | null,
reason: Schema["String"] | null,
createdAt: Schema["Int"] | null,
media: Schema["Media"] | null,
};

MediaDeletionNotification: {
id: Schema["Int"],
type: Schema["NotificationType"] | null,
deletedMediaTitle: Schema["String"] | null,
context: Schema["String"] | null,
reason: Schema["String"] | null,
createdAt: Schema["Int"] | null,
};

ActivitySort: {
ID: "ID",
ID_DESC: "ID_DESC",
PINNED: "PINNED",
};

ThreadSort: {
ID: "ID",
ID_DESC: "ID_DESC",
TITLE: "TITLE",
TITLE_DESC: "TITLE_DESC",
CREATED_AT: "CREATED_AT",
CREATED_AT_DESC: "CREATED_AT_DESC",
UPDATED_AT: "UPDATED_AT",
UPDATED_AT_DESC: "UPDATED_AT_DESC",
REPLIED_AT: "REPLIED_AT",
REPLIED_AT_DESC: "REPLIED_AT_DESC",
REPLY_COUNT: "REPLY_COUNT",
REPLY_COUNT_DESC: "REPLY_COUNT_DESC",
VIEW_COUNT: "VIEW_COUNT",
VIEW_COUNT_DESC: "VIEW_COUNT_DESC",
IS_STICKY: "IS_STICKY",
SEARCH_MATCH: "SEARCH_MATCH",
};

ThreadCommentSort: {
ID: "ID",
ID_DESC: "ID_DESC",
};

LikeableType: {
THREAD: "THREAD",
THREAD_COMMENT: "THREAD_COMMENT",
ACTIVITY: "ACTIVITY",
ACTIVITY_REPLY: "ACTIVITY_REPLY",
};

MediaListCollection: {
lists: (Schema["MediaListGroup"] | null)[] | null,
user: Schema["User"] | null,
hasNextChunk: Schema["Boolean"] | null,
statusLists: [{
asArray: Schema["Boolean"] | null,
},
((Schema["MediaList"] | null)[] | null)[] | null
],
customLists: [{
asArray: Schema["Boolean"] | null,
},
((Schema["MediaList"] | null)[] | null)[] | null
],
};

MediaListGroup: {
entries: (Schema["MediaList"] | null)[] | null,
name: Schema["String"] | null,
isCustomList: Schema["Boolean"] | null,
isSplitCompletedList: Schema["Boolean"] | null,
status: Schema["MediaListStatus"] | null,
};

ParsedMarkdown: {
html: Schema["String"] | null,
};

AniChartUser: {
user: Schema["User"] | null,
settings: Schema["Json"] | null,
highlights: Schema["Json"] | null,
};

SiteStatistics: {
users: [{
sort: (Schema["SiteTrendSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["SiteTrendConnection"] | null
],
anime: [{
sort: (Schema["SiteTrendSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["SiteTrendConnection"] | null
],
manga: [{
sort: (Schema["SiteTrendSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["SiteTrendConnection"] | null
],
characters: [{
sort: (Schema["SiteTrendSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["SiteTrendConnection"] | null
],
staff: [{
sort: (Schema["SiteTrendSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["SiteTrendConnection"] | null
],
studios: [{
sort: (Schema["SiteTrendSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["SiteTrendConnection"] | null
],
reviews: [{
sort: (Schema["SiteTrendSort"] | null)[] | null,
page: Schema["Int"] | null,
perPage: Schema["Int"] | null,
},
Schema["SiteTrendConnection"] | null
],
};

SiteTrendSort: {
DATE: "DATE",
DATE_DESC: "DATE_DESC",
COUNT: "COUNT",
COUNT_DESC: "COUNT_DESC",
CHANGE: "CHANGE",
CHANGE_DESC: "CHANGE_DESC",
};

SiteTrendConnection: {
edges: (Schema["SiteTrendEdge"] | null)[] | null,
nodes: (Schema["SiteTrend"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

SiteTrendEdge: {
node: Schema["SiteTrend"] | null,
};

SiteTrend: {
date: Schema["Int"],
count: Schema["Int"],
change: Schema["Int"],
};

ExternalLinkMediaType: {
ANIME: "ANIME",
MANGA: "MANGA",
STAFF: "STAFF",
};

Mutation: {
UpdateUser: [{
about: Schema["String"] | null,
titleLanguage: Schema["UserTitleLanguage"] | null,
displayAdultContent: Schema["Boolean"] | null,
airingNotifications: Schema["Boolean"] | null,
scoreFormat: Schema["ScoreFormat"] | null,
rowOrder: Schema["String"] | null,
profileColor: Schema["String"] | null,
donatorBadge: Schema["String"] | null,
notificationOptions: (Schema["NotificationOptionInput"] | null)[] | null,
timezone: Schema["String"] | null,
activityMergeTime: Schema["Int"] | null,
animeListOptions: Schema["MediaListOptionsInput"] | null,
mangaListOptions: Schema["MediaListOptionsInput"] | null,
staffNameLanguage: Schema["UserStaffNameLanguage"] | null,
restrictMessagesToFollowing: Schema["Boolean"] | null,
disabledListActivity: (Schema["ListActivityOptionInput"] | null)[] | null,
},
Schema["User"] | null
],
SaveMediaListEntry: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
status: Schema["MediaListStatus"] | null,
score: Schema["Float"] | null,
scoreRaw: Schema["Int"] | null,
progress: Schema["Int"] | null,
progressVolumes: Schema["Int"] | null,
repeat: Schema["Int"] | null,
priority: Schema["Int"] | null,
private: Schema["Boolean"] | null,
notes: Schema["String"] | null,
hiddenFromStatusLists: Schema["Boolean"] | null,
customLists: (Schema["String"] | null)[] | null,
advancedScores: (Schema["Float"] | null)[] | null,
startedAt: Schema["FuzzyDateInput"] | null,
completedAt: Schema["FuzzyDateInput"] | null,
},
Schema["MediaList"] | null
],
UpdateMediaListEntries: [{
status: Schema["MediaListStatus"] | null,
score: Schema["Float"] | null,
scoreRaw: Schema["Int"] | null,
progress: Schema["Int"] | null,
progressVolumes: Schema["Int"] | null,
repeat: Schema["Int"] | null,
priority: Schema["Int"] | null,
private: Schema["Boolean"] | null,
notes: Schema["String"] | null,
hiddenFromStatusLists: Schema["Boolean"] | null,
advancedScores: (Schema["Float"] | null)[] | null,
startedAt: Schema["FuzzyDateInput"] | null,
completedAt: Schema["FuzzyDateInput"] | null,
ids: (Schema["Int"] | null)[] | null,
},
(Schema["MediaList"] | null)[] | null
],
DeleteMediaListEntry: [{
id: Schema["Int"] | null,
},
Schema["Deleted"] | null
],
DeleteCustomList: [{
customList: Schema["String"] | null,
type: Schema["MediaType"] | null,
},
Schema["Deleted"] | null
],
SaveTextActivity: [{
id: Schema["Int"] | null,
text: Schema["String"] | null,
locked: Schema["Boolean"] | null,
},
Schema["TextActivity"] | null
],
SaveMessageActivity: [{
id: Schema["Int"] | null,
message: Schema["String"] | null,
recipientId: Schema["Int"] | null,
private: Schema["Boolean"] | null,
locked: Schema["Boolean"] | null,
asMod: Schema["Boolean"] | null,
},
Schema["MessageActivity"] | null
],
SaveListActivity: [{
id: Schema["Int"] | null,
locked: Schema["Boolean"] | null,
},
Schema["ListActivity"] | null
],
DeleteActivity: [{
id: Schema["Int"] | null,
},
Schema["Deleted"] | null
],
ToggleActivityPin: [{
id: Schema["Int"] | null,
pinned: Schema["Boolean"] | null,
},
Schema["ActivityUnion"]
],
ToggleActivitySubscription: [{
activityId: Schema["Int"] | null,
subscribe: Schema["Boolean"] | null,
},
Schema["ActivityUnion"]
],
SaveActivityReply: [{
id: Schema["Int"] | null,
activityId: Schema["Int"] | null,
text: Schema["String"] | null,
asMod: Schema["Boolean"] | null,
},
Schema["ActivityReply"] | null
],
DeleteActivityReply: [{
id: Schema["Int"] | null,
},
Schema["Deleted"] | null
],
ToggleLike: [{
id: Schema["Int"] | null,
type: Schema["LikeableType"] | null,
},
(Schema["User"] | null)[] | null
],
ToggleLikeV2: [{
id: Schema["Int"] | null,
type: Schema["LikeableType"] | null,
},
Schema["LikeableUnion"]
],
ToggleFollow: [{
userId: Schema["Int"] | null,
},
Schema["User"] | null
],
ToggleFavourite: [{
animeId: Schema["Int"] | null,
mangaId: Schema["Int"] | null,
characterId: Schema["Int"] | null,
staffId: Schema["Int"] | null,
studioId: Schema["Int"] | null,
},
Schema["Favourites"] | null
],
UpdateFavouriteOrder: [{
animeIds: (Schema["Int"] | null)[] | null,
mangaIds: (Schema["Int"] | null)[] | null,
characterIds: (Schema["Int"] | null)[] | null,
staffIds: (Schema["Int"] | null)[] | null,
studioIds: (Schema["Int"] | null)[] | null,
animeOrder: (Schema["Int"] | null)[] | null,
mangaOrder: (Schema["Int"] | null)[] | null,
characterOrder: (Schema["Int"] | null)[] | null,
staffOrder: (Schema["Int"] | null)[] | null,
studioOrder: (Schema["Int"] | null)[] | null,
},
Schema["Favourites"] | null
],
SaveReview: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
body: Schema["String"] | null,
summary: Schema["String"] | null,
score: Schema["Int"] | null,
private: Schema["Boolean"] | null,
},
Schema["Review"] | null
],
DeleteReview: [{
id: Schema["Int"] | null,
},
Schema["Deleted"] | null
],
RateReview: [{
reviewId: Schema["Int"] | null,
rating: Schema["ReviewRating"] | null,
},
Schema["Review"] | null
],
SaveRecommendation: [{
mediaId: Schema["Int"] | null,
mediaRecommendationId: Schema["Int"] | null,
rating: Schema["RecommendationRating"] | null,
},
Schema["Recommendation"] | null
],
SaveThread: [{
id: Schema["Int"] | null,
title: Schema["String"] | null,
body: Schema["String"] | null,
categories: (Schema["Int"] | null)[] | null,
mediaCategories: (Schema["Int"] | null)[] | null,
sticky: Schema["Boolean"] | null,
locked: Schema["Boolean"] | null,
},
Schema["Thread"] | null
],
DeleteThread: [{
id: Schema["Int"] | null,
},
Schema["Deleted"] | null
],
ToggleThreadSubscription: [{
threadId: Schema["Int"] | null,
subscribe: Schema["Boolean"] | null,
},
Schema["Thread"] | null
],
SaveThreadComment: [{
id: Schema["Int"] | null,
threadId: Schema["Int"] | null,
parentCommentId: Schema["Int"] | null,
comment: Schema["String"] | null,
locked: Schema["Boolean"] | null,
},
Schema["ThreadComment"] | null
],
DeleteThreadComment: [{
id: Schema["Int"] | null,
},
Schema["Deleted"] | null
],
UpdateAniChartSettings: [{
titleLanguage: Schema["String"] | null,
outgoingLinkProvider: Schema["String"] | null,
theme: Schema["String"] | null,
sort: Schema["String"] | null,
},
Schema["Json"] | null
],
UpdateAniChartHighlights: [{
highlights: (Schema["AniChartHighlightInput"] | null)[] | null,
},
Schema["Json"] | null
],
};

NotificationOptionInput: {
type: Schema["NotificationType"] | null,
enabled: Schema["Boolean"] | null,
};

MediaListOptionsInput: {
sectionOrder: (Schema["String"] | null)[] | null,
splitCompletedSectionByFormat: Schema["Boolean"] | null,
customLists: (Schema["String"] | null)[] | null,
advancedScoring: (Schema["String"] | null)[] | null,
advancedScoringEnabled: Schema["Boolean"] | null,
theme: Schema["String"] | null,
};

ListActivityOptionInput: {
disabled: Schema["Boolean"] | null,
type: Schema["MediaListStatus"] | null,
};

FuzzyDateInput: {
year: Schema["Int"] | null,
month: Schema["Int"] | null,
day: Schema["Int"] | null,
};

Deleted: {
deleted: Schema["Boolean"] | null,
};

LikeableUnion: Schema["ListActivity"] | Schema["TextActivity"] | Schema["MessageActivity"] | Schema["ActivityReply"] | Schema["Thread"] | Schema["ThreadComment"];

AniChartHighlightInput: {
mediaId: Schema["Int"] | null,
highlight: Schema["String"] | null,
};

InternalPage: {
mediaSubmissions: [{
mediaId: Schema["Int"] | null,
submissionId: Schema["Int"] | null,
userId: Schema["Int"] | null,
assigneeId: Schema["Int"] | null,
status: Schema["SubmissionStatus"] | null,
type: Schema["MediaType"] | null,
sort: (Schema["SubmissionSort"] | null)[] | null,
},
(Schema["MediaSubmission"] | null)[] | null
],
characterSubmissions: [{
characterId: Schema["Int"] | null,
userId: Schema["Int"] | null,
assigneeId: Schema["Int"] | null,
status: Schema["SubmissionStatus"] | null,
sort: (Schema["SubmissionSort"] | null)[] | null,
},
(Schema["CharacterSubmission"] | null)[] | null
],
staffSubmissions: [{
staffId: Schema["Int"] | null,
userId: Schema["Int"] | null,
assigneeId: Schema["Int"] | null,
status: Schema["SubmissionStatus"] | null,
sort: (Schema["SubmissionSort"] | null)[] | null,
},
(Schema["StaffSubmission"] | null)[] | null
],
revisionHistory: [{
userId: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
characterId: Schema["Int"] | null,
staffId: Schema["Int"] | null,
studioId: Schema["Int"] | null,
},
(Schema["RevisionHistory"] | null)[] | null
],
reports: [{
reporterId: Schema["Int"] | null,
reportedId: Schema["Int"] | null,
},
(Schema["Report"] | null)[] | null
],
modActions: [{
userId: Schema["Int"] | null,
modId: Schema["Int"] | null,
},
(Schema["ModAction"] | null)[] | null
],
userBlockSearch: [{
search: Schema["String"] | null,
},
(Schema["User"] | null)[] | null
],
pageInfo: Schema["PageInfo"] | null,
users: [{
id: Schema["Int"] | null,
name: Schema["String"] | null,
isModerator: Schema["Boolean"] | null,
search: Schema["String"] | null,
sort: (Schema["UserSort"] | null)[] | null,
},
(Schema["User"] | null)[] | null
],
media: [{
id: Schema["Int"] | null,
idMal: Schema["Int"] | null,
startDate: Schema["FuzzyDateInt"] | null,
endDate: Schema["FuzzyDateInt"] | null,
season: Schema["MediaSeason"] | null,
seasonYear: Schema["Int"] | null,
type: Schema["MediaType"] | null,
format: Schema["MediaFormat"] | null,
status: Schema["MediaStatus"] | null,
episodes: Schema["Int"] | null,
duration: Schema["Int"] | null,
chapters: Schema["Int"] | null,
volumes: Schema["Int"] | null,
isAdult: Schema["Boolean"] | null,
genre: Schema["String"] | null,
tag: Schema["String"] | null,
minimumTagRank: Schema["Int"] | null,
tagCategory: Schema["String"] | null,
onList: Schema["Boolean"] | null,
licensedBy: Schema["String"] | null,
licensedById: Schema["Int"] | null,
averageScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
source: Schema["MediaSource"] | null,
countryOfOrigin: Schema["CountryCode"] | null,
isLicensed: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
idMal_not: Schema["Int"] | null,
idMal_in: (Schema["Int"] | null)[] | null,
idMal_not_in: (Schema["Int"] | null)[] | null,
startDate_greater: Schema["FuzzyDateInt"] | null,
startDate_lesser: Schema["FuzzyDateInt"] | null,
startDate_like: Schema["String"] | null,
endDate_greater: Schema["FuzzyDateInt"] | null,
endDate_lesser: Schema["FuzzyDateInt"] | null,
endDate_like: Schema["String"] | null,
format_in: (Schema["MediaFormat"] | null)[] | null,
format_not: Schema["MediaFormat"] | null,
format_not_in: (Schema["MediaFormat"] | null)[] | null,
status_in: (Schema["MediaStatus"] | null)[] | null,
status_not: Schema["MediaStatus"] | null,
status_not_in: (Schema["MediaStatus"] | null)[] | null,
episodes_greater: Schema["Int"] | null,
episodes_lesser: Schema["Int"] | null,
duration_greater: Schema["Int"] | null,
duration_lesser: Schema["Int"] | null,
chapters_greater: Schema["Int"] | null,
chapters_lesser: Schema["Int"] | null,
volumes_greater: Schema["Int"] | null,
volumes_lesser: Schema["Int"] | null,
genre_in: (Schema["String"] | null)[] | null,
genre_not_in: (Schema["String"] | null)[] | null,
tag_in: (Schema["String"] | null)[] | null,
tag_not_in: (Schema["String"] | null)[] | null,
tagCategory_in: (Schema["String"] | null)[] | null,
tagCategory_not_in: (Schema["String"] | null)[] | null,
licensedBy_in: (Schema["String"] | null)[] | null,
licensedById_in: (Schema["Int"] | null)[] | null,
averageScore_not: Schema["Int"] | null,
averageScore_greater: Schema["Int"] | null,
averageScore_lesser: Schema["Int"] | null,
popularity_not: Schema["Int"] | null,
popularity_greater: Schema["Int"] | null,
popularity_lesser: Schema["Int"] | null,
source_in: (Schema["MediaSource"] | null)[] | null,
sort: (Schema["MediaSort"] | null)[] | null,
},
(Schema["Media"] | null)[] | null
],
characters: [{
id: Schema["Int"] | null,
isBirthday: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["CharacterSort"] | null)[] | null,
},
(Schema["Character"] | null)[] | null
],
staff: [{
id: Schema["Int"] | null,
isBirthday: Schema["Boolean"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["StaffSort"] | null)[] | null,
},
(Schema["Staff"] | null)[] | null
],
studios: [{
id: Schema["Int"] | null,
search: Schema["String"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
sort: (Schema["StudioSort"] | null)[] | null,
},
(Schema["Studio"] | null)[] | null
],
mediaList: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
userName: Schema["String"] | null,
type: Schema["MediaType"] | null,
status: Schema["MediaListStatus"] | null,
mediaId: Schema["Int"] | null,
isFollowing: Schema["Boolean"] | null,
notes: Schema["String"] | null,
startedAt: Schema["FuzzyDateInt"] | null,
completedAt: Schema["FuzzyDateInt"] | null,
compareWithAuthList: Schema["Boolean"] | null,
userId_in: (Schema["Int"] | null)[] | null,
status_in: (Schema["MediaListStatus"] | null)[] | null,
status_not_in: (Schema["MediaListStatus"] | null)[] | null,
status_not: Schema["MediaListStatus"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
notes_like: Schema["String"] | null,
startedAt_greater: Schema["FuzzyDateInt"] | null,
startedAt_lesser: Schema["FuzzyDateInt"] | null,
startedAt_like: Schema["String"] | null,
completedAt_greater: Schema["FuzzyDateInt"] | null,
completedAt_lesser: Schema["FuzzyDateInt"] | null,
completedAt_like: Schema["String"] | null,
sort: (Schema["MediaListSort"] | null)[] | null,
},
(Schema["MediaList"] | null)[] | null
],
airingSchedules: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
episode: Schema["Int"] | null,
airingAt: Schema["Int"] | null,
notYetAired: Schema["Boolean"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
episode_not: Schema["Int"] | null,
episode_in: (Schema["Int"] | null)[] | null,
episode_not_in: (Schema["Int"] | null)[] | null,
episode_greater: Schema["Int"] | null,
episode_lesser: Schema["Int"] | null,
airingAt_greater: Schema["Int"] | null,
airingAt_lesser: Schema["Int"] | null,
sort: (Schema["AiringSort"] | null)[] | null,
},
(Schema["AiringSchedule"] | null)[] | null
],
mediaTrends: [{
mediaId: Schema["Int"] | null,
date: Schema["Int"] | null,
trending: Schema["Int"] | null,
averageScore: Schema["Int"] | null,
popularity: Schema["Int"] | null,
episode: Schema["Int"] | null,
releasing: Schema["Boolean"] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
date_greater: Schema["Int"] | null,
date_lesser: Schema["Int"] | null,
trending_greater: Schema["Int"] | null,
trending_lesser: Schema["Int"] | null,
trending_not: Schema["Int"] | null,
averageScore_greater: Schema["Int"] | null,
averageScore_lesser: Schema["Int"] | null,
averageScore_not: Schema["Int"] | null,
popularity_greater: Schema["Int"] | null,
popularity_lesser: Schema["Int"] | null,
popularity_not: Schema["Int"] | null,
episode_greater: Schema["Int"] | null,
episode_lesser: Schema["Int"] | null,
episode_not: Schema["Int"] | null,
sort: (Schema["MediaTrendSort"] | null)[] | null,
},
(Schema["MediaTrend"] | null)[] | null
],
notifications: [{
type: Schema["NotificationType"] | null,
resetNotificationCount: Schema["Boolean"] | null,
type_in: (Schema["NotificationType"] | null)[] | null,
},
(Schema["NotificationUnion"])[] | null
],
followers: [{
userId: Schema["Int"],
sort: (Schema["UserSort"] | null)[] | null,
},
(Schema["User"] | null)[] | null
],
following: [{
userId: Schema["Int"],
sort: (Schema["UserSort"] | null)[] | null,
},
(Schema["User"] | null)[] | null
],
activities: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
messengerId: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
type: Schema["ActivityType"] | null,
isFollowing: Schema["Boolean"] | null,
hasReplies: Schema["Boolean"] | null,
hasRepliesOrTypeText: Schema["Boolean"] | null,
createdAt: Schema["Int"] | null,
id_not: Schema["Int"] | null,
id_in: (Schema["Int"] | null)[] | null,
id_not_in: (Schema["Int"] | null)[] | null,
userId_not: Schema["Int"] | null,
userId_in: (Schema["Int"] | null)[] | null,
userId_not_in: (Schema["Int"] | null)[] | null,
messengerId_not: Schema["Int"] | null,
messengerId_in: (Schema["Int"] | null)[] | null,
messengerId_not_in: (Schema["Int"] | null)[] | null,
mediaId_not: Schema["Int"] | null,
mediaId_in: (Schema["Int"] | null)[] | null,
mediaId_not_in: (Schema["Int"] | null)[] | null,
type_not: Schema["ActivityType"] | null,
type_in: (Schema["ActivityType"] | null)[] | null,
type_not_in: (Schema["ActivityType"] | null)[] | null,
createdAt_greater: Schema["Int"] | null,
createdAt_lesser: Schema["Int"] | null,
sort: (Schema["ActivitySort"] | null)[] | null,
},
(Schema["ActivityUnion"])[] | null
],
activityReplies: [{
id: Schema["Int"] | null,
activityId: Schema["Int"] | null,
},
(Schema["ActivityReply"] | null)[] | null
],
threads: [{
id: Schema["Int"] | null,
userId: Schema["Int"] | null,
replyUserId: Schema["Int"] | null,
subscribed: Schema["Boolean"] | null,
categoryId: Schema["Int"] | null,
mediaCategoryId: Schema["Int"] | null,
search: Schema["String"] | null,
id_in: (Schema["Int"] | null)[] | null,
sort: (Schema["ThreadSort"] | null)[] | null,
},
(Schema["Thread"] | null)[] | null
],
threadComments: [{
id: Schema["Int"] | null,
threadId: Schema["Int"] | null,
userId: Schema["Int"] | null,
sort: (Schema["ThreadCommentSort"] | null)[] | null,
},
(Schema["ThreadComment"] | null)[] | null
],
reviews: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
userId: Schema["Int"] | null,
mediaType: Schema["MediaType"] | null,
sort: (Schema["ReviewSort"] | null)[] | null,
},
(Schema["Review"] | null)[] | null
],
recommendations: [{
id: Schema["Int"] | null,
mediaId: Schema["Int"] | null,
mediaRecommendationId: Schema["Int"] | null,
userId: Schema["Int"] | null,
rating: Schema["Int"] | null,
onList: Schema["Boolean"] | null,
rating_greater: Schema["Int"] | null,
rating_lesser: Schema["Int"] | null,
sort: (Schema["RecommendationSort"] | null)[] | null,
},
(Schema["Recommendation"] | null)[] | null
],
likes: [{
likeableId: Schema["Int"] | null,
type: Schema["LikeableType"] | null,
},
(Schema["User"] | null)[] | null
],
};

SubmissionStatus: {
PENDING: "PENDING",
REJECTED: "REJECTED",
PARTIALLY_ACCEPTED: "PARTIALLY_ACCEPTED",
ACCEPTED: "ACCEPTED",
};

SubmissionSort: {
ID: "ID",
ID_DESC: "ID_DESC",
};

MediaSubmission: {
id: Schema["Int"],
submitter: Schema["User"] | null,
assignee: Schema["User"] | null,
status: Schema["SubmissionStatus"] | null,
submitterStats: Schema["Json"] | null,
notes: Schema["String"] | null,
source: Schema["String"] | null,
changes: (Schema["String"] | null)[] | null,
locked: Schema["Boolean"] | null,
media: Schema["Media"] | null,
submission: Schema["Media"] | null,
characters: (Schema["MediaSubmissionComparison"] | null)[] | null,
staff: (Schema["MediaSubmissionComparison"] | null)[] | null,
studios: (Schema["MediaSubmissionComparison"] | null)[] | null,
relations: (Schema["MediaEdge"] | null)[] | null,
externalLinks: (Schema["MediaSubmissionComparison"] | null)[] | null,
createdAt: Schema["Int"] | null,
};

MediaSubmissionComparison: {
submission: Schema["MediaSubmissionEdge"] | null,
character: Schema["MediaCharacter"] | null,
staff: Schema["StaffEdge"] | null,
studio: Schema["StudioEdge"] | null,
externalLink: Schema["MediaExternalLink"] | null,
};

MediaSubmissionEdge: {
id: Schema["Int"] | null,
characterRole: Schema["CharacterRole"] | null,
staffRole: Schema["String"] | null,
roleNotes: Schema["String"] | null,
dubGroup: Schema["String"] | null,
characterName: Schema["String"] | null,
isMain: Schema["Boolean"] | null,
character: Schema["Character"] | null,
characterSubmission: Schema["Character"] | null,
voiceActor: Schema["Staff"] | null,
voiceActorSubmission: Schema["Staff"] | null,
staff: Schema["Staff"] | null,
staffSubmission: Schema["Staff"] | null,
studio: Schema["Studio"] | null,
externalLink: Schema["MediaExternalLink"] | null,
media: Schema["Media"] | null,
};

MediaCharacter: {
id: Schema["Int"] | null,
role: Schema["CharacterRole"] | null,
roleNotes: Schema["String"] | null,
dubGroup: Schema["String"] | null,
characterName: Schema["String"] | null,
character: Schema["Character"] | null,
voiceActor: Schema["Staff"] | null,
};

CharacterSubmission: {
id: Schema["Int"],
character: Schema["Character"] | null,
submission: Schema["Character"] | null,
submitter: Schema["User"] | null,
assignee: Schema["User"] | null,
status: Schema["SubmissionStatus"] | null,
notes: Schema["String"] | null,
source: Schema["String"] | null,
locked: Schema["Boolean"] | null,
createdAt: Schema["Int"] | null,
};

StaffSubmission: {
id: Schema["Int"],
staff: Schema["Staff"] | null,
submission: Schema["Staff"] | null,
submitter: Schema["User"] | null,
assignee: Schema["User"] | null,
status: Schema["SubmissionStatus"] | null,
notes: Schema["String"] | null,
source: Schema["String"] | null,
locked: Schema["Boolean"] | null,
createdAt: Schema["Int"] | null,
};

RevisionHistory: {
id: Schema["Int"],
action: Schema["RevisionHistoryAction"] | null,
changes: Schema["Json"] | null,
user: Schema["User"] | null,
media: Schema["Media"] | null,
character: Schema["Character"] | null,
staff: Schema["Staff"] | null,
studio: Schema["Studio"] | null,
externalLink: Schema["MediaExternalLink"] | null,
createdAt: Schema["Int"] | null,
};

RevisionHistoryAction: {
CREATE: "CREATE",
EDIT: "EDIT",
};

Report: {
id: Schema["Int"],
reporter: Schema["User"] | null,
reported: Schema["User"] | null,
reason: Schema["String"] | null,
createdAt: Schema["Int"] | null,
cleared: Schema["Boolean"] | null,
};

ModAction: {
id: Schema["Int"],
user: Schema["User"] | null,
mod: Schema["User"] | null,
type: Schema["ModActionType"] | null,
objectId: Schema["Int"] | null,
objectType: Schema["String"] | null,
data: Schema["String"] | null,
createdAt: Schema["Int"],
};

ModActionType: {
NOTE: "NOTE",
BAN: "BAN",
DELETE: "DELETE",
EDIT: "EDIT",
EXPIRE: "EXPIRE",
REPORT: "REPORT",
RESET: "RESET",
ANON: "ANON",
};

MediaTitleInput: {
romaji: Schema["String"] | null,
english: Schema["String"] | null,
native: Schema["String"] | null,
};

AiringScheduleInput: {
airingAt: Schema["Int"] | null,
episode: Schema["Int"] | null,
timeUntilAiring: Schema["Int"] | null,
};

MediaExternalLinkInput: {
id: Schema["Int"],
url: Schema["String"],
site: Schema["String"],
};

CharacterNameInput: {
first: Schema["String"] | null,
middle: Schema["String"] | null,
last: Schema["String"] | null,
native: Schema["String"] | null,
alternative: (Schema["String"] | null)[] | null,
alternativeSpoiler: (Schema["String"] | null)[] | null,
};

CharacterSubmissionConnection: {
edges: (Schema["CharacterSubmissionEdge"] | null)[] | null,
nodes: (Schema["CharacterSubmission"] | null)[] | null,
pageInfo: Schema["PageInfo"] | null,
};

CharacterSubmissionEdge: {
node: Schema["CharacterSubmission"] | null,
role: Schema["CharacterRole"] | null,
voiceActors: (Schema["Staff"] | null)[] | null,
submittedVoiceActors: (Schema["StaffSubmission"] | null)[] | null,
};

StaffNameInput: {
first: Schema["String"] | null,
middle: Schema["String"] | null,
last: Schema["String"] | null,
native: Schema["String"] | null,
alternative: (Schema["String"] | null)[] | null,
};

UserModData: {
alts: (Schema["User"] | null)[] | null,
bans: Schema["Json"] | null,
ip: Schema["Json"] | null,
counts: Schema["Json"] | null,
privacy: Schema["Int"] | null,
email: Schema["String"] | null,
};

ID: string;

}

export const schema = {
Query: {
Page: [{
page: "Int",
perPage: "Int",
},
"Page"
],
Media: [{
id: "Int",
idMal: "Int",
startDate: "FuzzyDateInt",
endDate: "FuzzyDateInt",
season: "MediaSeason",
seasonYear: "Int",
type: "MediaType",
format: "MediaFormat",
status: "MediaStatus",
episodes: "Int",
duration: "Int",
chapters: "Int",
volumes: "Int",
isAdult: "Boolean",
genre: "String",
tag: "String",
minimumTagRank: "Int",
tagCategory: "String",
onList: "Boolean",
licensedBy: "String",
licensedById: "Int",
averageScore: "Int",
popularity: "Int",
source: "MediaSource",
countryOfOrigin: "CountryCode",
isLicensed: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
idMal_not: "Int",
idMal_in: ["Int"],
idMal_not_in: ["Int"],
startDate_greater: "FuzzyDateInt",
startDate_lesser: "FuzzyDateInt",
startDate_like: "String",
endDate_greater: "FuzzyDateInt",
endDate_lesser: "FuzzyDateInt",
endDate_like: "String",
format_in: ["MediaFormat"],
format_not: "MediaFormat",
format_not_in: ["MediaFormat"],
status_in: ["MediaStatus"],
status_not: "MediaStatus",
status_not_in: ["MediaStatus"],
episodes_greater: "Int",
episodes_lesser: "Int",
duration_greater: "Int",
duration_lesser: "Int",
chapters_greater: "Int",
chapters_lesser: "Int",
volumes_greater: "Int",
volumes_lesser: "Int",
genre_in: ["String"],
genre_not_in: ["String"],
tag_in: ["String"],
tag_not_in: ["String"],
tagCategory_in: ["String"],
tagCategory_not_in: ["String"],
licensedBy_in: ["String"],
licensedById_in: ["Int"],
averageScore_not: "Int",
averageScore_greater: "Int",
averageScore_lesser: "Int",
popularity_not: "Int",
popularity_greater: "Int",
popularity_lesser: "Int",
source_in: ["MediaSource"],
sort: ["MediaSort"],
},
"Media"
],
MediaTrend: [{
mediaId: "Int",
date: "Int",
trending: "Int",
averageScore: "Int",
popularity: "Int",
episode: "Int",
releasing: "Boolean",
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
date_greater: "Int",
date_lesser: "Int",
trending_greater: "Int",
trending_lesser: "Int",
trending_not: "Int",
averageScore_greater: "Int",
averageScore_lesser: "Int",
averageScore_not: "Int",
popularity_greater: "Int",
popularity_lesser: "Int",
popularity_not: "Int",
episode_greater: "Int",
episode_lesser: "Int",
episode_not: "Int",
sort: ["MediaTrendSort"],
},
"MediaTrend"
],
AiringSchedule: [{
id: "Int",
mediaId: "Int",
episode: "Int",
airingAt: "Int",
notYetAired: "Boolean",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
episode_not: "Int",
episode_in: ["Int"],
episode_not_in: ["Int"],
episode_greater: "Int",
episode_lesser: "Int",
airingAt_greater: "Int",
airingAt_lesser: "Int",
sort: ["AiringSort"],
},
"AiringSchedule"
],
Character: [{
id: "Int",
isBirthday: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["CharacterSort"],
},
"Character"
],
Staff: [{
id: "Int",
isBirthday: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["StaffSort"],
},
"Staff"
],
MediaList: [{
id: "Int",
userId: "Int",
userName: "String",
type: "MediaType",
status: "MediaListStatus",
mediaId: "Int",
isFollowing: "Boolean",
notes: "String",
startedAt: "FuzzyDateInt",
completedAt: "FuzzyDateInt",
compareWithAuthList: "Boolean",
userId_in: ["Int"],
status_in: ["MediaListStatus"],
status_not_in: ["MediaListStatus"],
status_not: "MediaListStatus",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
notes_like: "String",
startedAt_greater: "FuzzyDateInt",
startedAt_lesser: "FuzzyDateInt",
startedAt_like: "String",
completedAt_greater: "FuzzyDateInt",
completedAt_lesser: "FuzzyDateInt",
completedAt_like: "String",
sort: ["MediaListSort"],
},
"MediaList"
],
MediaListCollection: [{
userId: "Int",
userName: "String",
type: "MediaType",
status: "MediaListStatus",
notes: "String",
startedAt: "FuzzyDateInt",
completedAt: "FuzzyDateInt",
forceSingleCompletedList: "Boolean",
chunk: "Int",
perChunk: "Int",
status_in: ["MediaListStatus"],
status_not_in: ["MediaListStatus"],
status_not: "MediaListStatus",
notes_like: "String",
startedAt_greater: "FuzzyDateInt",
startedAt_lesser: "FuzzyDateInt",
startedAt_like: "String",
completedAt_greater: "FuzzyDateInt",
completedAt_lesser: "FuzzyDateInt",
completedAt_like: "String",
sort: ["MediaListSort"],
},
"MediaListCollection"
],
GenreCollection: ["String"],
MediaTagCollection: [{
status: "Int",
},
["MediaTag"]
],
User: [{
id: "Int",
name: "String",
isModerator: "Boolean",
search: "String",
sort: ["UserSort"],
},
"User"
],
Viewer: "User",
Notification: [{
type: "NotificationType",
resetNotificationCount: "Boolean",
type_in: ["NotificationType"],
},
"NotificationUnion"
],
Studio: [{
id: "Int",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["StudioSort"],
},
"Studio"
],
Review: [{
id: "Int",
mediaId: "Int",
userId: "Int",
mediaType: "MediaType",
sort: ["ReviewSort"],
},
"Review"
],
Activity: [{
id: "Int",
userId: "Int",
messengerId: "Int",
mediaId: "Int",
type: "ActivityType",
isFollowing: "Boolean",
hasReplies: "Boolean",
hasRepliesOrTypeText: "Boolean",
createdAt: "Int",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
userId_not: "Int",
userId_in: ["Int"],
userId_not_in: ["Int"],
messengerId_not: "Int",
messengerId_in: ["Int"],
messengerId_not_in: ["Int"],
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
type_not: "ActivityType",
type_in: ["ActivityType"],
type_not_in: ["ActivityType"],
createdAt_greater: "Int",
createdAt_lesser: "Int",
sort: ["ActivitySort"],
},
"ActivityUnion"
],
ActivityReply: [{
id: "Int",
activityId: "Int",
},
"ActivityReply"
],
Following: [{
userId: "Int!",
sort: ["UserSort"],
},
"User"
],
Follower: [{
userId: "Int!",
sort: ["UserSort"],
},
"User"
],
Thread: [{
id: "Int",
userId: "Int",
replyUserId: "Int",
subscribed: "Boolean",
categoryId: "Int",
mediaCategoryId: "Int",
search: "String",
id_in: ["Int"],
sort: ["ThreadSort"],
},
"Thread"
],
ThreadComment: [{
id: "Int",
threadId: "Int",
userId: "Int",
sort: ["ThreadCommentSort"],
},
["ThreadComment"]
],
Recommendation: [{
id: "Int",
mediaId: "Int",
mediaRecommendationId: "Int",
userId: "Int",
rating: "Int",
onList: "Boolean",
rating_greater: "Int",
rating_lesser: "Int",
sort: ["RecommendationSort"],
},
"Recommendation"
],
Like: [{
likeableId: "Int",
type: "LikeableType",
},
"User"
],
Markdown: [{
markdown: "String!",
},
"ParsedMarkdown"
],
AniChartUser: "AniChartUser",
SiteStatistics: "SiteStatistics",
ExternalLinkSourceCollection: [{
id: "Int",
type: "ExternalLinkType",
mediaType: "ExternalLinkMediaType",
},
["MediaExternalLink"]
],
},Int: "",Page: {
pageInfo: "PageInfo",
users: [{
id: "Int",
name: "String",
isModerator: "Boolean",
search: "String",
sort: ["UserSort"],
},
["User"]
],
media: [{
id: "Int",
idMal: "Int",
startDate: "FuzzyDateInt",
endDate: "FuzzyDateInt",
season: "MediaSeason",
seasonYear: "Int",
type: "MediaType",
format: "MediaFormat",
status: "MediaStatus",
episodes: "Int",
duration: "Int",
chapters: "Int",
volumes: "Int",
isAdult: "Boolean",
genre: "String",
tag: "String",
minimumTagRank: "Int",
tagCategory: "String",
onList: "Boolean",
licensedBy: "String",
licensedById: "Int",
averageScore: "Int",
popularity: "Int",
source: "MediaSource",
countryOfOrigin: "CountryCode",
isLicensed: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
idMal_not: "Int",
idMal_in: ["Int"],
idMal_not_in: ["Int"],
startDate_greater: "FuzzyDateInt",
startDate_lesser: "FuzzyDateInt",
startDate_like: "String",
endDate_greater: "FuzzyDateInt",
endDate_lesser: "FuzzyDateInt",
endDate_like: "String",
format_in: ["MediaFormat"],
format_not: "MediaFormat",
format_not_in: ["MediaFormat"],
status_in: ["MediaStatus"],
status_not: "MediaStatus",
status_not_in: ["MediaStatus"],
episodes_greater: "Int",
episodes_lesser: "Int",
duration_greater: "Int",
duration_lesser: "Int",
chapters_greater: "Int",
chapters_lesser: "Int",
volumes_greater: "Int",
volumes_lesser: "Int",
genre_in: ["String"],
genre_not_in: ["String"],
tag_in: ["String"],
tag_not_in: ["String"],
tagCategory_in: ["String"],
tagCategory_not_in: ["String"],
licensedBy_in: ["String"],
licensedById_in: ["Int"],
averageScore_not: "Int",
averageScore_greater: "Int",
averageScore_lesser: "Int",
popularity_not: "Int",
popularity_greater: "Int",
popularity_lesser: "Int",
source_in: ["MediaSource"],
sort: ["MediaSort"],
},
["Media"]
],
characters: [{
id: "Int",
isBirthday: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["CharacterSort"],
},
["Character"]
],
staff: [{
id: "Int",
isBirthday: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["StaffSort"],
},
["Staff"]
],
studios: [{
id: "Int",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["StudioSort"],
},
["Studio"]
],
mediaList: [{
id: "Int",
userId: "Int",
userName: "String",
type: "MediaType",
status: "MediaListStatus",
mediaId: "Int",
isFollowing: "Boolean",
notes: "String",
startedAt: "FuzzyDateInt",
completedAt: "FuzzyDateInt",
compareWithAuthList: "Boolean",
userId_in: ["Int"],
status_in: ["MediaListStatus"],
status_not_in: ["MediaListStatus"],
status_not: "MediaListStatus",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
notes_like: "String",
startedAt_greater: "FuzzyDateInt",
startedAt_lesser: "FuzzyDateInt",
startedAt_like: "String",
completedAt_greater: "FuzzyDateInt",
completedAt_lesser: "FuzzyDateInt",
completedAt_like: "String",
sort: ["MediaListSort"],
},
["MediaList"]
],
airingSchedules: [{
id: "Int",
mediaId: "Int",
episode: "Int",
airingAt: "Int",
notYetAired: "Boolean",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
episode_not: "Int",
episode_in: ["Int"],
episode_not_in: ["Int"],
episode_greater: "Int",
episode_lesser: "Int",
airingAt_greater: "Int",
airingAt_lesser: "Int",
sort: ["AiringSort"],
},
["AiringSchedule"]
],
mediaTrends: [{
mediaId: "Int",
date: "Int",
trending: "Int",
averageScore: "Int",
popularity: "Int",
episode: "Int",
releasing: "Boolean",
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
date_greater: "Int",
date_lesser: "Int",
trending_greater: "Int",
trending_lesser: "Int",
trending_not: "Int",
averageScore_greater: "Int",
averageScore_lesser: "Int",
averageScore_not: "Int",
popularity_greater: "Int",
popularity_lesser: "Int",
popularity_not: "Int",
episode_greater: "Int",
episode_lesser: "Int",
episode_not: "Int",
sort: ["MediaTrendSort"],
},
["MediaTrend"]
],
notifications: [{
type: "NotificationType",
resetNotificationCount: "Boolean",
type_in: ["NotificationType"],
},
["NotificationUnion"]
],
followers: [{
userId: "Int!",
sort: ["UserSort"],
},
["User"]
],
following: [{
userId: "Int!",
sort: ["UserSort"],
},
["User"]
],
activities: [{
id: "Int",
userId: "Int",
messengerId: "Int",
mediaId: "Int",
type: "ActivityType",
isFollowing: "Boolean",
hasReplies: "Boolean",
hasRepliesOrTypeText: "Boolean",
createdAt: "Int",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
userId_not: "Int",
userId_in: ["Int"],
userId_not_in: ["Int"],
messengerId_not: "Int",
messengerId_in: ["Int"],
messengerId_not_in: ["Int"],
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
type_not: "ActivityType",
type_in: ["ActivityType"],
type_not_in: ["ActivityType"],
createdAt_greater: "Int",
createdAt_lesser: "Int",
sort: ["ActivitySort"],
},
["ActivityUnion"]
],
activityReplies: [{
id: "Int",
activityId: "Int",
},
["ActivityReply"]
],
threads: [{
id: "Int",
userId: "Int",
replyUserId: "Int",
subscribed: "Boolean",
categoryId: "Int",
mediaCategoryId: "Int",
search: "String",
id_in: ["Int"],
sort: ["ThreadSort"],
},
["Thread"]
],
threadComments: [{
id: "Int",
threadId: "Int",
userId: "Int",
sort: ["ThreadCommentSort"],
},
["ThreadComment"]
],
reviews: [{
id: "Int",
mediaId: "Int",
userId: "Int",
mediaType: "MediaType",
sort: ["ReviewSort"],
},
["Review"]
],
recommendations: [{
id: "Int",
mediaId: "Int",
mediaRecommendationId: "Int",
userId: "Int",
rating: "Int",
onList: "Boolean",
rating_greater: "Int",
rating_lesser: "Int",
sort: ["RecommendationSort"],
},
["Recommendation"]
],
likes: [{
likeableId: "Int",
type: "LikeableType",
},
["User"]
],
},PageInfo: {
total: "Int",
perPage: "Int",
currentPage: "Int",
lastPage: "Int",
hasNextPage: "Boolean",
},Boolean: "",String: "",UserSort: {
ID: "ENUM",
ID_DESC: "ENUM",
USERNAME: "ENUM",
USERNAME_DESC: "ENUM",
WATCHED_TIME: "ENUM",
WATCHED_TIME_DESC: "ENUM",
CHAPTERS_READ: "ENUM",
CHAPTERS_READ_DESC: "ENUM",
SEARCH_MATCH: "ENUM",
},User: {
id: "Int!",
name: "String!",
about: [{
asHtml: "Boolean",
},
"String"
],
avatar: "UserAvatar",
bannerImage: "String",
isFollowing: "Boolean",
isFollower: "Boolean",
isBlocked: "Boolean",
bans: "Json",
options: "UserOptions",
mediaListOptions: "MediaListOptions",
favourites: [{
page: "Int",
},
"Favourites"
],
statistics: "UserStatisticTypes",
unreadNotificationCount: "Int",
siteUrl: "String",
donatorTier: "Int",
donatorBadge: "String",
moderatorRoles: ["ModRole"],
createdAt: "Int",
updatedAt: "Int",
stats: "UserStats",
moderatorStatus: "String",
previousNames: ["UserPreviousName"],
},UserAvatar: {
large: "String",
medium: "String",
},Json: "",UserOptions: {
titleLanguage: "UserTitleLanguage",
displayAdultContent: "Boolean",
airingNotifications: "Boolean",
profileColor: "String",
notificationOptions: ["NotificationOption"],
timezone: "String",
activityMergeTime: "Int",
staffNameLanguage: "UserStaffNameLanguage",
restrictMessagesToFollowing: "Boolean",
disabledListActivity: ["ListActivityOption"],
},UserTitleLanguage: {
ROMAJI: "ENUM",
ENGLISH: "ENUM",
NATIVE: "ENUM",
ROMAJI_STYLISED: "ENUM",
ENGLISH_STYLISED: "ENUM",
NATIVE_STYLISED: "ENUM",
},NotificationOption: {
type: "NotificationType",
enabled: "Boolean",
},NotificationType: {
ACTIVITY_MESSAGE: "ENUM",
ACTIVITY_REPLY: "ENUM",
FOLLOWING: "ENUM",
ACTIVITY_MENTION: "ENUM",
THREAD_COMMENT_MENTION: "ENUM",
THREAD_SUBSCRIBED: "ENUM",
THREAD_COMMENT_REPLY: "ENUM",
AIRING: "ENUM",
ACTIVITY_LIKE: "ENUM",
ACTIVITY_REPLY_LIKE: "ENUM",
THREAD_LIKE: "ENUM",
THREAD_COMMENT_LIKE: "ENUM",
ACTIVITY_REPLY_SUBSCRIBED: "ENUM",
RELATED_MEDIA_ADDITION: "ENUM",
MEDIA_DATA_CHANGE: "ENUM",
MEDIA_MERGE: "ENUM",
MEDIA_DELETION: "ENUM",
},UserStaffNameLanguage: {
ROMAJI_WESTERN: "ENUM",
ROMAJI: "ENUM",
NATIVE: "ENUM",
},ListActivityOption: {
disabled: "Boolean",
type: "MediaListStatus",
},MediaListStatus: {
CURRENT: "ENUM",
PLANNING: "ENUM",
COMPLETED: "ENUM",
DROPPED: "ENUM",
PAUSED: "ENUM",
REPEATING: "ENUM",
},MediaListOptions: {
scoreFormat: "ScoreFormat",
rowOrder: "String",
useLegacyLists: "Boolean",
animeList: "MediaListTypeOptions",
mangaList: "MediaListTypeOptions",
sharedTheme: "Json",
sharedThemeEnabled: "Boolean",
},ScoreFormat: {
POINT_100: "ENUM",
POINT_10_DECIMAL: "ENUM",
POINT_10: "ENUM",
POINT_5: "ENUM",
POINT_3: "ENUM",
},MediaListTypeOptions: {
sectionOrder: ["String"],
splitCompletedSectionByFormat: "Boolean",
theme: "Json",
customLists: ["String"],
advancedScoring: ["String"],
advancedScoringEnabled: "Boolean",
},Favourites: {
anime: [{
page: "Int",
perPage: "Int",
},
"MediaConnection"
],
manga: [{
page: "Int",
perPage: "Int",
},
"MediaConnection"
],
characters: [{
page: "Int",
perPage: "Int",
},
"CharacterConnection"
],
staff: [{
page: "Int",
perPage: "Int",
},
"StaffConnection"
],
studios: [{
page: "Int",
perPage: "Int",
},
"StudioConnection"
],
},MediaConnection: {
edges: ["MediaEdge"],
nodes: ["Media"],
pageInfo: "PageInfo",
},MediaEdge: {
node: "Media",
id: "Int",
relationType: [{
version: "Int",
},
"MediaRelation"
],
isMainStudio: "Boolean!",
characters: ["Character"],
characterRole: "CharacterRole",
characterName: "String",
roleNotes: "String",
dubGroup: "String",
staffRole: "String",
voiceActors: [{
language: "StaffLanguage",
sort: ["StaffSort"],
},
["Staff"]
],
voiceActorRoles: [{
language: "StaffLanguage",
sort: ["StaffSort"],
},
["StaffRoleType"]
],
favouriteOrder: "Int",
},Media: {
id: "Int!",
idMal: "Int",
title: "MediaTitle",
type: "MediaType",
format: "MediaFormat",
status: [{
version: "Int",
},
"MediaStatus"
],
description: [{
asHtml: "Boolean",
},
"String"
],
startDate: "FuzzyDate",
endDate: "FuzzyDate",
season: "MediaSeason",
seasonYear: "Int",
seasonInt: "Int",
episodes: "Int",
duration: "Int",
chapters: "Int",
volumes: "Int",
countryOfOrigin: "CountryCode",
isLicensed: "Boolean",
source: [{
version: "Int",
},
"MediaSource"
],
hashtag: "String",
trailer: "MediaTrailer",
updatedAt: "Int",
coverImage: "MediaCoverImage",
bannerImage: "String",
genres: ["String"],
synonyms: ["String"],
averageScore: "Int",
meanScore: "Int",
popularity: "Int",
isLocked: "Boolean",
trending: "Int",
favourites: "Int",
tags: ["MediaTag"],
relations: "MediaConnection",
characters: [{
sort: ["CharacterSort"],
role: "CharacterRole",
page: "Int",
perPage: "Int",
},
"CharacterConnection"
],
staff: [{
sort: ["StaffSort"],
page: "Int",
perPage: "Int",
},
"StaffConnection"
],
studios: [{
sort: ["StudioSort"],
isMain: "Boolean",
},
"StudioConnection"
],
isFavourite: "Boolean!",
isFavouriteBlocked: "Boolean!",
isAdult: "Boolean",
nextAiringEpisode: "AiringSchedule",
airingSchedule: [{
notYetAired: "Boolean",
page: "Int",
perPage: "Int",
},
"AiringScheduleConnection"
],
trends: [{
sort: ["MediaTrendSort"],
releasing: "Boolean",
page: "Int",
perPage: "Int",
},
"MediaTrendConnection"
],
externalLinks: ["MediaExternalLink"],
streamingEpisodes: ["MediaStreamingEpisode"],
rankings: ["MediaRank"],
mediaListEntry: "MediaList",
reviews: [{
limit: "Int",
sort: ["ReviewSort"],
page: "Int",
perPage: "Int",
},
"ReviewConnection"
],
recommendations: [{
sort: ["RecommendationSort"],
page: "Int",
perPage: "Int",
},
"RecommendationConnection"
],
stats: "MediaStats",
siteUrl: "String",
autoCreateForumThread: "Boolean",
isRecommendationBlocked: "Boolean",
isReviewBlocked: "Boolean",
modNotes: "String",
},MediaTitle: {
romaji: [{
stylised: "Boolean",
},
"String"
],
english: [{
stylised: "Boolean",
},
"String"
],
native: [{
stylised: "Boolean",
},
"String"
],
userPreferred: "String",
},MediaType: {
ANIME: "ENUM",
MANGA: "ENUM",
},MediaFormat: {
TV: "ENUM",
TV_SHORT: "ENUM",
MOVIE: "ENUM",
SPECIAL: "ENUM",
OVA: "ENUM",
ONA: "ENUM",
MUSIC: "ENUM",
MANGA: "ENUM",
NOVEL: "ENUM",
ONE_SHOT: "ENUM",
},MediaStatus: {
FINISHED: "ENUM",
RELEASING: "ENUM",
NOT_YET_RELEASED: "ENUM",
CANCELLED: "ENUM",
HIATUS: "ENUM",
},FuzzyDate: {
year: "Int",
month: "Int",
day: "Int",
},MediaSeason: {
WINTER: "ENUM",
SPRING: "ENUM",
SUMMER: "ENUM",
FALL: "ENUM",
},CountryCode: "",MediaSource: {
ORIGINAL: "ENUM",
MANGA: "ENUM",
LIGHT_NOVEL: "ENUM",
VISUAL_NOVEL: "ENUM",
VIDEO_GAME: "ENUM",
OTHER: "ENUM",
NOVEL: "ENUM",
DOUJINSHI: "ENUM",
ANIME: "ENUM",
WEB_NOVEL: "ENUM",
LIVE_ACTION: "ENUM",
GAME: "ENUM",
COMIC: "ENUM",
MULTIMEDIA_PROJECT: "ENUM",
PICTURE_BOOK: "ENUM",
},MediaTrailer: {
id: "String",
site: "String",
thumbnail: "String",
},MediaCoverImage: {
extraLarge: "String",
large: "String",
medium: "String",
color: "String",
},MediaTag: {
id: "Int!",
name: "String!",
description: "String",
category: "String",
rank: "Int",
isGeneralSpoiler: "Boolean",
isMediaSpoiler: "Boolean",
isAdult: "Boolean",
userId: "Int",
},CharacterSort: {
ID: "ENUM",
ID_DESC: "ENUM",
ROLE: "ENUM",
ROLE_DESC: "ENUM",
SEARCH_MATCH: "ENUM",
FAVOURITES: "ENUM",
FAVOURITES_DESC: "ENUM",
RELEVANCE: "ENUM",
},CharacterRole: {
MAIN: "ENUM",
SUPPORTING: "ENUM",
BACKGROUND: "ENUM",
},CharacterConnection: {
edges: ["CharacterEdge"],
nodes: ["Character"],
pageInfo: "PageInfo",
},CharacterEdge: {
node: "Character",
id: "Int",
role: "CharacterRole",
name: "String",
voiceActors: [{
language: "StaffLanguage",
sort: ["StaffSort"],
},
["Staff"]
],
voiceActorRoles: [{
language: "StaffLanguage",
sort: ["StaffSort"],
},
["StaffRoleType"]
],
media: ["Media"],
favouriteOrder: "Int",
},Character: {
id: "Int!",
name: "CharacterName",
image: "CharacterImage",
description: [{
asHtml: "Boolean",
},
"String"
],
gender: "String",
dateOfBirth: "FuzzyDate",
age: "String",
bloodType: "String",
isFavourite: "Boolean!",
isFavouriteBlocked: "Boolean!",
siteUrl: "String",
media: [{
sort: ["MediaSort"],
type: "MediaType",
onList: "Boolean",
page: "Int",
perPage: "Int",
},
"MediaConnection"
],
updatedAt: "Int",
favourites: "Int",
modNotes: "String",
},CharacterName: {
first: "String",
middle: "String",
last: "String",
full: "String",
native: "String",
alternative: ["String"],
alternativeSpoiler: ["String"],
userPreferred: "String",
},CharacterImage: {
large: "String",
medium: "String",
},MediaSort: {
ID: "ENUM",
ID_DESC: "ENUM",
TITLE_ROMAJI: "ENUM",
TITLE_ROMAJI_DESC: "ENUM",
TITLE_ENGLISH: "ENUM",
TITLE_ENGLISH_DESC: "ENUM",
TITLE_NATIVE: "ENUM",
TITLE_NATIVE_DESC: "ENUM",
TYPE: "ENUM",
TYPE_DESC: "ENUM",
FORMAT: "ENUM",
FORMAT_DESC: "ENUM",
START_DATE: "ENUM",
START_DATE_DESC: "ENUM",
END_DATE: "ENUM",
END_DATE_DESC: "ENUM",
SCORE: "ENUM",
SCORE_DESC: "ENUM",
POPULARITY: "ENUM",
POPULARITY_DESC: "ENUM",
TRENDING: "ENUM",
TRENDING_DESC: "ENUM",
EPISODES: "ENUM",
EPISODES_DESC: "ENUM",
DURATION: "ENUM",
DURATION_DESC: "ENUM",
STATUS: "ENUM",
STATUS_DESC: "ENUM",
CHAPTERS: "ENUM",
CHAPTERS_DESC: "ENUM",
VOLUMES: "ENUM",
VOLUMES_DESC: "ENUM",
UPDATED_AT: "ENUM",
UPDATED_AT_DESC: "ENUM",
SEARCH_MATCH: "ENUM",
FAVOURITES: "ENUM",
FAVOURITES_DESC: "ENUM",
},StaffLanguage: {
JAPANESE: "ENUM",
ENGLISH: "ENUM",
KOREAN: "ENUM",
ITALIAN: "ENUM",
SPANISH: "ENUM",
PORTUGUESE: "ENUM",
FRENCH: "ENUM",
GERMAN: "ENUM",
HEBREW: "ENUM",
HUNGARIAN: "ENUM",
},StaffSort: {
ID: "ENUM",
ID_DESC: "ENUM",
ROLE: "ENUM",
ROLE_DESC: "ENUM",
LANGUAGE: "ENUM",
LANGUAGE_DESC: "ENUM",
SEARCH_MATCH: "ENUM",
FAVOURITES: "ENUM",
FAVOURITES_DESC: "ENUM",
RELEVANCE: "ENUM",
},Staff: {
id: "Int!",
name: "StaffName",
language: "StaffLanguage",
languageV2: "String",
image: "StaffImage",
description: [{
asHtml: "Boolean",
},
"String"
],
primaryOccupations: ["String"],
gender: "String",
dateOfBirth: "FuzzyDate",
dateOfDeath: "FuzzyDate",
age: "Int",
yearsActive: ["Int"],
homeTown: "String",
bloodType: "String",
isFavourite: "Boolean!",
isFavouriteBlocked: "Boolean!",
siteUrl: "String",
staffMedia: [{
sort: ["MediaSort"],
type: "MediaType",
onList: "Boolean",
page: "Int",
perPage: "Int",
},
"MediaConnection"
],
characters: [{
sort: ["CharacterSort"],
page: "Int",
perPage: "Int",
},
"CharacterConnection"
],
characterMedia: [{
sort: ["MediaSort"],
onList: "Boolean",
page: "Int",
perPage: "Int",
},
"MediaConnection"
],
updatedAt: "Int",
staff: "Staff",
submitter: "User",
submissionStatus: "Int",
submissionNotes: "String",
favourites: "Int",
modNotes: "String",
},StaffName: {
first: "String",
middle: "String",
last: "String",
full: "String",
native: "String",
alternative: ["String"],
userPreferred: "String",
},StaffImage: {
large: "String",
medium: "String",
},StaffRoleType: {
voiceActor: "Staff",
roleNotes: "String",
dubGroup: "String",
},StaffConnection: {
edges: ["StaffEdge"],
nodes: ["Staff"],
pageInfo: "PageInfo",
},StaffEdge: {
node: "Staff",
id: "Int",
role: "String",
favouriteOrder: "Int",
},StudioSort: {
ID: "ENUM",
ID_DESC: "ENUM",
NAME: "ENUM",
NAME_DESC: "ENUM",
SEARCH_MATCH: "ENUM",
FAVOURITES: "ENUM",
FAVOURITES_DESC: "ENUM",
},StudioConnection: {
edges: ["StudioEdge"],
nodes: ["Studio"],
pageInfo: "PageInfo",
},StudioEdge: {
node: "Studio",
id: "Int",
isMain: "Boolean!",
favouriteOrder: "Int",
},Studio: {
id: "Int!",
name: "String!",
isAnimationStudio: "Boolean!",
media: [{
sort: ["MediaSort"],
isMain: "Boolean",
onList: "Boolean",
page: "Int",
perPage: "Int",
},
"MediaConnection"
],
siteUrl: "String",
isFavourite: "Boolean!",
favourites: "Int",
},AiringSchedule: {
id: "Int!",
airingAt: "Int!",
timeUntilAiring: "Int!",
episode: "Int!",
mediaId: "Int!",
media: "Media",
},AiringScheduleConnection: {
edges: ["AiringScheduleEdge"],
nodes: ["AiringSchedule"],
pageInfo: "PageInfo",
},AiringScheduleEdge: {
node: "AiringSchedule",
id: "Int",
},MediaTrendSort: {
ID: "ENUM",
ID_DESC: "ENUM",
MEDIA_ID: "ENUM",
MEDIA_ID_DESC: "ENUM",
DATE: "ENUM",
DATE_DESC: "ENUM",
SCORE: "ENUM",
SCORE_DESC: "ENUM",
POPULARITY: "ENUM",
POPULARITY_DESC: "ENUM",
TRENDING: "ENUM",
TRENDING_DESC: "ENUM",
EPISODE: "ENUM",
EPISODE_DESC: "ENUM",
},MediaTrendConnection: {
edges: ["MediaTrendEdge"],
nodes: ["MediaTrend"],
pageInfo: "PageInfo",
},MediaTrendEdge: {
node: "MediaTrend",
},MediaTrend: {
mediaId: "Int!",
date: "Int!",
trending: "Int!",
averageScore: "Int",
popularity: "Int",
inProgress: "Int",
releasing: "Boolean!",
episode: "Int",
media: "Media",
},MediaExternalLink: {
id: "Int!",
url: "String",
site: "String!",
siteId: "Int",
type: "ExternalLinkType",
language: "String",
color: "String",
icon: "String",
notes: "String",
isDisabled: "Boolean",
},ExternalLinkType: {
INFO: "ENUM",
STREAMING: "ENUM",
SOCIAL: "ENUM",
},MediaStreamingEpisode: {
title: "String",
thumbnail: "String",
url: "String",
site: "String",
},MediaRank: {
id: "Int!",
rank: "Int!",
type: "MediaRankType!",
format: "MediaFormat!",
year: "Int",
season: "MediaSeason",
allTime: "Boolean",
context: "String!",
},MediaRankType: {
RATED: "ENUM",
POPULAR: "ENUM",
},MediaList: {
id: "Int!",
userId: "Int!",
mediaId: "Int!",
status: "MediaListStatus",
score: [{
format: "ScoreFormat",
},
"Float"
],
progress: "Int",
progressVolumes: "Int",
repeat: "Int",
priority: "Int",
private: "Boolean",
notes: "String",
hiddenFromStatusLists: "Boolean",
customLists: [{
asArray: "Boolean",
},
"Json"
],
advancedScores: "Json",
startedAt: "FuzzyDate",
completedAt: "FuzzyDate",
updatedAt: "Int",
createdAt: "Int",
media: "Media",
user: "User",
},Float: "",ReviewSort: {
ID: "ENUM",
ID_DESC: "ENUM",
SCORE: "ENUM",
SCORE_DESC: "ENUM",
RATING: "ENUM",
RATING_DESC: "ENUM",
CREATED_AT: "ENUM",
CREATED_AT_DESC: "ENUM",
UPDATED_AT: "ENUM",
UPDATED_AT_DESC: "ENUM",
},ReviewConnection: {
edges: ["ReviewEdge"],
nodes: ["Review"],
pageInfo: "PageInfo",
},ReviewEdge: {
node: "Review",
},Review: {
id: "Int!",
userId: "Int!",
mediaId: "Int!",
mediaType: "MediaType",
summary: "String",
body: [{
asHtml: "Boolean",
},
"String"
],
rating: "Int",
ratingAmount: "Int",
userRating: "ReviewRating",
score: "Int",
private: "Boolean",
siteUrl: "String",
createdAt: "Int!",
updatedAt: "Int!",
user: "User",
media: "Media",
},ReviewRating: {
NO_VOTE: "ENUM",
UP_VOTE: "ENUM",
DOWN_VOTE: "ENUM",
},RecommendationSort: {
ID: "ENUM",
ID_DESC: "ENUM",
RATING: "ENUM",
RATING_DESC: "ENUM",
},RecommendationConnection: {
edges: ["RecommendationEdge"],
nodes: ["Recommendation"],
pageInfo: "PageInfo",
},RecommendationEdge: {
node: "Recommendation",
},Recommendation: {
id: "Int!",
rating: "Int",
userRating: "RecommendationRating",
media: "Media",
mediaRecommendation: "Media",
user: "User",
},RecommendationRating: {
NO_RATING: "ENUM",
RATE_UP: "ENUM",
RATE_DOWN: "ENUM",
},MediaStats: {
scoreDistribution: ["ScoreDistribution"],
statusDistribution: ["StatusDistribution"],
airingProgression: ["AiringProgression"],
},ScoreDistribution: {
score: "Int",
amount: "Int",
},StatusDistribution: {
status: "MediaListStatus",
amount: "Int",
},AiringProgression: {
episode: "Float",
score: "Float",
watching: "Int",
},MediaRelation: {
ADAPTATION: "ENUM",
PREQUEL: "ENUM",
SEQUEL: "ENUM",
PARENT: "ENUM",
SIDE_STORY: "ENUM",
CHARACTER: "ENUM",
SUMMARY: "ENUM",
ALTERNATIVE: "ENUM",
SPIN_OFF: "ENUM",
OTHER: "ENUM",
SOURCE: "ENUM",
COMPILATION: "ENUM",
CONTAINS: "ENUM",
},UserStatisticTypes: {
anime: "UserStatistics",
manga: "UserStatistics",
},UserStatistics: {
count: "Int!",
meanScore: "Float!",
standardDeviation: "Float!",
minutesWatched: "Int!",
episodesWatched: "Int!",
chaptersRead: "Int!",
volumesRead: "Int!",
formats: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserFormatStatistic"]
],
statuses: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserStatusStatistic"]
],
scores: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserScoreStatistic"]
],
lengths: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserLengthStatistic"]
],
releaseYears: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserReleaseYearStatistic"]
],
startYears: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserStartYearStatistic"]
],
genres: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserGenreStatistic"]
],
tags: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserTagStatistic"]
],
countries: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserCountryStatistic"]
],
voiceActors: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserVoiceActorStatistic"]
],
staff: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserStaffStatistic"]
],
studios: [{
limit: "Int",
sort: ["UserStatisticsSort"],
},
["UserStudioStatistic"]
],
},UserStatisticsSort: {
ID: "ENUM",
ID_DESC: "ENUM",
COUNT: "ENUM",
COUNT_DESC: "ENUM",
PROGRESS: "ENUM",
PROGRESS_DESC: "ENUM",
MEAN_SCORE: "ENUM",
MEAN_SCORE_DESC: "ENUM",
},UserFormatStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
format: "MediaFormat",
},UserStatusStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
status: "MediaListStatus",
},UserScoreStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
score: "Int",
},UserLengthStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
length: "String",
},UserReleaseYearStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
releaseYear: "Int",
},UserStartYearStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
startYear: "Int",
},UserGenreStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
genre: "String",
},UserTagStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
tag: "MediaTag",
},UserCountryStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
country: "CountryCode",
},UserVoiceActorStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
voiceActor: "Staff",
characterIds: ["Int"!],
},UserStaffStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
staff: "Staff",
},UserStudioStatistic: {
count: "Int!",
meanScore: "Float!",
minutesWatched: "Int!",
chaptersRead: "Int!",
mediaIds: ["Int"!],
studio: "Studio",
},ModRole: {
ADMIN: "ENUM",
LEAD_DEVELOPER: "ENUM",
DEVELOPER: "ENUM",
LEAD_COMMUNITY: "ENUM",
COMMUNITY: "ENUM",
DISCORD_COMMUNITY: "ENUM",
LEAD_ANIME_DATA: "ENUM",
ANIME_DATA: "ENUM",
LEAD_MANGA_DATA: "ENUM",
MANGA_DATA: "ENUM",
LEAD_SOCIAL_MEDIA: "ENUM",
SOCIAL_MEDIA: "ENUM",
RETIRED: "ENUM",
CHARACTER_DATA: "ENUM",
STAFF_DATA: "ENUM",
},UserStats: {
watchedTime: "Int",
chaptersRead: "Int",
activityHistory: ["UserActivityHistory"],
animeStatusDistribution: ["StatusDistribution"],
mangaStatusDistribution: ["StatusDistribution"],
animeScoreDistribution: ["ScoreDistribution"],
mangaScoreDistribution: ["ScoreDistribution"],
animeListScores: "ListScoreStats",
mangaListScores: "ListScoreStats",
favouredGenresOverview: ["GenreStats"],
favouredGenres: ["GenreStats"],
favouredTags: ["TagStats"],
favouredActors: ["StaffStats"],
favouredStaff: ["StaffStats"],
favouredStudios: ["StudioStats"],
favouredYears: ["YearStats"],
favouredFormats: ["FormatStats"],
},UserActivityHistory: {
date: "Int",
amount: "Int",
level: "Int",
},ListScoreStats: {
meanScore: "Int",
standardDeviation: "Int",
},GenreStats: {
genre: "String",
amount: "Int",
meanScore: "Int",
timeWatched: "Int",
},TagStats: {
tag: "MediaTag",
amount: "Int",
meanScore: "Int",
timeWatched: "Int",
},StaffStats: {
staff: "Staff",
amount: "Int",
meanScore: "Int",
timeWatched: "Int",
},StudioStats: {
studio: "Studio",
amount: "Int",
meanScore: "Int",
timeWatched: "Int",
},YearStats: {
year: "Int",
amount: "Int",
meanScore: "Int",
},FormatStats: {
format: "MediaFormat",
amount: "Int",
},UserPreviousName: {
name: "String",
createdAt: "Int",
updatedAt: "Int",
},FuzzyDateInt: "",MediaListSort: {
MEDIA_ID: "ENUM",
MEDIA_ID_DESC: "ENUM",
SCORE: "ENUM",
SCORE_DESC: "ENUM",
STATUS: "ENUM",
STATUS_DESC: "ENUM",
PROGRESS: "ENUM",
PROGRESS_DESC: "ENUM",
PROGRESS_VOLUMES: "ENUM",
PROGRESS_VOLUMES_DESC: "ENUM",
REPEAT: "ENUM",
REPEAT_DESC: "ENUM",
PRIORITY: "ENUM",
PRIORITY_DESC: "ENUM",
STARTED_ON: "ENUM",
STARTED_ON_DESC: "ENUM",
FINISHED_ON: "ENUM",
FINISHED_ON_DESC: "ENUM",
ADDED_TIME: "ENUM",
ADDED_TIME_DESC: "ENUM",
UPDATED_TIME: "ENUM",
UPDATED_TIME_DESC: "ENUM",
MEDIA_TITLE_ROMAJI: "ENUM",
MEDIA_TITLE_ROMAJI_DESC: "ENUM",
MEDIA_TITLE_ENGLISH: "ENUM",
MEDIA_TITLE_ENGLISH_DESC: "ENUM",
MEDIA_TITLE_NATIVE: "ENUM",
MEDIA_TITLE_NATIVE_DESC: "ENUM",
MEDIA_POPULARITY: "ENUM",
MEDIA_POPULARITY_DESC: "ENUM",
},AiringSort: {
ID: "ENUM",
ID_DESC: "ENUM",
MEDIA_ID: "ENUM",
MEDIA_ID_DESC: "ENUM",
TIME: "ENUM",
TIME_DESC: "ENUM",
EPISODE: "ENUM",
EPISODE_DESC: "ENUM",
},NotificationUnion: ["AiringNotification!", "FollowingNotification!", "ActivityMessageNotification!", "ActivityMentionNotification!", "ActivityReplyNotification!", "ActivityReplySubscribedNotification!", "ActivityLikeNotification!", "ActivityReplyLikeNotification!", "ThreadCommentMentionNotification!", "ThreadCommentReplyNotification!", "ThreadCommentSubscribedNotification!", "ThreadCommentLikeNotification!", "ThreadLikeNotification!", "RelatedMediaAdditionNotification!", "MediaDataChangeNotification!", "MediaMergeNotification!", "MediaDeletionNotification!"],AiringNotification: {
id: "Int!",
type: "NotificationType",
animeId: "Int!",
episode: "Int!",
contexts: ["String"],
createdAt: "Int",
media: "Media",
},FollowingNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
context: "String",
createdAt: "Int",
user: "User",
},ActivityMessageNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
activityId: "Int!",
context: "String",
createdAt: "Int",
message: "MessageActivity",
user: "User",
},MessageActivity: {
id: "Int!",
recipientId: "Int",
messengerId: "Int",
type: "ActivityType",
replyCount: "Int!",
message: [{
asHtml: "Boolean",
},
"String"
],
isLocked: "Boolean",
isSubscribed: "Boolean",
likeCount: "Int!",
isLiked: "Boolean",
isPrivate: "Boolean",
siteUrl: "String",
createdAt: "Int!",
recipient: "User",
messenger: "User",
replies: ["ActivityReply"],
likes: ["User"],
},ActivityType: {
TEXT: "ENUM",
ANIME_LIST: "ENUM",
MANGA_LIST: "ENUM",
MESSAGE: "ENUM",
MEDIA_LIST: "ENUM",
},ActivityReply: {
id: "Int!",
userId: "Int",
activityId: "Int",
text: [{
asHtml: "Boolean",
},
"String"
],
likeCount: "Int!",
isLiked: "Boolean",
createdAt: "Int!",
user: "User",
likes: ["User"],
},ActivityMentionNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
activityId: "Int!",
context: "String",
createdAt: "Int",
activity: "ActivityUnion",
user: "User",
},ActivityUnion: ["TextActivity!", "ListActivity!", "MessageActivity!"],TextActivity: {
id: "Int!",
userId: "Int",
type: "ActivityType",
replyCount: "Int!",
text: [{
asHtml: "Boolean",
},
"String"
],
siteUrl: "String",
isLocked: "Boolean",
isSubscribed: "Boolean",
likeCount: "Int!",
isLiked: "Boolean",
isPinned: "Boolean",
createdAt: "Int!",
user: "User",
replies: ["ActivityReply"],
likes: ["User"],
},ListActivity: {
id: "Int!",
userId: "Int",
type: "ActivityType",
replyCount: "Int!",
status: "String",
progress: "String",
isLocked: "Boolean",
isSubscribed: "Boolean",
likeCount: "Int!",
isLiked: "Boolean",
isPinned: "Boolean",
siteUrl: "String",
createdAt: "Int!",
user: "User",
media: "Media",
replies: ["ActivityReply"],
likes: ["User"],
},ActivityReplyNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
activityId: "Int!",
context: "String",
createdAt: "Int",
activity: "ActivityUnion",
user: "User",
},ActivityReplySubscribedNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
activityId: "Int!",
context: "String",
createdAt: "Int",
activity: "ActivityUnion",
user: "User",
},ActivityLikeNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
activityId: "Int!",
context: "String",
createdAt: "Int",
activity: "ActivityUnion",
user: "User",
},ActivityReplyLikeNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
activityId: "Int!",
context: "String",
createdAt: "Int",
activity: "ActivityUnion",
user: "User",
},ThreadCommentMentionNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
commentId: "Int!",
context: "String",
createdAt: "Int",
thread: "Thread",
comment: "ThreadComment",
user: "User",
},Thread: {
id: "Int!",
title: "String",
body: [{
asHtml: "Boolean",
},
"String"
],
userId: "Int!",
replyUserId: "Int",
replyCommentId: "Int",
replyCount: "Int",
viewCount: "Int",
isLocked: "Boolean",
isSticky: "Boolean",
isSubscribed: "Boolean",
likeCount: "Int!",
isLiked: "Boolean",
repliedAt: "Int",
createdAt: "Int!",
updatedAt: "Int!",
user: "User",
replyUser: "User",
likes: ["User"],
siteUrl: "String",
categories: ["ThreadCategory"],
mediaCategories: ["Media"],
},ThreadCategory: {
id: "Int!",
name: "String!",
},ThreadComment: {
id: "Int!",
userId: "Int",
threadId: "Int",
comment: [{
asHtml: "Boolean",
},
"String"
],
likeCount: "Int!",
isLiked: "Boolean",
siteUrl: "String",
createdAt: "Int!",
updatedAt: "Int!",
thread: "Thread",
user: "User",
likes: ["User"],
childComments: "Json",
isLocked: "Boolean",
},ThreadCommentReplyNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
commentId: "Int!",
context: "String",
createdAt: "Int",
thread: "Thread",
comment: "ThreadComment",
user: "User",
},ThreadCommentSubscribedNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
commentId: "Int!",
context: "String",
createdAt: "Int",
thread: "Thread",
comment: "ThreadComment",
user: "User",
},ThreadCommentLikeNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
commentId: "Int!",
context: "String",
createdAt: "Int",
thread: "Thread",
comment: "ThreadComment",
user: "User",
},ThreadLikeNotification: {
id: "Int!",
userId: "Int!",
type: "NotificationType",
threadId: "Int!",
context: "String",
createdAt: "Int",
thread: "Thread",
comment: "ThreadComment",
user: "User",
},RelatedMediaAdditionNotification: {
id: "Int!",
type: "NotificationType",
mediaId: "Int!",
context: "String",
createdAt: "Int",
media: "Media",
},MediaDataChangeNotification: {
id: "Int!",
type: "NotificationType",
mediaId: "Int!",
context: "String",
reason: "String",
createdAt: "Int",
media: "Media",
},MediaMergeNotification: {
id: "Int!",
type: "NotificationType",
mediaId: "Int!",
deletedMediaTitles: ["String"],
context: "String",
reason: "String",
createdAt: "Int",
media: "Media",
},MediaDeletionNotification: {
id: "Int!",
type: "NotificationType",
deletedMediaTitle: "String",
context: "String",
reason: "String",
createdAt: "Int",
},ActivitySort: {
ID: "ENUM",
ID_DESC: "ENUM",
PINNED: "ENUM",
},ThreadSort: {
ID: "ENUM",
ID_DESC: "ENUM",
TITLE: "ENUM",
TITLE_DESC: "ENUM",
CREATED_AT: "ENUM",
CREATED_AT_DESC: "ENUM",
UPDATED_AT: "ENUM",
UPDATED_AT_DESC: "ENUM",
REPLIED_AT: "ENUM",
REPLIED_AT_DESC: "ENUM",
REPLY_COUNT: "ENUM",
REPLY_COUNT_DESC: "ENUM",
VIEW_COUNT: "ENUM",
VIEW_COUNT_DESC: "ENUM",
IS_STICKY: "ENUM",
SEARCH_MATCH: "ENUM",
},ThreadCommentSort: {
ID: "ENUM",
ID_DESC: "ENUM",
},LikeableType: {
THREAD: "ENUM",
THREAD_COMMENT: "ENUM",
ACTIVITY: "ENUM",
ACTIVITY_REPLY: "ENUM",
},MediaListCollection: {
lists: ["MediaListGroup"],
user: "User",
hasNextChunk: "Boolean",
statusLists: [{
asArray: "Boolean",
},
[["MediaList"]]
],
customLists: [{
asArray: "Boolean",
},
[["MediaList"]]
],
},MediaListGroup: {
entries: ["MediaList"],
name: "String",
isCustomList: "Boolean",
isSplitCompletedList: "Boolean",
status: "MediaListStatus",
},ParsedMarkdown: {
html: "String",
},AniChartUser: {
user: "User",
settings: "Json",
highlights: "Json",
},SiteStatistics: {
users: [{
sort: ["SiteTrendSort"],
page: "Int",
perPage: "Int",
},
"SiteTrendConnection"
],
anime: [{
sort: ["SiteTrendSort"],
page: "Int",
perPage: "Int",
},
"SiteTrendConnection"
],
manga: [{
sort: ["SiteTrendSort"],
page: "Int",
perPage: "Int",
},
"SiteTrendConnection"
],
characters: [{
sort: ["SiteTrendSort"],
page: "Int",
perPage: "Int",
},
"SiteTrendConnection"
],
staff: [{
sort: ["SiteTrendSort"],
page: "Int",
perPage: "Int",
},
"SiteTrendConnection"
],
studios: [{
sort: ["SiteTrendSort"],
page: "Int",
perPage: "Int",
},
"SiteTrendConnection"
],
reviews: [{
sort: ["SiteTrendSort"],
page: "Int",
perPage: "Int",
},
"SiteTrendConnection"
],
},SiteTrendSort: {
DATE: "ENUM",
DATE_DESC: "ENUM",
COUNT: "ENUM",
COUNT_DESC: "ENUM",
CHANGE: "ENUM",
CHANGE_DESC: "ENUM",
},SiteTrendConnection: {
edges: ["SiteTrendEdge"],
nodes: ["SiteTrend"],
pageInfo: "PageInfo",
},SiteTrendEdge: {
node: "SiteTrend",
},SiteTrend: {
date: "Int!",
count: "Int!",
change: "Int!",
},ExternalLinkMediaType: {
ANIME: "ENUM",
MANGA: "ENUM",
STAFF: "ENUM",
},Mutation: {
UpdateUser: [{
about: "String",
titleLanguage: "UserTitleLanguage",
displayAdultContent: "Boolean",
airingNotifications: "Boolean",
scoreFormat: "ScoreFormat",
rowOrder: "String",
profileColor: "String",
donatorBadge: "String",
notificationOptions: ["NotificationOptionInput"],
timezone: "String",
activityMergeTime: "Int",
animeListOptions: "MediaListOptionsInput",
mangaListOptions: "MediaListOptionsInput",
staffNameLanguage: "UserStaffNameLanguage",
restrictMessagesToFollowing: "Boolean",
disabledListActivity: ["ListActivityOptionInput"],
},
"User"
],
SaveMediaListEntry: [{
id: "Int",
mediaId: "Int",
status: "MediaListStatus",
score: "Float",
scoreRaw: "Int",
progress: "Int",
progressVolumes: "Int",
repeat: "Int",
priority: "Int",
private: "Boolean",
notes: "String",
hiddenFromStatusLists: "Boolean",
customLists: ["String"],
advancedScores: ["Float"],
startedAt: "FuzzyDateInput",
completedAt: "FuzzyDateInput",
},
"MediaList"
],
UpdateMediaListEntries: [{
status: "MediaListStatus",
score: "Float",
scoreRaw: "Int",
progress: "Int",
progressVolumes: "Int",
repeat: "Int",
priority: "Int",
private: "Boolean",
notes: "String",
hiddenFromStatusLists: "Boolean",
advancedScores: ["Float"],
startedAt: "FuzzyDateInput",
completedAt: "FuzzyDateInput",
ids: ["Int"],
},
["MediaList"]
],
DeleteMediaListEntry: [{
id: "Int",
},
"Deleted"
],
DeleteCustomList: [{
customList: "String",
type: "MediaType",
},
"Deleted"
],
SaveTextActivity: [{
id: "Int",
text: "String",
locked: "Boolean",
},
"TextActivity"
],
SaveMessageActivity: [{
id: "Int",
message: "String",
recipientId: "Int",
private: "Boolean",
locked: "Boolean",
asMod: "Boolean",
},
"MessageActivity"
],
SaveListActivity: [{
id: "Int",
locked: "Boolean",
},
"ListActivity"
],
DeleteActivity: [{
id: "Int",
},
"Deleted"
],
ToggleActivityPin: [{
id: "Int",
pinned: "Boolean",
},
"ActivityUnion"
],
ToggleActivitySubscription: [{
activityId: "Int",
subscribe: "Boolean",
},
"ActivityUnion"
],
SaveActivityReply: [{
id: "Int",
activityId: "Int",
text: "String",
asMod: "Boolean",
},
"ActivityReply"
],
DeleteActivityReply: [{
id: "Int",
},
"Deleted"
],
ToggleLike: [{
id: "Int",
type: "LikeableType",
},
["User"]
],
ToggleLikeV2: [{
id: "Int",
type: "LikeableType",
},
"LikeableUnion"
],
ToggleFollow: [{
userId: "Int",
},
"User"
],
ToggleFavourite: [{
animeId: "Int",
mangaId: "Int",
characterId: "Int",
staffId: "Int",
studioId: "Int",
},
"Favourites"
],
UpdateFavouriteOrder: [{
animeIds: ["Int"],
mangaIds: ["Int"],
characterIds: ["Int"],
staffIds: ["Int"],
studioIds: ["Int"],
animeOrder: ["Int"],
mangaOrder: ["Int"],
characterOrder: ["Int"],
staffOrder: ["Int"],
studioOrder: ["Int"],
},
"Favourites"
],
SaveReview: [{
id: "Int",
mediaId: "Int",
body: "String",
summary: "String",
score: "Int",
private: "Boolean",
},
"Review"
],
DeleteReview: [{
id: "Int",
},
"Deleted"
],
RateReview: [{
reviewId: "Int",
rating: "ReviewRating",
},
"Review"
],
SaveRecommendation: [{
mediaId: "Int",
mediaRecommendationId: "Int",
rating: "RecommendationRating",
},
"Recommendation"
],
SaveThread: [{
id: "Int",
title: "String",
body: "String",
categories: ["Int"],
mediaCategories: ["Int"],
sticky: "Boolean",
locked: "Boolean",
},
"Thread"
],
DeleteThread: [{
id: "Int",
},
"Deleted"
],
ToggleThreadSubscription: [{
threadId: "Int",
subscribe: "Boolean",
},
"Thread"
],
SaveThreadComment: [{
id: "Int",
threadId: "Int",
parentCommentId: "Int",
comment: "String",
locked: "Boolean",
},
"ThreadComment"
],
DeleteThreadComment: [{
id: "Int",
},
"Deleted"
],
UpdateAniChartSettings: [{
titleLanguage: "String",
outgoingLinkProvider: "String",
theme: "String",
sort: "String",
},
"Json"
],
UpdateAniChartHighlights: [{
highlights: ["AniChartHighlightInput"],
},
"Json"
],
},NotificationOptionInput: {
type: "NotificationType",
enabled: "Boolean",
},MediaListOptionsInput: {
sectionOrder: ["String"],
splitCompletedSectionByFormat: "Boolean",
customLists: ["String"],
advancedScoring: ["String"],
advancedScoringEnabled: "Boolean",
theme: "String",
},ListActivityOptionInput: {
disabled: "Boolean",
type: "MediaListStatus",
},FuzzyDateInput: {
year: "Int",
month: "Int",
day: "Int",
},Deleted: {
deleted: "Boolean",
},LikeableUnion: ["ListActivity!", "TextActivity!", "MessageActivity!", "ActivityReply!", "Thread!", "ThreadComment!"],AniChartHighlightInput: {
mediaId: "Int",
highlight: "String",
},InternalPage: {
mediaSubmissions: [{
mediaId: "Int",
submissionId: "Int",
userId: "Int",
assigneeId: "Int",
status: "SubmissionStatus",
type: "MediaType",
sort: ["SubmissionSort"],
},
["MediaSubmission"]
],
characterSubmissions: [{
characterId: "Int",
userId: "Int",
assigneeId: "Int",
status: "SubmissionStatus",
sort: ["SubmissionSort"],
},
["CharacterSubmission"]
],
staffSubmissions: [{
staffId: "Int",
userId: "Int",
assigneeId: "Int",
status: "SubmissionStatus",
sort: ["SubmissionSort"],
},
["StaffSubmission"]
],
revisionHistory: [{
userId: "Int",
mediaId: "Int",
characterId: "Int",
staffId: "Int",
studioId: "Int",
},
["RevisionHistory"]
],
reports: [{
reporterId: "Int",
reportedId: "Int",
},
["Report"]
],
modActions: [{
userId: "Int",
modId: "Int",
},
["ModAction"]
],
userBlockSearch: [{
search: "String",
},
["User"]
],
pageInfo: "PageInfo",
users: [{
id: "Int",
name: "String",
isModerator: "Boolean",
search: "String",
sort: ["UserSort"],
},
["User"]
],
media: [{
id: "Int",
idMal: "Int",
startDate: "FuzzyDateInt",
endDate: "FuzzyDateInt",
season: "MediaSeason",
seasonYear: "Int",
type: "MediaType",
format: "MediaFormat",
status: "MediaStatus",
episodes: "Int",
duration: "Int",
chapters: "Int",
volumes: "Int",
isAdult: "Boolean",
genre: "String",
tag: "String",
minimumTagRank: "Int",
tagCategory: "String",
onList: "Boolean",
licensedBy: "String",
licensedById: "Int",
averageScore: "Int",
popularity: "Int",
source: "MediaSource",
countryOfOrigin: "CountryCode",
isLicensed: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
idMal_not: "Int",
idMal_in: ["Int"],
idMal_not_in: ["Int"],
startDate_greater: "FuzzyDateInt",
startDate_lesser: "FuzzyDateInt",
startDate_like: "String",
endDate_greater: "FuzzyDateInt",
endDate_lesser: "FuzzyDateInt",
endDate_like: "String",
format_in: ["MediaFormat"],
format_not: "MediaFormat",
format_not_in: ["MediaFormat"],
status_in: ["MediaStatus"],
status_not: "MediaStatus",
status_not_in: ["MediaStatus"],
episodes_greater: "Int",
episodes_lesser: "Int",
duration_greater: "Int",
duration_lesser: "Int",
chapters_greater: "Int",
chapters_lesser: "Int",
volumes_greater: "Int",
volumes_lesser: "Int",
genre_in: ["String"],
genre_not_in: ["String"],
tag_in: ["String"],
tag_not_in: ["String"],
tagCategory_in: ["String"],
tagCategory_not_in: ["String"],
licensedBy_in: ["String"],
licensedById_in: ["Int"],
averageScore_not: "Int",
averageScore_greater: "Int",
averageScore_lesser: "Int",
popularity_not: "Int",
popularity_greater: "Int",
popularity_lesser: "Int",
source_in: ["MediaSource"],
sort: ["MediaSort"],
},
["Media"]
],
characters: [{
id: "Int",
isBirthday: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["CharacterSort"],
},
["Character"]
],
staff: [{
id: "Int",
isBirthday: "Boolean",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["StaffSort"],
},
["Staff"]
],
studios: [{
id: "Int",
search: "String",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
sort: ["StudioSort"],
},
["Studio"]
],
mediaList: [{
id: "Int",
userId: "Int",
userName: "String",
type: "MediaType",
status: "MediaListStatus",
mediaId: "Int",
isFollowing: "Boolean",
notes: "String",
startedAt: "FuzzyDateInt",
completedAt: "FuzzyDateInt",
compareWithAuthList: "Boolean",
userId_in: ["Int"],
status_in: ["MediaListStatus"],
status_not_in: ["MediaListStatus"],
status_not: "MediaListStatus",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
notes_like: "String",
startedAt_greater: "FuzzyDateInt",
startedAt_lesser: "FuzzyDateInt",
startedAt_like: "String",
completedAt_greater: "FuzzyDateInt",
completedAt_lesser: "FuzzyDateInt",
completedAt_like: "String",
sort: ["MediaListSort"],
},
["MediaList"]
],
airingSchedules: [{
id: "Int",
mediaId: "Int",
episode: "Int",
airingAt: "Int",
notYetAired: "Boolean",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
episode_not: "Int",
episode_in: ["Int"],
episode_not_in: ["Int"],
episode_greater: "Int",
episode_lesser: "Int",
airingAt_greater: "Int",
airingAt_lesser: "Int",
sort: ["AiringSort"],
},
["AiringSchedule"]
],
mediaTrends: [{
mediaId: "Int",
date: "Int",
trending: "Int",
averageScore: "Int",
popularity: "Int",
episode: "Int",
releasing: "Boolean",
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
date_greater: "Int",
date_lesser: "Int",
trending_greater: "Int",
trending_lesser: "Int",
trending_not: "Int",
averageScore_greater: "Int",
averageScore_lesser: "Int",
averageScore_not: "Int",
popularity_greater: "Int",
popularity_lesser: "Int",
popularity_not: "Int",
episode_greater: "Int",
episode_lesser: "Int",
episode_not: "Int",
sort: ["MediaTrendSort"],
},
["MediaTrend"]
],
notifications: [{
type: "NotificationType",
resetNotificationCount: "Boolean",
type_in: ["NotificationType"],
},
["NotificationUnion"]
],
followers: [{
userId: "Int!",
sort: ["UserSort"],
},
["User"]
],
following: [{
userId: "Int!",
sort: ["UserSort"],
},
["User"]
],
activities: [{
id: "Int",
userId: "Int",
messengerId: "Int",
mediaId: "Int",
type: "ActivityType",
isFollowing: "Boolean",
hasReplies: "Boolean",
hasRepliesOrTypeText: "Boolean",
createdAt: "Int",
id_not: "Int",
id_in: ["Int"],
id_not_in: ["Int"],
userId_not: "Int",
userId_in: ["Int"],
userId_not_in: ["Int"],
messengerId_not: "Int",
messengerId_in: ["Int"],
messengerId_not_in: ["Int"],
mediaId_not: "Int",
mediaId_in: ["Int"],
mediaId_not_in: ["Int"],
type_not: "ActivityType",
type_in: ["ActivityType"],
type_not_in: ["ActivityType"],
createdAt_greater: "Int",
createdAt_lesser: "Int",
sort: ["ActivitySort"],
},
["ActivityUnion"]
],
activityReplies: [{
id: "Int",
activityId: "Int",
},
["ActivityReply"]
],
threads: [{
id: "Int",
userId: "Int",
replyUserId: "Int",
subscribed: "Boolean",
categoryId: "Int",
mediaCategoryId: "Int",
search: "String",
id_in: ["Int"],
sort: ["ThreadSort"],
},
["Thread"]
],
threadComments: [{
id: "Int",
threadId: "Int",
userId: "Int",
sort: ["ThreadCommentSort"],
},
["ThreadComment"]
],
reviews: [{
id: "Int",
mediaId: "Int",
userId: "Int",
mediaType: "MediaType",
sort: ["ReviewSort"],
},
["Review"]
],
recommendations: [{
id: "Int",
mediaId: "Int",
mediaRecommendationId: "Int",
userId: "Int",
rating: "Int",
onList: "Boolean",
rating_greater: "Int",
rating_lesser: "Int",
sort: ["RecommendationSort"],
},
["Recommendation"]
],
likes: [{
likeableId: "Int",
type: "LikeableType",
},
["User"]
],
},SubmissionStatus: {
PENDING: "ENUM",
REJECTED: "ENUM",
PARTIALLY_ACCEPTED: "ENUM",
ACCEPTED: "ENUM",
},SubmissionSort: {
ID: "ENUM",
ID_DESC: "ENUM",
},MediaSubmission: {
id: "Int!",
submitter: "User",
assignee: "User",
status: "SubmissionStatus",
submitterStats: "Json",
notes: "String",
source: "String",
changes: ["String"],
locked: "Boolean",
media: "Media",
submission: "Media",
characters: ["MediaSubmissionComparison"],
staff: ["MediaSubmissionComparison"],
studios: ["MediaSubmissionComparison"],
relations: ["MediaEdge"],
externalLinks: ["MediaSubmissionComparison"],
createdAt: "Int",
},MediaSubmissionComparison: {
submission: "MediaSubmissionEdge",
character: "MediaCharacter",
staff: "StaffEdge",
studio: "StudioEdge",
externalLink: "MediaExternalLink",
},MediaSubmissionEdge: {
id: "Int",
characterRole: "CharacterRole",
staffRole: "String",
roleNotes: "String",
dubGroup: "String",
characterName: "String",
isMain: "Boolean",
character: "Character",
characterSubmission: "Character",
voiceActor: "Staff",
voiceActorSubmission: "Staff",
staff: "Staff",
staffSubmission: "Staff",
studio: "Studio",
externalLink: "MediaExternalLink",
media: "Media",
},MediaCharacter: {
id: "Int",
role: "CharacterRole",
roleNotes: "String",
dubGroup: "String",
characterName: "String",
character: "Character",
voiceActor: "Staff",
},CharacterSubmission: {
id: "Int!",
character: "Character",
submission: "Character",
submitter: "User",
assignee: "User",
status: "SubmissionStatus",
notes: "String",
source: "String",
locked: "Boolean",
createdAt: "Int",
},StaffSubmission: {
id: "Int!",
staff: "Staff",
submission: "Staff",
submitter: "User",
assignee: "User",
status: "SubmissionStatus",
notes: "String",
source: "String",
locked: "Boolean",
createdAt: "Int",
},RevisionHistory: {
id: "Int!",
action: "RevisionHistoryAction",
changes: "Json",
user: "User",
media: "Media",
character: "Character",
staff: "Staff",
studio: "Studio",
externalLink: "MediaExternalLink",
createdAt: "Int",
},RevisionHistoryAction: {
CREATE: "ENUM",
EDIT: "ENUM",
},Report: {
id: "Int!",
reporter: "User",
reported: "User",
reason: "String",
createdAt: "Int",
cleared: "Boolean",
},ModAction: {
id: "Int!",
user: "User",
mod: "User",
type: "ModActionType",
objectId: "Int",
objectType: "String",
data: "String",
createdAt: "Int!",
},ModActionType: {
NOTE: "ENUM",
BAN: "ENUM",
DELETE: "ENUM",
EDIT: "ENUM",
EXPIRE: "ENUM",
REPORT: "ENUM",
RESET: "ENUM",
ANON: "ENUM",
},MediaTitleInput: {
romaji: "String",
english: "String",
native: "String",
},AiringScheduleInput: {
airingAt: "Int",
episode: "Int",
timeUntilAiring: "Int",
},MediaExternalLinkInput: {
id: "Int!",
url: "String!",
site: "String!",
},CharacterNameInput: {
first: "String",
middle: "String",
last: "String",
native: "String",
alternative: ["String"],
alternativeSpoiler: ["String"],
},CharacterSubmissionConnection: {
edges: ["CharacterSubmissionEdge"],
nodes: ["CharacterSubmission"],
pageInfo: "PageInfo",
},CharacterSubmissionEdge: {
node: "CharacterSubmission",
role: "CharacterRole",
voiceActors: ["Staff"],
submittedVoiceActors: ["StaffSubmission"],
},StaffNameInput: {
first: "String",
middle: "String",
last: "String",
native: "String",
alternative: ["String"],
},UserModData: {
alts: ["User"],
bans: "Json",
ip: "Json",
counts: "Json",
privacy: "Int",
email: "String",
},ID: "",} as const