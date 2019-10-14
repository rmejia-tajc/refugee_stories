import React from 'react';
import { Link } from "react-router-dom";

const Stories = props => {

    return (

        <div>

            <div className="storiesWrapper">

            {props.stories.map((story) => {

                return (
                    <Link className="link" to={`/stories/${story.id}`} key={story.id}>
                        <div className="storyCardWrapper">
                            <div className="storyCard">
                                <h4 className="storyAuthor">{story.author}</h4>
                                <p className="storyCountry">{story.country}</p>
                                <p className="storySnippet">{story.snippet}</p>
                                {/* <div className="pixPlaceHolder"></div> */}
                                <img className="storyPix" src={story.url_thumbnail} alt="refugee img"/>
                            </div>
                        </div>
                    </Link>
                )
            })}

            </div>

        </div>
    );
};

export default Stories;