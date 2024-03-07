/// <reference types="vite/client" />

type URL = string

interface ImportMetaEnv {
  readonly VITE_API_URL: URL
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
