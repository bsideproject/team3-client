declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}

declare module '*.svg' {
  import React from 'react'
  const svg: React.FC<React.SVGProps<SVGSVGElement>>
  export default svg
}
