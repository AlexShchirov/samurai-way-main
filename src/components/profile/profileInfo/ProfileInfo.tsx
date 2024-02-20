import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {


    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Jw2cJRnIjTQwOVpryhFuBsc1WmqjSi2IqA&usqp=CAU"
                    alt=""
                />
            </div>
            <div className={s.descriptionBlock}>avatar+ descr</div>
        </div>
    );
};
