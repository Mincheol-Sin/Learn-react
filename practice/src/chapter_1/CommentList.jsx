import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "신민철",
    comment: "리액트 너무 재밌어요.",
  },
  {
    name: "박서연",
    comment: "리액트 그게 뭔가요??",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
