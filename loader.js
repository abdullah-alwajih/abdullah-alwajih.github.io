'use client'

export default function myImageLoader({ src, width, quality }) {
    //if(src.startsWith('https://images.pexels.com')) return src
    return `https://www.wajih.co${src}?w=${width}`
}