import React from 'react'
import ContentLoader from 'react-content-loader'

const HomePageVideosPlaceholder = () => {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={400}
            viewBox=" "
            backgroundColor="#1b1b1b"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="1" rx="3" ry="3" width="80%" height="200 " />
            <rect x="54" y="210" rx="3" ry="3" width="30%" height="7" />
            <circle cx="25" cy="235" r="25" />
            <rect x="55" y="225" rx="3" ry="3" width="40%" height="7" />
            <rect x="54" y="240" rx="3" ry="3" width="60%" height="7" />
        </ContentLoader>
    )
}

export default HomePageVideosPlaceholder