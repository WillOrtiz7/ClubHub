import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import "../styles/Main.css";
import defaultProfilePic from "../assets/defaultuser.jpg";
import { db, storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { UserAuth } from "../contexts/AuthContext";

export default function EditProfile() {
  // Current user
  const { user } = UserAuth();

  const [currentProfilePic, setCurrentProfilePic] = useState(defaultProfilePic);
  const [profilePicUpload, setProfilePicUpload] = useState(null);
  const userRef = doc(db, "users", "" + user.uid);
  getDoc(userRef).then((doc) => {
    const response = doc.data();
    setCurrentProfilePic(response.profilePicture);
  });

  function uploadProfilePic() {
    if (profilePicUpload == null) {
      return;
    }
    // Define file path for image
    const profilePicRef = ref(
      storage,
      `profilePictures/${user.uid + "_profile_picture"}`
    );
    // Upload image
    uploadBytes(profilePicRef, profilePicUpload).then(() => {
      console.log("Image uploaded");
      getDownloadURL(ref(profilePicRef))
        .then((url) => {
          setDoc(userRef, { profilePicture: url }, { merge: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  }

  return (
    <div>
      <div className="nav-container">
        <Nav source="not-main-page" />
      </div>
      <div className="standard-clubhub-page-container">
        <div className="standard-clubhub-page-body">
          <h2 className="standard-clubhub-page-header">Edit Profile</h2>
          <div className="standard-clubhub-page-content">
            <div className="edit-profile-container">
              <input
                type={"file"}
                // Update state of latest file that was chosen
                onChange={(event) => {
                  setProfilePicUpload(event.target.files[0]);
                }}
              />
              <button
                className="standard-clubhub-button"
                onClick={uploadProfilePic}
              >
                Upload profile pic
              </button>
              <img src={currentProfilePic} alt="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
