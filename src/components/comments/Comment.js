import React from "react";
import { utcTimeConverter, kformatter } from "../../app/helpers/helpers";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";
import { Button } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function Comment(props) {
  const { author, ups, created_utc, body } = props.data;
  return (
    <div>
      <div className="comment">
        <div className="commentHeader">
          <h2>{author}</h2>
          <h3>{utcTimeConverter(created_utc)}</h3>
        </div>

        <ReactMarkdown remarkPlugins={gfm} children={body} />
        <Button
          endIcon={<ThumbUpIcon />}
          variant="contained"
          size="small"
          color="primary"
        >
          {kformatter(ups)}
        </Button>
      </div>
    </div>
  );
}
