module.exports = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/api/auth/google',
      },
    ]
  },
  images: {
    // remotePatterns 실험버전 끝나면 사용 고려. 포트와 프로토콜을 제한할 수 있음.
    // 지금 domains는 도메인 밖에 설정 못함
    // https://nextjs.org/docs/api-reference/next/image#remote-patterns
    domains: [
      '118.67.133.110',
      'lh3.googleusercontent.com', // 구글 프로필이미지 도메인으로 변경시켜야함
      'kr.object.ncloudstorage.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
