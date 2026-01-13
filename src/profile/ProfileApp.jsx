import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";

export default function ProfileApp() {
    return (
        <>
            <ProfileContext.Provider value="Dregotzzz">
                <h1>Profile Application</h1>
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider>
        </>
    )
}