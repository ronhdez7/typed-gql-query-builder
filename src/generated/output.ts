import {
  __Schema,
  __Directive,
  __DirectiveLocation,
  __EnumValue,
  __Field,
  __InputValue,
  __Type,
  __TypeKind,
} from "../types/schema";
export type Query = {
  Page: Page | null;
  Media: Media | null;
  MediaTrend: MediaTrend | null;
  AiringSchedule: AiringSchedule | null;
  Character: Character | null;
  Staff: Staff | null;
  MediaList: MediaList | null;
  MediaListCollection: MediaListCollection | null;
  GenreCollection: String[] | null;
  MediaTagCollection: MediaTag[] | null;
  User: User | null;
  Viewer: User | null;
  Notification: NotificationUnion | null;
  Studio: Studio | null;
  Review: Review | null;
  Activity: ActivityUnion | null;
  ActivityReply: ActivityReply | null;
  Following: User | null;
  Follower: User | null;
  Thread: Thread | null;
  ThreadComment: ThreadComment[] | null;
  Recommendation: Recommendation | null;
  Like: User | null;
  Markdown: ParsedMarkdown | null;
  AniChartUser: AniChartUser | null;
  SiteStatistics: SiteStatistics | null;
  ExternalLinkSourceCollection: MediaExternalLink[] | null;
};

export type Int = number;

export type Page = {
  pageInfo: PageInfo | null;
  users: User[] | null;
  media: Media[] | null;
  characters: Character[] | null;
  staff: Staff[] | null;
  studios: Studio[] | null;
  mediaList: MediaList[] | null;
  airingSchedules: AiringSchedule[] | null;
  mediaTrends: MediaTrend[] | null;
  notifications: NotificationUnion[] | null;
  followers: User[] | null;
  following: User[] | null;
  activities: ActivityUnion[] | null;
  activityReplies: ActivityReply[] | null;
  threads: Thread[] | null;
  threadComments: ThreadComment[] | null;
  reviews: Review[] | null;
  recommendations: Recommendation[] | null;
  likes: User[] | null;
};

export type PageInfo = {
  total: Int;
  perPage: Int;
  currentPage: Int;
  lastPage: Int;
  hasNextPage: Boolean;
};

export type Boolean = boolean;

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
  about: String;
  avatar: UserAvatar | null;
  bannerImage: String;
  isFollowing: Boolean;
  isFollower: Boolean;
  isBlocked: Boolean;
  bans: Json;
  options: UserOptions | null;
  mediaListOptions: MediaListOptions | null;
  favourites: Favourites | null;
  statistics: UserStatisticTypes | null;
  unreadNotificationCount: Int;
  siteUrl: String;
  donatorTier: Int;
  donatorBadge: String;
  moderatorRoles: ModRole[] | null;
  createdAt: Int;
  updatedAt: Int;
  stats: UserStats | null;
  moderatorStatus: String;
  previousNames: UserPreviousName[] | null;
};

export type UserAvatar = {
  large: String;
  medium: String;
};

export type Json = object;

export type UserOptions = {
  titleLanguage: UserTitleLanguage | null;
  displayAdultContent: Boolean;
  airingNotifications: Boolean;
  profileColor: String;
  notificationOptions: NotificationOption[] | null;
  timezone: String;
  activityMergeTime: Int;
  staffNameLanguage: UserStaffNameLanguage | null;
  restrictMessagesToFollowing: Boolean;
  disabledListActivity: ListActivityOption[] | null;
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
  enabled: Boolean;
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
  disabled: Boolean;
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
  rowOrder: String;
  useLegacyLists: Boolean;
  animeList: MediaListTypeOptions | null;
  mangaList: MediaListTypeOptions | null;
  sharedTheme: Json;
  sharedThemeEnabled: Boolean;
};

export enum ScoreFormat {
  POINT_100 = "POINT_100",
  POINT_10_DECIMAL = "POINT_10_DECIMAL",
  POINT_10 = "POINT_10",
  POINT_5 = "POINT_5",
  POINT_3 = "POINT_3",
}

