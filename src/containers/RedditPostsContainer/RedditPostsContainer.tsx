import { Component } from 'react';
import RedditPosts from '../../components/RedditPosts/RedditPosts'
import RedditPostsMenu from '../../components/RedditPosts/RedditPostsMenu/RedditPostsMenu';

import { loadRedditPosts } from '../../utils';

interface Props {
    gameId: string;
}
interface RedditPostsData {
    results: object[];
    count: number;
}
interface State {
    redditPostsData: RedditPostsData;
    postsPageNum: number;
    showPosts: boolean;
    isLoading: boolean;
}
class RedditPostsContainer extends Component<Props> {

    state: State = {
        redditPostsData: {results: [], count: 0},
        postsPageNum: 1,
        showPosts: false,
        isLoading: false
    }

    componentDidMount(): void {

        loadRedditPosts(this.props.gameId, this.state.postsPageNum).then(postData => {
            //console.log(postData);
            this.setState({ redditPostsData: postData });
        });

        window.addEventListener("scroll", this.onBottomReached);
    }

    componentWillUnmount(): void {
        window.removeEventListener("scroll", this.onBottomReached);
    }

    componentDidUpdate(prevProps:Props, prevState:State): void {

        if (prevProps.gameId !== this.props.gameId) {
            //console.log("Game Changed - Reset");

            if (this.state.postsPageNum === 1) {
                //console.log("Reset Posts");
                this.resetRedditPosts();
            }

            this.setState({ postsPageNum: 1 });
        }

        if (prevState.showPosts !== this.state.showPosts) {
            if (this.state.showPosts) return;
            this.sliceCurrPosts();
        }

        if (prevState.postsPageNum !== this.state.postsPageNum) {
            if (this.state.postsPageNum > 1) {
                //console.log(this.state.postsPageNum);
                //console.log('Append New 10 new Posts');
                this.appendRedditPosts();
            } else {
                //console.log("Reset Posts");
                this.resetRedditPosts();
            }
        }
    }


    resetRedditPosts = (): void => {
        loadRedditPosts(this.props.gameId, 1).then(postsData => {
            this.setState({ redditPostsData: postsData });
        });
    }
    appendRedditPosts = (): void => {
        this.setState({ isLoading: true });
        loadRedditPosts(this.props.gameId, this.state.postsPageNum).then(postsData => {
            let newRedditPostsData: RedditPostsData = { ...this.state.redditPostsData };
            
            if(postsData.results.length > 0) {
                postsData.results.forEach((post) => newRedditPostsData.results.push(post));
            }

            this.setState({
                redditPostsData: newRedditPostsData,
                isLoading: false
            });
        });
    }
    sliceCurrPosts = (): void => {
        if (!this.state.redditPostsData || this.state.redditPostsData.results.length <= 0) return;

        // console.log('Slicing down to 10 comments');

        let newRedditPostsData: RedditPostsData = { ...this.state.redditPostsData };
        newRedditPostsData.results = newRedditPostsData.results.slice(0, 10);

        this.setState({ redditPostsData: newRedditPostsData });
    }

    onBottomReached = (): void => {
        if (!this.state.showPosts || this.state.isLoading) return;

        const offset: number = 0;
        if ((window.innerHeight + window.scrollY - offset) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            //load the reddit posts
            //console.log("Bottom Reached - Increment Page");
            let newPage = this.state.postsPageNum + 1;
            this.setState({ postsPageNum: newPage });
        }
    }

    togglePosts = (): void => {
        let newValue: boolean = !this.state.showPosts;
        this.setState({ showPosts: newValue });
    }

    render() {
        let redditPostsMenu: JSX.Element | null = null;
        let redditPosts: JSX.Element | null = null;

        if (this.state.redditPostsData) {
            redditPostsMenu = <RedditPostsMenu show={this.state.showPosts} count={this.state.redditPostsData.count} clicked={this.togglePosts} />
            redditPosts = <RedditPosts posts={this.state.redditPostsData.results} loading={this.state.isLoading} />
        }

        return (
            <div>
                {redditPostsMenu}
                {this.state.showPosts && this.state.redditPostsData.results.length > 0 ? redditPosts : null}
            </div>
        );
    }
};

export default RedditPostsContainer;