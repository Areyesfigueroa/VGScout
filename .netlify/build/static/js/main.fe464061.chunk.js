(this["webpackJsonpvideo-game-search"]=this["webpackJsonpvideo-game-search"]||[]).push([[0],{10:function(e,t,a){e.exports={RedditPost:"RedditPost_RedditPost__1S8kX",header:"RedditPost_header__1K_aT",postInfo:"RedditPost_postInfo__2vfqb",fullPostLink:"RedditPost_fullPostLink__1dvKE",postContent:"RedditPost_postContent__1Ueiz",collapse:"RedditPost_collapse__Wc-OH"}},123:function(e,t,a){e.exports=a.p+"static/media/metacriticLogo.fb96c428.png"},13:function(e,t,a){e.exports={SearchBar:"SearchBar_SearchBar__2Pbl1",defaultSearch:"SearchBar_defaultSearch__2g9Hg",collapseSearch:"SearchBar_collapseSearch__3DUDY",searchButton:"SearchBar_searchButton__1mtZa",cancelButton:"SearchBar_cancelButton__1Nz39"}},14:function(e,t,a){e.exports={Summary:"Summary_Summary__2irCz",textContainer:"Summary_textContainer__NbBgN",expand:"Summary_expand__1qBQi",collapse:"Summary_collapse__1xdmj"}},22:function(e,t,a){e.exports={RedditPostsMenu:"RedditPostsMenu_RedditPostsMenu__1ofYA",clickable:"RedditPostsMenu_clickable__2fhiw",button:"RedditPostsMenu_button__QLuzA"}},323:function(e,t,a){e.exports=a.p+"static/media/logo.fe645a6c.jpg"},324:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(35),r=a.n(o),c=(a(97),a(5)),l=a(6),i=a(8),u=a(7),d=(a(98),a(13)),m=a.n(d),h=function(e){return s.a.createElement("div",{"data-testid":"searchBar",className:m.a.SearchBar},s.a.createElement("input",{className:e.suggestions?m.a.collapseSearch:m.a.defaultSearch,ref:e.searchRef,type:"search",placeholder:"Search...",id:"search",onChange:function(t){return e.search(t.target.value)}}),s.a.createElement("button",{className:m.a.searchButton,onClick:e.select},s.a.createElement("ion-icon",{name:"search-outline"})),s.a.createElement("button",{className:m.a.cancelButton,onClick:e.clear,style:{visibility:e.showCancelBtn?"visible":"hidden"}},s.a.createElement("ion-icon",{name:"close-circle-outline"})))},p=a(79),g=a.n(p),f=a(80),v=a.n(f),E=function(e){return s.a.createElement("div",{tabIndex:e.id,id:e.id,className:v.a.SuggestionItem,onClick:function(t){return e.clicked(t)},onKeyDown:function(t){return e.navSelection(t)},style:e.styleSelection(e.id)},e.img?s.a.createElement("img",{src:e.img,alt:"thumbnail"}):s.a.createElement("ion-icon",{name:"alert-circle-outline"}),s.a.createElement("p",null,e.name))},S=function(e){return e.data.map((function(t,a){return s.a.createElement(E,{key:t.id,id:a,img:t.short_screenshots.length>0?t.short_screenshots[0].image:null,name:t.name,clicked:e.clicked,navSelection:e.navSelection,styleSelection:e.styleSelection})}))},_=function(e){return s.a.createElement("div",{className:g.a.SuggestionsBox,ref:e.suggestionBoxRef},s.a.createElement(S,{data:e.data,clicked:e.clicked,styleSelection:e.styleSelection,navSelection:e.navSelection}))},y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedID:0},e.navArrowSelection=function(t){if(t.target.closest("div")){var a=e.state.selectedID;38===t.keyCode&&(a=a-1<0?a:a-1,e.setState({selectedID:a})),40===t.keyCode&&(a=a+1>e.props.data.length-1?a:a+1,e.setState({selectedID:a}))}},e.navClickSelection=function(t){if(t.target){var a=parseInt(t.target.closest("div").id);e.state.selectedID===a?e.props.confirmSelection():e.setState({selectedID:a})}},e.styleSelection=function(t){return e.state.selectedID===t?{backgroundColor:"rgba(128, 205, 250, 0.5)",fontWeight:"bold",color:"white"}:{backgroundColor:"white"}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.searchInput.current.addEventListener("keydown",this.navArrowSelection)}},{key:"componentWillUnmount",value:function(){this.props.searchInput.current.removeEventListener("keydown",this.navArrowSelection)}},{key:"componentDidUpdate",value:function(e,t){t.selectedID!==this.state.selectedID&&this.props.updateSelection(this.state.selectedID)}},{key:"render",value:function(){return s.a.createElement(_,{data:this.props.data,styleSelection:this.styleSelection,navSelection:this.navArrowSelection,clicked:this.navClickSelection})}}]),a}(n.Component),b=a(81),P=a.n(b).a.create({baseURL:"https://rawg-video-games-database.p.rapidapi.com",headers:{"x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com","x-rapidapi-key":"a5e3fb3ebcmsh203426ca241b46ep1630eejsn0f17cd94c4f4"}});P.interceptors.request.use((function(e){return e}));var k=P,x=function(e,t){return k.get("/games/".concat(e,"/reddit?page=").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},w=function(e,t){return function(e,t){return k.get("/games?search=".concat(e,"&page_size=").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))}(e,t).then((function(e){return e.results})).catch((function(e){return e}))},I=function(e){return function(e){return k.get("/games/".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}(e).then((function(e){return e})).catch((function(e){console.log(e)}))},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return x(e,t).then((function(e){return e})).catch((function(e){return e}))},B=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return a&&clearTimeout(a),setTimeout(t,e)},R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchValue:"",prevSearchValue:"",prevSelection:"",selection:null,suggestions:null},e.searchInput=s.a.createRef(),e.timerID=null,e.displaySelection=function(t){if(e.state.suggestions){var a=e.state.suggestions[t];e.searchInput.current.value=a.name,e.setState({selection:a})}},e.confirmSelection=function(){e.state.selection&&(e.props.selectedValue(e.state.selection),e.setState({suggestions:null}))},e.handleSearch=function(t){var a=1e3*e.props.searchDelay;e.timerID=B(a,(function(){return e.setState({searchValue:t})}),e.timerID)},e.clearSearch=function(){e.searchInput.current.value="",e.setState({searchValue:"",suggestions:null})},e.search=function(){e.state.searchValue.length>0?w(e.state.searchValue,e.getSuggestionCount(1,5)).then((function(t){e.setState({suggestions:t.length>0?t:null,selection:t.length>0?t[0]:null})})).catch((function(e){console.log("Error: "+e)})):e.setState({suggestions:null,selection:null})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.searchValue!==t.searchValue&&this.search()}},{key:"getSuggestionCount",value:function(e,t){return this.props.suggestionCount>t?t:this.props.suggestionCount<e?e:this.props.suggestionCount}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{onKeyDown:function(t){return"Enter"===t.key?e.confirmSelection():null}},s.a.createElement(h,{searchRef:this.searchInput,search:this.handleSearch,select:this.confirmSelection,clear:this.clearSearch,showCancelBtn:this.state.searchValue.length>0,suggestions:this.state.suggestions?this.state.suggestions:null}),this.state.suggestions?s.a.createElement(y,{data:this.state.suggestions,searchInput:this.searchInput,updateSelection:this.displaySelection,confirmSelection:this.confirmSelection}):null)}}]),a}(n.Component),C=a(38),D=a(10),O=a.n(D),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={collapse:!0},e.toggleCollapse=function(){var t=!e.state.collapse;e.setState({collapse:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:O.a.RedditPost},s.a.createElement("div",{className:O.a.header},s.a.createElement("div",{className:O.a.postInfo},s.a.createElement("p",null,this.props.date),s.a.createElement("p",null,this.props.userName)),s.a.createElement("div",{className:O.a.fullPostLink},s.a.createElement("a",{className:"button",href:this.props.fullPostURL},"View Full Post"))),s.a.createElement("h4",null,this.props.title),s.a.createElement("div",{className:"".concat(O.a.postContent," ").concat(this.state.collapse?O.a.collapse:null)},this.props.img?s.a.createElement("img",{src:this.props.img,alt:"reddit"}):null,s.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.content}})),s.a.createElement("button",{className:"button",onClick:this.toggleCollapse},this.state.collapse?"more":"less"))}}]),a}(n.Component),j=a(82),V=a.n(j),A=a(36),M=a.n(A),W=function(e){return s.a.createElement("div",{className:M.a.LoadingSpinner,style:e.style},s.a.createElement("div",{className:M.a.ldsRoller},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)))},U=function(e){var t=s.a.createElement("div",{className:V.a.RedditPosts},e.posts.map((function(e){return s.a.createElement(L,{key:e.id,date:e.created,title:e.name,userName:e.username,fullPostURL:e.url,img:e.image,content:e.text})})),";");return s.a.createElement(n.Fragment,null,t,e.loading?s.a.createElement(W,null):null)},Y=a(22),z=a.n(Y),G=a(83),H=a.n(G),q=function(e){return s.a.createElement(H.a,{id:"redditPostsSection"},s.a.createElement("div",{className:z.a.RedditPostsMenu,style:e.show?{backgroundColor:"#333A41"}:null,onClick:e.clicked},s.a.createElement("div",{className:z.a.clickable},s.a.createElement("a",{href:"#redditPostsSection",className:"text"},"Reddit Posts ",e.count)),s.a.createElement("div",{className:z.a.button},s.a.createElement("a",{href:"#redditPostsSection",className:"button"}," ",e.show?"X":"expand"," "))))},T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={redditPostsData:null,postsPageNum:1,showPosts:!1,isLoading:!1},e.resetRedditPosts=function(){N(e.props.gameId,1).then((function(t){e.setState({redditPostsData:t})}))},e.appendRedditPosts=function(){e.setState({isLoading:!0}),N(e.props.gameId,e.state.postsPageNum).then((function(t){var a=Object(C.a)({},e.state.redditPostsData);t.results.length>0&&t.results.forEach((function(e){return a.results.push(e)})),e.setState({redditPostsData:a,isLoading:!1})}))},e.sliceCurrPosts=function(){if(!(e.state.redditPostsData.results.length<=0)){var t=Object(C.a)({},e.state.redditPostsData);t.results=t.results.slice(0,10),e.setState({redditPostsData:t})}},e.onBottomReached=function(){if(e.state.showPosts&&!e.state.isLoading){if(window.innerHeight+window.scrollY-0>=document.body.offsetHeight){var t=e.state.postsPageNum+1;e.setState({postsPageNum:t})}}},e.togglePosts=function(){var t=!e.state.showPosts;e.setState({showPosts:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;N(this.props.gameId,this.state.postsPageNum).then((function(t){e.setState({redditPostsData:t})})),window.addEventListener("scroll",this.onBottomReached)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onBottomReached)}},{key:"componentDidUpdate",value:function(e,t){if(e.gameId!==this.props.gameId&&(1===this.state.postsPageNum&&this.resetRedditPosts(),this.setState({postsPageNum:1})),t.showPosts!==this.state.showPosts){if(this.state.showPosts)return;this.sliceCurrPosts()}t.postsPageNum!==this.state.postsPageNum&&(this.state.postsPageNum>1?this.appendRedditPosts():this.resetRedditPosts())}},{key:"render",value:function(){var e=null,t=null;return this.state.redditPostsData&&(e=s.a.createElement(q,{show:this.state.showPosts,count:this.state.redditPostsData.count,clicked:this.togglePosts}),t=s.a.createElement(U,{posts:this.state.redditPostsData.results,loading:this.state.isLoading})),s.a.createElement("div",null,e,this.state.showPosts&&this.state.redditPostsData.results.length>0?t:null)}}]),a}(n.Component),F=a(84),K=a.n(F),X=function(e){return s.a.createElement("section",{"data-testid":"sectionWrapper",className:K.a.SectionWrapper},e.children)},J=a(85),Z=a.n(J),Q=function(e){return s.a.createElement("div",{className:Z.a.Background},s.a.createElement("img",{src:e.image,alt:"Background"}))},$=a(86),ee=a.n($),te=function(e){var t=e.degree?e.degree:0,a=e.fromOpacity?e.fromOpacity:.2,n=e.toOpacity?e.toOpacity:1;return s.a.createElement("div",{className:ee.a.ShadowBox,style:{background:"linear-gradient(".concat(t,", rgba(0,0,0,").concat(a,"), rgba(0,0,0,").concat(n,"))")}})},ae=a(87),ne=a.n(ae),se=function(e){var t=null;return t=e.videoId?s.a.createElement("iframe",{title:"video",src:"https://www.youtube-nocookie.com/embed/".concat(e.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):s.a.createElement("div",null,s.a.createElement("p",null,"No Video Found :(")),s.a.createElement("div",{className:ne.a.YoutubePlayer},t||s.a.createElement(W,null))},oe=a(88),re=a.n(oe),ce=function(e){var t={exceptional:0,recommended:0,meh:0,skip:0};e.ratings.length>0&&Object.keys(t).forEach((function(a,n){e.ratings[n]&&(t[a]=e.ratings[n].percent)}));var n=e.metacritic?e.metacritic:0,o=parseInt(t.exceptional+t.recommended),r=parseInt(t.meh+t.skip);return s.a.createElement("div",{className:re.a.Ratings},s.a.createElement("div",null,s.a.createElement("img",{src:a(123),alt:"Metacritic Logo"}),s.a.createElement("p",null,n)),s.a.createElement("div",null,s.a.createElement("ion-icon",{name:"thumbs-up-sharp"}),s.a.createElement("p",null,o,"%")),s.a.createElement("div",null,s.a.createElement("ion-icon",{name:"thumbs-down-sharp"}),s.a.createElement("p",null,r,"%")))},le=a(37),ie=a.n(le),ue=a(14),de=a.n(ue),me=function(e){return s.a.createElement("div",{className:"".concat(de.a.Summary," ").concat(e.expand?de.a.expand:de.a.collapse)},s.a.createElement("div",{className:de.a.textContainer},s.a.createElement("div",null,s.a.createElement("h4",null,"Summary"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.data}}))),s.a.createElement("button",{onClick:e.clicked},e.expand?"less":"more"))},he=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={expand:!1},e.toggleExpansion=function(){var t=!e.state.expand;e.setState({expand:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(me,{expand:this.state.expand,clicked:this.toggleExpansion,data:this.props.data})}}]),a}(n.Component),pe=a(89),ge=a.n(pe),fe=function(e){return e.data.map((function(e,t){return s.a.createElement("li",{key:t},e.name)}))},ve=function(e){return s.a.createElement("div",{className:ge.a.InfoBox},s.a.createElement("h4",null,e.title),s.a.createElement("ul",null,s.a.createElement(fe,{data:e.data})))},Ee=function(e){return s.a.createElement("div",{className:ie.a.GameInfo},s.a.createElement(he,{data:e.summary}),s.a.createElement("div",{className:ie.a.InfoBoxContainer},s.a.createElement(ve,{title:"Developers:",data:e.developers}),s.a.createElement(ve,{title:"Publishers:",data:e.publishers}),s.a.createElement(ve,{title:"Platforms:",data:e.platforms}),s.a.createElement(ve,{title:"Genres:",data:e.genres})))},Se=a(90),_e=a.n(Se),ye=a(91),be=a.n(ye),Pe=function(){return s.a.createElement("div",{className:be.a.Logo},s.a.createElement("img",{src:a(323)}))},ke=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedValue:null,isLoading:!1},e.clips=null,e.handleSelectedValue=function(t){e.setState({isLoading:!0}),I(t.id).then((function(t){e.setState({selectedValue:t}),e.setState({isLoading:!1})}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=null,a=null,n=null,o=null,r=null;if(null!==this.state.selectedValue){var c=function(){var t=e.state.selectedValue.platforms?e.state.selectedValue.platforms:null;return t?t.map((function(e){return e.platform})):null}();t=this.state.selectedValue.background_image,a=s.a.createElement(se,{videoId:this.state.selectedValue.clip?this.state.selectedValue.clip.video:null}),n=s.a.createElement(ce,{metacritic:this.state.selectedValue.metacritic,ratings:this.state.selectedValue.ratings}),o=s.a.createElement(Ee,{summary:this.state.selectedValue.description,developers:this.state.selectedValue.developers,publishers:this.state.selectedValue.publishers,platforms:c,genres:this.state.selectedValue.genres}),r=s.a.createElement(T,{gameId:this.state.selectedValue.id})}return s.a.createElement("div",{className:"App"},s.a.createElement(te,{degree:0,fromOpacity:.2,toOpacity:.9}),s.a.createElement(_e.a,{params:{particles:{number:{value:50},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),s.a.createElement(Q,{image:t}),s.a.createElement(X,null,s.a.createElement(Pe,null),s.a.createElement(R,{selectedValue:this.handleSelectedValue,suggestionCount:3,searchDelay:.2})),s.a.createElement(X,null,a,n,o,r),this.state.isLoading?s.a.createElement(W,{style:{marginTop:"100px"}}):null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports={LoadingSpinner:"LoadingSpinner_LoadingSpinner__10Z8_",ldsRoller:"LoadingSpinner_ldsRoller__2-cuR"}},37:function(e,t,a){e.exports={GameInfo:"GameInfo_GameInfo__2_66S",InfoBoxContainer:"GameInfo_InfoBoxContainer__5E2KR"}},79:function(e,t,a){e.exports={SuggestionsBox:"SuggestionsBox_SuggestionsBox__zk74N"}},80:function(e,t,a){e.exports={SuggestionItem:"SuggestionItem_SuggestionItem__1fjqp",active:"SuggestionItem_active__3JnO6"}},82:function(e,t,a){e.exports={RedditPosts:"RedditPosts_RedditPosts__1dq2O"}},84:function(e,t,a){e.exports={SectionWrapper:"SectionWrapper_SectionWrapper__1hXNV"}},85:function(e,t,a){e.exports={Background:"Background_Background__3nj4g"}},86:function(e,t,a){e.exports={ShadowBox:"ShadowBoxGradient_ShadowBox__3YVcZ"}},87:function(e,t,a){e.exports={YoutubePlayer:"YoutubePlayer_YoutubePlayer__3sEFW"}},88:function(e,t,a){e.exports={Ratings:"Ratings_Ratings__3qeti"}},89:function(e,t,a){e.exports={InfoBox:"InfoBox_InfoBox__EvLvX"}},91:function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},92:function(e,t,a){e.exports=a(324)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.fe464061.chunk.js.map