import React, { useEffect, useState } from "react";
import editProfileCss from "./EditProfile.module.css";
import bg from "../../../assets/wallpaper/bg.jpg";
import authService from "../../../pages/services/auth-service";
import { ToastContainer, toast } from "react-toastify";

const EditProfile = ({ trigger, setTrigger, details }) => {
  const initialValues = {
    first_name: "",
    last_name: "",
  };

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(details);
  }, [details]);

  const onChangeHandling = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const updateProfile = async () => {
    
   await authService
      .updateProfile(values)
      .then((resp) => {
        if (resp.data.status) {
            const success = resp.data;
            alert(success);
            toast.success(`${success}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTrigger(false);
        } else {
          const error = resp.data;
          toast.error(`${error}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };

  const cancelPop = () => {
    setTrigger(false);
    setValues(details);
  };

  return trigger ? (
    <div className={editProfileCss.body}>
      <div className={editProfileCss.popUp}>
        <div className={editProfileCss.titleSection}>
          <span className={editProfileCss.title}>Edit Profile</span>
        </div>
        <div className={editProfileCss.image}>
          <img src={bg} alt="" className={editProfileCss.img} />
        </div>
        <div className={editProfileCss.userDiv}>
          <div className={editProfileCss.userSection}>
            <label className={editProfileCss.userLabel}>First Name</label>
            <input
              type="text"
              className={editProfileCss.userInput}
              placeholder="First Name"
              name="first_name"
              contentEditable={true}
              defaultValue={values.first_name}
              onChange={onChangeHandling}
            />
            <label className={editProfileCss.userLabel}>Last Name</label>
            <input
              type="text"
              className={editProfileCss.userInput}
              placeholder="Last Name"
              name="last_name"
              defaultValue={values.last_name}
              onChange={onChangeHandling}
            />
          </div>
        </div>
        <hr className={editProfileCss.hr} />
        <div className={editProfileCss.cancelUpdate}>
          <button className={editProfileCss.cancel} onClick={cancelPop}>
            Cancel
          </button>
          <button className={editProfileCss.update} onClick={updateProfile}>
            Update
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default EditProfile;
