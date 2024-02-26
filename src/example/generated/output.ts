export type Query = {
  Page: [
    {
      page: Int | null;
      perPage: Int | null;
    },
    Page | null
  ];
  Media: [
    {
      id: Int | null;
      idMal: Int | null;
      startDate: FuzzyDateInt | null;
      endDate: FuzzyDateInt | null;
      season: MediaSeason | null;
      seasonYear: Int | null;
      type: MediaType | null;
      format: MediaFormat | null;
      status: MediaStatus | null;
      episodes: Int | null;
      duration: Int | null;
      chapters: Int | null;
      volumes: Int | null;
      isAdult: Boolean | null;
      genre: String | null;
      tag: String | null;
      minimumTagRank: Int | null;
      tagCategory: String | null;
      onList: Boolean | null;
      licensedBy: String | null;
      licensedById: Int | null;
      averageScore: Int | null;
      popularity: Int | null;
      source: MediaSource | null;
      countryOfOrigin: CountryCode | null;
      isLicensed: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      idMal_not: Int | null;
      idMal_in: (Int | null)[] | null;
      idMal_not_in: (Int | null)[] | null;
      startDate_greater: FuzzyDateInt | null;
      startDate_lesser: FuzzyDateInt | null;
      startDate_like: String | null;
      endDate_greater: FuzzyDateInt | null;
      endDate_lesser: FuzzyDateInt | null;
      endDate_like: String | null;
      format_in: (MediaFormat | null)[] | null;
      format_not: MediaFormat | null;
      format_not_in: (MediaFormat | null)[] | null;
      status_in: (MediaStatus | null)[] | null;
      status_not: MediaStatus | null;
      status_not_in: (MediaStatus | null)[] | null;
      episodes_greater: Int | null;
      episodes_lesser: Int | null;
      duration_greater: Int | null;
      duration_lesser: Int | null;
      chapters_greater: Int | null;
      chapters_lesser: Int | null;
      volumes_greater: Int | null;
      volumes_lesser: Int | null;
      genre_in: (String | null)[] | null;
      genre_not_in: (String | null)[] | null;
      tag_in: (String | null)[] | null;
      tag_not_in: (String | null)[] | null;
      tagCategory_in: (String | null)[] | null;
      tagCategory_not_in: (String | null)[] | null;
      licensedBy_in: (String | null)[] | null;
      licensedById_in: (Int | null)[] | null;
      averageScore_not: Int | null;
      averageScore_greater: Int | null;
      averageScore_lesser: Int | null;
      popularity_not: Int | null;
      popularity_greater: Int | null;
      popularity_lesser: Int | null;
      source_in: (MediaSource | null)[] | null;
      sort: (MediaSort | null)[] | null;
    },
    Media | null
  ];
  MediaTrend: [
    {
      mediaId: Int | null;
      date: Int | null;
      trending: Int | null;
      averageScore: Int | null;
      popularity: Int | null;
      episode: Int | null;
      releasing: Boolean | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      date_greater: Int | null;
      date_lesser: Int | null;
      trending_greater: Int | null;
      trending_lesser: Int | null;
      trending_not: Int | null;
      averageScore_greater: Int | null;
      averageScore_lesser: Int | null;
      averageScore_not: Int | null;
      popularity_greater: Int | null;
      popularity_lesser: Int | null;
      popularity_not: Int | null;
      episode_greater: Int | null;
      episode_lesser: Int | null;
      episode_not: Int | null;
      sort: (MediaTrendSort | null)[] | null;
    },
    MediaTrend | null
  ];
  AiringSchedule: [
    {
      id: Int | null;
      mediaId: Int | null;
      episode: Int | null;
      airingAt: Int | null;
      notYetAired: Boolean | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      episode_not: Int | null;
      episode_in: (Int | null)[] | null;
      episode_not_in: (Int | null)[] | null;
      episode_greater: Int | null;
      episode_lesser: Int | null;
      airingAt_greater: Int | null;
      airingAt_lesser: Int | null;
      sort: (AiringSort | null)[] | null;
    },
    AiringSchedule | null
  ];
  Character: [
    {
      id: Int | null;
      isBirthday: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (CharacterSort | null)[] | null;
    },
    Character | null
  ];
  Staff: [
    {
      id: Int | null;
      isBirthday: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (StaffSort | null)[] | null;
    },
    Staff | null
  ];
  MediaList: [
    {
      id: Int | null;
      userId: Int | null;
      userName: String | null;
      type: MediaType | null;
      status: MediaListStatus | null;
      mediaId: Int | null;
      isFollowing: Boolean | null;
      notes: String | null;
      startedAt: FuzzyDateInt | null;
      completedAt: FuzzyDateInt | null;
      compareWithAuthList: Boolean | null;
      userId_in: (Int | null)[] | null;
      status_in: (MediaListStatus | null)[] | null;
      status_not_in: (MediaListStatus | null)[] | null;
      status_not: MediaListStatus | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      notes_like: String | null;
      startedAt_greater: FuzzyDateInt | null;
      startedAt_lesser: FuzzyDateInt | null;
      startedAt_like: String | null;
      completedAt_greater: FuzzyDateInt | null;
      completedAt_lesser: FuzzyDateInt | null;
      completedAt_like: String | null;
      sort: (MediaListSort | null)[] | null;
    },
    MediaList | null
  ];
  MediaListCollection: [
    {
      userId: Int | null;
      userName: String | null;
      type: MediaType | null;
      status: MediaListStatus | null;
      notes: String | null;
      startedAt: FuzzyDateInt | null;
      completedAt: FuzzyDateInt | null;
      forceSingleCompletedList: Boolean | null;
      chunk: Int | null;
      perChunk: Int | null;
      status_in: (MediaListStatus | null)[] | null;
      status_not_in: (MediaListStatus | null)[] | null;
      status_not: MediaListStatus | null;
      notes_like: String | null;
      startedAt_greater: FuzzyDateInt | null;
      startedAt_lesser: FuzzyDateInt | null;
      startedAt_like: String | null;
      completedAt_greater: FuzzyDateInt | null;
      completedAt_lesser: FuzzyDateInt | null;
      completedAt_like: String | null;
      sort: (MediaListSort | null)[] | null;
    },
    MediaListCollection | null
  ];
  GenreCollection: (String | null)[] | null;
  MediaTagCollection: [
    {
      status: Int | null;
    },
    (MediaTag | null)[] | null
  ];
  User: [
    {
      id: Int | null;
      name: String | null;
      isModerator: Boolean | null;
      search: String | null;
      sort: (UserSort | null)[] | null;
    },
    User | null
  ];
  Viewer: User | null;
  Notification: [
    {
      type: NotificationType | null;
      resetNotificationCount: Boolean | null;
      type_in: (NotificationType | null)[] | null;
    },
    NotificationUnion
  ];
  Studio: [
    {
      id: Int | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (StudioSort | null)[] | null;
    },
    Studio | null
  ];
  Review: [
    {
      id: Int | null;
      mediaId: Int | null;
      userId: Int | null;
      mediaType: MediaType | null;
      sort: (ReviewSort | null)[] | null;
    },
    Review | null
  ];
  Activity: [
    {
      id: Int | null;
      userId: Int | null;
      messengerId: Int | null;
      mediaId: Int | null;
      type: ActivityType | null;
      isFollowing: Boolean | null;
      hasReplies: Boolean | null;
      hasRepliesOrTypeText: Boolean | null;
      createdAt: Int | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      userId_not: Int | null;
      userId_in: (Int | null)[] | null;
      userId_not_in: (Int | null)[] | null;
      messengerId_not: Int | null;
      messengerId_in: (Int | null)[] | null;
      messengerId_not_in: (Int | null)[] | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      type_not: ActivityType | null;
      type_in: (ActivityType | null)[] | null;
      type_not_in: (ActivityType | null)[] | null;
      createdAt_greater: Int | null;
      createdAt_lesser: Int | null;
      sort: (ActivitySort | null)[] | null;
    },
    ActivityUnion
  ];
  ActivityReply: [
    {
      id: Int | null;
      activityId: Int | null;
    },
    ActivityReply | null
  ];
  Following: [
    {
      userId: Int;
      sort: (UserSort | null)[] | null;
    },
    User | null
  ];
  Follower: [
    {
      userId: Int;
      sort: (UserSort | null)[] | null;
    },
    User | null
  ];
  Thread: [
    {
      id: Int | null;
      userId: Int | null;
      replyUserId: Int | null;
      subscribed: Boolean | null;
      categoryId: Int | null;
      mediaCategoryId: Int | null;
      search: String | null;
      id_in: (Int | null)[] | null;
      sort: (ThreadSort | null)[] | null;
    },
    Thread | null
  ];
  ThreadComment: [
    {
      id: Int | null;
      threadId: Int | null;
      userId: Int | null;
      sort: (ThreadCommentSort | null)[] | null;
    },
    (ThreadComment | null)[] | null
  ];
  Recommendation: [
    {
      id: Int | null;
      mediaId: Int | null;
      mediaRecommendationId: Int | null;
      userId: Int | null;
      rating: Int | null;
      onList: Boolean | null;
      rating_greater: Int | null;
      rating_lesser: Int | null;
      sort: (RecommendationSort | null)[] | null;
    },
    Recommendation | null
  ];
  Like: [
    {
      likeableId: Int | null;
      type: LikeableType | null;
    },
    User | null
  ];
  Markdown: [
    {
      markdown: String;
    },
    ParsedMarkdown | null
  ];
  AniChartUser: AniChartUser | null;
  SiteStatistics: SiteStatistics | null;
  ExternalLinkSourceCollection: [
    {
      id: Int | null;
      type: ExternalLinkType | null;
      mediaType: ExternalLinkMediaType | null;
    },
    (MediaExternalLink | null)[] | null
  ];
};

export type Int = number;

export type Page = {
  pageInfo: PageInfo | null;
  users: [
    {
      id: Int | null;
      name: String | null;
      isModerator: Boolean | null;
      search: String | null;
      sort: (UserSort | null)[] | null;
    },
    (User | null)[] | null
  ];
  media: [
    {
      id: Int | null;
      idMal: Int | null;
      startDate: FuzzyDateInt | null;
      endDate: FuzzyDateInt | null;
      season: MediaSeason | null;
      seasonYear: Int | null;
      type: MediaType | null;
      format: MediaFormat | null;
      status: MediaStatus | null;
      episodes: Int | null;
      duration: Int | null;
      chapters: Int | null;
      volumes: Int | null;
      isAdult: Boolean | null;
      genre: String | null;
      tag: String | null;
      minimumTagRank: Int | null;
      tagCategory: String | null;
      onList: Boolean | null;
      licensedBy: String | null;
      licensedById: Int | null;
      averageScore: Int | null;
      popularity: Int | null;
      source: MediaSource | null;
      countryOfOrigin: CountryCode | null;
      isLicensed: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      idMal_not: Int | null;
      idMal_in: (Int | null)[] | null;
      idMal_not_in: (Int | null)[] | null;
      startDate_greater: FuzzyDateInt | null;
      startDate_lesser: FuzzyDateInt | null;
      startDate_like: String | null;
      endDate_greater: FuzzyDateInt | null;
      endDate_lesser: FuzzyDateInt | null;
      endDate_like: String | null;
      format_in: (MediaFormat | null)[] | null;
      format_not: MediaFormat | null;
      format_not_in: (MediaFormat | null)[] | null;
      status_in: (MediaStatus | null)[] | null;
      status_not: MediaStatus | null;
      status_not_in: (MediaStatus | null)[] | null;
      episodes_greater: Int | null;
      episodes_lesser: Int | null;
      duration_greater: Int | null;
      duration_lesser: Int | null;
      chapters_greater: Int | null;
      chapters_lesser: Int | null;
      volumes_greater: Int | null;
      volumes_lesser: Int | null;
      genre_in: (String | null)[] | null;
      genre_not_in: (String | null)[] | null;
      tag_in: (String | null)[] | null;
      tag_not_in: (String | null)[] | null;
      tagCategory_in: (String | null)[] | null;
      tagCategory_not_in: (String | null)[] | null;
      licensedBy_in: (String | null)[] | null;
      licensedById_in: (Int | null)[] | null;
      averageScore_not: Int | null;
      averageScore_greater: Int | null;
      averageScore_lesser: Int | null;
      popularity_not: Int | null;
      popularity_greater: Int | null;
      popularity_lesser: Int | null;
      source_in: (MediaSource | null)[] | null;
      sort: (MediaSort | null)[] | null;
    },
    (Media | null)[] | null
  ];
  characters: [
    {
      id: Int | null;
      isBirthday: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (CharacterSort | null)[] | null;
    },
    (Character | null)[] | null
  ];
  staff: [
    {
      id: Int | null;
      isBirthday: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (StaffSort | null)[] | null;
    },
    (Staff | null)[] | null
  ];
  studios: [
    {
      id: Int | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (StudioSort | null)[] | null;
    },
    (Studio | null)[] | null
  ];
  mediaList: [
    {
      id: Int | null;
      userId: Int | null;
      userName: String | null;
      type: MediaType | null;
      status: MediaListStatus | null;
      mediaId: Int | null;
      isFollowing: Boolean | null;
      notes: String | null;
      startedAt: FuzzyDateInt | null;
      completedAt: FuzzyDateInt | null;
      compareWithAuthList: Boolean | null;
      userId_in: (Int | null)[] | null;
      status_in: (MediaListStatus | null)[] | null;
      status_not_in: (MediaListStatus | null)[] | null;
      status_not: MediaListStatus | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      notes_like: String | null;
      startedAt_greater: FuzzyDateInt | null;
      startedAt_lesser: FuzzyDateInt | null;
      startedAt_like: String | null;
      completedAt_greater: FuzzyDateInt | null;
      completedAt_lesser: FuzzyDateInt | null;
      completedAt_like: String | null;
      sort: (MediaListSort | null)[] | null;
    },
    (MediaList | null)[] | null
  ];
  airingSchedules: [
    {
      id: Int | null;
      mediaId: Int | null;
      episode: Int | null;
      airingAt: Int | null;
      notYetAired: Boolean | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      episode_not: Int | null;
      episode_in: (Int | null)[] | null;
      episode_not_in: (Int | null)[] | null;
      episode_greater: Int | null;
      episode_lesser: Int | null;
      airingAt_greater: Int | null;
      airingAt_lesser: Int | null;
      sort: (AiringSort | null)[] | null;
    },
    (AiringSchedule | null)[] | null
  ];
  mediaTrends: [
    {
      mediaId: Int | null;
      date: Int | null;
      trending: Int | null;
      averageScore: Int | null;
      popularity: Int | null;
      episode: Int | null;
      releasing: Boolean | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      date_greater: Int | null;
      date_lesser: Int | null;
      trending_greater: Int | null;
      trending_lesser: Int | null;
      trending_not: Int | null;
      averageScore_greater: Int | null;
      averageScore_lesser: Int | null;
      averageScore_not: Int | null;
      popularity_greater: Int | null;
      popularity_lesser: Int | null;
      popularity_not: Int | null;
      episode_greater: Int | null;
      episode_lesser: Int | null;
      episode_not: Int | null;
      sort: (MediaTrendSort | null)[] | null;
    },
    (MediaTrend | null)[] | null
  ];
  notifications: [
    {
      type: NotificationType | null;
      resetNotificationCount: Boolean | null;
      type_in: (NotificationType | null)[] | null;
    },
    NotificationUnion[] | null
  ];
  followers: [
    {
      userId: Int;
      sort: (UserSort | null)[] | null;
    },
    (User | null)[] | null
  ];
  following: [
    {
      userId: Int;
      sort: (UserSort | null)[] | null;
    },
    (User | null)[] | null
  ];
  activities: [
    {
      id: Int | null;
      userId: Int | null;
      messengerId: Int | null;
      mediaId: Int | null;
      type: ActivityType | null;
      isFollowing: Boolean | null;
      hasReplies: Boolean | null;
      hasRepliesOrTypeText: Boolean | null;
      createdAt: Int | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      userId_not: Int | null;
      userId_in: (Int | null)[] | null;
      userId_not_in: (Int | null)[] | null;
      messengerId_not: Int | null;
      messengerId_in: (Int | null)[] | null;
      messengerId_not_in: (Int | null)[] | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      type_not: ActivityType | null;
      type_in: (ActivityType | null)[] | null;
      type_not_in: (ActivityType | null)[] | null;
      createdAt_greater: Int | null;
      createdAt_lesser: Int | null;
      sort: (ActivitySort | null)[] | null;
    },
    ActivityUnion[] | null
  ];
  activityReplies: [
    {
      id: Int | null;
      activityId: Int | null;
    },
    (ActivityReply | null)[] | null
  ];
  threads: [
    {
      id: Int | null;
      userId: Int | null;
      replyUserId: Int | null;
      subscribed: Boolean | null;
      categoryId: Int | null;
      mediaCategoryId: Int | null;
      search: String | null;
      id_in: (Int | null)[] | null;
      sort: (ThreadSort | null)[] | null;
    },
    (Thread | null)[] | null
  ];
  threadComments: [
    {
      id: Int | null;
      threadId: Int | null;
      userId: Int | null;
      sort: (ThreadCommentSort | null)[] | null;
    },
    (ThreadComment | null)[] | null
  ];
  reviews: [
    {
      id: Int | null;
      mediaId: Int | null;
      userId: Int | null;
      mediaType: MediaType | null;
      sort: (ReviewSort | null)[] | null;
    },
    (Review | null)[] | null
  ];
  recommendations: [
    {
      id: Int | null;
      mediaId: Int | null;
      mediaRecommendationId: Int | null;
      userId: Int | null;
      rating: Int | null;
      onList: Boolean | null;
      rating_greater: Int | null;
      rating_lesser: Int | null;
      sort: (RecommendationSort | null)[] | null;
    },
    (Recommendation | null)[] | null
  ];
  likes: [
    {
      likeableId: Int | null;
      type: LikeableType | null;
    },
    (User | null)[] | null
  ];
};

