/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com'
            },
            {
                hostname: 'avatars.githubusercontent.com'
            }
        ]
    }
}

module.exports = nextConfig
