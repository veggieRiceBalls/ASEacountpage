import React from 'react';
import './index.css'
import SideMenu from "./sidemenu/SideMenu";
import CourseList from "./mycorses/mycorses";
import RecommendedList from "./recommendedcorses/recommendedcorses";
import Footer from "./footer/footer"
import Achievements from "./achievements/achievements";
import NewsList from "./news/news";

/** настроить размер бокового меню; вставить иконки в боковое меню; добавить анимации/всплывающие
 подсказки; упорядочить css файлы; посмотреть комментарии;**/


class AllComponents extends React.Component {

    render(){
        return (
            <div >
                 <SideMenu />
                 <div className="content">
                    <CourseList/>
                    <Achievements />
                    <NewsList />
                    <RecommendedList />
                 </div>
                 <Footer />
         </div>
        );
    }
}

export default AllComponents;