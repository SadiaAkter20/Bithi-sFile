import React from "react";

const Contacts = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-5">Contact</h2>
      <div className="my-12">
        <form action="">
          <div className="w-1/2 mx-auto">
            <label htmlFor="" className="block text-lg my-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2 mx-auto">
            <label htmlFor="" className="block text-lg my-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2 mx-auto">
            <label htmlFor="" className="block text-lg my-2">
              Phone
            </label>
            <input
              type="text"
              placeholder="Phone type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2 mx-auto">
            <label htmlFor="" className="block text-lg my-2">
              Message
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Bio"
            ></textarea>
            <button className="btn bg-green-400 text-xl w-full mt-10 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
