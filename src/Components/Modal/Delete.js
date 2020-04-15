import React, { Component } from "react";
import "./styles/Delete.css";
import checkedLogo from "../../asset/img/checked.png";
import { connect } from 'react-redux';
import { deleteBook } from '../../redux/action/book'

// const Host = "/api/v1/";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_book: props.data.book.bookData.result[0].id_book,

        };
    }
    deleteBookData = () => {
        let id = this.state.id_book
        this.props.dispatch(deleteBook(id))
    };
    render() {
        // console.log('delete for id', this.props.data.book.bookData.result[0].id_book)

        return (
            <div id="deleteModal" className="delete-modal" >
                <div className="delete-modal-content">
                    <div className="delete-modal-header">
                        <span onClick={this.deleteBookData} className="close">
                            &times;
                    </span>
                    </div>
                    <div className="delete-modal-body">
                        <div className="body-wrapper">
                            <img src={checkedLogo} alt="" srcSet="" />
                            <h2>
                                Data Berhasil Dihapus!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );

    };
}

const mapStateToProps = (book) => {
    return {
        data: book
    }
}

export default connect(mapStateToProps)(DeleteModal);