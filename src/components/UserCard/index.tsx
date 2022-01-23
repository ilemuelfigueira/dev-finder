import "./index.styles.scss";

import { BsTwitter } from "react-icons/bs";
import { HiLink, HiLocationMarker, HiOfficeBuilding } from "react-icons/hi";

import clsx from "clsx";

import { UserCardProps } from "./index.types";

export function UserCard(props: UserCardProps) {
  const {
    avatar,
    bio,
    blog,
    followers_qtd,
    following_qtd,
    joined,
    location,
    name,
    nickname,
    company,
    repos_qtd,
    twitter,
  } = props;

  return (
    <div id="user-card-container">
      <img src={avatar} alt="" />
      <div id="names">
        <span className="title">{name}</span>
        <span className="subtitle">@{nickname}</span>
      </div>
      <div id="joined">
        <span>{joined}</span>
      </div>
      <div id="bio">{bio}</div>
      <div id="github-details">
        <div className="detail">
          <span className="title">Repos</span>
          <span className="value">{repos_qtd}</span>
        </div>
        <div className="detail">
          <span className="title">Followers</span>
          <span className="value">{followers_qtd}</span>
        </div>
        <div className="detail">
          <span className="title">Following</span>
          <span className="value">{following_qtd}</span>
        </div>
      </div>
      <div
        id="location"
        className={clsx({
          "user-reference": true,
          disabled: !location,
        })}
      >
        <HiLocationMarker />
        <span>{location || "Not Available"}</span>
      </div>
      <div
        id="link"
        className={clsx({
          "user-reference": true,
          disabled: !blog,
        })}
      >
        <HiLink />
        <span
          className={clsx({
            pointer: Boolean(blog),
          })}
          onClick={() => blog && window.open(blog, "_blank")}
        >
          {blog || "Not Available"}
        </span>
      </div>
      <div
        id="twitter"
        className={clsx({
          "user-reference": true,
          disabled: !twitter,
        })}
      >
        <BsTwitter />
        <span>{twitter || "Not Available"}</span>
      </div>
      <div
        id="github"
        className={clsx({
          "user-reference": true,
          disabled: !company,
        })}
      >
        <HiOfficeBuilding />
        <span>{company || "Not Available"}</span>
      </div>
    </div>
  );
}
