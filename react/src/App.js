import React from 'react'
import { Route } from 'react-router'
import 'App.css'
import { ArticleList, ArticleUpdate, ArticleDetail, ArticleWrite } from 'article/index'
import { Footer, Navi, Home } from 'common/index'
import { LoginForm, SignUp, UserDetail } from 'user/index'
import { News, SeoulCCTV } from 'board/index'
import { CounterContainer,Counter,RtkCounterContainer } from 'counter/index'
import {TodoApp} from 'todos/index'

function App() {
    return (
        <div className="App">
            <Navi />
            <Route exact path="/" component={Home}/>
            <Route exact path="/article/article-list" component={ArticleList}/>
            <Route exact path="/article/article-update" component={ArticleUpdate}/>
            <Route exact path="/article/article-write" component={ArticleWrite}/>
            <Route exact path="/article/article-detail" component={ArticleDetail}/>
            <Route exact path="/board/news" component={News}/>
            <Route exact path="/board/cctv-seoul" component={SeoulCCTV}/>
            <Route exact path="/user/login" component={LoginForm}/>
            <Route exact path="/user/signup" component={SignUp}/>
            <Route exact path="/user/user-detail" component={UserDetail}/>
            <Route exact path="/counter/counter" component={Counter}/>
            <Route exact path="/counter/redux-counter" component={CounterContainer}/>
            <Route exact path="/counter/rtk-counter" component={RtkCounterContainer}/>
            <Route exact path="/todos/todo-app" component={TodoApp}/>
            <Footer />
        </div>
    )
}

export default App
