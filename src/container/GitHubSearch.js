import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import InduvidualUser from '../components/InduvidualUser';
import Loader from '../components/common/Loader';
import MessageNote from '../components/common/MessageNote';
import { searchUser } from '../action/gitHubUserAction';

class GitHubSearch extends Component {
    state = {
        searchKeyword: null,
        searchResult : {},
        isSearching  : false,
        noOfItems    : 24,
        pageNo       : 1,
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const {
                searchResult,
            } = this.props;

            this.setState({
                searchResult,
                isSearching: false,
            });
        }
    }

    handleChange = (event) => {
        const {
            pageNo,
            noOfItems,
        } = this.state;

        const {
            value,
        } = event.target;

        this.props.dispatch(searchUser(value, pageNo, noOfItems));

        this.setState({
            searchKeyword: value,
            isSearching: true,
        });
    }

    /**
     * Render all users as per serach result.
     * 
     * @param {object} allUsers 
     */
    renderInduvidualElement = (allUsers) => {
        return Object.values(allUsers).map((user) => {
            const {
                id,
                login,
                avatar_url,
            } = user;

            return (
                <InduvidualUser
                    key={id}
                    userId={id}
                    avatarUrl={avatar_url}
                    username={login}
                />
            )
        });
    }

    /**
     * handle Pagination as per the click
     * it can be Previous or Next
     * 
     * @param {string} request 
     */
    handlePagination = (request) => {
        let {
            pageNo,
            noOfItems,
            searchKeyword,
        } = this.state;

        if (
            searchKeyword &&
            (
                (request === 'PREVIOUS' && pageNo > 1) ||
                request === 'NEXT'
            )
        ) {
            pageNo = request === 'NEXT' ? ++pageNo : --pageNo;

            this.props.dispatch(
                searchUser(
                    searchKeyword,
                    pageNo,
                    noOfItems
                )
            );

            this.setState({
                isSearching: true,
                pageNo,
            });
        }
    }

    /**
     * Check wether the button need to be enabled or disabled
     *
     * @param {string} request 
     */
    isPaginationEnable = (request) => {
        const {
            searchResult,
            noOfItems,
            pageNo,
        } = this.state;

        switch (request) {
            case 'NEXT':
                const totalCount = searchResult && searchResult.total_count ?
                    searchResult.total_count :
                    1;

                const totalPossiblePages = Math.floor(totalCount / noOfItems);

                if (pageNo > totalPossiblePages) {
                    return false;
                }

                return true;

            case 'PREVIOUS':
                return pageNo > 1;

            default:
                return false;
        }
    }

    /**
     * Render pagination component
     */
    renderPagination = () => {
        return (
            <div className="pagination">
                <p
                    className={
                        this.isPaginationEnable('PREVIOUS') ?
                            'previous' :
                            'previous disabled'
                    }
                    onClick={() => this.handlePagination('PREVIOUS')}
                >
                    &#8678; Previous
                </p>
                <p
                    className={
                        this.isPaginationEnable('NEXT') ?
                            'next' :
                            'next disabled'
                    }
                    onClick={() => this.handlePagination('NEXT')}
                >
                    Next &#8680;
                </p>
            </div>
        );
    }
    render() {
        const {
            isSearching,
            searchResult,
            pageNo,
        } = this.state;

        return (
            <Fragment>
                <nav>
                    <div className="logo ">
                        <span className="primary">GitHub</span>
                        <span className="secondary">Search</span>
                    </div>
                    <div className="search-input">
                        <input
                            type="search"
                            placeholder="Search by username"
                            onChange={event => this.handleChange(event)}
                        />
                    </div>
                </nav>
                {
                    isSearching ?
                        <Loader
                            message="Searching"
                        /> :
                        !searchResult || Object.values(searchResult).length === 0 ?
                            <MessageNote
                                message="Search for a User with username"
                            /> :
                            searchResult.items && searchResult.total_count > 0 ?
                                <div>
                                    <div className="search-summary">
                                        {searchResult.total_count} Users | Page No: {pageNo}
                                    </div>
                                    <div className="search-result">
                                        {this.renderInduvidualElement(searchResult.items)}
                                    </div>
                                </div> :
                                <MessageNote
                                    message="Sorry! No Users found for this username"
                                />
                }
                { this.renderPagination() }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchResult: state.userData.searchResult,
    }
}

export default connect(mapStateToProps)(GitHubSearch);
