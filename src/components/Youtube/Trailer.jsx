import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({trailer }) => (
  <div className="video-responsive">
    <iframe
      width="750"
      height="380"

      src={`https://www.youtube.com/embed/${trailer}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  trailer: PropTypes.string.isRequired
};

export default YoutubeEmbed;