import React, { Component } from "react";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import './Pagination.css'

const mapStateToProps = (book) => {
    return {
        book
    }
}

class Cardlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            library: this.props.libraryData
        };
    }

    render() {
        let cardListData;
        if (this.props.libraryData.length > 1) {
            cardListData = (
                <section className="content-container">
                    {this.props.book.book.isRejected ? (
                        <div className="data-empty">
                            <h1>Data is Not Found!</h1>
                        </div>
                    ) : (
                            this.props.book.book.bookData.data.map((item, index) => (
                                <div key={index} className="card-container">
                                    <Link to={{ pathname: `/book/${item.id_book}`, book: item }}>
                                        <img src={item.img} alt="book-cover" />
                                        <div className="card-text-container">
                                            <h3>
                                                <Truncate lines={1}>{item.title}</Truncate>
                                            </h3>
                                            <p>
                                                <Truncate lines={2} ellipsis={<span> ...{" "} <span style={{ color: "gray", fontSize: "16px" }}> Read more </span> </span>}>
                                                    {item.description}
                                                </Truncate>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )}
                </section>
            );
        } else {
            cardListData = (
                <section className="content-container">
                    <div className="data-empty">
                        <h1>Library is empty!</h1>
                    </div>
                </section>
            );
        }
        return <div>{cardListData}
            <section className="pagination-container">
                <div class="pagination">
                    <p
                        onClick={this.props.prevPage.bind(this)}
                        style={{ cursor: "pointer" }}
                    >
                        ❮
                    </p>
                    <p>{this.props.page}</p>
                    <p
                        onClick={this.props.nextPage.bind(this)}
                        style={{ cursor: "pointer" }}
                    >
                        ❯
                    </p>
                </div>
            </section>
        </div>;

    }
}

export default connect(mapStateToProps)(Cardlist);