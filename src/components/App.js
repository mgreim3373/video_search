import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import './SearchBar.css'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount(){
      this.onTermSubmit('buildings')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>'
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
        // <div className="image-container">
        // <div className="colorPlane"></div>
        //   <div className="text-container">
        //     <div className="text">
        //       Jeff's
        //     </div>
        //   </div>
        // </div>
        // <div className="subTitle">
        //   GRANOLA
        // </div>
        // <svg className="box" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        //      width="340px" height="333px" viewBox="0.0 0.0 960.0 720.0" enableBackground="new 0 0 340 333">
        //
        //   <path className="path" fill="none" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" d="m150.3727 210.26509l602.77167 0l0 373.38586l-602.77167 0z"/>
        //
        // </svg>

    )
  }
}

export default App
