import React, {useState, useEffect, useContext} from 'react';
import { getDocs, query, where, collection } from "firebase/firestore";

import './View.css';
import  { PostContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/FirebaseContext';
function View() {
  const [userDetails, setUserDetails] = useState('');
  const {postDetails} = useContext(PostContext);
  const {db} = useContext(FirebaseContext)

  useEffect(()=>{
    const fetUserDetails = async()=>{
      try{
        const {userId} = postDetails;
        console.log(postDetails)
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("id", "==", userId));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty){
          //Check if there are matching elements
          querySnapshot.forEach((doc)=>{
            setUserDetails(doc.data());
          });
        }else{
          alert("No useres found!");
          console.log("No matching users found!")
        }
      }catch(error){
        console.error("Error fetching uyser details:", error);
      }
    };
    fetUserDetails(); //Call the async function
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
