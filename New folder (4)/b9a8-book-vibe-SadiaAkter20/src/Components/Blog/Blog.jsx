const Blog = ({ blog }) => {
  const { img, author, title, description, post_time } = blog;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl p-5 border-2">
        <figure className="bg-slate-200 rounded-2xl">
          <img src={img} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="text-right text-md font-bold">
            Post Time: {post_time}
          </h2>
          <h2 className="card-title my-3">{title}</h2>
          <p className="text-sm font-bold">By:author</p>
          <p className="text-sm font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
