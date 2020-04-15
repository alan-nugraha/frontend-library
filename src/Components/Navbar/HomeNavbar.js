import React from "react";
import { connect } from "react-redux";
import { searchBookTitle, sortBookBy } from "../../redux/action/book"

class HomeNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
            results: {},
            loading: false,
            message: "",
            sortBy: ["genre", "title", "released_date", "available"],
            sort: "ASC"
        };
    }

    getSortByGenre = async () => {
        await this.props.dispatch(
            sortBookBy(this.state.sortBy[0], this.state.sort)
        );
    };

    getSortByTitle = async () => {
        await this.props.dispatch(
            sortBookBy(this.state.sortBy[1], this.state.sort)
        );
    };

    getSortByReleasedDate = async () => {
        await this.props.dispatch(
            sortBookBy(this.state.sortBy[2], this.state.sort)
        )
    }

    getSortByAvailable = async () => {
        await this.props.dispatch(
            sortBookBy(this.state.sortBy[3], this.state.sort)
        )
    }

    getSearchResults = async () => {
        await this.props.dispatch(searchBookTitle(this.state.query));
    };

    handleOnInputChange = event => {
        const query = event.target.value;
        this.setState({ query, loading: true, message: "" }, () => {
            this.getSearchResults(query);
        });
    };

    openNav = () => {
        // document.getElementById("mySidenav").style.width = "100%";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("openSidebar").style.display = "none";
        } else {
            document.getElementById("mySidebar").style.width = "300px";
            document.getElementById("main").style.marginLeft = "300px";
            document.getElementById("openSidebar").style.display = "none";
        }

        return false;

    };
    render() {
        return (
            <div className="top-nav-container" >
                <nav className="top-nav">
                    <ul>
                        <li id="openSidebar">
                            <div className="topnav-btn">
                                <i onClick={this.openNav} className="fas fa-bars"></i>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                Sort By <i className="fa fa-caret-down"></i>
                                <div class="dropdown-content">
                                    <li onClick={this.getSortByGenre}>Genre</li>
                                    <li onClick={this.getSortByTitle}>Title</li>
                                    <li onClick={this.getSortByReleasedDate}>Released Date</li>
                                    <li onClick={this.getSortByAvailable}>Available</li>
                                </div>
                            </div>
                        </li>
                        <li>
                            All Time <i className="fa fa-caret-down"></i>
                        </li>
                        <li>
                            <input
                                onChange={this.handleOnInputChange}
                                style={{ fontFamily: "Arial, FontAwesome" }}
                                type="text"
                                placeholder="&#xf002; Search book"
                            />
                        </li>
                    </ul>
                    {/* eslint-disable-next-line */}
                    <a>
                        <img className=" logo" src={require('../../asset/img/logo.png')} alt="logo.png" />
                    </a>
                </nav>
            </div>
        );
    }
};

function mapStateToProps({ book }) {
    return { data: book };
}

export default connect(mapStateToProps)(HomeNavbar);
