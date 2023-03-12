import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Typography, Button } from "@material-ui/core";
import styled from "styled-components";

const MainVisualContainer = styled.div`
    background-image: url("/assets/blog-image.jpg");
    background-size: cover;
    background-position: center;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ArticleContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ArticleCard = styled(animated.div)`
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: 16px;
    padding: 16px;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ArticleImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 16px;
`;

const ArticleTitle = styled(Typography)`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const ArticleText = styled(Typography)`
    font-size: 14px;
    margin-bottom: 16px;
    text-align: justify;
`;

const ReadMoreButton = styled(Button)`
    background-color: #ffa500;
    color: #ffffff;
`;

const HomeDesign = () => {
    // 假資料 - 最新文章
    const latestArticles = [
        {
            id: 1,
            title: "這是第一篇文章",
            image: "/assets/article-1.jpg",
            content:
                "這是第一篇文章的內容。這是第一篇文章的內容。這是第一篇文章的內容。這是第一篇文章的內容。",
        },
        {
            id: 2,
            title: "這是第二篇文章",
            image: "/assets/article-2.jpg",
            content:
                "這是第二篇文章的內容。這是第二篇文章的內容。這是第二篇文章的內容。這是第二篇文章的內容。",
        },
        {
            id: 3,
            title: "這是第三篇文章",
            image: "/assets/article-3.jpg",
            content:
                "這是第三篇文章的內容。這是第三篇文章的內容。這是第三篇文章的內容。這是第三篇文章的內容。",
        },
    ];

    // 設定動畫效果
    const articleAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(100px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 500 },
    });

    return (
        <>
            <MainVisualContainer>
                <div>
                    <Typography variant="h1" align="center">
                        歡迎來到部落格
                    </Typography>
                </div>
            </MainVisualContainer>
            <ArticleContainer>
                {latestArticles.map((article) => (
                    <ArticleCard key={article.id} style={articleAnimation}>
                        <ArticleImage src={article.image} />
                        <div>
                            <ArticleTitle variant="h2">
                                {article.title}
                            </ArticleTitle>
                            <ArticleText variant="body1">
                                {article.content}
                            </ArticleText>
                            <ReadMoreButton variant="contained">
                                閱讀全文
                            </ReadMoreButton>
                        </div>
                    </ArticleCard>
                ))}
            </ArticleContainer>
        </>
    );
};

export default HomeDesign;