export type MediaListTypeOptions = {
  sectionOrder: String[] | null;
  splitCompletedSectionByFormat: Boolean;
  theme: Json;
  customLists: String[] | null;
  advancedScoring: String[] | null;
  advancedScoringEnabled: Boolean;
};

export type Favourites = {
  anime: MediaConnection | null;
  manga: MediaConnection | null;
  characters: CharacterConnection | null;
  staff: StaffConnection | null;
  studios: StudioConnection | null;
};

export type MediaConnection = {
  edges: MediaEdge[] | null;
  nodes: Media[] | null;
  pageInfo: PageInfo | null;
};

export type MediaEdge = {
  node: Media | null;
  id: Int;
  relationType: MediaRelation | null;
  isMainStudio: Boolean;
  characters: Character[] | null;
  characterRole: CharacterRole | null;
  characterName: String;
  roleNotes: String;
  dubGroup: String;
  staffRole: String;
  voiceActors: Staff[] | null;
  voiceActorRoles: StaffRoleType[] | null;
  favouriteOrder: Int;
};

export type Media = {
  id: Int;
  idMal: Int;
  title: MediaTitle | null;
  type: MediaType | null;
  format: MediaFormat | null;
  status: MediaStatus | null;
  description: String;
  startDate: FuzzyDate | null;
  endDate: FuzzyDate | null;
  season: MediaSeason | null;
  seasonYear: Int;
  seasonInt: Int;
  episodes: Int;
  duration: Int;
  chapters: Int;
  volumes: Int;
  countryOfOrigin: CountryCode;
  isLicensed: Boolean;
  source: MediaSource | null;
  hashtag: String;
  trailer: MediaTrailer | null;
  updatedAt: Int;
  coverImage: MediaCoverImage | null;
  bannerImage: String;
  genres: String[] | null;
  synonyms: String[] | null;
  averageScore: Int;
  meanScore: Int;
  popularity: Int;
  isLocked: Boolean;
  trending: Int;
  favourites: Int;
  tags: MediaTag[] | null;
  relations: MediaConnection | null;
  characters: CharacterConnection | null;
  staff: StaffConnection | null;
  studios: StudioConnection | null;
  isFavourite: Boolean;
  isFavouriteBlocked: Boolean;
  isAdult: Boolean;
  nextAiringEpisode: AiringSchedule | null;
  airingSchedule: AiringScheduleConnection | null;
  trends: MediaTrendConnection | null;
  externalLinks: MediaExternalLink[] | null;
  streamingEpisodes: MediaStreamingEpisode[] | null;
  rankings: MediaRank[] | null;
  mediaListEntry: MediaList | null;
  reviews: ReviewConnection | null;
  recommendations: RecommendationConnection | null;
  stats: MediaStats | null;
  siteUrl: String;
  autoCreateForumThread: Boolean;
  isRecommendationBlocked: Boolean;
  isReviewBlocked: Boolean;
  modNotes: String;
};

export type MediaTitle = {
  romaji: String;
  english: String;
  native: String;
  userPreferred: String;
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
  year: Int;
  month: Int;
  day: Int;
};

export enum MediaSeason {
  WINTER = "WINTER",
  SPRING = "SPRING",
  SUMMER = "SUMMER",
  FALL = "FALL",
}

export type CountryCode = unknown;

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
  id: String;
  site: String;
  thumbnail: String;
};

export type MediaCoverImage = {
  extraLarge: String;
  large: String;
  medium: String;
  color: String;
};

export type MediaTag = {
  id: Int;
  name: String;
  description: String;
  category: String;
  rank: Int;
  isGeneralSpoiler: Boolean;
  isMediaSpoiler: Boolean;
  isAdult: Boolean;
  userId: Int;
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
  edges: CharacterEdge[] | null;
  nodes: Character[] | null;
  pageInfo: PageInfo | null;
};

export type CharacterEdge = {
  node: Character | null;
  id: Int;
  role: CharacterRole | null;
  name: String;
  voiceActors: Staff[] | null;
  voiceActorRoles: StaffRoleType[] | null;
  media: Media[] | null;
  favouriteOrder: Int;
};

