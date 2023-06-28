import React from 'react'
import ContentLoader from 'react-content-loader';

const CommentsPlaceholder = () => {
    const getRandomWidth = (max, min) => {
        return `${Math.ceil(Math.random() * (max - min) + min)}%`;
    }
    const width1 = getRandomWidth(10, 40);
    const width2 = getRandomWidth(80, 40);

    return (
        <ContentLoader
            speed={2}
            width={"100%"}
            height={"100"}
            backgroundColor="#1b1b1b"
            foregroundColor="#ecebeb"
        >
            <circle cx="50" cy="70" r="30" />
            <rect x="90" y="50" rx="3" ry="3" width={width1} height="9" />
            <rect x="90" y="80" rx="3" ry="3" width={width2} height="9" />
        </ContentLoader>
    )
}

export default CommentsPlaceholder;