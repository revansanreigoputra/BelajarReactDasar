import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

export default function ProfileApp() {

    const [name, setName] = useState("Dregotzzz");

    return (
        <>
            <ProfileContext.Provider value={name}>
                <h1>Profile Application</h1>
                <ProfileForm name={name} setName={setName} />
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider>
        </>
    )
}