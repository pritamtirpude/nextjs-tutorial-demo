"use client";

const ErrorPage = (error) => {
  console.log(error);
  return <div>{error.error.message}.</div>;
};

export default ErrorPage;
