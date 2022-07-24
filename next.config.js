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
}
