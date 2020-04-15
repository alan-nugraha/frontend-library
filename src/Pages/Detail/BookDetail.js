import React from "react";
import "./BookDetail.css";
import BookDetailNavbar from "../../Components/Navbar/BookDetailNavbar";
import BookContent from "../../Components/Book/BookContent";
import BorrowButton from "../../Components/Book/BorrowButton";
import Edit from "../../Components/Modal/Edit";
import Delete from "../../Components/Modal/Delete";
import { connect } from 'react-redux'
import { getBookById } from '../../redux/action/book'

const mapStateToProps = (book) => {
    return {
        data: book
    }
}

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            id: props.match.params.id
        };
    }

    getBookById = async () => {
        await this.props.dispatch(getBookById(this.state.id))
        console.log('book', this.props.data.book.bookData.result)
        this.setState({
            book: this.props.data.book.bookData.result
        })
    };

    componentDidMount = () => {
        const token = localStorage.getItem('KEY_TOKEN');
        if (!token) {
            this.props.history.push('/login')
        }
        this.getBookById();
    };

    render() {
        const { book } = this.state;
        console.log(book);
        return (
            <div className="grid-container">
                {book &&
                    book.map((item, index) => (
                        <div key={index}>
                            <BookDetailNavbar data={item} />
                            <div className="grid-templates-content">
                                <BookContent data={item} />
                                <BorrowButton data={item} />
                            </div>
                            <Edit data={item} />
                            <Delete id={item} />
                        </div>
                    ))}
                <div style={{ marginTop: "60px" }}></div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(BookDetails);