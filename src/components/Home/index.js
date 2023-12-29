import BlogList from '../BlogList/index' // 7
import UserInfo from '../UserInfo/index' // 8

import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
