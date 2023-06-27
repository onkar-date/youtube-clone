import React from 'react'
import ContentLoader from 'react-content-loader'

const RelatedVideosPlaceholder = () => {
    return (
        <ContentLoader
            speed={2}
            width={"100%"}
            height={"120"}
            viewBox=" "
            backgroundColor="#1b1b1b"
            foregroundColor="#ecebeb"
        >

            <rect x="-3" y="3" rx="0" ry="0" width="40%" height="100" />
            <rect x="180" y="10" rx="3" ry="3" width="25%" height="8" />
            <rect x="180" y="40" rx="3" ry="3" width="40%" height="8" />
            <rect x="180" y="70" rx="3" ry="3" width="55%" height="8" />
        </ContentLoader>
    )
}

export default RelatedVideosPlaceholder