export type Character = {
  id: Int;
  name: CharacterName | null;
  image: CharacterImage | null;
  description: String;
  gender: String;
  dateOfBirth: FuzzyDate | null;
  age: String;
  bloodType: String;
  isFavourite: Boolean;
  isFavouriteBlocked: Boolean;
  siteUrl: String;
  media: MediaConnection | null;
  updatedAt: Int;
  favourites: Int;
  modNotes: String;
};

export type CharacterName = {
  first: String;
  middle: String;
  last: String;
  full: String;
  native: String;
  alternative: String[] | null;
  alternativeSpoiler: String[] | null;
  userPreferred: String;
};

export type CharacterImage = {
  large: String;
  medium: String;
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
  languageV2: String;
  image: StaffImage | null;
  description: String;
  primaryOccupations: String[] | null;
  gender: String;
  dateOfBirth: FuzzyDate | null;
  dateOfDeath: FuzzyDate | null;
  age: Int;
  yearsActive: Int[] | null;
  homeTown: String;
  bloodType: String;
  isFavourite: Boolean;
  isFavouriteBlocked: Boolean;
  siteUrl: String;
  staffMedia: MediaConnection | null;
  characters: CharacterConnection | null;
  characterMedia: MediaConnection | null;
  updatedAt: Int;
  staff: Staff | null;
  submitter: User | null;
  submissionStatus: Int;
  submissionNotes: String;
  favourites: Int;
  modNotes: String;
};

export type StaffName = {
  first: String;
  middle: String;
  last: String;
  full: String;
  native: String;
  alternative: String[] | null;
  userPreferred: String;
};

export type StaffImage = {
  large: String;
  medium: String;
};

export type StaffRoleType = {
  voiceActor: Staff | null;
  roleNotes: String;
  dubGroup: String;
};

export type StaffConnection = {
  edges: StaffEdge[] | null;
  nodes: Staff[] | null;
  pageInfo: PageInfo | null;
};

export type StaffEdge = {
  node: Staff | null;
  id: Int;
  role: String;
  favouriteOrder: Int;
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
  edges: StudioEdge[] | null;
  nodes: Studio[] | null;
  pageInfo: PageInfo | null;
};

export type StudioEdge = {
  node: Studio | null;
  id: Int;
  isMain: Boolean;
  favouriteOrder: Int;
};

export type Studio = {
  id: Int;
  name: String;
  isAnimationStudio: Boolean;
  media: MediaConnection | null;
  siteUrl: String;
  isFavourite: Boolean;
  favourites: Int;
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
  edges: AiringScheduleEdge[] | null;
  nodes: AiringSchedule[] | null;
  pageInfo: PageInfo | null;
};

export type AiringScheduleEdge = {
  node: AiringSchedule | null;
  id: Int;
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
  edges: MediaTrendEdge[] | null;
  nodes: MediaTrend[] | null;
  pageInfo: PageInfo | null;
};

export type MediaTrendEdge = {
  node: MediaTrend | null;
};

export type MediaTrend = {
  mediaId: Int;
  date: Int;
  trending: Int;
  averageScore: Int;
  popularity: Int;
  inProgress: Int;
  releasing: Boolean;
  episode: Int;
  media: Media | null;
};

export type MediaExternalLink = {
  id: Int;
  url: String;
  site: String;
  siteId: Int;
  type: ExternalLinkType | null;
  language: String;
  color: String;
  icon: String;
  notes: String;
  isDisabled: Boolean;
};

export enum ExternalLinkType {
  INFO = "INFO",
  STREAMING = "STREAMING",
  SOCIAL = "SOCIAL",
}

export type MediaStreamingEpisode = {
  title: String;
  thumbnail: String;
  url: String;
  site: String;
};

export type MediaRank = {
  id: Int;
  rank: Int;
  type: MediaRankType;
  format: MediaFormat;
  year: Int;
  season: MediaSeason | null;
  allTime: Boolean;
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
  score: Float;
  progress: Int;
  progressVolumes: Int;
  repeat: Int;
  priority: Int;
  private: Boolean;
  notes: String;
  hiddenFromStatusLists: Boolean;
  customLists: Json;
  advancedScores: Json;
  startedAt: FuzzyDate | null;
  completedAt: FuzzyDate | null;
  updatedAt: Int;
  createdAt: Int;
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
  edges: ReviewEdge[] | null;
  nodes: Review[] | null;
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
  summary: String;
  body: String;
  rating: Int;
  ratingAmount: Int;
  userRating: ReviewRating | null;
  score: Int;
  private: Boolean;
  siteUrl: String;
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
  edges: RecommendationEdge[] | null;
  nodes: Recommendation[] | null;
  pageInfo: PageInfo | null;
};

