'use client'

export default function myImageLoader({ src, width, quality }) {
    //if(src.startsWith('https://images.pexels.com')) return src
    return `http://127.0.0.1:8080/portfolio${src}?w=${width}&q=${quality || 75}`
}