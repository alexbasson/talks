export type Language = 'java' | 'python'

export const language: Language =
  (process.env.NEXT_PUBLIC_CODE_LANGUAGE as Language) || 'python'