export type RecommendationEdge = {
  node: Recommendation | null;
};

export type Recommendation = {
  id: Int;
  rating: Int;
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
  scoreDistribution: ScoreDistribution[] | null;
  statusDistribution: StatusDistribution[] | null;
  airingProgression: AiringProgression[] | null;
};

export type ScoreDistribution = {
  score: Int;
  amount: Int;
};

export type StatusDistribution = {
  status: MediaListStatus | null;
  amount: Int;
};

export type AiringProgression = {
  episode: Float;
  score: Float;
  watching: Int;
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
  formats: UserFormatStatistic[] | null;
  statuses: UserStatusStatistic[] | null;
  scores: UserScoreStatistic[] | null;
  lengths: UserLengthStatistic[] | null;
  releaseYears: UserReleaseYearStatistic[] | null;
  startYears: UserStartYearStatistic[] | null;
  genres: UserGenreStatistic[] | null;
  tags: UserTagStatistic[] | null;
  countries: UserCountryStatistic[] | null;
  voiceActors: UserVoiceActorStatistic[] | null;
  staff: UserStaffStatistic[] | null;
  studios: UserStudioStatistic[] | null;
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
  mediaIds: Int[];
  format: MediaFormat | null;
};

export type UserStatusStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  status: MediaListStatus | null;
};

export type UserScoreStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  score: Int;
};

export type UserLengthStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  length: String;
};

export type UserReleaseYearStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  releaseYear: Int;
};

export type UserStartYearStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  startYear: Int;
};

export type UserGenreStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  genre: String;
};

export type UserTagStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  tag: MediaTag | null;
};

export type UserCountryStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  country: CountryCode;
};

export type UserVoiceActorStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  voiceActor: Staff | null;
  characterIds: Int[];
};

export type UserStaffStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
  staff: Staff | null;
};

export type UserStudioStatistic = {
  count: Int;
  meanScore: Float;
  minutesWatched: Int;
  chaptersRead: Int;
  mediaIds: Int[];
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
  watchedTime: Int;
  chaptersRead: Int;
  activityHistory: UserActivityHistory[] | null;
  animeStatusDistribution: StatusDistribution[] | null;
  mangaStatusDistribution: StatusDistribution[] | null;
  animeScoreDistribution: ScoreDistribution[] | null;
  mangaScoreDistribution: ScoreDistribution[] | null;
  animeListScores: ListScoreStats | null;
  mangaListScores: ListScoreStats | null;
  favouredGenresOverview: GenreStats[] | null;
  favouredGenres: GenreStats[] | null;
  favouredTags: TagStats[] | null;
  favouredActors: StaffStats[] | null;
  favouredStaff: StaffStats[] | null;
  favouredStudios: StudioStats[] | null;
  favouredYears: YearStats[] | null;
  favouredFormats: FormatStats[] | null;
};

export type UserActivityHistory = {
  date: Int;
  amount: Int;
  level: Int;
};

export type ListScoreStats = {
  meanScore: Int;
  standardDeviation: Int;
};

export type GenreStats = {
  genre: String;
  amount: Int;
  meanScore: Int;
  timeWatched: Int;
};

export type TagStats = {
  tag: MediaTag | null;
  amount: Int;
  meanScore: Int;
  timeWatched: Int;
};

export type StaffStats = {
  staff: Staff | null;
  amount: Int;
  meanScore: Int;
  timeWatched: Int;
};

export type StudioStats = {
  studio: Studio | null;
  amount: Int;
  meanScore: Int;
  timeWatched: Int;
};

export type YearStats = {
  year: Int;
  amount: Int;
  meanScore: Int;
};

export type FormatStats = {
  format: MediaFormat | null;
  amount: Int;
};

export type UserPreviousName = {
  name: String;
  createdAt: Int;
  updatedAt: Int;
};

