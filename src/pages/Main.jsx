import React from "react";
import List from "./../components/UI/List/List";

const MainPage = ({...props}) => {
    return (
        <div className="content">
          <h2>Последние события</h2>
          <List />
          <h2>Впечатления</h2>
          <List />
        </div>
    )
}

export default MainPage;