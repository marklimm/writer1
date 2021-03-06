import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'




import logo from '../logo.svg';
import '../css/App.css';

import NavHeader from '../components/nav-header'
import HomePage from './home-page'
import AboutPage from './about-page'
//import TopicsPage from './topics-page'
import AuthorPage from './author-page'
import BlogPage from './blog-page'
import BlogPageNewPost from './blog-page-new-post'
import BlogPageSettings from './blog-page-settings'

/*
 *         <h2>Topics</h2>
 <ul>
 <li>
 <Link to={`${match.url}/rendering`}>
 Rendering with React
 </Link>
 </li>
 <li>
 <Link to={`${match.url}/components`}>
 Components
 </Link>
 </li>
 <li>
 <Link to={`${match.url}/props-v-state`}>
 Props v. State
 </Link>
 </li>
 </ul>
 * */
//const Topics = ({ match }) => (
//    <div>
//
//
//
//    </div>
//)
//<Route path="/topics" component={TopicsPage}/>

const MasterPage = () => (
    <Router>

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>

                <NavHeader />

            </header>
            <div className='p-4'>

                <Switch>
                    <Route path="/about" component={AboutPage}/>

                    <Route path="/authors" component={AuthorPage}/>
                    <Route path="/blog/:blogId/new" component={BlogPageNewPost}/>
                    <Route path="/blog/:blogId/settings" component={BlogPageSettings}/>
                    <Route path="/blog/:blogId" component={BlogPage}/>

                    <Route path="/" component={HomePage}/>
                </Switch>
            </div>
        </div>
    </Router>
)

export default MasterPage

