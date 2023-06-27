import React from 'react'
import ContentLoader from 'react-content-loader'

const WatchVideoPlaceholder = () => {
    return (
        <ContentLoader
            speed={2}
            width={"100%"}
            height={"1000"}
            viewBox=" "
            backgroundColor="#1b1b1b"
            foregroundColor="#ecebeb"
        >

            <rect x="-3" y="3" rx="0" ry="0" width="100%" height="500" />
            <rect x="40" y="550" rx="3" ry="3" width="70%" height="20" />
            <circle cx="80" cy="640" r="50" />
            <rect x="150" y="600" rx="3" ry="3" width="60%" height="12" />
            <rect x="150" y="630" rx="3" ry="3" width="70%" height="12" />
            <rect x="150" y="660" rx="3" ry="3" width="80%" height="12" />
        </ContentLoader>
    )
}

export default WatchVideoPlaceholder