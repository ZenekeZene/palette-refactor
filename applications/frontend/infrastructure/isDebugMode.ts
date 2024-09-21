export const isDebugMode =
  process.env.NODE_ENV === 'development' &&
  import.meta.env.ENV_MODE_DEBUG === 'true'
