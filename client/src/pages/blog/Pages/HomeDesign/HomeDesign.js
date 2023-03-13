import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Typography, Button } from "@material-ui/core";
import styled from "styled-components";

const MainVisualContainer = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainVisualTitle = styled(Typography)`
    font-family: "Helvetica Neue", sans-serif;
    font-size: 69px !important;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 4px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    line-height: 1.2;
`;

const AuthorImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0px 16px;
    background-color: #90caf9;
`;

const AuthorFullName = styled(Typography)`
    font-family: "Helvetica Neue", sans-serif;
    font-size: 26px !important;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 8px;
    text-align: center;
    min-height: 90px;
`;

const AuthorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 32px;
`;

const ArticleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #ff99cc, #ff66cc);
`;

const ArticleCard = styled(animated.div)`
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: 0px 16px 50px 16px;
    padding: 16px;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;

const ArticleImage = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
    margin-bottom: 16px;
    
`;
const ArticleTitle = styled(Typography)`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
    min-height: 90px;
`;

const ArticleText = styled(Typography)`
    font-size: 14px;
    margin-bottom: 16px;
    text-align: justify;
    flex-grow: 1;
    min-height: 60px;
`;

const ReadMoreButton = styled(Button)`
    background-color: #90caf9 !important;
    color: #ffffff;
    transition: transform 0.3s ease-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const handleImageLoad = (event) => {
    event.target.style.backgroundColor = "transparent"; // 將背景色設置為透明
};

const HomeDesign = () => {
    // 假資料 - 最新文章
    const latestArticles = [
        {
            id: 1,
            title: "愛上寶可夢的10大理由，讓你不想放手！",
            image: "https://source.unsplash.com/random/200×101/?pokemon",
            content:
                "寶可夢擁有超過800種不同的角色，每一隻都擁有獨特的外觀和技能，讓人難以忘懷。",
        },
        {
            id: 2,
            title: "從寶可夢看世界，一場跨越時空的冒險！",
            image: "https://source.unsplash.com/random/200×102/?pokemon",
            content:
                "寶可夢可以讓你跟你的寶可夢一起冒險，建立深厚的感情和友誼。",
        },
        {
            id: 3,
            title: "誰說寶可夢只是小孩玩的遊戲？",
            image: "https://source.unsplash.com/random/200×103/?pokemon",
            content:
                "寶可夢的故事劇情深入淺出，不但適合小孩玩，也適合成人們找回童年的回憶。",
        },
        {
            id: 4,
            title: "成為寶可夢大師，從神奇寶貝到人生贏家！",
            image: "https://source.unsplash.com/random/200×104/?pokemon",
            content:
                "寶可夢的世界非常廣闊，可以找到屬於自己的挑戰和目標，透過不斷的努力和挑戰，成就自己的夢想。",
        },
    ];

    // 假資料 - 作者圖片;作者姓名
    const authorImages = [
        "https://source.unsplash.com/random/100x101/?person",
        "https://source.unsplash.com/random/100x102/?person",
        "https://source.unsplash.com/random/100x103/?person",
        "https://source.unsplash.com/random/100x104/?person",
    ];

    const authorFullName=[
      "馬一龍","趙長膨","ＳAＦ","孫雨塵",
    ];

    // 設定卡片動畫效果
    const articleAnimation = useSpring({
        to: { opacity: 1, transform: "translateY(0)" },
        from: { opacity: 0, transform: "translateY(100px)" },
        config: { duration: 1500 },
    });

    const [animate, setAnimate] = useState(false);

    //設定頭貼動畫
    const AnimatedAuthorContainer = animated(AuthorContainer);

    const AuthorContainerWithAnimation = ({ children }) => {
        const styles = useSpring({
            to: { opacity: 1, transform: "translateY(0)" },
            from: { opacity: 0, transform: "translateY(50px)" },
            config: { duration: 1500 },
        });

        return (
            <AnimatedAuthorContainer style={styles}>
                {children}
                
            </AnimatedAuthorContainer>
        );
    };

    return (
        <>
            <ArticleContainer>
                <MainVisualContainer>
                    <div>
                        <MainVisualTitle>不只動，還要懂！</MainVisualTitle>
                    </div>
                </MainVisualContainer>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {latestArticles.map((article, index) => (
                        <div key={article.id}>
                            <AuthorContainerWithAnimation>
                                <AuthorImage
                                    src={authorImages[index]}
                                    onLoad={handleImageLoad}
                                />
                                <AuthorFullName>{authorFullName[index]}</AuthorFullName>
                            </AuthorContainerWithAnimation>
                            <ArticleCard
                                style={{
                                    ...articleAnimation,
                                    delay: index * 100,
                                }}
                                // onMouseEnter={() => setAnimate(true)}
                                // onMouseLeave={() => setAnimate(false)}
                            >
                                <ArticleImage src={article.image} />
                                <div>
                                    <ArticleTitle variant="h5">
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
                        </div>
                    ))}
                </div>
            </ArticleContainer>
        </>
    );
};

export default HomeDesign;