export type FuzzyDateInt = unknown;

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
  contexts: String[] | null;
  createdAt: Int;
  media: Media | null;
};

export type FollowingNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  context: String;
  createdAt: Int;
  user: User | null;
};

export type ActivityMessageNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String;
  createdAt: Int;
  message: MessageActivity | null;
  user: User | null;
};

export type MessageActivity = {
  id: Int;
  recipientId: Int;
  messengerId: Int;
  type: ActivityType | null;
  replyCount: Int;
  message: String;
  isLocked: Boolean;
  isSubscribed: Boolean;
  likeCount: Int;
  isLiked: Boolean;
  isPrivate: Boolean;
  siteUrl: String;
  createdAt: Int;
  recipient: User | null;
  messenger: User | null;
  replies: ActivityReply[] | null;
  likes: User[] | null;
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
  userId: Int;
  activityId: Int;
  text: String;
  likeCount: Int;
  isLiked: Boolean;
  createdAt: Int;
  user: User | null;
  likes: User[] | null;
};

export type ActivityMentionNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String;
  createdAt: Int;
  activity: ActivityUnion | null;
  user: User | null;
};

export type ActivityUnion = TextActivity | ListActivity | MessageActivity;

export type TextActivity = {
  id: Int;
  userId: Int;
  type: ActivityType | null;
  replyCount: Int;
  text: String;
  siteUrl: String;
  isLocked: Boolean;
  isSubscribed: Boolean;
  likeCount: Int;
  isLiked: Boolean;
  isPinned: Boolean;
  createdAt: Int;
  user: User | null;
  replies: ActivityReply[] | null;
  likes: User[] | null;
};

export type ListActivity = {
  id: Int;
  userId: Int;
  type: ActivityType | null;
  replyCount: Int;
  status: String;
  progress: String;
  isLocked: Boolean;
  isSubscribed: Boolean;
  likeCount: Int;
  isLiked: Boolean;
  isPinned: Boolean;
  siteUrl: String;
  createdAt: Int;
  user: User | null;
  media: Media | null;
  replies: ActivityReply[] | null;
  likes: User[] | null;
};

export type ActivityReplyNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String;
  createdAt: Int;
  activity: ActivityUnion | null;
  user: User | null;
};

export type ActivityReplySubscribedNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String;
  createdAt: Int;
  activity: ActivityUnion | null;
  user: User | null;
};

export type ActivityLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String;
  createdAt: Int;
  activity: ActivityUnion | null;
  user: User | null;
};

export type ActivityReplyLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  activityId: Int;
  context: String;
  createdAt: Int;
  activity: ActivityUnion | null;
  user: User | null;
};

export type ThreadCommentMentionNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String;
  createdAt: Int;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type Thread = {
  id: Int;
  title: String;
  body: String;
  userId: Int;
  replyUserId: Int;
  replyCommentId: Int;
  replyCount: Int;
  viewCount: Int;
  isLocked: Boolean;
  isSticky: Boolean;
  isSubscribed: Boolean;
  likeCount: Int;
  isLiked: Boolean;
  repliedAt: Int;
  createdAt: Int;
  updatedAt: Int;
  user: User | null;
  replyUser: User | null;
  likes: User[] | null;
  siteUrl: String;
  categories: ThreadCategory[] | null;
  mediaCategories: Media[] | null;
};

export type ThreadCategory = {
  id: Int;
  name: String;
};

export type ThreadComment = {
  id: Int;
  userId: Int;
  threadId: Int;
  comment: String;
  likeCount: Int;
  isLiked: Boolean;
  siteUrl: String;
  createdAt: Int;
  updatedAt: Int;
  thread: Thread | null;
  user: User | null;
  likes: User[] | null;
  childComments: Json;
  isLocked: Boolean;
};

export type ThreadCommentReplyNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String;
  createdAt: Int;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type ThreadCommentSubscribedNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String;
  createdAt: Int;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type ThreadCommentLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  commentId: Int;
  context: String;
  createdAt: Int;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type ThreadLikeNotification = {
  id: Int;
  userId: Int;
  type: NotificationType | null;
  threadId: Int;
  context: String;
  createdAt: Int;
  thread: Thread | null;
  comment: ThreadComment | null;
  user: User | null;
};

