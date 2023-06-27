import React from 'react'
import ContentLoader from 'react-content-loader'

const SearchResultPlaceholder = () => {
    return (
        <ContentLoader
            speed={2}
            width={"100%"}
            height={400}
            viewBox=" "
            backgroundColor="#1b1b1b"
            foregroundColor="#ecebeb"
        >

            <rect x="-3" y="3" rx="0" ry="0" width="30%" height="200" />
            <circle cx="450" cy="50" r="50" />
            <rect x="525" y="10" rx="3" ry="3" width="70%" height="12" />
            <rect x="525" y="33" rx="3" ry="3" width="70%" height="12" />
            <rect x="525" y="60" rx="3" ry="3" width="50%" height="12" />
            <rect x="400" y="120" rx="3" ry="3" width="30%" height="12" />
            <rect x="400" y="150" rx="3" ry="3" width="50%" height="12" />
        </ContentLoader>
    )
}

export default SearchResultPlaceholder