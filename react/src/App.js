import React from 'react'
import { Route } from 'react-router'
import 'App.css'
import { ArticleList, ArticleUpdate, ArticleDetail, ArticleWrite } from 'article/index'
import { Footer, Navi, Home } from 'common/index'
import { LoginForm, SignUp, UserDetail } from 'user/index'
import { News, SeoulCCTV } from 'board/index'
import Counter from 'counter/component/Counter'
import { CounterContainer } from 'counter/index'
function App() {
    return (
        <div className="App">
            <Navi />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/article/article-list" component={ArticleList}></Route>
            <Route exact path="/article/article-update" component={ArticleUpdate}></Route>
            <Route exact path="/article/article-write" component={ArticleWrite}></Route>
            <Route exact path="/article/article-detail" component={ArticleDetail}></Route>
            <Route exact path="/board/news" component={News}></Route>
            <Route exact path="/board/cctv-seoul" component={SeoulCCTV}></Route>
            <Route exact path="/user/login" component={LoginForm}></Route>
            <Route exact path="/user/signup" component={SignUp}></Route>
            <Route exact path="/user/user-detail" component={UserDetail}></Route>
            <Route exact path="/counter/counter" component={Counter}></Route>
            <Route exact path="/counter/redux-counter" component={CounterContainer}></Route>
            <Footer />
        </div>
    )
}

export default App