export type RelatedMediaAdditionNotification = {
  id: Int;
  type: NotificationType | null;
  mediaId: Int;
  context: String;
  createdAt: Int;
  media: Media | null;
};

export type MediaDataChangeNotification = {
  id: Int;
  type: NotificationType | null;
  mediaId: Int;
  context: String;
  reason: String;
  createdAt: Int;
  media: Media | null;
};

export type MediaMergeNotification = {
  id: Int;
  type: NotificationType | null;
  mediaId: Int;
  deletedMediaTitles: String[] | null;
  context: String;
  reason: String;
  createdAt: Int;
  media: Media | null;
};

export type MediaDeletionNotification = {
  id: Int;
  type: NotificationType | null;
  deletedMediaTitle: String;
  context: String;
  reason: String;
  createdAt: Int;
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
  lists: MediaListGroup[] | null;
  user: User | null;
  hasNextChunk: Boolean;
  statusLists: MediaList[][] | null;
  customLists: MediaList[][] | null;
};

export type MediaListGroup = {
  entries: MediaList[] | null;
  name: String;
  isCustomList: Boolean;
  isSplitCompletedList: Boolean;
  status: MediaListStatus | null;
};

export type ParsedMarkdown = {
  html: String;
};

export type AniChartUser = {
  user: User | null;
  settings: Json;
  highlights: Json;
};

export type SiteStatistics = {
  users: SiteTrendConnection | null;
  anime: SiteTrendConnection | null;
  manga: SiteTrendConnection | null;
  characters: SiteTrendConnection | null;
  staff: SiteTrendConnection | null;
  studios: SiteTrendConnection | null;
  reviews: SiteTrendConnection | null;
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
  edges: SiteTrendEdge[] | null;
  nodes: SiteTrend[] | null;
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
  UpdateUser: User | null;
  SaveMediaListEntry: MediaList | null;
  UpdateMediaListEntries: MediaList[] | null;
  DeleteMediaListEntry: Deleted | null;
  DeleteCustomList: Deleted | null;
  SaveTextActivity: TextActivity | null;
  SaveMessageActivity: MessageActivity | null;
  SaveListActivity: ListActivity | null;
  DeleteActivity: Deleted | null;
  ToggleActivityPin: ActivityUnion | null;
  ToggleActivitySubscription: ActivityUnion | null;
  SaveActivityReply: ActivityReply | null;
  DeleteActivityReply: Deleted | null;
  ToggleLike: User[] | null;
  ToggleLikeV2: LikeableUnion | null;
  ToggleFollow: User | null;
  ToggleFavourite: Favourites | null;
  UpdateFavouriteOrder: Favourites | null;
  SaveReview: Review | null;
  DeleteReview: Deleted | null;
  RateReview: Review | null;
  SaveRecommendation: Recommendation | null;
  SaveThread: Thread | null;
  DeleteThread: Deleted | null;
  ToggleThreadSubscription: Thread | null;
  SaveThreadComment: ThreadComment | null;
  DeleteThreadComment: Deleted | null;
  UpdateAniChartSettings: Json;
  UpdateAniChartHighlights: Json;
};

export type NotificationOptionInput = {
  type: NotificationType | null;
  enabled: Boolean;
};

export type MediaListOptionsInput = {
  sectionOrder: String[] | null;
  splitCompletedSectionByFormat: Boolean;
  customLists: String[] | null;
  advancedScoring: String[] | null;
  advancedScoringEnabled: Boolean;
  theme: String;
};

export type ListActivityOptionInput = {
  disabled: Boolean;
  type: MediaListStatus | null;
};

export type FuzzyDateInput = {
  year: Int;
  month: Int;
  day: Int;
};

export type Deleted = {
  deleted: Boolean;
};

export type LikeableUnion =
  | ListActivity
  | TextActivity
  | MessageActivity
  | ActivityReply
  | Thread
  | ThreadComment;

export type AniChartHighlightInput = {
  mediaId: Int;
  highlight: String;
};