export type PageInfo = {
  total: Int | null;
  perPage: Int | null;
  currentPage: Int | null;
  lastPage: Int | null;
  hasNextPage: Boolean | null;
};

export type Boolean = string;

export type String = string;

export enum UserSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  USERNAME = "USERNAME",
  USERNAME_DESC = "USERNAME_DESC",
  WATCHED_TIME = "WATCHED_TIME",
  WATCHED_TIME_DESC = "WATCHED_TIME_DESC",
  CHAPTERS_READ = "CHAPTERS_READ",
  CHAPTERS_READ_DESC = "CHAPTERS_READ_DESC",
  SEARCH_MATCH = "SEARCH_MATCH",
}

export type User = {
  id: Int;
  name: String;
  about: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  avatar: UserAvatar | null;
  bannerImage: String | null;
  isFollowing: Boolean | null;
  isFollower: Boolean | null;
  isBlocked: Boolean | null;
  bans: Json | null;
  options: UserOptions | null;
  mediaListOptions: MediaListOptions | null;
  favourites: [
    {
      page: Int | null;
    },
    Favourites | null
  ];
  statistics: UserStatisticTypes | null;
  unreadNotificationCount: Int | null;
  siteUrl: String | null;
  donatorTier: Int | null;
  donatorBadge: String | null;
  moderatorRoles: (ModRole | null)[] | null;
  createdAt: Int | null;
  updatedAt: Int | null;
  stats: UserStats | null;
  moderatorStatus: String | null;
  previousNames: (UserPreviousName | null)[] | null;
};

export type UserAvatar = {
  large: String | null;
  medium: String | null;
};

export type Json = any;

export type UserOptions = {
  titleLanguage: UserTitleLanguage | null;
  displayAdultContent: Boolean | null;
  airingNotifications: Boolean | null;
  profileColor: String | null;
  notificationOptions: (NotificationOption | null)[] | null;
  timezone: String | null;
  activityMergeTime: Int | null;
  staffNameLanguage: UserStaffNameLanguage | null;
  restrictMessagesToFollowing: Boolean | null;
  disabledListActivity: (ListActivityOption | null)[] | null;
};

export enum UserTitleLanguage {
  ROMAJI = "ROMAJI",
  ENGLISH = "ENGLISH",
  NATIVE = "NATIVE",
  ROMAJI_STYLISED = "ROMAJI_STYLISED",
  ENGLISH_STYLISED = "ENGLISH_STYLISED",
  NATIVE_STYLISED = "NATIVE_STYLISED",
}

export type NotificationOption = {
  type: NotificationType | null;
  enabled: Boolean | null;
};

export enum NotificationType {
  ACTIVITY_MESSAGE = "ACTIVITY_MESSAGE",
  ACTIVITY_REPLY = "ACTIVITY_REPLY",
  FOLLOWING = "FOLLOWING",
  ACTIVITY_MENTION = "ACTIVITY_MENTION",
  THREAD_COMMENT_MENTION = "THREAD_COMMENT_MENTION",
  THREAD_SUBSCRIBED = "THREAD_SUBSCRIBED",
  THREAD_COMMENT_REPLY = "THREAD_COMMENT_REPLY",
  AIRING = "AIRING",
  ACTIVITY_LIKE = "ACTIVITY_LIKE",
  ACTIVITY_REPLY_LIKE = "ACTIVITY_REPLY_LIKE",
  THREAD_LIKE = "THREAD_LIKE",
  THREAD_COMMENT_LIKE = "THREAD_COMMENT_LIKE",
  ACTIVITY_REPLY_SUBSCRIBED = "ACTIVITY_REPLY_SUBSCRIBED",
  RELATED_MEDIA_ADDITION = "RELATED_MEDIA_ADDITION",
  MEDIA_DATA_CHANGE = "MEDIA_DATA_CHANGE",
  MEDIA_MERGE = "MEDIA_MERGE",
  MEDIA_DELETION = "MEDIA_DELETION",
}

export enum UserStaffNameLanguage {
  ROMAJI_WESTERN = "ROMAJI_WESTERN",
  ROMAJI = "ROMAJI",
  NATIVE = "NATIVE",
}

export type ListActivityOption = {
  disabled: Boolean | null;
  type: MediaListStatus | null;
};

export enum MediaListStatus {
  CURRENT = "CURRENT",
  PLANNING = "PLANNING",
  COMPLETED = "COMPLETED",
  DROPPED = "DROPPED",
  PAUSED = "PAUSED",
  REPEATING = "REPEATING",
}

export type MediaListOptions = {
  scoreFormat: ScoreFormat | null;
  rowOrder: String | null;
  useLegacyLists: Boolean | null;
  animeList: MediaListTypeOptions | null;
  mangaList: MediaListTypeOptions | null;
  sharedTheme: Json | null;
  sharedThemeEnabled: Boolean | null;
};

export enum ScoreFormat {
  POINT_100 = "POINT_100",
  POINT_10_DECIMAL = "POINT_10_DECIMAL",
  POINT_10 = "POINT_10",
  POINT_5 = "POINT_5",
  POINT_3 = "POINT_3",
}

export type MediaListTypeOptions = {
  sectionOrder: (String | null)[] | null;
  splitCompletedSectionByFormat: Boolean | null;
  theme: Json | null;
  customLists: (String | null)[] | null;
  advancedScoring: (String | null)[] | null;
  advancedScoringEnabled: Boolean | null;
};

export type Favourites = {
  anime: [
    {
      page: Int | null;
      perPage: Int | null;
    },
    MediaConnection | null
  ];
  manga: [
    {
      page: Int | null;
      perPage: Int | null;
    },
    MediaConnection | null
  ];
  characters: [
    {
      page: Int | null;
      perPage: Int | null;
    },
    CharacterConnection | null
  ];
  staff: [
    {
      page: Int | null;
      perPage: Int | null;
    },
    StaffConnection | null
  ];
  studios: [
    {
      page: Int | null;
      perPage: Int | null;
    },
    StudioConnection | null
  ];
};

export type MediaConnection = {
  edges: (MediaEdge | null)[] | null;
  nodes: (Media | null)[] | null;
  pageInfo: PageInfo | null;
};

export type MediaEdge = {
  node: Media | null;
  id: Int | null;
  relationType: [
    {
      version: Int | null;
    },
    MediaRelation | null
  ];
  isMainStudio: Boolean;
  characters: (Character | null)[] | null;
  characterRole: CharacterRole | null;
  characterName: String | null;
  roleNotes: String | null;
  dubGroup: String | null;
  staffRole: String | null;
  voiceActors: [
    {
      language: StaffLanguage | null;
      sort: (StaffSort | null)[] | null;
    },
    (Staff | null)[] | null
  ];
  voiceActorRoles: [
    {
      language: StaffLanguage | null;
      sort: (StaffSort | null)[] | null;
    },
    (StaffRoleType | null)[] | null
  ];
  favouriteOrder: Int | null;
};

