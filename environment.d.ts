declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly API_URL: string
    readonly AWS_ACCESS_KEY_ID: string
    readonly AWS_SECRET_ACCESS_KEY: string
    readonly NEXT_PUBLIC_STORAGE_BUCKET: string
  }
}
