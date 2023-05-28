import "../styles/SideBarUser.css";
import Avatar from '../../../assets/listOfPosts/avatar.jpg'


export const SideBarUser = () => {
    return (
        <div className="SideBarUser">
            <img className='SideBarUser__Avatar' src={Avatar} alt="" />
            <div className="SideBarUser__UserInfo">
                <div className='SideBarUser__UserInfo__Name'>
                    Cyril Strone
                </div>
                <div className='SideBarUser__UserInfo__Mail'>
                    cyrilstrone@gmail.com
                </div>
            </div>
        </div>
    );
};
