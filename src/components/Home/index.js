import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelItem from '../TravelItem'

import './index.css'

const travelUrl = 'https://apis.ccbp.in/tg/packages'

class Home extends Component {
  state = {
    packageData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(travelUrl)
    const data = await response.json()

    const formattedData = data.packages.map(eachItem => ({
      name: eachItem.name,
      description: eachItem.description,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
    }))
    this.setState({packageData: formattedData, isLoading: false})
  }

  renderPackagesList = () => {
    const {packageData} = this.state

    return (
      <ul className="wrap">
        {packageData.map(each => (
          <TravelItem key={each.id} itemDetails={each} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader
        className="loader-container"
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="background">
        <div className="guide">
          <h1 className="heading">Travel Guide</h1>
        </div>
        {isLoading ? this.renderLoadingView() : this.renderPackagesList()}
      </div>
    )
  }
}

export default Home
