const withNextIntl = require('next-intl/plugin')();
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer(withNextIntl({
    reactStrictMode: true, 
    swcMinify: true,
    experimental: {
      serverActions: true,
    },
    serverRuntimeConfig: {
        ADMINISTER_EMAIL: process.env.ADMINISTER_EMAIL,
        GMAIL_EMAIL: process.env.GMAIL_EMAIL,
        GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,
        GMAIL_CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET,
        GMAIL_CLIENT_ID: process.env.GMAIL_CLIENT_ID,
        SENDER_MAIL_HOST: process.env.SENDER_MAIL_HOST,
        SENDER_MAIL_PORT: process.env.SENDER_MAIL_PORT,
        SENDER_MAIL_USER: process.env.SENDER_MAIL_USER,
        SENDER_USER_PASSWORD: process.env.SENDER_USER_PASSWORD,
        SECURE_CONNECTION: process.env.SECURE_CONNECTION,
        TLS_CIPHERS: process.env.TLS_CIPHERS,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
        FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
        FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID,
        FIREBASE_CERT_URL: process.env.FIREBASE_CERT_URL,
        FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
      },
      output: 'standalone',
}));

module.exports = nextConfig;
