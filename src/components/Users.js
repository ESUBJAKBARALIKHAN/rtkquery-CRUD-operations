import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser, edituser, getUser } from "../redux/userSlice";

const Users = () => {
  const [name, setName] = useState("");
  const [userId, setUserid] = useState("");
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  return (
    <>
      <div>Data</div>
      {data.map((use, index) => {
        return (
          <li key={index}>
            {use.name}
            <button
              onClick={() => {
                setUserid(use.id);
                setName(use.name);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                dispatch(removeuser(use.id));
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          if (userId) {
            dispatch(edituser({ id: userId, name }));
            setName("");
            setUserid("");
          } else {
            dispatch(adduser({ name }));
            setName("");
          }
        }}
      >
        {userId ? "update" : "add"}
      </button>
      <button
        onClick={() => {
          dispatch(getUser());
        }}
      >
        getUser
      </button>
    </>
  );
};
export default Users;
