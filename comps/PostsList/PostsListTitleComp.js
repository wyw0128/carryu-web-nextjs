import { useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { FontWeights, Shadows, Colors } from "../../styles/variables";
import { P } from "../Typography";
import { ShowMoreIcon } from "../Icons";
import { PostIconWrapper } from "../Icons/styles";
import { WindowWidthContext } from "../WindowWidthContextProvider";

const PostsListContainer = styled.div``;

const PostsListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background-color: ${Colors.White};
  box-shadow: ${Shadows.Medium};
  border-radius: 4px;
  padding: ${(props) => (props.width <= 850 ? "16px" : "24px")};
`;

const PostsLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const PostsListTitle = styled(P)`
  padding: 0;
  font-weight: ${FontWeights.SuperBold};
`;
const PostLink = styled.a`
  /* NOTE: text and icon align center */
  /* vertical-align: middle; */
  text-decoration: none;
  font-weight: ${FontWeights.Normal};
  font-size: 16px;
  cursor: pointer;
  /* NOTE: small trick to avoid hover 1px bounce */
  /* border-bottom: 1px solid ${Colors.White}; */
  :visited {
    color: ${Colors.Black};
  }
  :hover {
    color: ${Colors.SecondaryColor};
    svg {
      path {
        stroke: ${Colors.SecondaryColor};
      }
    }
  }
`;
const TextContent = styled.span`
  font-size: ${(props) => props.fontSize};
`;
const ButtonWrapper = styled.div`
  margin-left: auto;
`;
export default function PostsListTitleComp({ postListData }) {
  const width = useContext(WindowWidthContext);
  const router = useRouter();
  const fontSize = width <= 500 ? "16px" : "18px";
  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/posts/${id}`);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    router.push("/posts");
  };
  return (
    <PostsListContainer>
      <PostsListWrapper width={width}>
        <PostsListTitle>往期回顾</PostsListTitle>
        <PostsLinkWrapper>
          {/* NOTE: check destructing */}
          {postListData.map(({ title, _id }) => (
            // NOTE: use index as key is not a good practice; how to pass multiple arguments to onClick.
            <PostLink onClick={(e) => handleClick(e, _id)} key={_id}>
              <TextContent fontSize={fontSize}>{title}</TextContent>
              <PostIconWrapper>
                <ShowMoreIcon />
              </PostIconWrapper>
            </PostLink>
          ))}
        </PostsLinkWrapper>
        <ButtonWrapper>
          <Button onClick={(e) => handleButtonClick(e)}>更多</Button>
        </ButtonWrapper>
      </PostsListWrapper>
    </PostsListContainer>
  );
}
PostsListTitleComp.propTypes = {
  postListData: PropTypes.array.isRequired,
};