export type Media = {
  id: Int;
  idMal: Int | null;
  title: MediaTitle | null;
  type: MediaType | null;
  format: MediaFormat | null;
  status: [
    {
      version: Int | null;
    },
    MediaStatus | null
  ];
  description: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  startDate: FuzzyDate | null;
  endDate: FuzzyDate | null;
  season: MediaSeason | null;
  seasonYear: Int | null;
  seasonInt: Int | null;
  episodes: Int | null;
  duration: Int | null;
  chapters: Int | null;
  volumes: Int | null;
  countryOfOrigin: CountryCode | null;
  isLicensed: Boolean | null;
  source: [
    {
      version: Int | null;
    },
    MediaSource | null
  ];
  hashtag: String | null;
  trailer: MediaTrailer | null;
  updatedAt: Int | null;
  coverImage: MediaCoverImage | null;
  bannerImage: String | null;
  genres: (String | null)[] | null;
  synonyms: (String | null)[] | null;
  averageScore: Int | null;
  meanScore: Int | null;
  popularity: Int | null;
  isLocked: Boolean | null;
  trending: Int | null;
  favourites: Int | null;
  tags: (MediaTag | null)[] | null;
  relations: MediaConnection | null;
  characters: [
    {
      sort: (CharacterSort | null)[] | null;
      role: CharacterRole | null;
      page: Int | null;
      perPage: Int | null;
    },
    CharacterConnection | null
  ];
  staff: [
    {
      sort: (StaffSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    StaffConnection | null
  ];
  studios: [
    {
      sort: (StudioSort | null)[] | null;
      isMain: Boolean | null;
    },
    StudioConnection | null
  ];
  isFavourite: Boolean;
  isFavouriteBlocked: Boolean;
  isAdult: Boolean | null;
  nextAiringEpisode: AiringSchedule | null;
  airingSchedule: [
    {
      notYetAired: Boolean | null;
      page: Int | null;
      perPage: Int | null;
    },
    AiringScheduleConnection | null
  ];
  trends: [
    {
      sort: (MediaTrendSort | null)[] | null;
      releasing: Boolean | null;
      page: Int | null;
      perPage: Int | null;
    },
    MediaTrendConnection | null
  ];
  externalLinks: (MediaExternalLink | null)[] | null;
  streamingEpisodes: (MediaStreamingEpisode | null)[] | null;
  rankings: (MediaRank | null)[] | null;
  mediaListEntry: MediaList | null;
  reviews: [
    {
      limit: Int | null;
      sort: (ReviewSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    ReviewConnection | null
  ];
  recommendations: [
    {
      sort: (RecommendationSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    RecommendationConnection | null
  ];
  stats: MediaStats | null;
  siteUrl: String | null;
  autoCreateForumThread: Boolean | null;
  isRecommendationBlocked: Boolean | null;
  isReviewBlocked: Boolean | null;
  modNotes: String | null;
};

export type MediaTitle = {
  romaji: [
    {
      stylised: Boolean | null;
    },
    String | null
  ];
  english: [
    {
      stylised: Boolean | null;
    },
    String | null
  ];
  native: [
    {
      stylised: Boolean | null;
    },
    String | null
  ];
  userPreferred: String | null;
};

export enum MediaType {
  ANIME = "ANIME",
  MANGA = "MANGA",
}

export enum MediaFormat {
  TV = "TV",
  TV_SHORT = "TV_SHORT",
  MOVIE = "MOVIE",
  SPECIAL = "SPECIAL",
  OVA = "OVA",
  ONA = "ONA",
  MUSIC = "MUSIC",
  MANGA = "MANGA",
  NOVEL = "NOVEL",
  ONE_SHOT = "ONE_SHOT",
}

export enum MediaStatus {
  FINISHED = "FINISHED",
  RELEASING = "RELEASING",
  NOT_YET_RELEASED = "NOT_YET_RELEASED",
  CANCELLED = "CANCELLED",
  HIATUS = "HIATUS",
}

export type FuzzyDate = {
  year: Int | null;
  month: Int | null;
  day: Int | null;
};

export enum MediaSeason {
  WINTER = "WINTER",
  SPRING = "SPRING",
  SUMMER = "SUMMER",
  FALL = "FALL",
}

export type CountryCode = any;

export enum MediaSource {
  ORIGINAL = "ORIGINAL",
  MANGA = "MANGA",
  LIGHT_NOVEL = "LIGHT_NOVEL",
  VISUAL_NOVEL = "VISUAL_NOVEL",
  VIDEO_GAME = "VIDEO_GAME",
  OTHER = "OTHER",
  NOVEL = "NOVEL",
  DOUJINSHI = "DOUJINSHI",
  ANIME = "ANIME",
  WEB_NOVEL = "WEB_NOVEL",
  LIVE_ACTION = "LIVE_ACTION",
  GAME = "GAME",
  COMIC = "COMIC",
  MULTIMEDIA_PROJECT = "MULTIMEDIA_PROJECT",
  PICTURE_BOOK = "PICTURE_BOOK",
}

export type MediaTrailer = {
  id: String | null;
  site: String | null;
  thumbnail: String | null;
};

export type MediaCoverImage = {
  extraLarge: String | null;
  large: String | null;
  medium: String | null;
  color: String | null;
};

export type MediaTag = {
  id: Int;
  name: String;
  description: String | null;
  category: String | null;
  rank: Int | null;
  isGeneralSpoiler: Boolean | null;
  isMediaSpoiler: Boolean | null;
  isAdult: Boolean | null;
  userId: Int | null;
};

export enum CharacterSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  ROLE = "ROLE",
  ROLE_DESC = "ROLE_DESC",
  SEARCH_MATCH = "SEARCH_MATCH",
  FAVOURITES = "FAVOURITES",
  FAVOURITES_DESC = "FAVOURITES_DESC",
  RELEVANCE = "RELEVANCE",
}

export enum CharacterRole {
  MAIN = "MAIN",
  SUPPORTING = "SUPPORTING",
  BACKGROUND = "BACKGROUND",
}

export type CharacterConnection = {
  edges: (CharacterEdge | null)[] | null;
  nodes: (Character | null)[] | null;
  pageInfo: PageInfo | null;
};

export type CharacterEdge = {
  node: Character | null;
  id: Int | null;
  role: CharacterRole | null;
  name: String | null;
  voiceActors: [
    {
      language: StaffLanguage | null;
      sort: (StaffSort | null)[] | null;
    },
    (Staff | null)[] | null
  ];
  voiceActorRoles: [
    {
      language: StaffLanguage | null;
      sort: (StaffSort | null)[] | null;
    },
    (StaffRoleType | null)[] | null
  ];
  media: (Media | null)[] | null;
  favouriteOrder: Int | null;
};

export type Character = {
  id: Int;
  name: CharacterName | null;
  image: CharacterImage | null;
  description: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  gender: String | null;
  dateOfBirth: FuzzyDate | null;
  age: String | null;
  bloodType: String | null;
  isFavourite: Boolean;
  isFavouriteBlocked: Boolean;
  siteUrl: String | null;
  media: [
    {
      sort: (MediaSort | null)[] | null;
      type: MediaType | null;
      onList: Boolean | null;
      page: Int | null;
      perPage: Int | null;
    },
    MediaConnection | null
  ];
  updatedAt: Int | null;
  favourites: Int | null;
  modNotes: String | null;
};

export type CharacterName = {
  first: String | null;
  middle: String | null;
  last: String | null;
  full: String | null;
  native: String | null;
  alternative: (String | null)[] | null;
  alternativeSpoiler: (String | null)[] | null;
  userPreferred: String | null;
};

export type CharacterImage = {
  large: String | null;
  medium: String | null;
};

export enum MediaSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  TITLE_ROMAJI = "TITLE_ROMAJI",
  TITLE_ROMAJI_DESC = "TITLE_ROMAJI_DESC",
  TITLE_ENGLISH = "TITLE_ENGLISH",
  TITLE_ENGLISH_DESC = "TITLE_ENGLISH_DESC",
  TITLE_NATIVE = "TITLE_NATIVE",
  TITLE_NATIVE_DESC = "TITLE_NATIVE_DESC",
  TYPE = "TYPE",
  TYPE_DESC = "TYPE_DESC",
  FORMAT = "FORMAT",
  FORMAT_DESC = "FORMAT_DESC",
  START_DATE = "START_DATE",
  START_DATE_DESC = "START_DATE_DESC",
  END_DATE = "END_DATE",
  END_DATE_DESC = "END_DATE_DESC",
  SCORE = "SCORE",
  SCORE_DESC = "SCORE_DESC",
  POPULARITY = "POPULARITY",
  POPULARITY_DESC = "POPULARITY_DESC",
  TRENDING = "TRENDING",
  TRENDING_DESC = "TRENDING_DESC",
  EPISODES = "EPISODES",
  EPISODES_DESC = "EPISODES_DESC",
  DURATION = "DURATION",
  DURATION_DESC = "DURATION_DESC",
  STATUS = "STATUS",
  STATUS_DESC = "STATUS_DESC",
  CHAPTERS = "CHAPTERS",
  CHAPTERS_DESC = "CHAPTERS_DESC",
  VOLUMES = "VOLUMES",
  VOLUMES_DESC = "VOLUMES_DESC",
  UPDATED_AT = "UPDATED_AT",
  UPDATED_AT_DESC = "UPDATED_AT_DESC",
  SEARCH_MATCH = "SEARCH_MATCH",
  FAVOURITES = "FAVOURITES",
  FAVOURITES_DESC = "FAVOURITES_DESC",
}

export enum StaffLanguage {
  JAPANESE = "JAPANESE",
  ENGLISH = "ENGLISH",
  KOREAN = "KOREAN",
  ITALIAN = "ITALIAN",
  SPANISH = "SPANISH",
  PORTUGUESE = "PORTUGUESE",
  FRENCH = "FRENCH",
  GERMAN = "GERMAN",
  HEBREW = "HEBREW",
  HUNGARIAN = "HUNGARIAN",
}

export enum StaffSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  ROLE = "ROLE",
  ROLE_DESC = "ROLE_DESC",
  LANGUAGE = "LANGUAGE",
  LANGUAGE_DESC = "LANGUAGE_DESC",
  SEARCH_MATCH = "SEARCH_MATCH",
  FAVOURITES = "FAVOURITES",
  FAVOURITES_DESC = "FAVOURITES_DESC",
  RELEVANCE = "RELEVANCE",
}

export type Staff = {
  id: Int;
  name: StaffName | null;
  language: StaffLanguage | null;
  languageV2: String | null;
  image: StaffImage | null;
  description: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  primaryOccupations: (String | null)[] | null;
  gender: String | null;
  dateOfBirth: FuzzyDate | null;
  dateOfDeath: FuzzyDate | null;
  age: Int | null;
  yearsActive: (Int | null)[] | null;
  homeTown: String | null;
  bloodType: String | null;
  isFavourite: Boolean;
  isFavouriteBlocked: Boolean;
  siteUrl: String | null;
  staffMedia: [
    {
      sort: (MediaSort | null)[] | null;
      type: MediaType | null;
      onList: Boolean | null;
      page: Int | null;
      perPage: Int | null;
    },
    MediaConnection | null
  ];
  characters: [
    {
      sort: (CharacterSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    CharacterConnection | null
  ];
  characterMedia: [
    {
      sort: (MediaSort | null)[] | null;
      onList: Boolean | null;
      page: Int | null;
      perPage: Int | null;
    },
    MediaConnection | null
  ];
  updatedAt: Int | null;
  staff: Staff | null;
  submitter: User | null;
  submissionStatus: Int | null;
  submissionNotes: String | null;
  favourites: Int | null;
  modNotes: String | null;
};

export type StaffName = {
  first: String | null;
  middle: String | null;
  last: String | null;
  full: String | null;
  native: String | null;
  alternative: (String | null)[] | null;
  userPreferred: String | null;
};

export type StaffImage = {
  large: String | null;
  medium: String | null;
};

export type StaffRoleType = {
  voiceActor: Staff | null;
  roleNotes: String | null;
  dubGroup: String | null;
};

export type StaffConnection = {
  edges: (StaffEdge | null)[] | null;
  nodes: (Staff | null)[] | null;
  pageInfo: PageInfo | null;
};

export type StaffEdge = {
  node: Staff | null;
  id: Int | null;
  role: String | null;
  favouriteOrder: Int | null;
};

export enum StudioSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  NAME = "NAME",
  NAME_DESC = "NAME_DESC",
  SEARCH_MATCH = "SEARCH_MATCH",
  FAVOURITES = "FAVOURITES",
  FAVOURITES_DESC = "FAVOURITES_DESC",
}

export type StudioConnection = {
  edges: (StudioEdge | null)[] | null;
  nodes: (Studio | null)[] | null;
  pageInfo: PageInfo | null;
};

export type StudioEdge = {
  node: Studio | null;
  id: Int | null;
  isMain: Boolean;
  favouriteOrder: Int | null;
};

export type Studio = {
  id: Int;
  name: String;
  isAnimationStudio: Boolean;
  media: [
    {
      sort: (MediaSort | null)[] | null;
      isMain: Boolean | null;
      onList: Boolean | null;
      page: Int | null;
      perPage: Int | null;
    },
    MediaConnection | null
  ];
  siteUrl: String | null;
  isFavourite: Boolean;
  favourites: Int | null;
};

export type AiringSchedule = {
  id: Int;
  airingAt: Int;
  timeUntilAiring: Int;
  episode: Int;
  mediaId: Int;
  media: Media | null;
};

export type AiringScheduleConnection = {
  edges: (AiringScheduleEdge | null)[] | null;
  nodes: (AiringSchedule | null)[] | null;
  pageInfo: PageInfo | null;
};

export type AiringScheduleEdge = {
  node: AiringSchedule | null;
  id: Int | null;
};

export enum MediaTrendSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  MEDIA_ID = "MEDIA_ID",
  MEDIA_ID_DESC = "MEDIA_ID_DESC",
  DATE = "DATE",
  DATE_DESC = "DATE_DESC",
  SCORE = "SCORE",
  SCORE_DESC = "SCORE_DESC",
  POPULARITY = "POPULARITY",
  POPULARITY_DESC = "POPULARITY_DESC",
  TRENDING = "TRENDING",
  TRENDING_DESC = "TRENDING_DESC",
  EPISODE = "EPISODE",
  EPISODE_DESC = "EPISODE_DESC",
}

export type MediaTrendConnection = {
  edges: (MediaTrendEdge | null)[] | null;
  nodes: (MediaTrend | null)[] | null;
  pageInfo: PageInfo | null;
};

export type MediaTrendEdge = {
  node: MediaTrend | null;
};

export type MediaTrend = {
  mediaId: Int;
  date: Int;
  trending: Int;
  averageScore: Int | null;
  popularity: Int | null;
  inProgress: Int | null;
  releasing: Boolean;
  episode: Int | null;
  media: Media | null;
};

export type MediaExternalLink = {
  id: Int;
  url: String | null;
  site: String;
  siteId: Int | null;
  type: ExternalLinkType | null;
  language: String | null;
  color: String | null;
  icon: String | null;
  notes: String | null;
  isDisabled: Boolean | null;
};

export enum ExternalLinkType {
  INFO = "INFO",
  STREAMING = "STREAMING",
  SOCIAL = "SOCIAL",
}

export type MediaStreamingEpisode = {
  title: String | null;
  thumbnail: String | null;
  url: String | null;
  site: String | null;
};

export type MediaRank = {
  id: Int;
  rank: Int;
  type: MediaRankType;
  format: MediaFormat;
  year: Int | null;
  season: MediaSeason | null;
  allTime: Boolean | null;
  context: String;
};

export enum MediaRankType {
  RATED = "RATED",
  POPULAR = "POPULAR",
}

export type MediaList = {
  id: Int;
  userId: Int;
  mediaId: Int;
  status: MediaListStatus | null;
  score: [
    {
      format: ScoreFormat | null;
    },
    Float | null
  ];
  progress: Int | null;
  progressVolumes: Int | null;
  repeat: Int | null;
  priority: Int | null;
  private: Boolean | null;
  notes: String | null;
  hiddenFromStatusLists: Boolean | null;
  customLists: [
    {
      asArray: Boolean | null;
    },
    Json | null
  ];
  advancedScores: Json | null;
  startedAt: FuzzyDate | null;
  completedAt: FuzzyDate | null;
  updatedAt: Int | null;
  createdAt: Int | null;
  media: Media | null;
  user: User | null;
};

export type Float = number;

export enum ReviewSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  SCORE = "SCORE",
  SCORE_DESC = "SCORE_DESC",
  RATING = "RATING",
  RATING_DESC = "RATING_DESC",
  CREATED_AT = "CREATED_AT",
  CREATED_AT_DESC = "CREATED_AT_DESC",
  UPDATED_AT = "UPDATED_AT",
  UPDATED_AT_DESC = "UPDATED_AT_DESC",
}

export type ReviewConnection = {
  edges: (ReviewEdge | null)[] | null;
  nodes: (Review | null)[] | null;
  pageInfo: PageInfo | null;
};

export type ReviewEdge = {
  node: Review | null;
};

export type Review = {
  id: Int;
  userId: Int;
  mediaId: Int;
  mediaType: MediaType | null;
  summary: String | null;
  body: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  rating: Int | null;
  ratingAmount: Int | null;
  userRating: ReviewRating | null;
  score: Int | null;
  private: Boolean | null;
  siteUrl: String | null;
  createdAt: Int;
  updatedAt: Int;
  user: User | null;
  media: Media | null;
};

export enum ReviewRating {
  NO_VOTE = "NO_VOTE",
  UP_VOTE = "UP_VOTE",
  DOWN_VOTE = "DOWN_VOTE",
}

export enum RecommendationSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  RATING = "RATING",
  RATING_DESC = "RATING_DESC",
}

export type RecommendationConnection = {
  edges: (RecommendationEdge | null)[] | null;
  nodes: (Recommendation | null)[] | null;
  pageInfo: PageInfo | null;
};

export type RecommendationEdge = {
  node: Recommendation | null;
};

export type Recommendation = {
  id: Int;
  rating: Int | null;
  userRating: RecommendationRating | null;
  media: Media | null;
  mediaRecommendation: Media | null;
  user: User | null;
};

export enum RecommendationRating {
  NO_RATING = "NO_RATING",
  RATE_UP = "RATE_UP",
  RATE_DOWN = "RATE_DOWN",
}

export type MediaStats = {
  scoreDistribution: (ScoreDistribution | null)[] | null;
  statusDistribution: (StatusDistribution | null)[] | null;
  airingProgression: (AiringProgression | null)[] | null;
};

export type ScoreDistribution = {
  score: Int | null;
  amount: Int | null;
};

export type StatusDistribution = {
  status: MediaListStatus | null;
  amount: Int | null;
};

export type AiringProgression = {
  episode: Float | null;
  score: Float | null;
  watching: Int | null;
};

export enum MediaRelation {
  ADAPTATION = "ADAPTATION",
  PREQUEL = "PREQUEL",
  SEQUEL = "SEQUEL",
  PARENT = "PARENT",
  SIDE_STORY = "SIDE_STORY",
  CHARACTER = "CHARACTER",
  SUMMARY = "SUMMARY",
  ALTERNATIVE = "ALTERNATIVE",
  SPIN_OFF = "SPIN_OFF",
  OTHER = "OTHER",
  SOURCE = "SOURCE",
  COMPILATION = "COMPILATION",
  CONTAINS = "CONTAINS",
}

export type UserStatisticTypes = {
  anime: UserStatistics | null;
  manga: UserStatistics | null;
};

export type UserStatistics = {
  count: Int;
  meanScore: Float;
  standardDeviation: Float;
  minutesWatched: Int;
  episodesWatched: Int;
  chaptersRead: Int;
  volumesRead: Int;
  formats: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserFormatStatistic | null)[] | null
  ];
  statuses: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserStatusStatistic | null)[] | null
  ];
  scores: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserScoreStatistic | null)[] | null
  ];
  lengths: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserLengthStatistic | null)[] | null
  ];
  releaseYears: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserReleaseYearStatistic | null)[] | null
  ];
  startYears: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserStartYearStatistic | null)[] | null
  ];
  genres: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserGenreStatistic | null)[] | null
  ];
  tags: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserTagStatistic | null)[] | null
  ];
  countries: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserCountryStatistic | null)[] | null
  ];
  voiceActors: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserVoiceActorStatistic | null)[] | null
  ];
  staff: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserStaffStatistic | null)[] | null
  ];
  studios: [
    {
      limit: Int | null;
      sort: (UserStatisticsSort | null)[] | null;
    },
    (UserStudioStatistic | null)[] | null
  ];
};

export enum UserStatisticsSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  COUNT = "COUNT",
  COUNT_DESC = "COUNT_DESC",
  PROGRESS = "PROGRESS",
  PROGRESS_DESC = "PROGRESS_DESC",
  MEAN_SCORE = "MEAN_SCORE",
  MEAN_SCORE_DESC = "MEAN_SCORE_DESC",
}

export type UserFormatStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  format: MediaFormat | null;
};

export type UserStatusStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  status: MediaListStatus | null;
};

export type UserScoreStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  score: Int | null;
};

export type UserLengthStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  length: String | null;
};

export type UserReleaseYearStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  releaseYear: Int | null;
};

export type UserStartYearStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  startYear: Int | null;
};

export type UserGenreStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  genre: String | null;
};

export type UserTagStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  tag: MediaTag | null;
};

export type UserCountryStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  country: CountryCode | null;
};

export type UserVoiceActorStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  voiceActor: Staff | null;
  characterIds: (Int | null)[];
};

export type UserStaffStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  staff: Staff | null;
};

export type UserStudioStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: (Int | null)[];
  studio: Studio | null;
};

export enum ModRole {
  ADMIN = "ADMIN",
  LEAD_DEVELOPER = "LEAD_DEVELOPER",
  DEVELOPER = "DEVELOPER",
  LEAD_COMMUNITY = "LEAD_COMMUNITY",
  COMMUNITY = "COMMUNITY",
  DISCORD_COMMUNITY = "DISCORD_COMMUNITY",
  LEAD_ANIME_DATA = "LEAD_ANIME_DATA",
  ANIME_DATA = "ANIME_DATA",
  LEAD_MANGA_DATA = "LEAD_MANGA_DATA",
  MANGA_DATA = "MANGA_DATA",
  LEAD_SOCIAL_MEDIA = "LEAD_SOCIAL_MEDIA",
  SOCIAL_MEDIA = "SOCIAL_MEDIA",
  RETIRED = "RETIRED",
  CHARACTER_DATA = "CHARACTER_DATA",
  STAFF_DATA = "STAFF_DATA",
}

