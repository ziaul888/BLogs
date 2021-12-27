import React, { useRef, useState, useEffect } from "react";

const CommentsForm = () => {
  const [error, setError] = useState(false);
  const [localStorge, setLocalStorge] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeEl = useRef();

  const handleCommentSubmission = () => {
      setError(false)
      const {value:comment} =commentEl.current;
      const {value:name} =nameEl.current;
      const {value:email} =emailEl.current;
      const {checked:storeData} =storeEl.current;
      if(!comment||!name||!email){
          setError(ture)
          return
      }
    const commentObj= {name,email,comment,slug}

    if(storedata){
        localStorge.setItem("name",name)
        localStorge.setItem("email",email)
    }else{
        localStorge.removeItem("name",name)
        localStorge.removeItem("email",emial)
    }

    };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">
        Comment Form
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-800"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          placeholder="Name"
          name="name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-800"
        />
        <input
          type="text"
          ref={emailEl}
          placeholder="Email"
          name="email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-800"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div>
              <input 
              ref={storeEl} 
              type="checkbox"
              id="storeData"
              name="storeData"

              />
              <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storedata"> Save my email and name for the next.</label>
          </div>
      </div>
      {error && <p className="text-xs text-red-100"> All fields are require</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease bg-pink-600 hover:bg-indigo-900 inline-block  text-lg rounded-full text-white py-3 px-8 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submited for reveiw</span>}
      </div>
    </div>
  );
};

export default CommentsForm;
