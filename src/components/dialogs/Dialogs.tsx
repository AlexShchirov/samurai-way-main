import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemType = {
    id: string;
    name: string;
};
type MessageType = {
    message: string;
};

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: MessageType) => {
    return <div className="message">{props.message}</div>;
};

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Victor" id="5" />
                <DialogItem name="Valera" id="6" />
            </div>
            <div className="messages">
                <Message message="Hi" />
                <Message message="How are you" />
                <Message message="yoy" />
            </div>
        </div>
    );
};
