import React from "react";
import { Helmet } from "react-helmet";
import HomeNavbar from "../../Components/Navbar/HomeNavbar"
import Carousel from "../../Components/Carousel/Caraousel"
import HomeList from "../../Components/HomeList/Homelist"
import Cardlist from "../../Components/Cardlist/Card"
import Sidebar from "../../Components/Sidebar/Sidebar"
import AddModal from "../../Components/Modal/AddModal"
import { connect } from "react-redux";
import { getAllBook } from '../../redux/action/book'

import "./Home.css"


class Home extends React.Component {
  state = {
    library: [],
    pageNumber: 1
  };
  getBookData = async () => {
    await this.props.dispatch(getAllBook(this.state.pageNumber))
    console.log('book=', this.props.data.book.bookData.data);

    this.setState({
      library: this.props.data.book.bookData.data
    })

  };

  prevHandlerButton = async () => {
    if (this.state.pageNumber > 1) {
      const pageNumberState = this.state.pageNumber - 1;
      await this.setState({
        pageNumber: pageNumberState
      });
      this.props.dispatch(getAllBook(pageNumberState));
    }
  }

  nextHandlerButton = async () => {
    if (this.state.pageNumber < Math.ceil(
      this.props.data.book.bookData.pageDetail.total /
      this.props.data.book.bookData.pageDetail.per_page
    )) {
      const pageNumberState = this.state.pageNumber + 1;
      await this.setState({
        pageNumber: pageNumberState
      })
      this.props.dispatch(getAllBook(pageNumberState))
    }
  }

  componentDidMount() {
    this.getBookData();
    const token = localStorage.getItem('KEY_TOKEN');
    if (token) {
      this.props.history.push('/home')
    } else {
      this.props.history.push('/login')
    }
  }
  render() {
    const { library } = this.state;
    console.log('data library:', library)

    return (
      <div>
        <Helmet>
          {/* <title>{Title}</title> */}
          <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        </Helmet>
        <div className="grid-container" id="main">
          <HomeNavbar />
          <Carousel />
          <HomeList />
          <Cardlist
            libraryData={library}
            page={this.state.pageNumber}
            nextPage={this.nextHandlerButton}
            prevPage={this.prevHandlerButton}
          />
        </div>
        <Sidebar {...this.props} />
        <AddModal />
      </div>
    );
  };
}
const mapStateToProps = book => {
  return {
    data: book
  };
};

export default connect(mapStateToProps)(Home);