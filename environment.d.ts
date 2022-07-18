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
  }
}
