import React from "react";
import { connect } from 'react-redux'
import { rentBook } from '../../redux/action/book'
import { returnBook } from '../../redux/action/book'

const mapStateToProps = (book) => {
    return {
        book
    }
}
class BorrowButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id_book: props.data.id_book,
            img: props.data.img,
            available: props.data.available,
            loading: false
        };
    }

    rentBookData = () => {
        // const { available } = this.state;
        const rentBookData = {
            available: "false"
        };

        let id = this.state.id_book
        this.props.dispatch(rentBook(id, rentBookData))
    };

    returnBookData = () => {
        // const { available } = this.state;
        const returnBookData = {
            available: "true"
        };

        let id = this.state.id_book
        this.props.dispatch(returnBook(id, returnBookData))


    };

    render() {
        const bookAvailable = this.state.available;
        let buttonStatus;
        if (bookAvailable === "true") {
            buttonStatus = <button onClick={this.rentBookData}>Borrow</button>;
        } else {
            buttonStatus = (
                <button
                    style={{ backgroundColor: "#596A55" }}
                    onClick={this.returnBookData}
                >
                    Return
                </button>
            );
        }
        return (
            <div>
                <section className="borrow-button-container">
                    <aside className="aside-items">
                        <div className="book-cover-img">
                            <img src={this.state.img} alt="book-cover.img" />
                        </div>
                        <form>
                            <div className="borrow-btn">{buttonStatus}</div>
                        </form>
                    </aside>
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps)(BorrowButton);