export type UserStats = {
  watchedTime: Int | null;
  chaptersRead: Int | null;
  activityHistory: (UserActivityHistory | null)[] | null;
  animeStatusDistribution: (StatusDistribution | null)[] | null;
  mangaStatusDistribution: (StatusDistribution | null)[] | null;
  animeScoreDistribution: (ScoreDistribution | null)[] | null;
  mangaScoreDistribution: (ScoreDistribution | null)[] | null;
  animeListScores: ListScoreStats | null;
  mangaListScores: ListScoreStats | null;
  favouredGenresOverview: (GenreStats | null)[] | null;
  favouredGenres: (GenreStats | null)[] | null;
  favouredTags: (TagStats | null)[] | null;
  favouredActors: (StaffStats | null)[] | null;
  favouredStaff: (StaffStats | null)[] | null;
  favouredStudios: (StudioStats | null)[] | null;
  favouredYears: (YearStats | null)[] | null;
  favouredFormats: (FormatStats | null)[] | null;
};

export type UserActivityHistory = {
  date: Int | null;
  amount: Int | null;
  level: Int | null;
};

export type ListScoreStats = {
  meanScore: Int | null;
  standardDeviation: Int | null;
};

export type GenreStats = {
  genre: String | null;
  amount: Int | null;
  meanScore: Int | null;
  timeWatched: Int | null;
};

export type TagStats = {
  tag: MediaTag | null;
  amount: Int | null;
  meanScore: Int | null;
  timeWatched: Int | null;
};

export type StaffStats = {
  staff: Staff | null;
  amount: Int | null;
  meanScore: Int | null;
  timeWatched: Int | null;
};

export type StudioStats = {
  studio: Studio | null;
  amount: Int | null;
  meanScore: Int | null;
  timeWatched: Int | null;
};

export type YearStats = {
  year: Int | null;
  amount: Int | null;
  meanScore: Int | null;
};

export type FormatStats = {
  format: MediaFormat | null;
  amount: Int | null;
};

export type UserPreviousName = {
  name: String | null;
  createdAt: Int | null;
  updatedAt: Int | null;
};

export type FuzzyDateInt = any;

export enum MediaListSort {
  MEDIA_ID = "MEDIA_ID",
  MEDIA_ID_DESC = "MEDIA_ID_DESC",
  SCORE = "SCORE",
  SCORE_DESC = "SCORE_DESC",
  STATUS = "STATUS",
  STATUS_DESC = "STATUS_DESC",
  PROGRESS = "PROGRESS",
  PROGRESS_DESC = "PROGRESS_DESC",
  PROGRESS_VOLUMES = "PROGRESS_VOLUMES",
  PROGRESS_VOLUMES_DESC = "PROGRESS_VOLUMES_DESC",
  REPEAT = "REPEAT",
  REPEAT_DESC = "REPEAT_DESC",
  PRIORITY = "PRIORITY",
  PRIORITY_DESC = "PRIORITY_DESC",
  STARTED_ON = "STARTED_ON",
  STARTED_ON_DESC = "STARTED_ON_DESC",
  FINISHED_ON = "FINISHED_ON",
  FINISHED_ON_DESC = "FINISHED_ON_DESC",
  ADDED_TIME = "ADDED_TIME",
  ADDED_TIME_DESC = "ADDED_TIME_DESC",
  UPDATED_TIME = "UPDATED_TIME",
  UPDATED_TIME_DESC = "UPDATED_TIME_DESC",
  MEDIA_TITLE_ROMAJI = "MEDIA_TITLE_ROMAJI",
  MEDIA_TITLE_ROMAJI_DESC = "MEDIA_TITLE_ROMAJI_DESC",
  MEDIA_TITLE_ENGLISH = "MEDIA_TITLE_ENGLISH",
  MEDIA_TITLE_ENGLISH_DESC = "MEDIA_TITLE_ENGLISH_DESC",
  MEDIA_TITLE_NATIVE = "MEDIA_TITLE_NATIVE",
  MEDIA_TITLE_NATIVE_DESC = "MEDIA_TITLE_NATIVE_DESC",
  MEDIA_POPULARITY = "MEDIA_POPULARITY",
  MEDIA_POPULARITY_DESC = "MEDIA_POPULARITY_DESC",
}

export enum AiringSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  MEDIA_ID = "MEDIA_ID",
  MEDIA_ID_DESC = "MEDIA_ID_DESC",
  TIME = "TIME",
  TIME_DESC = "TIME_DESC",
  EPISODE = "EPISODE",
  EPISODE_DESC = "EPISODE_DESC",
}

export type NotificationUnion =
  | AiringNotification
  | FollowingNotification
  | ActivityMessageNotification
  | ActivityMentionNotification
  | ActivityReplyNotification
  | ActivityReplySubscribedNotification
  | ActivityLikeNotification
  | ActivityReplyLikeNotification
  | ThreadCommentMentionNotification
  | ThreadCommentReplyNotification
  | ThreadCommentSubscribedNotification
  | ThreadCommentLikeNotification
  | ThreadLikeNotification
  | RelatedMediaAdditionNotification
  | MediaDataChangeNotification
  | MediaMergeNotification
  | MediaDeletionNotification;

export type AiringNotification = {
  id: Int;
  type: NotificationType | null;
  animeId: Int;
  episode: Int;
  contexts: (String | null)[] | null;
  createdAt: Int | null;
  media: Media | null;
};

export type FollowingNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  context: String | null;
  createdAt: Int | null;
  user: User | null;
};

export type ActivityMessageNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String | null;
  createdAt: Int | null;
  message: MessageActivity | null;
  user: User | null;
};

export type MessageActivity = {
  id: Int;
  recipientId: Int | null;
  messengerId: Int | null;
  type: ActivityType | null;
  replyCount: Int;
  message: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  isLocked: Boolean | null;
  isSubscribed: Boolean | null;
  likeCount: Int;
  isLiked: Boolean | null;
  isPrivate: Boolean | null;
  siteUrl: String | null;
  createdAt: Int;
  recipient: User | null;
  messenger: User | null;
  replies: (ActivityReply | null)[] | null;
  likes: (User | null)[] | null;
};

export enum ActivityType {
  TEXT = "TEXT",
  ANIME_LIST = "ANIME_LIST",
  MANGA_LIST = "MANGA_LIST",
  MESSAGE = "MESSAGE",
  MEDIA_LIST = "MEDIA_LIST",
}

export type ActivityReply = {
  id: Int;
  userId: Int | null;
  activityId: Int | null;
  text: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  likeCount: Int;
  isLiked: Boolean | null;
  createdAt: Int;
  user: User | null;
  likes: (User | null)[] | null;
};

export type ActivityMentionNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String | null;
  createdAt: Int | null;
  activity: ActivityUnion;
  user: User | null;
};

export type ActivityUnion = TextActivity | ListActivity | MessageActivity;

export type TextActivity = {
  id: Int;
  userId: Int | null;
  type: ActivityType | null;
  replyCount: Int;
  text: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  siteUrl: String | null;
  isLocked: Boolean | null;
  isSubscribed: Boolean | null;
  likeCount: Int;
  isLiked: Boolean | null;
  isPinned: Boolean | null;
  createdAt: Int;
  user: User | null;
  replies: (ActivityReply | null)[] | null;
  likes: (User | null)[] | null;
};

export type ListActivity = {
  id: Int;
  userId: Int | null;
  type: ActivityType | null;
  replyCount: Int;
  status: String | null;
  progress: String | null;
  isLocked: Boolean | null;
  isSubscribed: Boolean | null;
  likeCount: Int;
  isLiked: Boolean | null;
  isPinned: Boolean | null;
  siteUrl: String | null;
  createdAt: Int;
  user: User | null;
  media: Media | null;
  replies: (ActivityReply | null)[] | null;
  likes: (User | null)[] | null;
};

export type ActivityReplyNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String | null;
  createdAt: Int | null;
  activity: ActivityUnion;
  user: User | null;
};

export type ActivityReplySubscribedNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String | null;
  createdAt: Int | null;
  activity: ActivityUnion;
  user: User | null;
};

export type ActivityLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String | null;
  createdAt: Int | null;
  activity: ActivityUnion;
  user: User | null;
};

export type ActivityReplyLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String | null;
  createdAt: Int | null;
  activity: ActivityUnion;
  user: User | null;
};

export type ThreadCommentMentionNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String | null;
  createdAt: Int | null;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type Thread = {
  id: Int;
  title: String | null;
  body: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  userId: Int;
  replyUserId: Int | null;
  replyCommentId: Int | null;
  replyCount: Int | null;
  viewCount: Int | null;
  isLocked: Boolean | null;
  isSticky: Boolean | null;
  isSubscribed: Boolean | null;
  likeCount: Int;
  isLiked: Boolean | null;
  repliedAt: Int | null;
  createdAt: Int;
  updatedAt: Int;
  user: User | null;
  replyUser: User | null;
  likes: (User | null)[] | null;
  siteUrl: String | null;
  categories: (ThreadCategory | null)[] | null;
  mediaCategories: (Media | null)[] | null;
};

export type ThreadCategory = {
  id: Int;
  name: String;
};

export type ThreadComment = {
  id: Int;
  userId: Int | null;
  threadId: Int | null;
  comment: [
    {
      asHtml: Boolean | null;
    },
    String | null
  ];
  likeCount: Int;
  isLiked: Boolean | null;
  siteUrl: String | null;
  createdAt: Int;
  updatedAt: Int;
  thread: Thread | null;
  user: User | null;
  likes: (User | null)[] | null;
  childComments: Json | null;
  isLocked: Boolean | null;
};

export type ThreadCommentReplyNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String | null;
  createdAt: Int | null;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type ThreadCommentSubscribedNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String | null;
  createdAt: Int | null;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type ThreadCommentLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String | null;
  createdAt: Int | null;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type ThreadLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  threadId: Int;
  context: String | null;
  createdAt: Int | null;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type RelatedMediaAdditionNotification = {
  id: Int;
  type: NotificationType | null;
  mediaId: Int;
  context: String | null;
  createdAt: Int | null;
  media: Media | null;
};

export type MediaDataChangeNotification = {
  id: Int;
  type: NotificationType | null;
  mediaId: Int;
  context: String | null;
  reason: String | null;
  createdAt: Int | null;
  media: Media | null;
};

export type MediaMergeNotification = {
  id: Int;
  type: NotificationType | null;
  mediaId: Int;
  deletedMediaTitles: (String | null)[] | null;
  context: String | null;
  reason: String | null;
  createdAt: Int | null;
  media: Media | null;
};

export type MediaDeletionNotification = {
  id: Int;
  type: NotificationType | null;
  deletedMediaTitle: String | null;
  context: String | null;
  reason: String | null;
  createdAt: Int | null;
};

export enum ActivitySort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  PINNED = "PINNED",
}

export enum ThreadSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
  TITLE = "TITLE",
  TITLE_DESC = "TITLE_DESC",
  CREATED_AT = "CREATED_AT",
  CREATED_AT_DESC = "CREATED_AT_DESC",
  UPDATED_AT = "UPDATED_AT",
  UPDATED_AT_DESC = "UPDATED_AT_DESC",
  REPLIED_AT = "REPLIED_AT",
  REPLIED_AT_DESC = "REPLIED_AT_DESC",
  REPLY_COUNT = "REPLY_COUNT",
  REPLY_COUNT_DESC = "REPLY_COUNT_DESC",
  VIEW_COUNT = "VIEW_COUNT",
  VIEW_COUNT_DESC = "VIEW_COUNT_DESC",
  IS_STICKY = "IS_STICKY",
  SEARCH_MATCH = "SEARCH_MATCH",
}

export enum ThreadCommentSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
}

export enum LikeableType {
  THREAD = "THREAD",
  THREAD_COMMENT = "THREAD_COMMENT",
  ACTIVITY = "ACTIVITY",
  ACTIVITY_REPLY = "ACTIVITY_REPLY",
}

export type MediaListCollection = {
  lists: (MediaListGroup | null)[] | null;
  user: User | null;
  hasNextChunk: Boolean | null;
  statusLists: [
    {
      asArray: Boolean | null;
    },
    ((MediaList | null)[] | null)[] | null
  ];
  customLists: [
    {
      asArray: Boolean | null;
    },
    ((MediaList | null)[] | null)[] | null
  ];
};

export type MediaListGroup = {
  entries: (MediaList | null)[] | null;
  name: String | null;
  isCustomList: Boolean | null;
  isSplitCompletedList: Boolean | null;
  status: MediaListStatus | null;
};

export type ParsedMarkdown = {
  html: String | null;
};

export type AniChartUser = {
  user: User | null;
  settings: Json | null;
  highlights: Json | null;
};