export type InternalPage = {
  mediaSubmissions: MediaSubmission[] | null;
  characterSubmissions: CharacterSubmission[] | null;
  staffSubmissions: StaffSubmission[] | null;
  revisionHistory: RevisionHistory[] | null;
  reports: Report[] | null;
  modActions: ModAction[] | null;
  userBlockSearch: User[] | null;
  pageInfo: PageInfo | null;
  users: User[] | null;
  media: Media[] | null;
  characters: Character[] | null;
  staff: Staff[] | null;
  studios: Studio[] | null;
  mediaList: MediaList[] | null;
  airingSchedules: AiringSchedule[] | null;
  mediaTrends: MediaTrend[] | null;
  notifications: NotificationUnion[] | null;
  followers: User[] | null;
  following: User[] | null;
  activities: ActivityUnion[] | null;
  activityReplies: ActivityReply[] | null;
  threads: Thread[] | null;
  threadComments: ThreadComment[] | null;
  reviews: Review[] | null;
  recommendations: Recommendation[] | null;
  likes: User[] | null;
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
  submitterStats: Json;
  notes: String;
  source: String;
  changes: String[] | null;
  locked: Boolean;
  media: Media | null;
  submission: Media | null;
  characters: MediaSubmissionComparison[] | null;
  staff: MediaSubmissionComparison[] | null;
  studios: MediaSubmissionComparison[] | null;
  relations: MediaEdge[] | null;
  externalLinks: MediaSubmissionComparison[] | null;
  createdAt: Int;
};

export type MediaSubmissionComparison = {
  submission: MediaSubmissionEdge | null;
  character: MediaCharacter | null;
  staff: StaffEdge | null;
  studio: StudioEdge | null;
  externalLink: MediaExternalLink | null;
};

export type MediaSubmissionEdge = {
  id: Int;
  characterRole: CharacterRole | null;
  staffRole: String;
  roleNotes: String;
  dubGroup: String;
  characterName: String;
  isMain: Boolean;
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
  id: Int;
  role: CharacterRole | null;
  roleNotes: String;
  dubGroup: String;
  characterName: String;
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
  notes: String;
  source: String;
  locked: Boolean;
  createdAt: Int;
};

export type StaffSubmission = {
  id: Int;
  staff: Staff | null;
  submission: Staff | null;
  submitter: User | null;
  assignee: User | null;
  status: SubmissionStatus | null;
  notes: String;
  source: String;
  locked: Boolean;
  createdAt: Int;
};

export type RevisionHistory = {
  id: Int;
  action: RevisionHistoryAction | null;
  changes: Json;
  user: User | null;
  media: Media | null;
  character: Character | null;
  staff: Staff | null;
  studio: Studio | null;
  externalLink: MediaExternalLink | null;
  createdAt: Int;
};

export enum RevisionHistoryAction {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

export type Report = {
  id: Int;
  reporter: User | null;
  reported: User | null;
  reason: String;
  createdAt: Int;
  cleared: Boolean;
};

export type ModAction = {
  id: Int;
  user: User | null;
  mod: User | null;
  type: ModActionType | null;
  objectId: Int;
  objectType: String;
  data: String;
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
  romaji: String;
  english: String;
  native: String;
};

export type AiringScheduleInput = {
  airingAt: Int;
  episode: Int;
  timeUntilAiring: Int;
};

export type MediaExternalLinkInput = {
  id: Int;
  url: String;
  site: String;
};

export type CharacterNameInput = {
  first: String;
  middle: String;
  last: String;
  native: String;
  alternative: String[] | null;
  alternativeSpoiler: String[] | null;
};

export type CharacterSubmissionConnection = {
  edges: CharacterSubmissionEdge[] | null;
  nodes: CharacterSubmission[] | null;
  pageInfo: PageInfo | null;
};

export type CharacterSubmissionEdge = {
  node: CharacterSubmission | null;
  role: CharacterRole | null;
  voiceActors: Staff[] | null;
  submittedVoiceActors: StaffSubmission[] | null;
};

export type StaffNameInput = {
  first: String;
  middle: String;
  last: String;
  native: String;
  alternative: String[] | null;
};

export type UserModData = {
  alts: User[] | null;
  bans: Json;
  ip: Json;
  counts: Json;
  privacy: Int;
  email: String;
};

export type ID = string;
