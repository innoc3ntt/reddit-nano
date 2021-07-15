import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  kformatter,
  previewText,
  utcTimeConverter,
} from "../../app/helpers/helpers";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";
import { Button } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import { makeStyles } from "@material-ui/core/styles";

export default function Listing(props) {
  const {
    subreddit_name_prefixed,
    title,
    author,
    url,
    selftext,
    score,
    url_overridden_by_dest,
    created_utc,
    body,
  } = props.data;

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const img = <img src={url} alt="" />;
  const previewUrl = (
    <a href={url_overridden_by_dest}>{url_overridden_by_dest}</a>
  );

  const preview = (
    <ReactMarkdown
      disallowedElements={["a"]}
      remarkPlugins={gfm}
      children={previewText(selftext, 500)}
    />
  );

  return (
    <div className="listing">
      <div className="info">
        <FontAwesomeIcon icon="chevron-up" size="2x" />

        <span>{kformatter(score)}</span>

        <FontAwesomeIcon icon="chevron-down" size="2x" />
      </div>

      <div className="listingMain">
        <div className="listingHeader">
          <h2>{subreddit_name_prefixed}</h2>
          <h3>Posted by {author}</h3>
          <h3>{utcTimeConverter(created_utc)}</h3>
        </div>

        <div className="listingContent">
          <h1>{title}</h1>

          {selftext && preview}

          {img || previewUrl}
        </div>

        <div className="listingFooter">
          <ReactMarkdown remarkPlugins={gfm} children={body} />
          <Button
            endIcon={<CommentIcon />}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Comments
          </Button>
          <ReactMarkdown remarkPlugins={gfm} children={body} />
          <Button
            endIcon={<ShareIcon />}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}