export type SiteStatistics = {
  users: [
    {
      sort: (SiteTrendSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    SiteTrendConnection | null
  ];
  anime: [
    {
      sort: (SiteTrendSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    SiteTrendConnection | null
  ];
  manga: [
    {
      sort: (SiteTrendSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    SiteTrendConnection | null
  ];
  characters: [
    {
      sort: (SiteTrendSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    SiteTrendConnection | null
  ];
  staff: [
    {
      sort: (SiteTrendSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    SiteTrendConnection | null
  ];
  studios: [
    {
      sort: (SiteTrendSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    SiteTrendConnection | null
  ];
  reviews: [
    {
      sort: (SiteTrendSort | null)[] | null;
      page: Int | null;
      perPage: Int | null;
    },
    SiteTrendConnection | null
  ];
};

export enum SiteTrendSort {
  DATE = "DATE",
  DATE_DESC = "DATE_DESC",
  COUNT = "COUNT",
  COUNT_DESC = "COUNT_DESC",
  CHANGE = "CHANGE",
  CHANGE_DESC = "CHANGE_DESC",
}

export type SiteTrendConnection = {
  edges: (SiteTrendEdge | null)[] | null;
  nodes: (SiteTrend | null)[] | null;
  pageInfo: PageInfo | null;
};

export type SiteTrendEdge = {
  node: SiteTrend | null;
};

export type SiteTrend = {
  date: Int;
  count: Int;
  change: Int;
};

export enum ExternalLinkMediaType {
  ANIME = "ANIME",
  MANGA = "MANGA",
  STAFF = "STAFF",
}

export type Mutation = {
  UpdateUser: [
    {
      about: String | null;
      titleLanguage: UserTitleLanguage | null;
      displayAdultContent: Boolean | null;
      airingNotifications: Boolean | null;
      scoreFormat: ScoreFormat | null;
      rowOrder: String | null;
      profileColor: String | null;
      donatorBadge: String | null;
      notificationOptions: (NotificationOptionInput | null)[] | null;
      timezone: String | null;
      activityMergeTime: Int | null;
      animeListOptions: MediaListOptionsInput | null;
      mangaListOptions: MediaListOptionsInput | null;
      staffNameLanguage: UserStaffNameLanguage | null;
      restrictMessagesToFollowing: Boolean | null;
      disabledListActivity: (ListActivityOptionInput | null)[] | null;
    },
    User | null
  ];
  SaveMediaListEntry: [
    {
      id: Int | null;
      mediaId: Int | null;
      status: MediaListStatus | null;
      score: Float | null;
      scoreRaw: Int | null;
      progress: Int | null;
      progressVolumes: Int | null;
      repeat: Int | null;
      priority: Int | null;
      private: Boolean | null;
      notes: String | null;
      hiddenFromStatusLists: Boolean | null;
      customLists: (String | null)[] | null;
      advancedScores: (Float | null)[] | null;
      startedAt: FuzzyDateInput | null;
      completedAt: FuzzyDateInput | null;
    },
    MediaList | null
  ];
  UpdateMediaListEntries: [
    {
      status: MediaListStatus | null;
      score: Float | null;
      scoreRaw: Int | null;
      progress: Int | null;
      progressVolumes: Int | null;
      repeat: Int | null;
      priority: Int | null;
      private: Boolean | null;
      notes: String | null;
      hiddenFromStatusLists: Boolean | null;
      advancedScores: (Float | null)[] | null;
      startedAt: FuzzyDateInput | null;
      completedAt: FuzzyDateInput | null;
      ids: (Int | null)[] | null;
    },
    (MediaList | null)[] | null
  ];
  DeleteMediaListEntry: [
    {
      id: Int | null;
    },
    Deleted | null
  ];
  DeleteCustomList: [
    {
      customList: String | null;
      type: MediaType | null;
    },
    Deleted | null
  ];
  SaveTextActivity: [
    {
      id: Int | null;
      text: String | null;
      locked: Boolean | null;
    },
    TextActivity | null
  ];
  SaveMessageActivity: [
    {
      id: Int | null;
      message: String | null;
      recipientId: Int | null;
      private: Boolean | null;
      locked: Boolean | null;
      asMod: Boolean | null;
    },
    MessageActivity | null
  ];
  SaveListActivity: [
    {
      id: Int | null;
      locked: Boolean | null;
    },
    ListActivity | null
  ];
  DeleteActivity: [
    {
      id: Int | null;
    },
    Deleted | null
  ];
  ToggleActivityPin: [
    {
      id: Int | null;
      pinned: Boolean | null;
    },
    ActivityUnion
  ];
  ToggleActivitySubscription: [
    {
      activityId: Int | null;
      subscribe: Boolean | null;
    },
    ActivityUnion
  ];
  SaveActivityReply: [
    {
      id: Int | null;
      activityId: Int | null;
      text: String | null;
      asMod: Boolean | null;
    },
    ActivityReply | null
  ];
  DeleteActivityReply: [
    {
      id: Int | null;
    },
    Deleted | null
  ];
  ToggleLike: [
    {
      id: Int | null;
      type: LikeableType | null;
    },
    (User | null)[] | null
  ];
  ToggleLikeV2: [
    {
      id: Int | null;
      type: LikeableType | null;
    },
    LikeableUnion
  ];
  ToggleFollow: [
    {
      userId: Int | null;
    },
    User | null
  ];
  ToggleFavourite: [
    {
      animeId: Int | null;
      mangaId: Int | null;
      characterId: Int | null;
      staffId: Int | null;
      studioId: Int | null;
    },
    Favourites | null
  ];
  UpdateFavouriteOrder: [
    {
      animeIds: (Int | null)[] | null;
      mangaIds: (Int | null)[] | null;
      characterIds: (Int | null)[] | null;
      staffIds: (Int | null)[] | null;
      studioIds: (Int | null)[] | null;
      animeOrder: (Int | null)[] | null;
      mangaOrder: (Int | null)[] | null;
      characterOrder: (Int | null)[] | null;
      staffOrder: (Int | null)[] | null;
      studioOrder: (Int | null)[] | null;
    },
    Favourites | null
  ];
  SaveReview: [
    {
      id: Int | null;
      mediaId: Int | null;
      body: String | null;
      summary: String | null;
      score: Int | null;
      private: Boolean | null;
    },
    Review | null
  ];
  DeleteReview: [
    {
      id: Int | null;
    },
    Deleted | null
  ];
  RateReview: [
    {
      reviewId: Int | null;
      rating: ReviewRating | null;
    },
    Review | null
  ];
  SaveRecommendation: [
    {
      mediaId: Int | null;
      mediaRecommendationId: Int | null;
      rating: RecommendationRating | null;
    },
    Recommendation | null
  ];
  SaveThread: [
    {
      id: Int | null;
      title: String | null;
      body: String | null;
      categories: (Int | null)[] | null;
      mediaCategories: (Int | null)[] | null;
      sticky: Boolean | null;
      locked: Boolean | null;
    },
    Thread | null
  ];
  DeleteThread: [
    {
      id: Int | null;
    },
    Deleted | null
  ];
  ToggleThreadSubscription: [
    {
      threadId: Int | null;
      subscribe: Boolean | null;
    },
    Thread | null
  ];
  SaveThreadComment: [
    {
      id: Int | null;
      threadId: Int | null;
      parentCommentId: Int | null;
      comment: String | null;
      locked: Boolean | null;
    },
    ThreadComment | null
  ];
  DeleteThreadComment: [
    {
      id: Int | null;
    },
    Deleted | null
  ];
  UpdateAniChartSettings: [
    {
      titleLanguage: String | null;
      outgoingLinkProvider: String | null;
      theme: String | null;
      sort: String | null;
    },
    Json | null
  ];
  UpdateAniChartHighlights: [
    {
      highlights: (AniChartHighlightInput | null)[] | null;
    },
    Json | null
  ];
};

export type NotificationOptionInput = {
  type: NotificationType | null;
  enabled: Boolean | null;
};

export type MediaListOptionsInput = {
  sectionOrder: (String | null)[] | null;
  splitCompletedSectionByFormat: Boolean | null;
  customLists: (String | null)[] | null;
  advancedScoring: (String | null)[] | null;
  advancedScoringEnabled: Boolean | null;
  theme: String | null;
};

export type ListActivityOptionInput = {
  disabled: Boolean | null;
  type: MediaListStatus | null;
};

export type FuzzyDateInput = {
  year: Int | null;
  month: Int | null;
  day: Int | null;
};

export type Deleted = {
  deleted: Boolean | null;
};

export type LikeableUnion =
  | ListActivity
  | TextActivity
  | MessageActivity
  | ActivityReply
  | Thread
  | ThreadComment;

export type AniChartHighlightInput = {
  mediaId: Int | null;
  highlight: String | null;
};

export type InternalPage = {
  mediaSubmissions: [
    {
      mediaId: Int | null;
      submissionId: Int | null;
      userId: Int | null;
      assigneeId: Int | null;
      status: SubmissionStatus | null;
      type: MediaType | null;
      sort: (SubmissionSort | null)[] | null;
    },
    (MediaSubmission | null)[] | null
  ];
  characterSubmissions: [
    {
      characterId: Int | null;
      userId: Int | null;
      assigneeId: Int | null;
      status: SubmissionStatus | null;
      sort: (SubmissionSort | null)[] | null;
    },
    (CharacterSubmission | null)[] | null
  ];
  staffSubmissions: [
    {
      staffId: Int | null;
      userId: Int | null;
      assigneeId: Int | null;
      status: SubmissionStatus | null;
      sort: (SubmissionSort | null)[] | null;
    },
    (StaffSubmission | null)[] | null
  ];
  revisionHistory: [
    {
      userId: Int | null;
      mediaId: Int | null;
      characterId: Int | null;
      staffId: Int | null;
      studioId: Int | null;
    },
    (RevisionHistory | null)[] | null
  ];
  reports: [
    {
      reporterId: Int | null;
      reportedId: Int | null;
    },
    (Report | null)[] | null
  ];
  modActions: [
    {
      userId: Int | null;
      modId: Int | null;
    },
    (ModAction | null)[] | null
  ];
  userBlockSearch: [
    {
      search: String | null;
    },
    (User | null)[] | null
  ];
  pageInfo: PageInfo | null;
  users: [
    {
      id: Int | null;
      name: String | null;
      isModerator: Boolean | null;
      search: String | null;
      sort: (UserSort | null)[] | null;
    },
    (User | null)[] | null
  ];
  media: [
    {
      id: Int | null;
      idMal: Int | null;
      startDate: FuzzyDateInt | null;
      endDate: FuzzyDateInt | null;
      season: MediaSeason | null;
      seasonYear: Int | null;
      type: MediaType | null;
      format: MediaFormat | null;
      status: MediaStatus | null;
      episodes: Int | null;
      duration: Int | null;
      chapters: Int | null;
      volumes: Int | null;
      isAdult: Boolean | null;
      genre: String | null;
      tag: String | null;
      minimumTagRank: Int | null;
      tagCategory: String | null;
      onList: Boolean | null;
      licensedBy: String | null;
      licensedById: Int | null;
      averageScore: Int | null;
      popularity: Int | null;
      source: MediaSource | null;
      countryOfOrigin: CountryCode | null;
      isLicensed: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      idMal_not: Int | null;
      idMal_in: (Int | null)[] | null;
      idMal_not_in: (Int | null)[] | null;
      startDate_greater: FuzzyDateInt | null;
      startDate_lesser: FuzzyDateInt | null;
      startDate_like: String | null;
      endDate_greater: FuzzyDateInt | null;
      endDate_lesser: FuzzyDateInt | null;
      endDate_like: String | null;
      format_in: (MediaFormat | null)[] | null;
      format_not: MediaFormat | null;
      format_not_in: (MediaFormat | null)[] | null;
      status_in: (MediaStatus | null)[] | null;
      status_not: MediaStatus | null;
      status_not_in: (MediaStatus | null)[] | null;
      episodes_greater: Int | null;
      episodes_lesser: Int | null;
      duration_greater: Int | null;
      duration_lesser: Int | null;
      chapters_greater: Int | null;
      chapters_lesser: Int | null;
      volumes_greater: Int | null;
      volumes_lesser: Int | null;
      genre_in: (String | null)[] | null;
      genre_not_in: (String | null)[] | null;
      tag_in: (String | null)[] | null;
      tag_not_in: (String | null)[] | null;
      tagCategory_in: (String | null)[] | null;
      tagCategory_not_in: (String | null)[] | null;
      licensedBy_in: (String | null)[] | null;
      licensedById_in: (Int | null)[] | null;
      averageScore_not: Int | null;
      averageScore_greater: Int | null;
      averageScore_lesser: Int | null;
      popularity_not: Int | null;
      popularity_greater: Int | null;
      popularity_lesser: Int | null;
      source_in: (MediaSource | null)[] | null;
      sort: (MediaSort | null)[] | null;
    },
    (Media | null)[] | null
  ];
  characters: [
    {
      id: Int | null;
      isBirthday: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (CharacterSort | null)[] | null;
    },
    (Character | null)[] | null
  ];
  staff: [
    {
      id: Int | null;
      isBirthday: Boolean | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (StaffSort | null)[] | null;
    },
    (Staff | null)[] | null
  ];
  studios: [
    {
      id: Int | null;
      search: String | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      sort: (StudioSort | null)[] | null;
    },
    (Studio | null)[] | null
  ];
  mediaList: [
    {
      id: Int | null;
      userId: Int | null;
      userName: String | null;
      type: MediaType | null;
      status: MediaListStatus | null;
      mediaId: Int | null;
      isFollowing: Boolean | null;
      notes: String | null;
      startedAt: FuzzyDateInt | null;
      completedAt: FuzzyDateInt | null;
      compareWithAuthList: Boolean | null;
      userId_in: (Int | null)[] | null;
      status_in: (MediaListStatus | null)[] | null;
      status_not_in: (MediaListStatus | null)[] | null;
      status_not: MediaListStatus | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      notes_like: String | null;
      startedAt_greater: FuzzyDateInt | null;
      startedAt_lesser: FuzzyDateInt | null;
      startedAt_like: String | null;
      completedAt_greater: FuzzyDateInt | null;
      completedAt_lesser: FuzzyDateInt | null;
      completedAt_like: String | null;
      sort: (MediaListSort | null)[] | null;
    },
    (MediaList | null)[] | null
  ];
  airingSchedules: [
    {
      id: Int | null;
      mediaId: Int | null;
      episode: Int | null;
      airingAt: Int | null;
      notYetAired: Boolean | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      episode_not: Int | null;
      episode_in: (Int | null)[] | null;
      episode_not_in: (Int | null)[] | null;
      episode_greater: Int | null;
      episode_lesser: Int | null;
      airingAt_greater: Int | null;
      airingAt_lesser: Int | null;
      sort: (AiringSort | null)[] | null;
    },
    (AiringSchedule | null)[] | null
  ];
  mediaTrends: [
    {
      mediaId: Int | null;
      date: Int | null;
      trending: Int | null;
      averageScore: Int | null;
      popularity: Int | null;
      episode: Int | null;
      releasing: Boolean | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      date_greater: Int | null;
      date_lesser: Int | null;
      trending_greater: Int | null;
      trending_lesser: Int | null;
      trending_not: Int | null;
      averageScore_greater: Int | null;
      averageScore_lesser: Int | null;
      averageScore_not: Int | null;
      popularity_greater: Int | null;
      popularity_lesser: Int | null;
      popularity_not: Int | null;
      episode_greater: Int | null;
      episode_lesser: Int | null;
      episode_not: Int | null;
      sort: (MediaTrendSort | null)[] | null;
    },
    (MediaTrend | null)[] | null
  ];
  notifications: [
    {
      type: NotificationType | null;
      resetNotificationCount: Boolean | null;
      type_in: (NotificationType | null)[] | null;
    },
    NotificationUnion[] | null
  ];
  followers: [
    {
      userId: Int;
      sort: (UserSort | null)[] | null;
    },
    (User | null)[] | null
  ];
  following: [
    {
      userId: Int;
      sort: (UserSort | null)[] | null;
    },
    (User | null)[] | null
  ];
  activities: [
    {
      id: Int | null;
      userId: Int | null;
      messengerId: Int | null;
      mediaId: Int | null;
      type: ActivityType | null;
      isFollowing: Boolean | null;
      hasReplies: Boolean | null;
      hasRepliesOrTypeText: Boolean | null;
      createdAt: Int | null;
      id_not: Int | null;
      id_in: (Int | null)[] | null;
      id_not_in: (Int | null)[] | null;
      userId_not: Int | null;
      userId_in: (Int | null)[] | null;
      userId_not_in: (Int | null)[] | null;
      messengerId_not: Int | null;
      messengerId_in: (Int | null)[] | null;
      messengerId_not_in: (Int | null)[] | null;
      mediaId_not: Int | null;
      mediaId_in: (Int | null)[] | null;
      mediaId_not_in: (Int | null)[] | null;
      type_not: ActivityType | null;
      type_in: (ActivityType | null)[] | null;
      type_not_in: (ActivityType | null)[] | null;
      createdAt_greater: Int | null;
      createdAt_lesser: Int | null;
      sort: (ActivitySort | null)[] | null;
    },
    ActivityUnion[] | null
  ];
  activityReplies: [
    {
      id: Int | null;
      activityId: Int | null;
    },
    (ActivityReply | null)[] | null
  ];
  threads: [
    {
      id: Int | null;
      userId: Int | null;
      replyUserId: Int | null;
      subscribed: Boolean | null;
      categoryId: Int | null;
      mediaCategoryId: Int | null;
      search: String | null;
      id_in: (Int | null)[] | null;
      sort: (ThreadSort | null)[] | null;
    },
    (Thread | null)[] | null
  ];
  threadComments: [
    {
      id: Int | null;
      threadId: Int | null;
      userId: Int | null;
      sort: (ThreadCommentSort | null)[] | null;
    },
    (ThreadComment | null)[] | null
  ];
  reviews: [
    {
      id: Int | null;
      mediaId: Int | null;
      userId: Int | null;
      mediaType: MediaType | null;
      sort: (ReviewSort | null)[] | null;
    },
    (Review | null)[] | null
  ];
  recommendations: [
    {
      id: Int | null;
      mediaId: Int | null;
      mediaRecommendationId: Int | null;
      userId: Int | null;
      rating: Int | null;
      onList: Boolean | null;
      rating_greater: Int | null;
      rating_lesser: Int | null;
      sort: (RecommendationSort | null)[] | null;
    },
    (Recommendation | null)[] | null
  ];
  likes: [
    {
      likeableId: Int | null;
      type: LikeableType | null;
    },
    (User | null)[] | null
  ];
};

export enum SubmissionStatus {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  PARTIALLY_ACCEPTED = "PARTIALLY_ACCEPTED",
  ACCEPTED = "ACCEPTED",
}

export enum SubmissionSort {
  ID = "ID",
  ID_DESC = "ID_DESC",
}

export type MediaSubmission = {
  id: Int;
  submitter: User | null;
  assignee: User | null;
  status: SubmissionStatus | null;
  submitterStats: Json | null;
  notes: String | null;
  source: String | null;
  changes: (String | null)[] | null;
  locked: Boolean | null;
  media: Media | null;
  submission: Media | null;
  characters: (MediaSubmissionComparison | null)[] | null;
  staff: (MediaSubmissionComparison | null)[] | null;
  studios: (MediaSubmissionComparison | null)[] | null;
  relations: (MediaEdge | null)[] | null;
  externalLinks: (MediaSubmissionComparison | null)[] | null;
  createdAt: Int | null;
};

export type MediaSubmissionComparison = {
  submission: MediaSubmissionEdge | null;
  character: MediaCharacter | null;
  staff: StaffEdge | null;
  studio: StudioEdge | null;
  externalLink: MediaExternalLink | null;
};

export type MediaSubmissionEdge = {
  id: Int | null;
  characterRole: CharacterRole | null;
  staffRole: String | null;
  roleNotes: String | null;
  dubGroup: String | null;
  characterName: String | null;
  isMain: Boolean | null;
  character: Character | null;
  characterSubmission: Character | null;
  voiceActor: Staff | null;
  voiceActorSubmission: Staff | null;
  staff: Staff | null;
  staffSubmission: Staff | null;
  studio: Studio | null;
  externalLink: MediaExternalLink | null;
  media: Media | null;
};

export type MediaCharacter = {
  id: Int | null;
  role: CharacterRole | null;
  roleNotes: String | null;
  dubGroup: String | null;
  characterName: String | null;
  character: Character | null;
  voiceActor: Staff | null;
};

export type CharacterSubmission = {
  id: Int;
  character: Character | null;
  submission: Character | null;
  submitter: User | null;
  assignee: User | null;
  status: SubmissionStatus | null;
  notes: String | null;
  source: String | null;
  locked: Boolean | null;
  createdAt: Int | null;
};

export type StaffSubmission = {
  id: Int;
  staff: Staff | null;
  submission: Staff | null;
  submitter: User | null;
  assignee: User | null;
  status: SubmissionStatus | null;
  notes: String | null;
  source: String | null;
  locked: Boolean | null;
  createdAt: Int | null;
};

export type RevisionHistory = {
  id: Int;
  action: RevisionHistoryAction | null;
  changes: Json | null;
  user: User | null;
  media: Media | null;
  character: Character | null;
  staff: Staff | null;
  studio: Studio | null;
  externalLink: MediaExternalLink | null;
  createdAt: Int | null;
};

export enum RevisionHistoryAction {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

export type Report = {
  id: Int;
  reporter: User | null;
  reported: User | null;
  reason: String | null;
  createdAt: Int | null;
  cleared: Boolean | null;
};

export type ModAction = {
  id: Int;
  user: User | null;
  mod: User | null;
  type: ModActionType | null;
  objectId: Int | null;
  objectType: String | null;
  data: String | null;
  createdAt: Int;
};

export enum ModActionType {
  NOTE = "NOTE",
  BAN = "BAN",
  DELETE = "DELETE",
  EDIT = "EDIT",
  EXPIRE = "EXPIRE",
  REPORT = "REPORT",
  RESET = "RESET",
  ANON = "ANON",
}

export type MediaTitleInput = {
  romaji: String | null;
  english: String | null;
  native: String | null;
};

export type AiringScheduleInput = {
  airingAt: Int | null;
  episode: Int | null;
  timeUntilAiring: Int | null;
};

export type MediaExternalLinkInput = {
  id: Int;
  url: String;
  site: String;
};

export type CharacterNameInput = {
  first: String | null;
  middle: String | null;
  last: String | null;
  native: String | null;
  alternative: (String | null)[] | null;
  alternativeSpoiler: (String | null)[] | null;
};

export type CharacterSubmissionConnection = {
  edges: (CharacterSubmissionEdge | null)[] | null;
  nodes: (CharacterSubmission | null)[] | null;
  pageInfo: PageInfo | null;
};

export type CharacterSubmissionEdge = {
  node: CharacterSubmission | null;
  role: CharacterRole | null;
  voiceActors: (Staff | null)[] | null;
  submittedVoiceActors: (StaffSubmission | null)[] | null;
};

export type StaffNameInput = {
  first: String | null;
  middle: String | null;
  last: String | null;
  native: String | null;
  alternative: (String | null)[] | null;
};

export type UserModData = {
  alts: (User | null)[] | null;
  bans: Json | null;
  ip: Json | null;
  counts: Json | null;
  privacy: Int | null;
  email: String | null;
};

export type ID = string;

export const schema = {
  Query: {
    Page: [
      {
        page: "Int",
        perPage: "Int",
      },
      "Page",
    ],
    Media: [
      {
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
      "Media",
    ],
    MediaTrend: [
      {
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
      "MediaTrend",
    ],
    AiringSchedule: [
      {
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
      "AiringSchedule",
    ],
    Character: [
      {
        id: "Int",
        isBirthday: "Boolean",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["CharacterSort"],
      },
      "Character",
    ],
    Staff: [
      {
        id: "Int",
        isBirthday: "Boolean",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["StaffSort"],
      },
      "Staff",
    ],
    MediaList: [
      {
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
      "MediaList",
    ],
    MediaListCollection: [
      {
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
      "MediaListCollection",
    ],
    GenreCollection: ["String"],
    MediaTagCollection: [
      {
        status: "Int",
      },
      ["MediaTag"],
    ],
    User: [
      {
        id: "Int",
        name: "String",
        isModerator: "Boolean",
        search: "String",
        sort: ["UserSort"],
      },
      "User",
    ],
    Viewer: "User",
    Notification: [
      {
        type: "NotificationType",
        resetNotificationCount: "Boolean",
        type_in: ["NotificationType"],
      },
      "NotificationUnion",
    ],
    Studio: [
      {
        id: "Int",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["StudioSort"],
      },
      "Studio",
    ],
    Review: [
      {
        id: "Int",
        mediaId: "Int",
        userId: "Int",
        mediaType: "MediaType",
        sort: ["ReviewSort"],
      },
      "Review",
    ],
    Activity: [
      {
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
      "ActivityUnion",
    ],
    ActivityReply: [
      {
        id: "Int",
        activityId: "Int",
      },
      "ActivityReply",
    ],
    Following: [
      {
        userId: "Int!",
        sort: ["UserSort"],
      },
      "User",
    ],
    Follower: [
      {
        userId: "Int!",
        sort: ["UserSort"],
      },
      "User",
    ],
    Thread: [
      {
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
      "Thread",
    ],
    ThreadComment: [
      {
        id: "Int",
        threadId: "Int",
        userId: "Int",
        sort: ["ThreadCommentSort"],
      },
      ["ThreadComment"],
    ],
    Recommendation: [
      {
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
      "Recommendation",
    ],
    Like: [
      {
        likeableId: "Int",
        type: "LikeableType",
      },
      "User",
    ],
    Markdown: [
      {
        markdown: "String!",
      },
      "ParsedMarkdown",
    ],
    AniChartUser: "AniChartUser",
    SiteStatistics: "SiteStatistics",
    ExternalLinkSourceCollection: [
      {
        id: "Int",
        type: "ExternalLinkType",
        mediaType: "ExternalLinkMediaType",
      },
      ["MediaExternalLink"],
    ],
  },
  Int: "",
  Page: {
    pageInfo: "PageInfo",
    users: [
      {
        id: "Int",
        name: "String",
        isModerator: "Boolean",
        search: "String",
        sort: ["UserSort"],
      },
      ["User"],
    ],
    media: [
      {
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
      ["Media"],
    ],
    characters: [
      {
        id: "Int",
        isBirthday: "Boolean",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["CharacterSort"],
      },
      ["Character"],
    ],
    staff: [
      {
        id: "Int",
        isBirthday: "Boolean",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["StaffSort"],
      },
      ["Staff"],
    ],
    studios: [
      {
        id: "Int",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["StudioSort"],
      },
      ["Studio"],
    ],
    mediaList: [
      {
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
      ["MediaList"],
    ],
    airingSchedules: [
      {
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
      ["AiringSchedule"],
    ],
    mediaTrends: [
      {
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
      ["MediaTrend"],
    ],
    notifications: [
      {
        type: "NotificationType",
        resetNotificationCount: "Boolean",
        type_in: ["NotificationType"],
      },
      ["NotificationUnion"],
    ],
    followers: [
      {
        userId: "Int!",
        sort: ["UserSort"],
      },
      ["User"],
    ],
    following: [
      {
        userId: "Int!",
        sort: ["UserSort"],
      },
      ["User"],
    ],
    activities: [
      {
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
      ["ActivityUnion"],
    ],
    activityReplies: [
      {
        id: "Int",
        activityId: "Int",
      },
      ["ActivityReply"],
    ],
    threads: [
      {
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
      ["Thread"],
    ],
    threadComments: [
      {
        id: "Int",
        threadId: "Int",
        userId: "Int",
        sort: ["ThreadCommentSort"],
      },
      ["ThreadComment"],
    ],
    reviews: [
      {
        id: "Int",
        mediaId: "Int",
        userId: "Int",
        mediaType: "MediaType",
        sort: ["ReviewSort"],
      },
      ["Review"],
    ],
    recommendations: [
      {
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
      ["Recommendation"],
    ],
    likes: [
      {
        likeableId: "Int",
        type: "LikeableType",
      },
      ["User"],
    ],
  },
  PageInfo: {
    total: "Int",
    perPage: "Int",
    currentPage: "Int",
    lastPage: "Int",
    hasNextPage: "Boolean",
  },
  Boolean: "",
  String: "",
  UserSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
    USERNAME: "ENUM",
    USERNAME_DESC: "ENUM",
    WATCHED_TIME: "ENUM",
    WATCHED_TIME_DESC: "ENUM",
    CHAPTERS_READ: "ENUM",
    CHAPTERS_READ_DESC: "ENUM",
    SEARCH_MATCH: "ENUM",
  },
  User: {
    id: "Int!",
    name: "String!",
    about: [
      {
        asHtml: "Boolean",
      },
      "String",
    ],
    avatar: "UserAvatar",
    bannerImage: "String",
    isFollowing: "Boolean",
    isFollower: "Boolean",
    isBlocked: "Boolean",
    bans: "Json",
    options: "UserOptions",
    mediaListOptions: "MediaListOptions",
    favourites: [
      {
        page: "Int",
      },
      "Favourites",
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
  },
  UserAvatar: {
    large: "String",
    medium: "String",
  },
  Json: "",
  UserOptions: {
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
  },
  UserTitleLanguage: {
    ROMAJI: "ENUM",
    ENGLISH: "ENUM",
    NATIVE: "ENUM",
    ROMAJI_STYLISED: "ENUM",
    ENGLISH_STYLISED: "ENUM",
    NATIVE_STYLISED: "ENUM",
  },
  NotificationOption: {
    type: "NotificationType",
    enabled: "Boolean",
  },
  NotificationType: {
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
  },
  UserStaffNameLanguage: {
    ROMAJI_WESTERN: "ENUM",
    ROMAJI: "ENUM",
    NATIVE: "ENUM",
  },
  ListActivityOption: {
    disabled: "Boolean",
    type: "MediaListStatus",
  },
  MediaListStatus: {
    CURRENT: "ENUM",
    PLANNING: "ENUM",
    COMPLETED: "ENUM",
    DROPPED: "ENUM",
    PAUSED: "ENUM",
    REPEATING: "ENUM",
  },
  MediaListOptions: {
    scoreFormat: "ScoreFormat",
    rowOrder: "String",
    useLegacyLists: "Boolean",
    animeList: "MediaListTypeOptions",
    mangaList: "MediaListTypeOptions",
    sharedTheme: "Json",
    sharedThemeEnabled: "Boolean",
  },
  ScoreFormat: {
    POINT_100: "ENUM",
    POINT_10_DECIMAL: "ENUM",
    POINT_10: "ENUM",
    POINT_5: "ENUM",
    POINT_3: "ENUM",
  },
  MediaListTypeOptions: {
    sectionOrder: ["String"],
    splitCompletedSectionByFormat: "Boolean",
    theme: "Json",
    customLists: ["String"],
    advancedScoring: ["String"],
    advancedScoringEnabled: "Boolean",
  },
  Favourites: {
    anime: [
      {
        page: "Int",
        perPage: "Int",
      },
      "MediaConnection",
    ],
    manga: [
      {
        page: "Int",
        perPage: "Int",
      },
      "MediaConnection",
    ],
    characters: [
      {
        page: "Int",
        perPage: "Int",
      },
      "CharacterConnection",
    ],
    staff: [
      {
        page: "Int",
        perPage: "Int",
      },
      "StaffConnection",
    ],
    studios: [
      {
        page: "Int",
        perPage: "Int",
      },
      "StudioConnection",
    ],
  },
  MediaConnection: {
    edges: ["MediaEdge"],
    nodes: ["Media"],
    pageInfo: "PageInfo",
  },
  MediaEdge: {
    node: "Media",
    id: "Int",
    relationType: [
      {
        version: "Int",
      },
      "MediaRelation",
    ],
    isMainStudio: "Boolean!",
    characters: ["Character"],
    characterRole: "CharacterRole",
    characterName: "String",
    roleNotes: "String",
    dubGroup: "String",
    staffRole: "String",
    voiceActors: [
      {
        language: "StaffLanguage",
        sort: ["StaffSort"],
      },
      ["Staff"],
    ],
    voiceActorRoles: [
      {
        language: "StaffLanguage",
        sort: ["StaffSort"],
      },
      ["StaffRoleType"],
    ],
    favouriteOrder: "Int",
  },
  Media: {
    id: "Int!",
    idMal: "Int",
    title: "MediaTitle",
    type: "MediaType",
    format: "MediaFormat",
    status: [
      {
        version: "Int",
      },
      "MediaStatus",
    ],
    description: [
      {
        asHtml: "Boolean",
      },
      "String",
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
    source: [
      {
        version: "Int",
      },
      "MediaSource",
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
    characters: [
      {
        sort: ["CharacterSort"],
        role: "CharacterRole",
        page: "Int",
        perPage: "Int",
      },
      "CharacterConnection",
    ],
    staff: [
      {
        sort: ["StaffSort"],
        page: "Int",
        perPage: "Int",
      },
      "StaffConnection",
    ],
    studios: [
      {
        sort: ["StudioSort"],
        isMain: "Boolean",
      },
      "StudioConnection",
    ],
    isFavourite: "Boolean!",
    isFavouriteBlocked: "Boolean!",
    isAdult: "Boolean",
    nextAiringEpisode: "AiringSchedule",
    airingSchedule: [
      {
        notYetAired: "Boolean",
        page: "Int",
        perPage: "Int",
      },
      "AiringScheduleConnection",
    ],
    trends: [
      {
        sort: ["MediaTrendSort"],
        releasing: "Boolean",
        page: "Int",
        perPage: "Int",
      },
      "MediaTrendConnection",
    ],
    externalLinks: ["MediaExternalLink"],
    streamingEpisodes: ["MediaStreamingEpisode"],
    rankings: ["MediaRank"],
    mediaListEntry: "MediaList",
    reviews: [
      {
        limit: "Int",
        sort: ["ReviewSort"],
        page: "Int",
        perPage: "Int",
      },
      "ReviewConnection",
    ],
    recommendations: [
      {
        sort: ["RecommendationSort"],
        page: "Int",
        perPage: "Int",
      },
      "RecommendationConnection",
    ],
    stats: "MediaStats",
    siteUrl: "String",
    autoCreateForumThread: "Boolean",
    isRecommendationBlocked: "Boolean",
    isReviewBlocked: "Boolean",
    modNotes: "String",
  },
  MediaTitle: {
    romaji: [
      {
        stylised: "Boolean",
      },
      "String",
    ],
    english: [
      {
        stylised: "Boolean",
      },
      "String",
    ],
    native: [
      {
        stylised: "Boolean",
      },
      "String",
    ],
    userPreferred: "String",
  },
  MediaType: {
    ANIME: "ENUM",
    MANGA: "ENUM",
  },
  MediaFormat: {
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
  },
  MediaStatus: {
    FINISHED: "ENUM",
    RELEASING: "ENUM",
    NOT_YET_RELEASED: "ENUM",
    CANCELLED: "ENUM",
    HIATUS: "ENUM",
  },
  FuzzyDate: {
    year: "Int",
    month: "Int",
    day: "Int",
  },
  MediaSeason: {
    WINTER: "ENUM",
    SPRING: "ENUM",
    SUMMER: "ENUM",
    FALL: "ENUM",
  },
  CountryCode: "",
  MediaSource: {
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
  },
  MediaTrailer: {
    id: "String",
    site: "String",
    thumbnail: "String",
  },
  MediaCoverImage: {
    extraLarge: "String",
    large: "String",
    medium: "String",
    color: "String",
  },
  MediaTag: {
    id: "Int!",
    name: "String!",
    description: "String",
    category: "String",
    rank: "Int",
    isGeneralSpoiler: "Boolean",
    isMediaSpoiler: "Boolean",
    isAdult: "Boolean",
    userId: "Int",
  },
  CharacterSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
    ROLE: "ENUM",
    ROLE_DESC: "ENUM",
    SEARCH_MATCH: "ENUM",
    FAVOURITES: "ENUM",
    FAVOURITES_DESC: "ENUM",
    RELEVANCE: "ENUM",
  },
  CharacterRole: {
    MAIN: "ENUM",
    SUPPORTING: "ENUM",
    BACKGROUND: "ENUM",
  },
  CharacterConnection: {
    edges: ["CharacterEdge"],
    nodes: ["Character"],
    pageInfo: "PageInfo",
  },
  CharacterEdge: {
    node: "Character",
    id: "Int",
    role: "CharacterRole",
    name: "String",
    voiceActors: [
      {
        language: "StaffLanguage",
        sort: ["StaffSort"],
      },
      ["Staff"],
    ],
    voiceActorRoles: [
      {
        language: "StaffLanguage",
        sort: ["StaffSort"],
      },
      ["StaffRoleType"],
    ],
    media: ["Media"],
    favouriteOrder: "Int",
  },
  Character: {
    id: "Int!",
    name: "CharacterName",
    image: "CharacterImage",
    description: [
      {
        asHtml: "Boolean",
      },
      "String",
    ],
    gender: "String",
    dateOfBirth: "FuzzyDate",
    age: "String",
    bloodType: "String",
    isFavourite: "Boolean!",
    isFavouriteBlocked: "Boolean!",
    siteUrl: "String",
    media: [
      {
        sort: ["MediaSort"],
        type: "MediaType",
        onList: "Boolean",
        page: "Int",
        perPage: "Int",
      },
      "MediaConnection",
    ],
    updatedAt: "Int",
    favourites: "Int",
    modNotes: "String",
  },
  CharacterName: {
    first: "String",
    middle: "String",
    last: "String",
    full: "String",
    native: "String",
    alternative: ["String"],
    alternativeSpoiler: ["String"],
    userPreferred: "String",
  },
  CharacterImage: {
    large: "String",
    medium: "String",
  },
  MediaSort: {
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
  },
  StaffLanguage: {
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
  },
  StaffSort: {
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
  },
  Staff: {
    id: "Int!",
    name: "StaffName",
    language: "StaffLanguage",
    languageV2: "String",
    image: "StaffImage",
    description: [
      {
        asHtml: "Boolean",
      },
      "String",
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
    staffMedia: [
      {
        sort: ["MediaSort"],
        type: "MediaType",
        onList: "Boolean",
        page: "Int",
        perPage: "Int",
      },
      "MediaConnection",
    ],
    characters: [
      {
        sort: ["CharacterSort"],
        page: "Int",
        perPage: "Int",
      },
      "CharacterConnection",
    ],
    characterMedia: [
      {
        sort: ["MediaSort"],
        onList: "Boolean",
        page: "Int",
        perPage: "Int",
      },
      "MediaConnection",
    ],
    updatedAt: "Int",
    staff: "Staff",
    submitter: "User",
    submissionStatus: "Int",
    submissionNotes: "String",
    favourites: "Int",
    modNotes: "String",
  },
  StaffName: {
    first: "String",
    middle: "String",
    last: "String",
    full: "String",
    native: "String",
    alternative: ["String"],
    userPreferred: "String",
  },
  StaffImage: {
    large: "String",
    medium: "String",
  },
  StaffRoleType: {
    voiceActor: "Staff",
    roleNotes: "String",
    dubGroup: "String",
  },
  StaffConnection: {
    edges: ["StaffEdge"],
    nodes: ["Staff"],
    pageInfo: "PageInfo",
  },
  StaffEdge: {
    node: "Staff",
    id: "Int",
    role: "String",
    favouriteOrder: "Int",
  },
  StudioSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
    NAME: "ENUM",
    NAME_DESC: "ENUM",
    SEARCH_MATCH: "ENUM",
    FAVOURITES: "ENUM",
    FAVOURITES_DESC: "ENUM",
  },
  StudioConnection: {
    edges: ["StudioEdge"],
    nodes: ["Studio"],
    pageInfo: "PageInfo",
  },
  StudioEdge: {
    node: "Studio",
    id: "Int",
    isMain: "Boolean!",
    favouriteOrder: "Int",
  },
  Studio: {
    id: "Int!",
    name: "String!",
    isAnimationStudio: "Boolean!",
    media: [
      {
        sort: ["MediaSort"],
        isMain: "Boolean",
        onList: "Boolean",
        page: "Int",
        perPage: "Int",
      },
      "MediaConnection",
    ],
    siteUrl: "String",
    isFavourite: "Boolean!",
    favourites: "Int",
  },
  AiringSchedule: {
    id: "Int!",
    airingAt: "Int!",
    timeUntilAiring: "Int!",
    episode: "Int!",
    mediaId: "Int!",
    media: "Media",
  },
  AiringScheduleConnection: {
    edges: ["AiringScheduleEdge"],
    nodes: ["AiringSchedule"],
    pageInfo: "PageInfo",
  },
  AiringScheduleEdge: {
    node: "AiringSchedule",
    id: "Int",
  },
  MediaTrendSort: {
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
  },
  MediaTrendConnection: {
    edges: ["MediaTrendEdge"],
    nodes: ["MediaTrend"],
    pageInfo: "PageInfo",
  },
  MediaTrendEdge: {
    node: "MediaTrend",
  },
  MediaTrend: {
    mediaId: "Int!",
    date: "Int!",
    trending: "Int!",
    averageScore: "Int",
    popularity: "Int",
    inProgress: "Int",
    releasing: "Boolean!",
    episode: "Int",
    media: "Media",
  },
  MediaExternalLink: {
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
  },
  ExternalLinkType: {
    INFO: "ENUM",
    STREAMING: "ENUM",
    SOCIAL: "ENUM",
  },
  MediaStreamingEpisode: {
    title: "String",
    thumbnail: "String",
    url: "String",
    site: "String",
  },
  MediaRank: {
    id: "Int!",
    rank: "Int!",
    type: "MediaRankType!",
    format: "MediaFormat!",
    year: "Int",
    season: "MediaSeason",
    allTime: "Boolean",
    context: "String!",
  },
  MediaRankType: {
    RATED: "ENUM",
    POPULAR: "ENUM",
  },
  MediaList: {
    id: "Int!",
    userId: "Int!",
    mediaId: "Int!",
    status: "MediaListStatus",
    score: [
      {
        format: "ScoreFormat",
      },
      "Float",
    ],
    progress: "Int",
    progressVolumes: "Int",
    repeat: "Int",
    priority: "Int",
    private: "Boolean",
    notes: "String",
    hiddenFromStatusLists: "Boolean",
    customLists: [
      {
        asArray: "Boolean",
      },
      "Json",
    ],
    advancedScores: "Json",
    startedAt: "FuzzyDate",
    completedAt: "FuzzyDate",
    updatedAt: "Int",
    createdAt: "Int",
    media: "Media",
    user: "User",
  },
  Float: "",
  ReviewSort: {
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
  },
  ReviewConnection: {
    edges: ["ReviewEdge"],
    nodes: ["Review"],
    pageInfo: "PageInfo",
  },
  ReviewEdge: {
    node: "Review",
  },
  Review: {
    id: "Int!",
    userId: "Int!",
    mediaId: "Int!",
    mediaType: "MediaType",
    summary: "String",
    body: [
      {
        asHtml: "Boolean",
      },
      "String",
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
  },
  ReviewRating: {
    NO_VOTE: "ENUM",
    UP_VOTE: "ENUM",
    DOWN_VOTE: "ENUM",
  },
  RecommendationSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
    RATING: "ENUM",
    RATING_DESC: "ENUM",
  },
  RecommendationConnection: {
    edges: ["RecommendationEdge"],
    nodes: ["Recommendation"],
    pageInfo: "PageInfo",
  },
  RecommendationEdge: {
    node: "Recommendation",
  },
  Recommendation: {
    id: "Int!",
    rating: "Int",
    userRating: "RecommendationRating",
    media: "Media",
    mediaRecommendation: "Media",
    user: "User",
  },
  RecommendationRating: {
    NO_RATING: "ENUM",
    RATE_UP: "ENUM",
    RATE_DOWN: "ENUM",
  },
  MediaStats: {
    scoreDistribution: ["ScoreDistribution"],
    statusDistribution: ["StatusDistribution"],
    airingProgression: ["AiringProgression"],
  },
  ScoreDistribution: {
    score: "Int",
    amount: "Int",
  },
  StatusDistribution: {
    status: "MediaListStatus",
    amount: "Int",
  },
  AiringProgression: {
    episode: "Float",
    score: "Float",
    watching: "Int",
  },
  MediaRelation: {
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
  },
  UserStatisticTypes: {
    anime: "UserStatistics",
    manga: "UserStatistics",
  },
  UserStatistics: {
    count: "Int!",
    meanScore: "Float!",
    standardDeviation: "Float!",
    minutesWatched: "Int!",
    episodesWatched: "Int!",
    chaptersRead: "Int!",
    volumesRead: "Int!",
    formats: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserFormatStatistic"],
    ],
    statuses: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserStatusStatistic"],
    ],
    scores: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserScoreStatistic"],
    ],
    lengths: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserLengthStatistic"],
    ],
    releaseYears: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserReleaseYearStatistic"],
    ],
    startYears: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserStartYearStatistic"],
    ],
    genres: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserGenreStatistic"],
    ],
    tags: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserTagStatistic"],
    ],
    countries: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserCountryStatistic"],
    ],
    voiceActors: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserVoiceActorStatistic"],
    ],
    staff: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserStaffStatistic"],
    ],
    studios: [
      {
        limit: "Int",
        sort: ["UserStatisticsSort"],
      },
      ["UserStudioStatistic"],
    ],
  },
  UserStatisticsSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
    COUNT: "ENUM",
    COUNT_DESC: "ENUM",
    PROGRESS: "ENUM",
    PROGRESS_DESC: "ENUM",
    MEAN_SCORE: "ENUM",
    MEAN_SCORE_DESC: "ENUM",
  },
  UserFormatStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    format: "MediaFormat",
  },
  UserStatusStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    status: "MediaListStatus",
  },
  UserScoreStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    score: "Int",
  },
  UserLengthStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    length: "String",
  },
  UserReleaseYearStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    releaseYear: "Int",
  },
  UserStartYearStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    startYear: "Int",
  },
  UserGenreStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    genre: "String",
  },
  UserTagStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    tag: "MediaTag",
  },
  UserCountryStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    country: "CountryCode",
  },
  UserVoiceActorStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    voiceActor: "Staff",
    characterIds: ["Int"!],
  },
  UserStaffStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    staff: "Staff",
  },
  UserStudioStatistic: {
    count: "Int!",
    meanScore: "Float!",
    minutesWatched: "Int!",
    chaptersRead: "Int!",
    mediaIds: ["Int"!],
    studio: "Studio",
  },
  ModRole: {
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
  },
  UserStats: {
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
  },
  UserActivityHistory: {
    date: "Int",
    amount: "Int",
    level: "Int",
  },
  ListScoreStats: {
    meanScore: "Int",
    standardDeviation: "Int",
  },
  GenreStats: {
    genre: "String",
    amount: "Int",
    meanScore: "Int",
    timeWatched: "Int",
  },
  TagStats: {
    tag: "MediaTag",
    amount: "Int",
    meanScore: "Int",
    timeWatched: "Int",
  },
  StaffStats: {
    staff: "Staff",
    amount: "Int",
    meanScore: "Int",
    timeWatched: "Int",
  },
  StudioStats: {
    studio: "Studio",
    amount: "Int",
    meanScore: "Int",
    timeWatched: "Int",
  },
  YearStats: {
    year: "Int",
    amount: "Int",
    meanScore: "Int",
  },
  FormatStats: {
    format: "MediaFormat",
    amount: "Int",
  },
  UserPreviousName: {
    name: "String",
    createdAt: "Int",
    updatedAt: "Int",
  },
  FuzzyDateInt: "",
  MediaListSort: {
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
  },
  AiringSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
    MEDIA_ID: "ENUM",
    MEDIA_ID_DESC: "ENUM",
    TIME: "ENUM",
    TIME_DESC: "ENUM",
    EPISODE: "ENUM",
    EPISODE_DESC: "ENUM",
  },
  NotificationUnion: [
    "AiringNotification!",
    "FollowingNotification!",
    "ActivityMessageNotification!",
    "ActivityMentionNotification!",
    "ActivityReplyNotification!",
    "ActivityReplySubscribedNotification!",
    "ActivityLikeNotification!",
    "ActivityReplyLikeNotification!",
    "ThreadCommentMentionNotification!",
    "ThreadCommentReplyNotification!",
    "ThreadCommentSubscribedNotification!",
    "ThreadCommentLikeNotification!",
    "ThreadLikeNotification!",
    "RelatedMediaAdditionNotification!",
    "MediaDataChangeNotification!",
    "MediaMergeNotification!",
    "MediaDeletionNotification!",
  ],
  AiringNotification: {
    id: "Int!",
    type: "NotificationType",
    animeId: "Int!",
    episode: "Int!",
    contexts: ["String"],
    createdAt: "Int",
    media: "Media",
  },
  FollowingNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    context: "String",
    createdAt: "Int",
    user: "User",
  },
  ActivityMessageNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    activityId: "Int!",
    context: "String",
    createdAt: "Int",
    message: "MessageActivity",
    user: "User",
  },
  MessageActivity: {
    id: "Int!",
    recipientId: "Int",
    messengerId: "Int",
    type: "ActivityType",
    replyCount: "Int!",
    message: [
      {
        asHtml: "Boolean",
      },
      "String",
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
  },
  ActivityType: {
    TEXT: "ENUM",
    ANIME_LIST: "ENUM",
    MANGA_LIST: "ENUM",
    MESSAGE: "ENUM",
    MEDIA_LIST: "ENUM",
  },
  ActivityReply: {
    id: "Int!",
    userId: "Int",
    activityId: "Int",
    text: [
      {
        asHtml: "Boolean",
      },
      "String",
    ],
    likeCount: "Int!",
    isLiked: "Boolean",
    createdAt: "Int!",
    user: "User",
    likes: ["User"],
  },
  ActivityMentionNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    activityId: "Int!",
    context: "String",
    createdAt: "Int",
    activity: "ActivityUnion",
    user: "User",
  },
  ActivityUnion: ["TextActivity!", "ListActivity!", "MessageActivity!"],
  TextActivity: {
    id: "Int!",
    userId: "Int",
    type: "ActivityType",
    replyCount: "Int!",
    text: [
      {
        asHtml: "Boolean",
      },
      "String",
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
  },
  ListActivity: {
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
  },
  ActivityReplyNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    activityId: "Int!",
    context: "String",
    createdAt: "Int",
    activity: "ActivityUnion",
    user: "User",
  },
  ActivityReplySubscribedNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    activityId: "Int!",
    context: "String",
    createdAt: "Int",
    activity: "ActivityUnion",
    user: "User",
  },
  ActivityLikeNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    activityId: "Int!",
    context: "String",
    createdAt: "Int",
    activity: "ActivityUnion",
    user: "User",
  },
  ActivityReplyLikeNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    activityId: "Int!",
    context: "String",
    createdAt: "Int",
    activity: "ActivityUnion",
    user: "User",
  },
  ThreadCommentMentionNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    commentId: "Int!",
    context: "String",
    createdAt: "Int",
    thread: "Thread",
    comment: "ThreadComment",
    user: "User",
  },
  Thread: {
    id: "Int!",
    title: "String",
    body: [
      {
        asHtml: "Boolean",
      },
      "String",
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
  },
  ThreadCategory: {
    id: "Int!",
    name: "String!",
  },
  ThreadComment: {
    id: "Int!",
    userId: "Int",
    threadId: "Int",
    comment: [
      {
        asHtml: "Boolean",
      },
      "String",
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
  },
  ThreadCommentReplyNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    commentId: "Int!",
    context: "String",
    createdAt: "Int",
    thread: "Thread",
    comment: "ThreadComment",
    user: "User",
  },
  ThreadCommentSubscribedNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    commentId: "Int!",
    context: "String",
    createdAt: "Int",
    thread: "Thread",
    comment: "ThreadComment",
    user: "User",
  },
  ThreadCommentLikeNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    commentId: "Int!",
    context: "String",
    createdAt: "Int",
    thread: "Thread",
    comment: "ThreadComment",
    user: "User",
  },
  ThreadLikeNotification: {
    id: "Int!",
    userId: "Int!",
    type: "NotificationType",
    threadId: "Int!",
    context: "String",
    createdAt: "Int",
    thread: "Thread",
    comment: "ThreadComment",
    user: "User",
  },
  RelatedMediaAdditionNotification: {
    id: "Int!",
    type: "NotificationType",
    mediaId: "Int!",
    context: "String",
    createdAt: "Int",
    media: "Media",
  },
  MediaDataChangeNotification: {
    id: "Int!",
    type: "NotificationType",
    mediaId: "Int!",
    context: "String",
    reason: "String",
    createdAt: "Int",
    media: "Media",
  },
  MediaMergeNotification: {
    id: "Int!",
    type: "NotificationType",
    mediaId: "Int!",
    deletedMediaTitles: ["String"],
    context: "String",
    reason: "String",
    createdAt: "Int",
    media: "Media",
  },
  MediaDeletionNotification: {
    id: "Int!",
    type: "NotificationType",
    deletedMediaTitle: "String",
    context: "String",
    reason: "String",
    createdAt: "Int",
  },
  ActivitySort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
    PINNED: "ENUM",
  },
  ThreadSort: {
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
  },
  ThreadCommentSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
  },
  LikeableType: {
    THREAD: "ENUM",
    THREAD_COMMENT: "ENUM",
    ACTIVITY: "ENUM",
    ACTIVITY_REPLY: "ENUM",
  },
  MediaListCollection: {
    lists: ["MediaListGroup"],
    user: "User",
    hasNextChunk: "Boolean",
    statusLists: [
      {
        asArray: "Boolean",
      },
      [["MediaList"]],
    ],
    customLists: [
      {
        asArray: "Boolean",
      },
      [["MediaList"]],
    ],
  },
  MediaListGroup: {
    entries: ["MediaList"],
    name: "String",
    isCustomList: "Boolean",
    isSplitCompletedList: "Boolean",
    status: "MediaListStatus",
  },
  ParsedMarkdown: {
    html: "String",
  },
  AniChartUser: {
    user: "User",
    settings: "Json",
    highlights: "Json",
  },
  SiteStatistics: {
    users: [
      {
        sort: ["SiteTrendSort"],
        page: "Int",
        perPage: "Int",
      },
      "SiteTrendConnection",
    ],
    anime: [
      {
        sort: ["SiteTrendSort"],
        page: "Int",
        perPage: "Int",
      },
      "SiteTrendConnection",
    ],
    manga: [
      {
        sort: ["SiteTrendSort"],
        page: "Int",
        perPage: "Int",
      },
      "SiteTrendConnection",
    ],
    characters: [
      {
        sort: ["SiteTrendSort"],
        page: "Int",
        perPage: "Int",
      },
      "SiteTrendConnection",
    ],
    staff: [
      {
        sort: ["SiteTrendSort"],
        page: "Int",
        perPage: "Int",
      },
      "SiteTrendConnection",
    ],
    studios: [
      {
        sort: ["SiteTrendSort"],
        page: "Int",
        perPage: "Int",
      },
      "SiteTrendConnection",
    ],
    reviews: [
      {
        sort: ["SiteTrendSort"],
        page: "Int",
        perPage: "Int",
      },
      "SiteTrendConnection",
    ],
  },
  SiteTrendSort: {
    DATE: "ENUM",
    DATE_DESC: "ENUM",
    COUNT: "ENUM",
    COUNT_DESC: "ENUM",
    CHANGE: "ENUM",
    CHANGE_DESC: "ENUM",
  },
  SiteTrendConnection: {
    edges: ["SiteTrendEdge"],
    nodes: ["SiteTrend"],
    pageInfo: "PageInfo",
  },
  SiteTrendEdge: {
    node: "SiteTrend",
  },
  SiteTrend: {
    date: "Int!",
    count: "Int!",
    change: "Int!",
  },
  ExternalLinkMediaType: {
    ANIME: "ENUM",
    MANGA: "ENUM",
    STAFF: "ENUM",
  },
  Mutation: {
    UpdateUser: [
      {
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
      "User",
    ],
    SaveMediaListEntry: [
      {
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
      "MediaList",
    ],
    UpdateMediaListEntries: [
      {
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
      ["MediaList"],
    ],
    DeleteMediaListEntry: [
      {
        id: "Int",
      },
      "Deleted",
    ],
    DeleteCustomList: [
      {
        customList: "String",
        type: "MediaType",
      },
      "Deleted",
    ],
    SaveTextActivity: [
      {
        id: "Int",
        text: "String",
        locked: "Boolean",
      },
      "TextActivity",
    ],
    SaveMessageActivity: [
      {
        id: "Int",
        message: "String",
        recipientId: "Int",
        private: "Boolean",
        locked: "Boolean",
        asMod: "Boolean",
      },
      "MessageActivity",
    ],
    SaveListActivity: [
      {
        id: "Int",
        locked: "Boolean",
      },
      "ListActivity",
    ],
    DeleteActivity: [
      {
        id: "Int",
      },
      "Deleted",
    ],
    ToggleActivityPin: [
      {
        id: "Int",
        pinned: "Boolean",
      },
      "ActivityUnion",
    ],
    ToggleActivitySubscription: [
      {
        activityId: "Int",
        subscribe: "Boolean",
      },
      "ActivityUnion",
    ],
    SaveActivityReply: [
      {
        id: "Int",
        activityId: "Int",
        text: "String",
        asMod: "Boolean",
      },
      "ActivityReply",
    ],
    DeleteActivityReply: [
      {
        id: "Int",
      },
      "Deleted",
    ],
    ToggleLike: [
      {
        id: "Int",
        type: "LikeableType",
      },
      ["User"],
    ],
    ToggleLikeV2: [
      {
        id: "Int",
        type: "LikeableType",
      },
      "LikeableUnion",
    ],
    ToggleFollow: [
      {
        userId: "Int",
      },
      "User",
    ],
    ToggleFavourite: [
      {
        animeId: "Int",
        mangaId: "Int",
        characterId: "Int",
        staffId: "Int",
        studioId: "Int",
      },
      "Favourites",
    ],
    UpdateFavouriteOrder: [
      {
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
      "Favourites",
    ],
    SaveReview: [
      {
        id: "Int",
        mediaId: "Int",
        body: "String",
        summary: "String",
        score: "Int",
        private: "Boolean",
      },
      "Review",
    ],
    DeleteReview: [
      {
        id: "Int",
      },
      "Deleted",
    ],
    RateReview: [
      {
        reviewId: "Int",
        rating: "ReviewRating",
      },
      "Review",
    ],
    SaveRecommendation: [
      {
        mediaId: "Int",
        mediaRecommendationId: "Int",
        rating: "RecommendationRating",
      },
      "Recommendation",
    ],
    SaveThread: [
      {
        id: "Int",
        title: "String",
        body: "String",
        categories: ["Int"],
        mediaCategories: ["Int"],
        sticky: "Boolean",
        locked: "Boolean",
      },
      "Thread",
    ],
    DeleteThread: [
      {
        id: "Int",
      },
      "Deleted",
    ],
    ToggleThreadSubscription: [
      {
        threadId: "Int",
        subscribe: "Boolean",
      },
      "Thread",
    ],
    SaveThreadComment: [
      {
        id: "Int",
        threadId: "Int",
        parentCommentId: "Int",
        comment: "String",
        locked: "Boolean",
      },
      "ThreadComment",
    ],
    DeleteThreadComment: [
      {
        id: "Int",
      },
      "Deleted",
    ],
    UpdateAniChartSettings: [
      {
        titleLanguage: "String",
        outgoingLinkProvider: "String",
        theme: "String",
        sort: "String",
      },
      "Json",
    ],
    UpdateAniChartHighlights: [
      {
        highlights: ["AniChartHighlightInput"],
      },
      "Json",
    ],
  },
  NotificationOptionInput: {
    type: "NotificationType",
    enabled: "Boolean",
  },
  MediaListOptionsInput: {
    sectionOrder: ["String"],
    splitCompletedSectionByFormat: "Boolean",
    customLists: ["String"],
    advancedScoring: ["String"],
    advancedScoringEnabled: "Boolean",
    theme: "String",
  },
  ListActivityOptionInput: {
    disabled: "Boolean",
    type: "MediaListStatus",
  },
  FuzzyDateInput: {
    year: "Int",
    month: "Int",
    day: "Int",
  },
  Deleted: {
    deleted: "Boolean",
  },
  LikeableUnion: [
    "ListActivity!",
    "TextActivity!",
    "MessageActivity!",
    "ActivityReply!",
    "Thread!",
    "ThreadComment!",
  ],
  AniChartHighlightInput: {
    mediaId: "Int",
    highlight: "String",
  },
  InternalPage: {
    mediaSubmissions: [
      {
        mediaId: "Int",
        submissionId: "Int",
        userId: "Int",
        assigneeId: "Int",
        status: "SubmissionStatus",
        type: "MediaType",
        sort: ["SubmissionSort"],
      },
      ["MediaSubmission"],
    ],
    characterSubmissions: [
      {
        characterId: "Int",
        userId: "Int",
        assigneeId: "Int",
        status: "SubmissionStatus",
        sort: ["SubmissionSort"],
      },
      ["CharacterSubmission"],
    ],
    staffSubmissions: [
      {
        staffId: "Int",
        userId: "Int",
        assigneeId: "Int",
        status: "SubmissionStatus",
        sort: ["SubmissionSort"],
      },
      ["StaffSubmission"],
    ],
    revisionHistory: [
      {
        userId: "Int",
        mediaId: "Int",
        characterId: "Int",
        staffId: "Int",
        studioId: "Int",
      },
      ["RevisionHistory"],
    ],
    reports: [
      {
        reporterId: "Int",
        reportedId: "Int",
      },
      ["Report"],
    ],
    modActions: [
      {
        userId: "Int",
        modId: "Int",
      },
      ["ModAction"],
    ],
    userBlockSearch: [
      {
        search: "String",
      },
      ["User"],
    ],
    pageInfo: "PageInfo",
    users: [
      {
        id: "Int",
        name: "String",
        isModerator: "Boolean",
        search: "String",
        sort: ["UserSort"],
      },
      ["User"],
    ],
    media: [
      {
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
      ["Media"],
    ],
    characters: [
      {
        id: "Int",
        isBirthday: "Boolean",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["CharacterSort"],
      },
      ["Character"],
    ],
    staff: [
      {
        id: "Int",
        isBirthday: "Boolean",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["StaffSort"],
      },
      ["Staff"],
    ],
    studios: [
      {
        id: "Int",
        search: "String",
        id_not: "Int",
        id_in: ["Int"],
        id_not_in: ["Int"],
        sort: ["StudioSort"],
      },
      ["Studio"],
    ],
    mediaList: [
      {
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
      ["MediaList"],
    ],
    airingSchedules: [
      {
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
      ["AiringSchedule"],
    ],
    mediaTrends: [
      {
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
      ["MediaTrend"],
    ],
    notifications: [
      {
        type: "NotificationType",
        resetNotificationCount: "Boolean",
        type_in: ["NotificationType"],
      },
      ["NotificationUnion"],
    ],
    followers: [
      {
        userId: "Int!",
        sort: ["UserSort"],
      },
      ["User"],
    ],
    following: [
      {
        userId: "Int!",
        sort: ["UserSort"],
      },
      ["User"],
    ],
    activities: [
      {
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
      ["ActivityUnion"],
    ],
    activityReplies: [
      {
        id: "Int",
        activityId: "Int",
      },
      ["ActivityReply"],
    ],
    threads: [
      {
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
      ["Thread"],
    ],
    threadComments: [
      {
        id: "Int",
        threadId: "Int",
        userId: "Int",
        sort: ["ThreadCommentSort"],
      },
      ["ThreadComment"],
    ],
    reviews: [
      {
        id: "Int",
        mediaId: "Int",
        userId: "Int",
        mediaType: "MediaType",
        sort: ["ReviewSort"],
      },
      ["Review"],
    ],
    recommendations: [
      {
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
      ["Recommendation"],
    ],
    likes: [
      {
        likeableId: "Int",
        type: "LikeableType",
      },
      ["User"],
    ],
  },
  SubmissionStatus: {
    PENDING: "ENUM",
    REJECTED: "ENUM",
    PARTIALLY_ACCEPTED: "ENUM",
    ACCEPTED: "ENUM",
  },
  SubmissionSort: {
    ID: "ENUM",
    ID_DESC: "ENUM",
  },
  MediaSubmission: {
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
  },
  MediaSubmissionComparison: {
    submission: "MediaSubmissionEdge",
    character: "MediaCharacter",
    staff: "StaffEdge",
    studio: "StudioEdge",
    externalLink: "MediaExternalLink",
  },
  MediaSubmissionEdge: {
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
  },
  MediaCharacter: {
    id: "Int",
    role: "CharacterRole",
    roleNotes: "String",
    dubGroup: "String",
    characterName: "String",
    character: "Character",
    voiceActor: "Staff",
  },
  CharacterSubmission: {
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
  },
  StaffSubmission: {
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
  },
  RevisionHistory: {
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
  },
  RevisionHistoryAction: {
    CREATE: "ENUM",
    EDIT: "ENUM",
  },
  Report: {
    id: "Int!",
    reporter: "User",
    reported: "User",
    reason: "String",
    createdAt: "Int",
    cleared: "Boolean",
  },
  ModAction: {
    id: "Int!",
    user: "User",
    mod: "User",
    type: "ModActionType",
    objectId: "Int",
    objectType: "String",
    data: "String",
    createdAt: "Int!",
  },
  ModActionType: {
    NOTE: "ENUM",
    BAN: "ENUM",
    DELETE: "ENUM",
    EDIT: "ENUM",
    EXPIRE: "ENUM",
    REPORT: "ENUM",
    RESET: "ENUM",
    ANON: "ENUM",
  },
  MediaTitleInput: {
    romaji: "String",
    english: "String",
    native: "String",
  },
  AiringScheduleInput: {
    airingAt: "Int",
    episode: "Int",
    timeUntilAiring: "Int",
  },
  MediaExternalLinkInput: {
    id: "Int!",
    url: "String!",
    site: "String!",
  },
  CharacterNameInput: {
    first: "String",
    middle: "String",
    last: "String",
    native: "String",
    alternative: ["String"],
    alternativeSpoiler: ["String"],
  },
  CharacterSubmissionConnection: {
    edges: ["CharacterSubmissionEdge"],
    nodes: ["CharacterSubmission"],
    pageInfo: "PageInfo",
  },
  CharacterSubmissionEdge: {
    node: "CharacterSubmission",
    role: "CharacterRole",
    voiceActors: ["Staff"],
    submittedVoiceActors: ["StaffSubmission"],
  },
  StaffNameInput: {
    first: "String",
    middle: "String",
    last: "String",
    native: "String",
    alternative: ["String"],
  },
  UserModData: {
    alts: ["User"],
    bans: "Json",
    ip: "Json",
    counts: "Json",
    privacy: "Int",
    email: "String",
  },
  ID: "",
} as const;
