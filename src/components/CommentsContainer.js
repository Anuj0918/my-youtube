import React from "react";

const commentsData = [
  {
    name: "Anuj Tiwari",
    text: "you made me fall in love with JavaScript, Amazing content",
    replies: [
      { 
      name: "Samat chavan",
      text: "After the hype of linkedin i came here and believe me it was worth it all...the way of your presentation is nice ",
      replies:[]
      },
    ],
  },
  {
    name: "@DebojyotiMandal",
    text: "namaste react project very⭐🔴🚀♥ good",
    replies: [
      {
        name: "Akshay Saini",
        text: "You kept the old cooking style alive",
        replies: [],
      },
      {
        name: "Arjun Gurjar",
        text: "Amazing content",
        replies: [
          {
            name: "Adarsh singh",
            text: "array function are map reduce filter",
            replies: [
              {
                name: "Arjun sharma",
                text: "Content is very good",
                replies: [
                  {
                    name: "Rahul chavan",
                    text: "Css is hard part of frontend",
                    replies: [
                      {
                        name: "Rohit",
                        text: "Css grid are very important",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Kuldeep Singh",
                    text: "Flex is used to design the class and grid is for layout",
                    replies: [],  
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Chaityana Kosti",
    text: "Closures are very important in javascript",
    replies: [],
  },
  {
    name: "Ashish Nagar",
    text: "Typescript is subscript of Javascript",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Audience are amazing",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;