/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tailwindui.com',
          pathname: '/plus/img/logos/**', // You can use wildcards as needed
        },
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
          pathname: '/**', // Allow all paths from Flaticon
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '/**', // Allow all paths from Placeholder
        },
      ],
      dangerouslyAllowSVG: true, // Enable SVG support
    },
  };
  
  export default nextConfig;
  