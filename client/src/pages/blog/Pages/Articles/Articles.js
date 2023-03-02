import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import CategoryTabs from '../../Components/CategoryTabs';


function Articles() {
  const { id } = useParams();

  return (
    <div>
          <Header title="Blog"/>
      <h2>文章ID：{id}</h2>
      {/* 根據動態參數id的值渲染不同的內容 */}
      {id === 'latest' && <div>最新文章的內容</div>}
      {id === 'fitness' && <div>健身鍛鍊的內容</div>}
      {id === 'home-workouts' && <div>居家運動的內容</div>}
      {id === 'healthy-eating' && <div>健康飲食的內容</div>}
      {id === 'health-wellness' && <div>養生保健的內容</div>}
    </div>
  );
}

export default Articles;
